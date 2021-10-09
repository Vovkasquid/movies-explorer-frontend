import React from 'react'
import './AboutMe.css'
import aboutMePhoto from '../../images/about-me-image-min.jpg'

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info-container">
          <h3 className="about-me__info-title">Владимир</h3>
          <p className="about-me__info-subtitle">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__info-description">
            Я родился и живу в Саратове, закончил факультет системы управления, информатики и электроэнергетики МАИ. У
            меня жена и кошка. Я люблю слушать музыку, а ещё увлекаюсь бегом и машинами. С 2016 года служил в Войсковой
            части 52295. Заканчиваю курс Яндекс.Практикума &quot;Веб-разработчик&quot;.
          </p>
          <ul className="about-me__info-social-links">
            <li>
              <a
                className="about-me__info-social-link"
                href="https://www.instagram.com/luxary_squid/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="about-me__info-social-link"
                href="https://github.com/Vovkasquid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img src={aboutMePhoto} alt="Фото студента" className="about-me__photo" />
      </div>
    </section>
  )
}
