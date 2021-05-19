import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

export const Navbar = () => {
  let {  url } = useRouteMatch();

  
  const history = useHistory();

  const onClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <p className="navbar-brand">AgendaMatic</p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={`${url}/view`} className="nav-link">
            Citas Agendadas
          </Link>
        </li>

        <li className="nav-item">
          <Link to={`${url}/book`} className="nav-link">
            Agendar Cita
          </Link>
        </li>
      </ul>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-danger my-2 my-sm-0" onClick={onClick}>
            Salir
          </button>
        </form>
      </div>
    </nav>
  );
};
