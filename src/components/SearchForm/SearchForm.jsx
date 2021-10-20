import React from 'react'
import './SearchForm.css'

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form" name="search">
        <div className="search-form__input-field">
          <input placeholder="Фильм" type="search" required />
          <button aria-label="найти фильмы" type="submit" className="search-form__form-submit" />
        </div>
        <label htmlFor="short-films">
          <input id="short-films" type="radio" className="search-form__input-radio-button" name="short-films" />
          Короткометражки
        </label>
      </form>
    </section>
  )
}
