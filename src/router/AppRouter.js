import React from "react";
import { Login } from "../screens/public/Login";
import { Panel } from "../screens/private/Panel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/panel" component={Panel} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};
