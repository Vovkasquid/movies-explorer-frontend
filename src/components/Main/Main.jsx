import React from 'react'
import './Main.css'
import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'

export default function Main() {
  return (
    <>
      <Header isLogin={false} />
      <Promo />
      <AboutProject />
      <Techs />
    </>
  )
}
