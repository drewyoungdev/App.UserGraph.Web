import React from 'react';
import './NavSidebar.scss';
import { NavLink } from 'react-router-dom';import
{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faHome, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const NavSidebar: React.FC = () => {
    return (
        <nav className="flex-column header-one">
            <NavLink exact className="logo" to="/">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
            </NavLink>
            <NavLink exact activeClassName="active-link" className="link button" to="/">
                <FontAwesomeIcon className="nav-icon" icon={faHome} size="lg" />
                Home
            </NavLink>
            <NavLink exact activeClassName="active-link" className="link button" to={"/user_one"} >
                <FontAwesomeIcon className="nav-icon" icon={faUser} size="lg" />
                Profile
            </NavLink>
            <NavLink exact activeClassName="active-link" className="link button" to="/explore">
                <FontAwesomeIcon className="nav-icon" icon={faHashtag} size="lg" />
                Explore
            </NavLink>
        </nav>
    )
}

export default NavSidebar;
