import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <div className={'navbar'}>
            <NavLink className={navData => navData.isActive ? 'activeLink' : ''} to="/login/">Login</NavLink>
            <NavLink className={navData => navData.isActive ? 'activeLink' : ''} to="/registration/">Registration</NavLink>
            <NavLink className={navData => navData.isActive ? 'activeLink' : ''} to="/recovery_pass/">Recovery Password</NavLink>
            <NavLink className={navData => navData.isActive ? 'activeLink' : ''} to="/new_pass/">New Password</NavLink>
            <NavLink className={navData => navData.isActive ? 'activeLink' : ''} to="/profile/">Profile</NavLink>
            <NavLink className={navData => navData.isActive ? 'activeLink' : ''} to="/404/">404</NavLink>
            <NavLink className={navData => navData.isActive ? 'activeLink' : ''} to="/test/">Test</NavLink>
        </div>
    );
};

export default NavBar;