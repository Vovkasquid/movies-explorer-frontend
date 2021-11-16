/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import './MoviesCard.css'

export default function MoviesCard({
  movie,
  filmDuration,
  isSaved,
  handleDeleteFilm,
  handleSaveFilm,
  movieBase,
  savedMovies,
}) {
  const aproovedMovie = {
    country: movie.country || 'Нет данных',
    director: movie.director || 'Нет данных',
    duration: movie.duration || 0,
    year: movie.year || 'Нет данных',
    description: movie.description || ' ',
    image: `https://api.nomoreparties.co${movie.image.url}`,
    trailer: movie.trailerLink,
    thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
    movieId: movie.id,
    nameRU: movie.nameRU || 'Нет данных',
    nameEN: movie.nameEN || 'Нет данных',
  }
  const [isLiked, setIsLiked] = React.useState(false)
  // При монтировании проверяем надо ли лайкать карточку
  React.useEffect(() => {
    console.log('this movie id', movie.id)
    const checkSave = savedMovies.find((item) => {
      console.log('movieID', item.movieId)
      console.log('movie ID', movie.id)
      console.log('movieID == movie.id? ', +item.movieId === +movie.id)
      return +item.movieId === +movie.id
    })
    if (checkSave) {
      setIsLiked(true)
    } else {
      setIsLiked(false)
    }
  }, [])
  React.useEffect(() => {
    // Выставляем лайк
    const checkSave = savedMovies.find((item) => {
      console.log('movieID', item.movieId)
      console.log('movie ID', movie.id)
      console.log('movieID == movie.id? ', +item.movieId === +movie.id)
      return +item.movieId === +movie.id
    })
    if (checkSave) {
      setIsLiked(true)
      // Записываем из _id в _id
      aproovedMovie.movieId = checkSave._id
    } else {
      setIsLiked(false)
    }
  }, [savedMovies])
  // Часть фильмов приходит без некоторых полей и их надо заполнить

  const handleOpenTrailer = () => {
    window.open(`${aproovedMovie.trailer}`, `Трейлер фильма "${aproovedMovie.nameRU}"`)
  }
  const handleLikeClick = async () => {
    // Проверяем был ли лайкнут фильм
    if (isLiked) {
      // Если да, то надо удалить лайк
      console.log('state with id ', movieBase)
      handleDeleteFilm({ movieId: aproovedMovie._id })
      // setIsLiked(false)
    } else {
      // Если фильм не лайкнут, то лайкаем
      handleSaveFilm({ movie: aproovedMovie })
      // setIsLiked(true)
    }
  }
  return (
    <div className="movies-card">
      <div className="movies-card__info-container">
        <h3 className="movies-card__title">{aproovedMovie.nameRU}</h3>
        <p className="movies-card__duration">{filmDuration}</p>
        {isSaved && (
          <button
            aria-label="delete"
            type="button"
            className="movies-card__button movies-card__button_type_close-btn"
          />
        )}
        {!isSaved && (
          <button
            aria-label="like"
            type="button"
            onClick={handleLikeClick}
            className={
              isLiked
                ? `movies-card__button movies-button_type_active-like-btn`
                : `movies-card__button movies-button_type_disabled-like-btn`
            }
          />
        )}
      </div>
      <img
        className="movies-card__film-picture"
        alt="картинка фильма"
        src={aproovedMovie.image}
        onClick={handleOpenTrailer}
      />
    </div>
  )
}
