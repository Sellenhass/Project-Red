import React from 'react';
import { connect } from 'react-redux';
import { getAsteroidsList } from "../../../actions";
// import './DailyPhoto.module.css'


const AsteroidsList = ({asteroidsListObject, getAsteroidsList}) => {
    if(!asteroidsListObject) {getAsteroidsList()}
    date = new Date();
    const name = (asteroidsListObject && asteroidsListObject.near_earth_objects['2020-07-09']['0'].name)
    const date = (asteroidsListObject && asteroidsListObject.near_earth_objects['2020-07-09']['0'].close_approach_data['0'].close_approach_date_full);
    const distance = (asteroidsListObject && asteroidsListObject.near_earth_objects['2020-07-09']['0'].close_approach_data['0'].miss_distance.kilometers);
    const isPotentiallyHazardousAsteroid = (asteroidsListObject && asteroidsListObject.near_earth_objects['2020-07-09']['0'].is_potentially_hazardous_asteroid);
    const isHazardousAsteroidAnswer = isPotentiallyHazardousAsteroid? 'hazardous' : 'is not hazardous';

    const getAsteroidName = () => {
      
    }
    
    return (
        <>
            {asteroidsListObject && <span className='asteroids-list'>
                {name}.....
                {date}.....
                {distance}.....
                {isHazardousAsteroidAnswer}
            </span>}
       </>
    )
}

export default connect(state => ({asteroidsListObject: state.asteroidsList}), {getAsteroidsList})(AsteroidsList);