import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import logo from '../../images/logo.svg'

export default function Register() {
  return (
    <section className="register">
      <img src={logo} alt="logo" className="register__logo" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form name="register" className="register__form">
        <ul className="register__form-input-list">
          <li className="register__form-input-list-item">
            <p className="register__form-input-label">Имя</p>
            <input type="text" className="register__form-input" placeholder="Введите Ваше имя" />
          </li>
          <li className="register__form-input-list-item">
            <p className="register__form-input-label">Имя</p>
            <input type="email" className="register__form-input" placeholder="Введите Ваш e-mail" />
          </li>
          <li className="register__form-input-list-item">
            <p className="register__form-input-label">Пароль</p>
            <input type="password" className="register__form-input" placeholder="Введите Ваш e-mail" />
            <span className="register__form-input-error">Что-то пошло не так</span>
          </li>
        </ul>
        <div className="register__form-button-container">
          <button type="submit" className="register__form-submit">
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
    </section>
  )
}
