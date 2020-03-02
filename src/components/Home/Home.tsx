import React, { useState } from 'react';
import './Home.scss';
import TweetCreator from '../TweetCreator/TweetCreator';
import { UserTweet } from '../../models/UserTweet';
import TweetCard from '../TweetCard/TweetCard';

const Home: React.FC = () => {
    const fakeTweets = () => {
        return [
            {
                createdByUser: {
                    name: 'user_one'
                },
                tweet: {
                    text: 'hello world',
                    createdDate: new Date()
                }
            },
            {
                createdByUser: {
                    name: 'user_two'
                },
                tweet: {
                    text: 'goodbye world',
                    createdDate: new Date()
                }
            }
        ]
    }
    const [timeline, setTimeline] = useState<UserTweet[]>(fakeTweets());

    return (
        <>
            <div className="title-section">
                <div className="ml-med">
                    Home
                </div>
            </div>
            <div className="tweet-section">
                <div className="ml-med">
                    <TweetCreator onTweetClick={console.log}/>
                </div>
            </div>
            <div className="timeline-section">
                {timeline.map((userTweet) => <TweetCard />)}
            </div>
        </>
    )
}

export default Home;
