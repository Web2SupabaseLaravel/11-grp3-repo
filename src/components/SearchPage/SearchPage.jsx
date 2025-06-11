import React from "react";
import { Navbar, SearchForm, Frame, Footer } from "..";
import doctor from "../../assets/images/doctor.png";
export const Appointment = () => {
  return (
    <div className="wrapper">
      <Navbar initialActive="About Us" />

      <section className="page-title">
        <h1 className="title">Appointment Search</h1>
        <p className="subtitle">Search for available appointments!</p>
      </section>

      <SearchForm />

      <section className="frame-section">
        <Frame />
        <img
          className="extra-image"
          src={doctor}
          alt="Doctor"
        />
      </section>

      <Footer />
    </div>
  );
};
