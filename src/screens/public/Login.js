import React from "react";
import { fetchNoToken } from "../../helpers/fetch";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

export const Login = () => {
  const history = useHistory();
  const loginFormData = {
    email: "",
    password: "",
  };

  const [values, handleInputChange] = useForm(loginFormData);

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const rawResponse = await fetchNoToken("Users/login", values, "POST");
    const content = await rawResponse.json();

    if (rawResponse.status === 200) {
      localStorage.setItem("userId", content.userId);
      localStorage.setItem("email", content.email);
      history.push("/panel");
    } else {
      Swal.fire({
        icon: "error",
        title: "Errores de autenticación:",
        text: "Usuario y/o password incorrectos",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 py-4">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-4 mt-1">Ingresar a la Aplicación</h4>
            <form onSubmit={onHandleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Nombre de Usuario"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Password"
                  type="password"
                />
              </div>
              {false && (
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      {" "}
                      <input type="checkbox" /> Save password{" "}
                    </label>
                  </div>
                </div>
              )}
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
