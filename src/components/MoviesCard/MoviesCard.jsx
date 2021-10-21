import React from 'react'
import './MoviesCard.css'

export default function MoviesCard({ filmName, filmDuration, filmPicture, isLiked }) {
  return (
    <div className="movies-card">
      <div className="movies-card__info-container">
        <h3 className="movies-card__title">{filmName}</h3>
        <p className="movies-card__duration">{filmDuration}</p>
        <button
          aria-label="like"
          type="button"
          className={
            isLiked ? `movies-card__like-button movies-card__like-button_status_active` : `movies-card__like-button`
          }
        />
      </div>
      <img className="movies-card__film-picture" alt="картинка фильма" src={filmPicture} />
    </div>
  )
}
