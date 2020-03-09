import React from 'react';
import './UserInformation.scss'
import { User } from '../../models/UserTweet';

interface UserInformationProps {
    user: User;
    showFollowData?: boolean;
}

//TODO: Make this flexible enough to re-use in multiple parts of the app
const UserInformation: React.FC<UserInformationProps> = (props) => {
    return (
        <>
            <div className="flex-row-even user-information">
                <div className="flex-row">
                    <img src="https://via.placeholder.com/150" alt="Avatar" className="avatar-med" />
                    <div className="ml-sm mt-sm user-data-name">
                        {props.user.name}
                    </div>
                </div>
                <div className="user-actions button-tertiary-sm">
                    Follow
                </div>
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
        </>
    )
}

export default UserInformation;
