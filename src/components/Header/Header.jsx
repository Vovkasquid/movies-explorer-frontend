import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import headerLogo from '../../images/logo.svg'
import profileIcon from '../../images/profile_icon.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Логотип проекта" className="header__logo" />
      <nav className="header__navigation">
        <NavLink className="header__navigation-link" to="/">
          Фильмы
        </NavLink>
        <NavLink className="header__navigation-link" to="/">
          Сохранённые фильмы
        </NavLink>
      </nav>
      <Link className="header__profile-link" to="/">
        <img src={profileIcon} alt="иконка профиля" className="header__profile-link-icon" />
        <p className="header__profile-link-title">Аккаунт</p>
      </Link>
    </header>
  )
}
