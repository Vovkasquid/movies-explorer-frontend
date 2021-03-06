import React from 'react'
import './Movies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from '../SearchForm/SearchForm'

export default function Movies({ cardCount, isAuth, handleSaveFilm, handleDeleteFilm, savedMovies }) {
  return (
    <>
      <Header isAuth={isAuth} />
      <SearchForm
        isSaved={false}
        cardCount={cardCount}
        handleSaveFilm={handleSaveFilm}
        handleDeleteFilm={handleDeleteFilm}
        savedMovies={savedMovies}
      />
      <Footer />
    </>
  )
}
