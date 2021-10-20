import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Main from '../Main/Main'

function App() {
  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route path="/movies">
            <p>Movies</p>
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
