import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'

function App() {
  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
