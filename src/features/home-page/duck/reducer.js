import { handleActions } from "redux-actions";
import { getAsteroidsList } from "./actions";

const initialState = { home: { asteroidsList: [], loading: false } };

export default handleActions(
  {
    [getAsteroidsList.trigger]: (state) => ({ ...state, loading: true }),
    [getAsteroidsList.success]: (state, action) => ({
      ...state,
      home: { asteroidsList: action.payload },
      loading: false,
    }),
    [getAsteroidsList.failure]: (state) => ({ ...state, loading: false }),
  },
  initialState
);
