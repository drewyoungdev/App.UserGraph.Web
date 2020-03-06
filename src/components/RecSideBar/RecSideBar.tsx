import React from 'react';
import './RecSideBar.scss';
import RecCard from '../RecCard/RecCard';

const RecSidebar: React.FC = () => {
    return (
        <div className="ml-med mt-med sidebar-flex">
            <RecCard
                title="Who to follow"
                showMoreLink="/connect"
            />
            <RecCard
                title="Trends for you"
                showMoreLink="/trends"
            />
        </div>
    )
}

export default RecSidebar;
