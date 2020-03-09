import React from 'react';
import './RecSideBar.scss';
import UserRecCard from '../UserRecCard/UserRecCard';

const RecSidebar: React.FC = () => {
    return (
        <div className="ml-med mt-med flex-column">
            <UserRecCard
                title="Who to follow"
                showMoreLink="/connect"
            />
        </div>
    )
}

export default RecSidebar;
