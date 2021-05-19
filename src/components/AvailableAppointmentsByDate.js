import { format } from "date-fns";
import React from "react";
import { AvailableAppointmentDetail } from "./AvailableAppointmentDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

export const AvailableAppointmentsByDate = ({ appointment }) => {
  
  const click = () => {
    console.log(appointment);
  };

  return (
    <div className="card mb-3">
      <div className="card-header text-white bg-primary font-weight-bold">
      <h5>
          <FontAwesomeIcon icon={faCalendar} className="mr-3" />
          {format(Date.parse(appointment.date), "yyyy-MM-dd")}
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        {appointment.appointments.map((appointment) => (
          <AvailableAppointmentDetail
            key={appointment.appointmentId}
            appointment={appointment}
            onButtonClick={click}
          />
        ))}
      </ul>
    </div>
  );
};
