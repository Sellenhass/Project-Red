import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { getAsteroidsList } from "../../../../../../actions";
import "./AsteroidsList.module.css";

const AsteroidsList = ({ asteroidsListObject, getAsteroidsList }) => {
  const currentDate = moment().format("YYYY-MM-DD");
  const [date, setDate] = useState(currentDate);
  console.log(date);
  if (!asteroidsListObject) {
    getAsteroidsList(date);
  }
  const asteroids =
    asteroidsListObject &&
    asteroidsListObject.near_earth_objects[date] &&
    asteroidsListObject.near_earth_objects[date].map(
      (asteroid) =>
        (asteroid = (
          <li className="asteroid" key={`asteroid_${asteroid.id}`}>
            <ul className="asteroid-info">
              <li className="asteroid-info-item">
                Name:
                {asteroid.name}
              </li>
              <li className="asteroid-info-item">
                Distanсe:
                {Math.round(
                  asteroid.close_approach_data[0].miss_distance.kilometers
                )}
                km
              </li>
              <li className="asteroid-info-item">
                Date:
                {asteroid.close_approach_data["0"].close_approach_date_full}
              </li>
              <li className="asteroid-info-item">
                Is potentially hazardous:
                {asteroid.is_potentially_hazardous_asteroid
                  ? "hazardous"
                  : "is not hazardous"}
              </li>
            </ul>
          </li>
        ))
    );
  return (
    <div className="asteroids-list-wrapper">
      {asteroidsListObject && (
        <ul className="asteroids-list">{asteroids ? asteroids : "hui"}</ul>
      )}
      <input
        type="text"
        placeholder="YYYY-MM-DD"
        onKeyUp={(ev) => {
          if (ev.keyCode === 13) {
            const isValidDate = /\d{4}-\d{2}-\d{2}/.test(ev.target.value);
            if (isValidDate) {
              getAsteroidsList(ev.target.value);
              setDate(ev.target.value);
            } else {
              alert("error");
            }
          }
        }}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    asteroidsListObject: state.asteroidsList,
  }),
  { getAsteroidsList }
)(AsteroidsList);
