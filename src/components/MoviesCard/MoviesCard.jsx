import React from 'react'
import './MoviesCard.css'

export default function MoviesCard({ filmName, filmDuration, filmPicture, isLiked }) {
  return (
    <div className="movies-card">
      <div className="movies-card__info-container">
        <h3 className="movies-card__title">{filmName}</h3>
        <p className="movies-card__duration">{filmDuration}</p>
        {1 && (
          <button
            aria-label="delete"
            type="button"
            className="movies-card__button movies-card__button_type_close-btn"
          />
        )}
        {null && (
          <button
            aria-label="like"
            type="button"
            className={
              isLiked
                ? `movies-card__button movies-button_type_active-like-btn`
                : `movies-card__button movies-button_type_disabled-like-btn`
            }
          />
        )}
      </div>
      <img className="movies-card__film-picture" alt="картинка фильма" src={filmPicture} />
    </div>
  )
}
