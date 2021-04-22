import React from 'react'
import { Header } from './header/Header';
import { Nav } from './nav/Nav';
import {Page} from './page/Page';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
	<Page />
    </div>
  )
}

export default App;
