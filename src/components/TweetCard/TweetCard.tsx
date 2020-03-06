import React from 'react';
import './TweetCard.scss';
import { UserTweet } from '../../models/UserTweet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faReply  } from '@fortawesome/free-solid-svg-icons';

interface TweetCardProps {
    userTweet: UserTweet
}

const TweetCard: React.FC<TweetCardProps> = (props) => {
    return (
        <div className="pl-med pr-med pt-sm pb-sm tweet-card">
            <div className="ml-sm mr-sm tweet-card-icons">
                <div className="tweet-card-icons-avatar"></div>
            </div>
            <div className="ml-sm">
                <div className="mb-sm tweet-card-row tweet-card-header">
                    <a className="tweet-card-row-item">
                        <b>{props.userTweet.createdByUser.name}</b>
                    </a>
                    <div className="tweet-card-row-item tweet-card-header-metadata">
                        {props.userTweet.tweet.createdDate.toString()}
                    </div>
                </div>
                <div className="mb-sm tweet-card-body">
                    {props.userTweet.tweet.text}
                </div>
                <div className="mb-sm tweet-card-row tweet-card-footer">
                    <div className="tweet-card-row-item reply-icon">
                        <span className="icon">
                            <FontAwesomeIcon icon={faReply} />
                        </span>
                        <span className="icon-text">1.5K</span>
                    </div>
                    <div className="tweet-card-row-item retweet-icon">
                        <span className="icon">
                            <FontAwesomeIcon icon={faRetweet} />
                        </span>
                        <span className="icon-text">1.5K</span>
                    </div>
                    <div className="tweet-card-row-item like-icon">
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
