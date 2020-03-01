import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavSidebar from './components/NavSidebar/NavSidebar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import RecSidebar from './components/RecSideBar/RecSideBar';

function App() {
  return (
    <BrowserRouter>
      <div className="content-container">
          <div className="flex-grid">
            <div className="nav-sidebar">
              <NavSidebar />
            </div>
            <br />
            <div className="main">
              <Switch>
                <Route path="/" exact component={Home} />
                {/* Make profile take in ID */}
                <Route path="/profile" exact component={Profile} />
              </Switch>
            </div>
            <div className="rec-sidebar">
              <RecSidebar />
            </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
