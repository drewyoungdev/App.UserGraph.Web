import React from 'react';
import './Home.scss';
import Tweet from '../Tweet/Tweet';

const Home: React.FC = () => {
    return (
        <>
            <div className="title-section">
                <div className="ml-med">
                    Home
                </div>
            </div>
            <div className="tweet-section">
                <div className="ml-med">
                    <Tweet onTweetClick={console.log}/>
                </div>
            </div>
        </>
    )
}

export default Home;
