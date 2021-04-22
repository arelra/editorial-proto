import React from 'react'
import { Header } from './header/Header';
import { Nav } from './nav/Nav';
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default App
