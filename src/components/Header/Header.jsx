/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import profileIcon from '../../images/profile_icon.svg'

export default function Header({ isAuth }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const handleOpenSidebar = () => {
    setIsSidebarOpen(true)
  }
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <header className="header">
      <Link to="/" className="header__logo" />
      {isAuth && (
        <nav className="header__navigation">
          <NavLink
            className="header__navigation-link"
            activeClassName="header__navigation-link_type_active-header"
            to="/movies"
          >
            Фильмы
          </NavLink>
          <NavLink
            className="header__navigation-link"
            activeClassName="header__navigation-link_type_active-header"
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
      )}
      {isAuth ? (
        <>
          <button type="button" className="header__menu-button" onClick={handleOpenSidebar} />
          <Link className="header__profile-link" to="/profile">
            <img src={profileIcon} alt="иконка профиля" className="header__profile-link-icon" />
            <p className="header__profile-link-title">Аккаунт</p>
          </Link>
        </>
      ) : (
        <ul className="header__link-container">
          <li>
            <Link className="header__auth-link header__auth-link_type_register" to="/signup">
              Регистрация
            </Link>
          </li>
          <li>
            <Link className="header__auth-link header__auth-link_type_login" to="/signin">
              Войти
            </Link>
          </li>
        </ul>
      )}
      <nav
        className={
          isSidebarOpen ? 'header__navigation-sidebar header__navigation-sidebar_active' : 'header__navigation-sidebar'
        }
      >
        <button type="button" className="header__navigation-sidebar-close-btn" onClick={handleCloseSidebar} />
        <ul className="header__navigation-sidebar-container">
          <li className="header__navigation-sidebar-container-item">
            <Link className="header__navigation-link header__navigation-link_type_sidebar" to="/">
              Главная
            </Link>
            <NavLink
              className="header__navigation-link header__navigation-link_type_sidebar"
              activeClassName="header__navigation-link_type_active-sidebar"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="header__navigation-link header__navigation-link_type_sidebar"
              activeClassName="header__navigation-link_type_active-sidebar"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="header__navigation-sidebar-container-item">
            <Link className="header__profile-link header__profile-link_type_sidebar" to="/profile">
              <img src={profileIcon} alt="иконка профиля" className="header__profile-link-icon" />
              <p className="header__profile-link-title">Аккаунт</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
