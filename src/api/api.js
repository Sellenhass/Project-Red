import axios from "axios";

const API_NASA = "https://api.nasa.gov/";
const API_YANDEX = "";

const NASA_API_KEY = "rEHe8D5pUpaO3bSYp2tUTEScc9iCGqzyHgflHe2y";

const getDailyPhoto = () => {
  return axios.get(
    `${API_NASA}planetary/apod?api_key=${NASA_API_KEY}&date=2020-03-10&hd=true`
  );
};

const getAsteroidsList = (date) => {
  return axios.get(
    `${API_NASA}neo/rest/v1/feed?start_date=${date}&api_key=${NASA_API_KEY}`
  );
};

const getExactBeer = (beerId) => {
  return axios.get(`${API}/${beerId}`);
};

const searchBeers = (beerName) => {
  return axios.get(`${API}?beer_name=${beerName}`);
};

const applyFilters = (abvValue, ebcValue, ibuValue) => {
  return axios.get(
    `${API}?per_page=80&abv_gt=${abvValue}&ebc_gt=${ebcValue}&ibu_gt=${ibuValue}`
  );
};

export default {
  getDailyPhoto,
  getAsteroidsList,
  getExactBeer,
  searchBeers,
  applyFilters,
};
