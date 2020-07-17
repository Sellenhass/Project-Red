import { combineReducers } from 'redux';
import dailyPhoto from './requestData';
import asteroidsList from './requestAsteroidsList';


const rootReducer = combineReducers({
  dailyPhoto,
  asteroidsList
});

export default rootReducer;
