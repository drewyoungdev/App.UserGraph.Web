import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface TweetProps extends RouteComponentProps<{ username: string, tweetid: string}> {

}

const Tweet: React.FC<TweetProps> = (props) => {
    return (
        <>
            Tweet for User: {props.match.params.username} and Tweet Id: {props.match.params.tweetid}
        </>
    )
}

export default Tweet;
