import React from 'react'
import formValidationHook from '../../utils/hooks/formValidationHook'
import './SearchForm.css'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import getMovies from '../../utils/api/MoviesApi'
import Preloader from '../Preloader/Preloader'

export default function SearchForm({ isSaved, cardCount, handleSaveFilm, handleDeleteFilm, savedMovies }) {
  const { values, isValid, handleChange } = formValidationHook({
    search: '',
  })
  const [isError, setIsError] = React.useState(false)
  const [isFinding, setIsFinding] = React.useState(false)
  const [renderCounter, setRenderCounter] = React.useState(cardCount)
  const [dataLength, setDataLenght] = React.useState(0)
  const [moviesStorage, setMoviesStorage] = React.useState([])
  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false)
  const [isNothingFound, setIsNothingFound] = React.useState(false)
  const [isShort, setIsShort] = React.useState(false)
  const [shortFilmsArray, setShortFilmsArray] = React.useState([])
  const [filterFilmArray, setFilterFilmArray] = React.useState([])
  const [isNetworkError, setIsNetworkError] = React.useState(false)
  const [isInputDisabled, setIsInputDisabled] = React.useState(false)
  // стейт для кнопки из MoviesCardList
  const [isBtnVisible, setIsBtnVisible] = React.useState(false)
  const [isPreviousSearch, setIsPreviousSearch] = React.useState(true)

  React.useEffect(() => {
    const lastSearchMovies = JSON.parse(localStorage.getItem('moviesLongFilms'))
    const lastSearchShortMovies = JSON.parse(localStorage.getItem('moviesShortFilms'))
    const lastSavedSearchMovies = JSON.parse(localStorage.getItem('moviesSavedLongFilms'))
    const lastSavedSearchShortMovies = JSON.parse(localStorage.getItem('moviesSavedShortFilms'))
    // Выставляем разный массив на рендер, в зависимости от страницы
    if (isSaved) {
      if (lastSavedSearchMovies?.length > 0) {
        setMoviesStorage(lastSavedSearchMovies)
        setFilterFilmArray(lastSavedSearchMovies)
        setShortFilmsArray(lastSavedSearchShortMovies)
        // включаем секцию с карточками
        setIsFinding(true)
      }
    } else if (lastSearchMovies?.length > 0) {
      // Если пришли от movies, то надо отобразить фильмы + показывать/не показывать кнопку "Ещё"
      setMoviesStorage(lastSearchMovies)
      setFilterFilmArray(lastSearchMovies)
      setShortFilmsArray(lastSearchShortMovies)
      // включаем секцию с карточками
      setIsFinding(true)
      setRenderCounter(cardCount)
      setDataLenght(lastSearchMovies.length)
      // выставляем кнопку
      if (lastSearchMovies.length > cardCount) {
        setIsBtnVisible(true)
      }
    }
  }, [])
  // Если изменится сохраннёный массив, то надо перерендерить saved-movies
  React.useEffect(() => {
    if (isSaved && !isPreviousSearch) {
      setMoviesStorage(savedMovies)
    }
  }, [savedMovies])
  // Функция фильтрации по имени
  const filterItems = (arr, query) =>
    arr.filter((movie) => movie.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // Обработчик сабмита поиска
  const onSubmitForm = (evt) => {
    evt.preventDefault()
    if (isValid) {
      // Больше не надо показывать предыдущий поиск. Выключаем его
      setIsPreviousSearch(false)
      // Отключаем карточки имеющиеся
      setIsFinding(false)
      // Разграничиваем поведение сабмита при movies и saved-movies
      if (!isSaved) {
        setIsError(false)
        setIsNetworkError(false)
        // Блокируем инпут
        setIsInputDisabled(true)
        // Запускаем прелоадер
        setIsPreloaderVisible(true)
        getMovies()
          .then((movies) => {
            // Выставляем начальное число рендера карт
            setRenderCounter(cardCount)
            // Отключаем прелоадер
            setIsPreloaderVisible(false)
            // Разблокируем инпут
            setIsInputDisabled(false)
            // Фильтруем фильмы
            const filteredFilms = filterItems(movies, values.search)
            const shortFilms = filteredFilms.filter((movie) => movie.duration <= 40)
            // Записываем найденные фильмы в хранилище
            localStorage.setItem('moviesLongFilms', JSON.stringify(filteredFilms))
            localStorage.setItem('moviesShortFilms', JSON.stringify(shortFilms))
            // Записываем эти фильтры в стейт отфильтрованного
            setFilterFilmArray(filteredFilms)
            // Заранее записываем в стейт короткометражки
            setShortFilmsArray(shortFilms)
            // Если короткометражка, то отбразим короткий метр
            if (isShort) {
              if (shortFilms.length > 0) {
                setMoviesStorage(shortFilms)
                setIsNothingFound(false)
                setIsFinding(true)
                // если надо, то скрываем кнопку "ещё"
                if (shortFilms.length > cardCount) {
                  setIsBtnVisible(true)
                }
              } else {
                // Если короткометражек нет, то отображаем "не найдено"
                setIsNothingFound(true)
                setIsFinding(false)
              }
            } else {
              // Если не короткий метр, то записываем полный
              // Записываем длину массива с фильмами
              setDataLenght(filteredFilms.length)
              // выставляем видимость кнопки
              setIsBtnVisible(filteredFilms.length > cardCount)
              // Записываем фильмы в стейт
              setMoviesStorage(filteredFilms)
              if (filteredFilms.length === 0) {
                setIsNothingFound(true)
                setIsFinding(false)
              } else {
                setIsNothingFound(false)
                // Включаем секцию с фильмами
                setIsFinding(true)
              }
            }
          })
          .catch(() => {
            setIsPreloaderVisible(false)
            setIsNetworkError(true)
            // Разблокируем инпут
            setIsInputDisabled(false)
          })
      } else {
        // Блокируем инпут
        setIsInputDisabled(true)
        // Запускаем прелоадер
        setIsPreloaderVisible(true)
        // Делаем поиск по savedMovies
        const filteredSavedFilms = filterItems(savedMovies, values.search)
        const shortSavedFilms = filteredSavedFilms.filter((movie) => movie.duration <= 40)
        // Записываем фильмы в хранилище
        localStorage.setItem('moviesSavedShortFilms', JSON.stringify(shortSavedFilms))
        localStorage.setItem('moviesSavedLongFilms', JSON.stringify(filteredSavedFilms))
        // Записываем эти фильтры в стейт отфильтрованного
        setFilterFilmArray(filteredSavedFilms)
        // Заранее записываем в стейт короткометражки
        setShortFilmsArray(shortSavedFilms)
        // Проверяем на поиск в коротком метре
        if (isShort) {
          if (shortSavedFilms.length > 0) {
            setMoviesStorage(shortSavedFilms)
            setIsFinding(true)
          } else {
            // Если короткометражек нет, то отображаем "не найдено"
            setIsNothingFound(true)
            setIsFinding(false)
          }
        } else {
          // Записываем фильмы в стейт
          setMoviesStorage(filteredSavedFilms)
          if (filteredSavedFilms.length === 0) {
            setIsNothingFound(true)
            setIsFinding(false)
          } else {
            setIsNothingFound(false)
            // Включаем секцию с фильмами
            setIsFinding(true)
          }
        }
        // Отключаем прелоадер
        setIsPreloaderVisible(false)
        // Разблокируем инпут
        setIsInputDisabled(false)
      }
    } else {
      setIsError(true)
    }
  }
  // Обработчик для чекбокса
  const onShortFilmsCheckbox = () => {
    // Переключаем стейт
    setIsShort(!isShort)
  }
  // При изменении стейта будем менять массив, который идёт на рендер
  React.useEffect(() => {
    // Массив будем менять если есть найденные фильмы, иначе это не надо делать
    if (filterFilmArray.length > 0) {
      if (!isSaved) {
        // Если возвращаемся из короткометражек, то переключить стейты
        if (!isShort && filterFilmArray.length > 0) {
          setIsNothingFound(false)
          setIsFinding(true)
        }
        // Проверяем есть ли фильмы. Если нет - показываем "ничего не найдено"
        if (isShort && shortFilmsArray.length === 0) {
          setIsNothingFound(true)
          setIsFinding(false)
        }
        if (isShort) {
          setMoviesStorage(shortFilmsArray)
          // Отключаем кнопку "ещё", если она не нужна в короткометражках
          if (shortFilmsArray.length <= cardCount) {
            setIsBtnVisible(false)
          }
          // В этом месте перезаписывается массив на пустой в movies когда возвращаемся снаружи
        } else {
          setMoviesStorage(filterFilmArray)
          // Включаем кнопку "ещё", если она необходима
          if (filterFilmArray.length > renderCounter) {
            setIsBtnVisible(true)
          }
        }
      } else {
        // Если возвращаемся из короткометражек, то переключить стейты
        if (!isShort && filterFilmArray.length > 0) {
          setIsNothingFound(false)
          setIsFinding(true)
        }
        // Проверяем есть ли фильмы. Если нет - показываем "ничего не найдено"
        if (isShort && shortFilmsArray.length === 0) {
          setIsNothingFound(true)
          setIsFinding(false)
        }
        if (isShort) {
          setMoviesStorage(shortFilmsArray)
        } else if (filterFilmArray.length > 0) {
          setMoviesStorage(filterFilmArray)
        } else {
          setMoviesStorage(savedMovies)
        }
      }
    }
  }, [isShort])

  return (
    <>
      <section className="search-form">
        <form className="search-form__form" name="search" noValidate onSubmit={onSubmitForm}>
          <div className="search-form__input-fields">
            <input
              name="search"
              placeholder="Фильм"
              type="search"
              required
              className="search-form__input-field"
              onChange={handleChange}
              value={values.search}
              disabled={isInputDisabled}
            />
            <button aria-label="найти фильмы" type="submit" className="search-form__form-submit" />
          </div>
          <span
            className={
              !isError
                ? 'search-form__input-error-text'
                : 'search-form__input-error-text search-form__input-error-text_active'
            }
          >
            Нужно ввести ключевое слово
          </span>
          <label htmlFor="short-films" className="search-form__checkbox-button-label">
            <input
              id="short-films"
              type="checkbox"
              className="search-form__input-checkbox-button-invisible"
              name="short-films"
              onChange={onShortFilmsCheckbox}
            />
            <span className="search-form__input-checkbox-button-visible" />
            <span className="search-form__checkbox-title">Короткометражки</span>
          </label>
        </form>
      </section>
      {isFinding && moviesStorage.length > 0 && (
        <MoviesCardList
          isSaved={isSaved}
          movies={moviesStorage}
          dataLength={dataLength}
          renderCounter={renderCounter}
          setRenderCounter={setRenderCounter}
          cardCount={cardCount}
          isBtnVisible={isBtnVisible}
          setIsBtnVisible={setIsBtnVisible}
          handleDeleteFilm={handleDeleteFilm}
          handleSaveFilm={handleSaveFilm}
          savedMovies={savedMovies}
        />
      )}
      {isPreloaderVisible && <Preloader />}
      {isNothingFound && <p className="search-form__error-text">Ничего не найдено</p>}
      {isNetworkError && (
        <p className="search-form__error-text">
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и
          попробуйте ещё раз.
        </p>
      )}
    </>
  )
}
