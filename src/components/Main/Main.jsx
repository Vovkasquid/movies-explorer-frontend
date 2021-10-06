import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'

export default function Main() {
  return (
    <>
      <Header isLogin={false} />
      <Promo />
      <AboutProject />
    </>
  )
}
