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
  console.log(asteroidsListObject);
  const asteroids =
    asteroidsListObject &&
    asteroidsListObject.near_earth_objects[date] &&
    asteroidsListObject.near_earth_objects[date].map(
      (asteroid) =>
        (asteroid = (
          <ul key={`asteroid_${asteroid.id}`}>
            <li>
              Name:
              {asteroid.name}
            </li>
            <li>
              Distanse:
              {Math.round(
                asteroid.close_approach_data[0].miss_distance.kilometers
              )}
              km
            </li>
            <li>
              Date:
              {asteroid.close_approach_data["0"].close_approach_date_full}
            </li>
            <li>
              Is potentially hazardous:
              {asteroid.is_potentially_hazardous_asteroid
                ? "hazardous"
                : "is not hazardous"}
            </li>
          </ul>
        ))
    );

  return (
    <>
      {asteroidsListObject && (
        <span className="asteroids-list">{asteroids}</span>
      )}
      <input
        type="text"
        placeholder="Введите дату"
        onKeyUp={(ev) => {
          if (ev.keyCode === 13) {
            getAsteroidsList(ev.target.value);
            setDate(ev.target.value);
          }
        }}
      />
    </>
  );
};

export default connect(
  (state) => ({
    asteroidsListObject: state.asteroidsList,
  }),
  { getAsteroidsList }
)(AsteroidsList);
