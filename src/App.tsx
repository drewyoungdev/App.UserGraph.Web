import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavSidebar from './components/NavSidebar/NavSidebar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import RecSidebar from './components/RecSideBar/RecSideBar';
import Tweet from './components/Tweet/Tweet';
import Explore from './components/Explore/Explore';

function App() {
  return (
    <BrowserRouter>
      <div className="content-container">
          <div className="flex-grid">
            <NavSidebar />
            <div className="main">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/explore" exact component={Explore} />
                <Route path="/:username" exact component={Profile} />
                <Route path="/:username/tweets/:tweetid" exact component={Tweet} />
              </Switch>
            </div>
            <RecSidebar />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
