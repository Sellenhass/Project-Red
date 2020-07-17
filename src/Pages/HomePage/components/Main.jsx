import React from 'react';
import './main.module.css';
import { Link } from 'react-router-dom';
import AsteroidsList from './AsteroidsList';

const Main = () => {
    return (
        <main className ='main'>
            <div className='wrapper-main'>
                <Link className='daily-photo-link' to='/daily-photo'></Link>
                <AsteroidsList />
            </div>
        </main>
    );
}

export default Main;