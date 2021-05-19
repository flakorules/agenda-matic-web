import React, { useEffect, useState } from "react";
import { AppointmentsByDate } from "../../components/AppointmentsByDate";
import { fetchNoToken } from "../../helpers/fetch";

export const ViewAppointments = () => {
  const userId = localStorage.getItem("userId");
  const [appointMents, setAppointMents] = useState([]);

  const fetchData = async () => {
    const response = await fetchNoToken(`Appointments/${userId}`, {}, "GET");
    const data = await response.json();
    setAppointMents(data);
  };

  useEffect(() => {
    fetchData();
  });

  const onButtonClick = () => {
    console.log("click");
  };

  return (
    <>
      <h1>Citas Agendadas</h1>
      {appointMents.map((appointment) => (
        <AppointmentsByDate
          key={appointment.date}
          appointment={appointment}
          onButtonClick={onButtonClick}
        />
      ))}
    </>
  );
};
