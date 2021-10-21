import React from 'react'
import './MoviesCard.css'
import filmPicture from '../../images/film-example.png'

export default function MoviesCard() {
  return (
    <div className="movies-card">
      <div className="movies-card__info-container">
        <h3 className="movies-card__title">33 слова о дизайне</h3>
        <p className="movies-card__duration">1ч 42м</p>
        <button
          aria-label="like"
          type="button"
          className="movies-card__like-button movies-card__like-button_status_active"
        />
      </div>
      <img className="movies-card__film-picture" alt="картинка фильма" src={filmPicture} />
    </div>
  )
}
