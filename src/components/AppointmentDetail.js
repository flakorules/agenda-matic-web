import React from "react";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { fetchNoToken } from "../helpers/fetch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export const AppointmentDetail = ({ appointment, onButtonClick }) => {
  const onClick = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "question",
      title: "¿Confirma la camcelación de la cita?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, Cancelar",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cita Cancelada", "", "success");
        fetchData();
        onButtonClick();
      }
    });
  };

  const fetchData = async () => {
    const response = await fetchNoToken(
      `Appointments/cancel/${appointment.appointmentId}`,
      {},
      "PATCH"
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <li className="list-group-item">
      <FontAwesomeIcon icon={faClock} className="mr-3" size="lg"/>
      {format(Date.parse(appointment.appointmentDate), "kk:mm")}
      <button type="button" className="btn btn-danger ml-3" onClick={onClick}>
        Cancelar
      </button>
    </li>
  );
};
