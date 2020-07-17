import React from 'react';
import Home from '../Pages/HomePage/Home';
import './app.module.css';
import { 
    Route,
    HashRouter,
    Switch
  } from 'react-router-dom';

import DailyPhoto from '../Pages/HomePage/components/DailyPhoto'
import AsteroidsList from '../Pages/HomePage/components/AsteroidsList'

const App = () => {

return (
        <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/daily-photo' component={DailyPhoto}/>
                    <Route path='/asteroids-list' component={AsteroidsList}/>
                </Switch>
        </HashRouter>
);
}

export default App;