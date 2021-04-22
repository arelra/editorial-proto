import React from 'react'
import { Header } from './header/Header';
import { Nav } from './nav/Nav';
import {Page} from './page/Page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import { Sport } from './sport/Sport';
import { News } from './news/News';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Page>
        <Router>
          <Switch>
            <Route path="/sport">
              <Sport />
            </Route>
            <Route path="/">
              <News />
            </Route>
          </Switch>
        </Router>
      </Page>
    </div>
  )
}

export default App;
