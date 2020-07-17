import {
    REQUEST_ASTEROIDS_LIST,
  } from '../actions/actionTypes';

const asteroidsList = (
    state = null,
    action
) => {
    switch(action.type) {
      case REQUEST_ASTEROIDS_LIST:
        return action.data;
      default:
        return state;
    }
};
  
export default asteroidsList;