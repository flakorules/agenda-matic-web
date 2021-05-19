import React from "react";
import { Navbar } from "../../components/Navbar";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { ViewAppointments } from "./ViewAppointments";
import { BookAppointment } from "./BookAppointment";

export const Panel = () => {
  let { path } = useRouteMatch();

  const email = localStorage.getItem("email");

  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path={path}>
            <h1>Bienvenido {email}.</h1>
          </Route>
          <Route path={`${path}/view`}>
            <ViewAppointments />
          </Route>
          <Route path={`${path}/book`}>
            <BookAppointment />
          </Route>
        </Switch>
      </div>
    </>
  );
};
