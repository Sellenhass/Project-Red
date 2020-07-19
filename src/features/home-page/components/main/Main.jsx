import React from "react";
import { Link } from "react-router-dom";
import { AsteroidsList } from "./components";
import "./main.module.css";

const Main = () => {
  return (
    <main className="main">
      <div className="wrapper-main">
        <Link className="daily-photo-link" to="/daily-photo"></Link>
        <AsteroidsList />
      </div>
    </main>
  );
};

export default Main;
