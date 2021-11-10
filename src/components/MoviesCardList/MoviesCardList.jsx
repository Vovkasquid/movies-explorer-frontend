import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MoviesCard/MoviesCard'
import filmPicture from '../../images/film-example.png'

export default function MoviesCardList({ isSaved, movies, dataLength, renderCounter, setRenderCounter }) {
  const [isBtnVisible, setIsBtnVisible] = React.useState(true)
  const filmDuration = (movie) => `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`
  const renderArray = movies.slice(0, renderCounter)
  const handleAddingBtn = () => {
    // проверяем может ли мы ещё добавить полное количество карточек
    if (dataLength - renderCounter < 7) {
      setRenderCounter(renderCounter + (dataLength - renderCounter))
      console.log(renderCounter)
    } else {
      setRenderCounter(renderCounter + 7)
      console.log(renderCounter)
    }
    if (renderCounter >= dataLength) {
      setIsBtnVisible(false)
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
                  filmName={movie.nameRU}
                  filmDuration={filmDuration(movie)}
                  filmPicture={`https://api.nomoreparties.co${movie.image.url}`}
                />
              </li>
            ))}
        </ul>
      ) : (
        <ul className="movies-card-list__list">
          <li>
            <MovieCard filmName="33 слова о дизайне" filmDuration="1ч 42м" filmPicture={filmPicture} isSaved />
          </li>
          <li>
            <MovieCard
              filmName="Киноальманах «100 лет дизайна»"
              filmDuration="1ч 42м"
              filmPicture={filmPicture}
              isSaved
            />
          </li>
          <li>
            <MovieCard filmName="В погоне за Бенкси" filmDuration="1ч 42м" filmPicture={filmPicture} isSaved />
          </li>
        </ul>
      )}

      {isBtnVisible && (
        <button onClick={handleAddingBtn} type="button" className="movies-card-list__next-films-button">
          Ещё
        </button>
      )}
    </section>
  )
}
