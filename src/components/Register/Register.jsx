import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import logo from '../../images/logo.svg'
import formValidationHook from '../../hooks/formValidationHook'

export default function Register() {
  const { values, isValid, handleChange, errors } = formValidationHook({
    email: '',
    password: '',
    name: '',
  })

  const onFormSumbit = (evt) => {
    evt.preventDefault()
    if (isValid) {
      console.log('Regiser SUBMIT')
    } else {
      console.log('Register Error')
    }
  }
  return (
    <section className="register">
      <div className="register-container">
        <img src={logo} alt="лого проекта" className="register__logo" />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form name="register" className="register__form" onSubmit={onFormSumbit}>
          <ul className="register__form-input-list">
            <li className="register__form-input-list-item">
              <p className="register__form-input-label">Имя</p>
              <input
                type="text"
                name="name"
                className="register__form-input"
                placeholder="Введите Ваше имя"
                minLength="2"
                maxLength="18"
                required
                values={values.name}
                onChange={handleChange}
              />
            </li>
            <li className="register__form-input-list-item">
              <p className="register__form-input-label">Имя</p>
              <input
                type="email"
                name="email"
                className="register__form-input"
                placeholder="Введите Ваш e-mail"
                required
                values={values.email}
                onChange={handleChange}
              />
            </li>
            <li className="register__form-input-list-item">
              <p className="register__form-input-label">Пароль</p>
              <input
                type="password"
                className="register__form-input register__form-input_type_error"
                placeholder="Введите Ваш пароль"
                name="password"
                minLength="8"
                maxLength="35"
                required
                values={values.password}
                onChange={handleChange}
              />
              <span
                className={
                  !isValid
                    ? 'register__form-input-error register__form-input-error_active'
                    : 'register__form-input-error'
                }
              >
                {errors?.name} {errors?.email} {errors?.password}
              </span>
            </li>
          </ul>
          <div className="register__form-button-container">
            <button type="submit" className="register__form-submit" disabled={!isValid}>
              Зарегистрироваться
            </button>
            <p className="register__form-helper-text">
              Уже зарегистрированы?{' '}
              <Link className="register__form-link" to="/signin">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
