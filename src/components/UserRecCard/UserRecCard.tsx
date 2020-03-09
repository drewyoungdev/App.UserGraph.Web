import React from 'react';
import './UserRecCard.scss';
import { useHistory } from 'react-router-dom';
import { User } from '../../models/UserTweet';
import UserInformation from '../UserInformation/UserInformation';

interface RecCardProps {
    title: string;
    showMoreLink: string;
}

const UserRecCard: React.FC<RecCardProps> = (props) => {
    const testUsers = [
        {
            name: "user_three"
        },
        {
            name: "user_four"
        },
        {
            name: "user_five"
        }
    ] as User[];

    const history = useHistory();

    const handleShowMoreClick = () => {
        history.push(props.showMoreLink);
    }

    return (
        <div className="mb-med rec-card">
            <div className="rec-card-header header-one">
                {props.title}
            </div>
            {testUsers.map((user) =><UserInformation user={user} />)}
            <div
                className="rec-card-footer"
                onClick={handleShowMoreClick}
            >
                Show more
            </div>
        </div>
    )
}

export default UserRecCard;
