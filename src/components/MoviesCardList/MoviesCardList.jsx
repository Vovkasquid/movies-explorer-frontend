import React from 'react'
import './MoviesCardList.css'
import MovieCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        <li>
          <MovieCard />
        </li>
      </ul>
      <button type="button" className="movies-card-list__next-films-button">
        Ещё
      </button>
    </section>
  )
}
