import {
  REQUEST_DAILY_PHOTO,
} from '../actions/actionTypes';

const dailyPhoto = (
  state = null,
  action
) => {
  switch(action.type) {
    case REQUEST_DAILY_PHOTO:
      return action.data;
    default:
      return state;
  }
};

export default dailyPhoto;
