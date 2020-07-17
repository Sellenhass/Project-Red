import React from 'react';
import './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className ='header'>
            <div className='wrapper-header'>
                <h1 className='home-heading'>Sellenhass cosmonautics</h1>

                <Link className='header-link' to='/daily-photo'>Daily Photo</Link>
                <Link className='asteroids-list' to='/asteroids-list'>asteroids-list</Link>
            </div>
        </header>
    );
}

export default Header;