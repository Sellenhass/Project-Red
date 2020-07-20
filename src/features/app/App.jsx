import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { Home, DailyPhoto } from "../../features";

import "./app.module.css";

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/daily-photo" component={DailyPhoto} />
      <Route path="/daily-photo1" component={DailyPhoto} />
      <Route path="/daily-photo2" component={DailyPhoto} />
    </Switch>
  </HashRouter>
);

export default App;
