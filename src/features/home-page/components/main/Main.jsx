import React from "react";
import { Link } from "react-router-dom";
import { AsteroidsList } from "./components";
import "./main.module.css";

const Main = () => {
  return (
    <main className="main">
      <div className="wrapper-main">
        <section className="main-block">
          <div>
            <Link className="daily-photo-link" to="/daily-photo">
              <span className="daily-photo-text">
                Astronomy Picture of the Day
              </span>

              <spam>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                impedit fuga consectetur consequuntur illo harum vero eaque
                numquam debitis blanditiis et dignissimos ratione explicabo
                provident, possimus sint accusamus beatae enim?
              </spam>
            </Link>
            <Link className="daily-photo-link1" to="/daily-photo1"></Link>
          </div>
          <AsteroidsList />
        </section>
        <Link className="daily-photo-link2" to="/daily-photo2"></Link>
      </div>
    </main>
  );
};

export default Main;
