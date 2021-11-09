import React from 'react'
import formValidationHook from '../../hooks/formValidationHook'
import './SearchForm.css'

export default function SearchForm() {
  const { values, isValid, handleChange } = formValidationHook({
    search: '',
  })

  return (
    <section className="search-form">
      <form className="search-form__form" name="search" noValidate>
        <div className="search-form__input-fields">
          <input
            placeholder="Фильм"
            type="search"
            required
            className="search-form__input-field"
            onChange={handleChange}
            value={values.search}
          />
          <button aria-label="найти фильмы" type="submit" className="search-form__form-submit" />
        </div>
        <span
          className={
            isValid
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
          />
          <span className="search-form__input-checkbox-button-visible" />
          <span className="search-form__checkbox-title">Короткометражки</span>
        </label>
      </form>
    </section>
  )
}
