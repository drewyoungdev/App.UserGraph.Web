import React from 'react';
import './UserInformation.scss'
import { User } from '../../models/UserTweet';

interface UserInformationProps {
    user: User;
}

//TODO: Make this flexible enough to re-use in multiple parts of the app
const UserInformation: React.FC<UserInformationProps> = (props) => {
    return (
        <div className="user-information">
            <div className="user-data">
                <img src="https://via.placeholder.com/150" alt="Avatar" className="user-data-avatar" />
                <div className="ml-sm mt-sm user-data-name">
                    {props.user.name}
                </div>
            </div>
            <div className="user-actions button-tertiary-sm">
                Follow
            </div>
        </div>
    )
}

export default UserInformation;
