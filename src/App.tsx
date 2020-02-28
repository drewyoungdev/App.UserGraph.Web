import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <br />
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Make profile take in ID */}
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
