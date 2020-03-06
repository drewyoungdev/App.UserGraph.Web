import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavSidebar from './components/NavSidebar/NavSidebar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import RecSidebar from './components/RecSideBar/RecSideBar';
import Tweet from './components/Tweet/Tweet';

function App() {
  return (
    <BrowserRouter>
      <div className="content-container">
          <div className="flex-grid">
            <div className="nav-sidebar">
              <NavSidebar />
            </div>
            <div className="main">
              <Switch>
                <Route path="/" exact component={Home} />
                {/* Make profile take in ID */}
                <Route path="/profile" exact component={Profile} />
                <Route path="/tweet" exact component={Tweet} />
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
