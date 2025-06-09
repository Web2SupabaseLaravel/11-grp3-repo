import React from "react";
import { Header } from "./Header";
import { Transactions } from "./Transactions";
import { EmployeeSchedule } from "./EmployeeSchedule";
import { BookingsChart } from "./BookingsChart";
import { TotalAppointments } from "./TotalAppointments";
import { AppointmentsServed } from "./AppointmentsServed";
import { AppointmentsPending } from "./AppointmentsPending";
import { CancelledAppointments } from "./CancelledAppointments";
import { ImagesSection } from "./ImagesSection";

export const Dashboard = () => {
  return (
    <div className="bg-light d-flex flex-row justify-content-center w-100" style={{ minHeight: '1024px' }}>
      <div className="bg-light overflow-hidden" style={{ width: '1440px', position: 'relative' }}>
        <Header />
        <Transactions />
        <EmployeeSchedule />
        <BookingsChart />
        <TotalAppointments />
        <AppointmentsServed />
        <AppointmentsPending />
        <CancelledAppointments />
        <ImagesSection />
      </div>
    </div>
  );
};