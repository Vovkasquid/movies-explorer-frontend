import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList({
  isSaved,
  movies,
  dataLength,
  renderCounter,
  setRenderCounter,
  cardCount,
  isBtnVisible,
  setIsBtnVisible,
  handleDeleteFilm,
  handleSaveFilm,
}) {
  const filmDuration = (movie) => `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`
  // renderCounter - сколько мы отрежем от общего массива с фильмами
  // если вкладка "сохранённые фильмы, то надо отрендерить все фильмы сразу"
  const renderArray = isSaved ? movies : movies.slice(0, renderCounter)
  const handleAddingBtn = () => {
    // проверяем может ли мы ещё добавить полное количество карточек
    if (dataLength - renderCounter <= cardCount) {
      setRenderCounter(renderCounter + (dataLength - renderCounter))
      setIsBtnVisible(false)
      console.log(renderCounter)
    } else {
      setIsBtnVisible(true)
      setRenderCounter(renderCounter + cardCount)
      console.log(renderCounter)
    }
  }
  return (
    <section className="movies-card-list">
      {!isSaved ? (
        <ul className="movies-card-list__list">
          {renderArray &&
            renderArray.map((movie) => (
              <li key={movie.id}>
                <MovieCard
                  movie={movie}
                  filmName={movie.nameRU}
                  filmDuration={filmDuration(movie)}
                  filmPicture={`https://api.nomoreparties.co${movie.image.url}`}
                  isSaved={isSaved}
                  trailerLink={movie.trailerLink}
                  handleDeleteFilm={handleDeleteFilm}
                  handleSaveFilm={handleSaveFilm}
                />
              </li>
            ))}
        </ul>
      ) : (
        <ul className="movies-card-list__list">
          {renderArray &&
            renderArray.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} handleDeleteFilm={handleDeleteFilm} isSaved={isSaved} />
              </li>
            ))}
        </ul>
      )}

      {!isSaved && isBtnVisible && (
        <button onClick={handleAddingBtn} type="button" className="movies-card-list__next-films-button">
          Ещё
        </button>
      )}
    </section>
  )
}
