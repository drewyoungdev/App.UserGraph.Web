import React from 'react';
import './RecCard.scss';
import { useHistory } from 'react-router-dom';

interface RecCardProps {
    title: string;
    showMoreLink: string;
}

const RecCard: React.FC<RecCardProps> = (props) => {
    const history = useHistory();

    const handleShowMoreClick = () => {
        history.push(props.showMoreLink);
    }

    return (
        <div className="mb-med rec-card">
            <div className="mb-sm rec-card-header header-one">
                {props.title}
            </div>
            <div className="mb-sm rec-card-body">
                Hello world
            </div>
            <div
                className="rec-card-footer"
                onClick={handleShowMoreClick}
            >
                Show more
            </div>
        </div>
    )
}

export default RecCard;
