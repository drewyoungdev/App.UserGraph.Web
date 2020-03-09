import React from 'react';
import './TweetCard.scss';
import { UserTweet } from '../../models/UserTweet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faReply  } from '@fortawesome/free-solid-svg-icons';
import TimeAgo from 'react-timeago';
import { useHistory } from 'react-router-dom';

interface TweetCardProps {
    userTweet: UserTweet
}

// TODO: Add Hover to username
// TOOD: Add back button
// TODO: Pagination with Gremlin
const TweetCard: React.FC<TweetCardProps> = (props) => {
    const history = useHistory();

    const handleTweetCardClick = () => {
        history.push(`/${props.userTweet.createdByUser.name}/tweets/${props.userTweet.tweet.id}`);
    }

    const handleUserNameClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        history.push(`/${props.userTweet.createdByUser.name}`);
    }

    const handleReplyClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        console.log('reply');
    }

    const handleRetweetClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        console.log('retweet');
    }

    const handleLikeClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        console.log('like');
    }

    return (
        <div
            className="pl-med pr-med pt-sm pb-sm flex-row tweet-card"
            onClick={handleTweetCardClick}
        >
            <div className="ml-sm mr-sm flex-column">
                <img src="https://via.placeholder.com/150" alt="Avatar" className="avatar-med" />
            </div>
            <div className="ml-sm tweet-card-content">
                <div className="mb-sm flex-row-center tweet-card-header">
                    <div
                        className="tweet-card-row-item tweet-card-header-username"
                        onClick={handleUserNameClick}
                    >
                        <b>{props.userTweet.createdByUser.name}</b>
                    </div>
                    <div className="tweet-card-row-item tweet-card-header-metadata">
                        <TimeAgo live={false} date={props.userTweet.tweet.createdDate}/>
                    </div>
                </div>
                <div className="mb-sm tweet-card-body">
                    {props.userTweet.tweet.text}
                </div>
                <div className="mb-sm flex-row-even tweet-card-footer">
                    <div
                        className="tweet-card-row-item reply-icon"
                        onClick={handleReplyClick}
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faReply} />
                        </span>
                        <span className="icon-text">1.5K</span>
                    </div>
                    <div
                        className="tweet-card-row-item retweet-icon"
                        onClick={handleRetweetClick}
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faRetweet} />
                        </span>
                        <span className="icon-text">1.5K</span>
                    </div>
                    <div
                        className="tweet-card-row-item like-icon"
                        onClick={handleLikeClick}
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className="icon-text">3.2K</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetCard;
