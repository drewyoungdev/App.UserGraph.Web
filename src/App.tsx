import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="content-container">
          <div className="flex-grid">
            <div className="col sidebar">
              <Sidebar />
            </div>
            <br />
            <div className="col main">
              <Switch>
                <Route path="/" exact component={Home} />
                {/* Make profile take in ID */}
                <Route path="/profile" exact component={Profile} />
              </Switch>
            </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
