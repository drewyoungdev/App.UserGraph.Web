import React from 'react';
import './Home.scss';
import Tweet from '../Tweet/Tweet';

const Home: React.FC = () => {
    return (
        <>
            <div className="ml-med title">
                Home
            </div>
            <hr/>
            <div className="ml-med">
                <Tweet onTweetClick={console.log}/>
            </div>
            <hr />
        </>
    )
}

export default Home;
