import React from 'react';
import './TweetCard.scss';
import { UserTweet } from '../../models/UserTweet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart  } from '@fortawesome/free-regular-svg-icons';
import { faRetweet, faReply  } from '@fortawesome/free-solid-svg-icons';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';

interface TweetCardProps {
    userTweet: UserTweet
}

// TODO: Add Hover to
// TODO: Figure out how to pass props or do we use a local store like Redux?
// TODO: Pagination with Gremlin
const TweetCard: React.FC<TweetCardProps> = (props) => {
    return (
        // TODO: Link TweetCard to Tweet page. Issue is that it wraps an <a> within an <a>
        // How do you also prevent router from updating route if an onClick is fired within the route?
        // <Link
        //     to={`/${props.userTweet.createdByUser.name}/tweets/${props.userTweet.tweet.id}`}
        //     className="pl-med pr-med pt-sm pb-sm tweet-card"
        //     style={{ color: 'inherit', textDecoration: 'inherit'}}
        // >
        <div className="pl-med pr-med pt-sm pb-sm tweet-card">
            <div className="ml-sm mr-sm tweet-card-icons">
                <div className="tweet-card-icons-avatar"></div>
            </div>
            <div className="ml-sm tweet-card-content">
                <div className="mb-sm tweet-card-row tweet-card-header">
                    <Link
                        to={`/${props.userTweet.createdByUser.name}`}
                        className="tweet-card-row-item tweet-card-header-username"
                        style={{ color: 'inherit', textDecoration: 'inherit'}}
                    >
                        <b>{props.userTweet.createdByUser.name}</b>
                    </Link>
                    <div className="tweet-card-row-item tweet-card-header-metadata">
                        <TimeAgo live={false} date={props.userTweet.tweet.createdDate}/>
                    </div>
                </div>
                <div className="mb-sm tweet-card-body">
                    {props.userTweet.tweet.text}
                </div>
                <div className="mb-sm tweet-card-row tweet-card-footer">
                    <div
                        className="tweet-card-row-item reply-icon"
                        onClick={() => console.log('reply')}
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faReply} />
                        </span>
                        <span className="icon-text">1.5K</span>
                    </div>
                    <div
                        className="tweet-card-row-item retweet-icon"
                        onClick={() => console.log('retweet')}
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faRetweet} />
                        </span>
                        <span className="icon-text">1.5K</span>
                    </div>
                    <div
                        className="tweet-card-row-item like-icon"
                        onClick={() => console.log('like')}
                    >
                        <span className="icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                        <span className="icon-text">3.2K</span>
                    </div>
                </div>
            </div>
        </div>
        // </Link>
    )
}

export default TweetCard;
