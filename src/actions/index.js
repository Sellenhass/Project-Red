import {
  REQUEST_DAILY_PHOTO,
  REQUEST_ASTEROIDS_LIST,
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  GET_EXACT_BEER,
  SEARCH_BEERS,
  APPLY_FILTERS,
  CHANGE_PAGE
} from './actionTypes';
import api from '../api/api';

export function getDailyPhoto() {
  return dispatch => api.getDailyPhoto()
    .then(response => dispatch({
      type: REQUEST_DAILY_PHOTO,
      data: response.data
    }));
}

export function getAsteroidsList() {
  return dispatch => api.getAsteroidsList()
    .then(response => dispatch({
      type: REQUEST_ASTEROIDS_LIST,
      data: response.data
    }));
}

export function getExactBeer(beerId) {
  return dispatch => api.getExactBeer(beerId)
    .then(response => dispatch({
      type: GET_EXACT_BEER,
      exactBeer: response.data,
      beerId
    }));
}

export function searchBeers(beerName) {
  return dispatch => api.searchBeers(beerName)
    .then(response => dispatch({
      type: SEARCH_BEERS,
      searchResult: response.data,
      beerName
    }));
}

export function applyFilters(abvValue, ebcValue, ibuValue) {
  return dispatch => api.applyFilters(abvValue, ebcValue, ibuValue)
    .then(response => dispatch({
      type: APPLY_FILTERS,
      filteredResult: response.data,
      abvValue,
      ebcValue,
      ibuValue
    }));
}

export const addToFavorite = favorite => ({
  type: ADD_TO_FAVORITE,
  favorite
});

export const removeFromFavorite = favorite => ({
  type: REMOVE_FROM_FAVORITE,
  favorite
});

export const favoritePage = (currentPage, thisPageBeers) => ({
  type: CHANGE_PAGE,
  currentPage,
  thisPageBeers
});
