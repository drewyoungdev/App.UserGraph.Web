import React, { useState } from 'react';
import './Home.scss';
import TweetCreator from '../TweetCreator/TweetCreator';
import { UserTweet } from '../../models/UserTweet';
import TweetCard from '../TweetCard/TweetCard';

const Home: React.FC = () => {
    const fakeTweets = [
            {
                createdByUser: {
                    name: 'user_one'
                },
                tweet: {
                    id: '123',
                    text: 'hello world',
                    createdDate: new Date()
                }
            },
            {
                createdByUser: {
                    name: 'user_two'
                },
                tweet: {
                    id: "456",
                    text: 'goodbye world',
                    createdDate: new Date()
                }
            }
        ]

    const addTweet = (tweetText: string) => {
        const newTweet = {
            createdByUser: {
                name: 'user_one'
            },
            tweet: {
                id: Math.random().toString(36).substring(7),
                text: tweetText,
                createdDate: new Date()
            }
        };

        setTimeline((prevTimeline) => [newTweet, ...prevTimeline])
    }

    const [timeline, setTimeline] = useState<UserTweet[]>(fakeTweets);

    return (
        <>
            <div className="title-section">
                <div className="ml-med">
                    Home
                </div>
            </div>
            <div className="tweet-section">
                <div className="ml-med">
                    <TweetCreator onTweetClick={addTweet}/>
                </div>
            </div>
            <div className="timeline-section">
                {
                    timeline.map((userTweet) =>
                    <TweetCard
                        key={userTweet.tweet.id}
                        userTweet={userTweet}
                    />)
                }
            </div>
        </>
    )
}

export default Home;
