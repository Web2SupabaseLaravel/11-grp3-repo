import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar, Footer } from "..";
import "../../styles/resultPage.scss";

export const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const specialization = searchParams.get("specialization") || "";
  const serviceType = searchParams.get("serviceType") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";

  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fakeData = [
      {
        doctor: "Ali",
        service: serviceType,
        time: time || "09:00 AM",
        fee: "50$",
      },
      {
        doctor: "Sara",
        service: serviceType,
        time: time || "10:00 AM",
        fee: "60$",
      },
      {
        doctor: "Ahmed",
        service: serviceType,
        time: time || "11:00 AM",
        fee: "70$",
      },
      {
        doctor: "Farah",
        service: serviceType,
        time: time || "09:00 AM",
        fee: "45$",
      },
      {
        doctor: "Mohammed",
        service: serviceType,
        time: time || "10:00 AM",
        fee: "100$",
      },
      {
        doctor: "Sami",
        service: serviceType,
        time: time || "11:00 AM",
        fee: "30$",
      },
      {
        doctor: "Layan",
        service: serviceType,
        time: time || "09:00 AM",
        fee: "75$",
      },
      {
        doctor: "Zaina",
        service: serviceType,
        time: time || "10:00 AM",
        fee: "80$",
      },
      {
        doctor: "Saleem",
        service: serviceType,
        time: time || "11:00 AM",
        fee: "40$",
      },
      {
        doctor: "Hassan",
        service: serviceType,
        time: time || "09:00 AM",
        fee: "25$",
      },
      {
        doctor: "Heba",
        service: serviceType,
        time: time || "10:00 AM",
        fee: "120$",
      },
      {
        doctor: "Kareem",
        service: serviceType,
        time: time || "11:00 AM",
        fee: "65$",
      },
      {
        doctor: "Osama",
        service: serviceType,
        time: time || "09:00 AM",
        fee: "20$",
      },
      {
        doctor: "Lubna",
        service: serviceType,
        time: time || "10:00 AM",
        fee: "50$",
      },
      {
        doctor: "Muna",
        service: serviceType,
        time: time || "11:00 AM",
        fee: "90$",
      },
    ];
    setSlots(fakeData);
  }, [specialization, serviceType, date, time]);

  return (
    <>
      <Navbar initialActive="Health News" />

      <div className="result-page">
        <h2>Search Results</h2>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Doctor Name</th>
                <th>Service Type</th>
                <th>Timing</th>
                <th>Fee</th>
                <th>Reservation</th>
              </tr>
            </thead>
            <tbody>
              {slots.length === 0 ? (
                <tr>
                  <td colSpan="6">No appointments found.</td>
                </tr>
              ) : (
                slots.map((slot, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{slot.doctor}</td>
                    <td>{slot.service}</td>
                    <td>{slot.time}</td>
                    <td>{slot.fee}</td>
                    <td>
                      <button>Book Now</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};