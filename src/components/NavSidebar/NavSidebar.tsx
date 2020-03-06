import React from 'react';
import './NavSidebar.scss';
import { NavLink } from 'react-router-dom';import
{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter  } from '@fortawesome/free-brands-svg-icons';

const NavSidebar: React.FC = () => {
    return (
        <nav className="sidebar-flex">
            <NavLink exact className="logo" to="/">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </NavLink>
            <NavLink exact activeClassName="active-link" className="link button" to="/">Home</NavLink>
            <NavLink exact activeClassName="active-link" className="link button" to="/profile">Profile</NavLink>
            <NavLink exact activeClassName="active-link" className="link button" to="/explore">Explore</NavLink>
        </nav>
    )
}

export default NavSidebar;