import React from 'react'
import { Link } from 'react-router-dom'
import './Promo.css'

export default function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <div className="promo__navtab-container">
        <Link className="promo__navtab-link" to="/">
          О проекте
        </Link>
        <Link className="promo__navtab-link" to="/">
          Технологии
        </Link>
        <Link className="promo__navtab-link" to="/">
          Студент
        </Link>
      </div>
    </section>
  )
}
