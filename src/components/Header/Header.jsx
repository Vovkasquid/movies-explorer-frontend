import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import headerLogo from '../../images/logo.svg'
import profileIcon from '../../images/profile_icon.svg'
import menuButton from '../../images/burger-button.svg'

export default function Header({ isLogin }) {
  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип проекта" className="header__logo" />
      {isLogin && (
        <nav className="header__navigation">
          <NavLink className="header__navigation-link" activeClassName="header__navigation-link-active" to="/movies">
            Фильмы
          </NavLink>
          <NavLink
            className="header__navigation-link"
            activeClassName="header__navigation-link-active"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
      )}
      {isLogin ? (
        <>
          <img className="header__menu-button" src={menuButton} alt="кнопка меню-бургера" />
          <Link className="header__profile-link" to="/">
            <img src={profileIcon} alt="иконка профиля" className="header__profile-link-icon" />
            <p className="header__profile-link-title">Аккаунт</p>
          </Link>
        </>
      ) : (
        <div className="header__link-container">
          <Link className="header__auth-link header__auth-link_type_register" to="/">
            Регистрация
          </Link>
          <Link className="header__auth-link header__auth-link_type_login" to="/">
            Войти
          </Link>
        </div>
      )}
    </header>
  )
}
