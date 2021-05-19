import React from "react";
import Swal from "sweetalert2";
import { format } from "date-fns";
import { fetchNoToken } from "../helpers/fetch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
export const AvailableAppointmentDetail = ({ appointment, onButtonClick }) => {
  const onClick = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "question",
      title: "¿Confirma la cita?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cita Agendada", "", "success");
        fetchData();
        onButtonClick();
      }
    });
  };

  const fetchData = async () => {
    const response = await fetchNoToken(
      `Appointments/book/${appointment.appointmentId}`,
      {
        userId: localStorage.getItem("userId"),
      },
      "PATCH"
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <li className="list-group-item">
      <FontAwesomeIcon icon={faClock} className="mr-3" size="lg"/>
      {format(Date.parse(appointment.appointmentDate), "kk:mm")}
      <button type="button" className="btn btn-primary ml-3" onClick={onClick}>
        Agendar
      </button>
    </li>
  );
};
