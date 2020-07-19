import { createActions } from "redux-actions";
import { DEFAULT_ASYNC_ACTION } from "../../../constants/asyncActions";

export const {
  home: { getAsteroidsList },
} = createActions({ HOME: { GET_ASTEROIDS_LIST: DEFAULT_ASYNC_ACTION } });
