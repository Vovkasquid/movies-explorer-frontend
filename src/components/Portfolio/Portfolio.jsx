import React from 'react'
import './Portfolio.css'
import arrowImage from '../../images/arrow.svg'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/Vovkasquid/how-to-learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Статичный сайт
          </a>
          <img src={arrowImage} alt="изображение стрелочки" className="portfolio__link-arrow" />
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/Vovkasquid/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Адаптивный сайт
          </a>
          <img src={arrowImage} alt="изображение стрелочки" className="portfolio__link-arrow" />
        </li>
        <li className="portfolio__item">
          <a
            className="portfolio__link"
            href="https://github.com/Vovkasquid/react-mesto-api-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Одностраничное приложение
          </a>
          <img src={arrowImage} alt="изображение стрелочки" className="portfolio__link-arrow" />
        </li>
      </ul>
    </section>
  )
}
