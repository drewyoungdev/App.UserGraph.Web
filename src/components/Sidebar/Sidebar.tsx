import React from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <nav className="navbar">
            <NavLink exact activeClassName="active-link" className="link button" to="/">Home</NavLink>
            <NavLink exact activeClassName="active-link" className="link button" to="/profile">Profile</NavLink>
            <NavLink exact activeClassName="active-link" className="link button" to="/explore">Explore</NavLink>
        </nav>
    )
}

export default Sidebar;
