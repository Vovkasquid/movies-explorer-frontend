import React from 'react'
import { Link } from 'react-router-dom'
import './NavTab.css'

export default function NavTab() {
  return (
    <div className="navtab">
      <Link className="navtab__link" to="/">
        О проекте
      </Link>
      <Link className="navtab__link" to="/">
        Технологии
      </Link>
      <Link className="navtab__link" to="/">
        Студент
      </Link>
    </div>
  )
}
