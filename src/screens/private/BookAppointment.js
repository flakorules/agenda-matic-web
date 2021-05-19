import React, { useEffect, useState } from "react";
import { AvailableAppointmentsByDate } from "../../components/AvailableAppointmentsByDate";
import {fetchNoToken} from '../../helpers/fetch';

export const BookAppointment = () => {
  const [appointMents, setAppointMents] = useState([]);
  const fetchData = async () => {
    const response = await fetchNoToken("Appointments/available", {}, "GET");
    const data = await response.json();
    setAppointMents(data);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <h1>Agendar Cita</h1>
      {appointMents.map((appointment) => (
        <AvailableAppointmentsByDate key={appointment.date} appointment={appointment} />
      ))}
    </>
  );
};
