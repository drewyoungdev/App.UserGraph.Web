import React, { useState } from 'react';
import './UserInformation.scss'
import { User } from '../../models/UserTweet';
import { useHistory } from 'react-router-dom';

interface UserInformationProps {
    user: User;
    showFollowData?: boolean;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
    const checkIsFollowing = () => {
        return false;
    }

    const [isFollowing, setIsFollowing] = useState<boolean>(checkIsFollowing())

    const history = useHistory();

    const handleCardClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        history.push(`/${props.user.name}`);
    }

    const handleUserNameClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        history.push(`/${props.user.name}`);
    }

    const handleFollowClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        setIsFollowing(true);
        console.log('follow');
    }

    const handleUnfollowClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        setIsFollowing(false);
        console.log('unfollow');
    }

    return (
        <div onClick={handleCardClick}>
            <div className="flex-row-even user-information">
                <div className="flex-row">
                    <img src="https://via.placeholder.com/150" alt="Avatar" className="avatar-med" />
                    <div
                        className="ml-sm mt-sm user-data-name"
                        onClick={handleUserNameClick}
                    >
                        {props.user.name}
                    </div>
                </div>
                {
                    isFollowing
                    ?
                    <div
                        className="user-actions button-primary-sm"
                        onClick={handleUnfollowClick}
                    >
                        Following
                    </div>
                    :
                    <div
                        className="user-actions button-tertiary-sm"
                        onClick={handleFollowClick}
                    >
                        Follow
                    </div>
                }
            </div>
            {
                props.showFollowData &&
                <div className="flex-row">
                    <div>
                        <b>105</b> Following
                    </div>
                    <div>
                        <b>10.2K</b> Followers
                    </div>
                </div>
            }
        </div>
    )
}

export default UserInformation;
