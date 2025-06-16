import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "../SearchPage/Navbar";
import { Footer } from "../SearchPage/Footer";
import "../../styles/resultPage.scss";

export const ResultPage = () => {
    const [searchParams] = useSearchParams();
    const specialization = searchParams.get("specialization") || "";
    const serviceType = searchParams.get("serviceType") || "";
    const date = searchParams.get("date") || "";
    const time = searchParams.get("time") || "";

    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (specialization) params.append("specialization", specialization);
        if (serviceType) params.append("serviceType", serviceType);
        if (date) params.append("date", date);
        if (time) params.append("time", time);

        fetch(
            `http://localhost:8000/api/appointment-slots?${params.toString()}`
        )
            .then((r) => {
                if (!r.ok) throw new Error("Failed to fetch");
                return r.json();
            })
            .then((data) => {
                setSlots(data);
            })
            .catch((err) => {
                console.error(err);
                setError("Could not load appointment slots.");
            })
            .finally(() => setLoading(false));
    }, [specialization, serviceType, date, time]);

    return (
        <>
            <Navbar initialActive="Health News" />

            <div className="result-page">
                <h2>Search Results</h2>

                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}

                {!loading && !error && (
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
                                        <td colSpan="6">
                                            No appointments found.
                                        </td>
                                    </tr>
                                ) : (
                                    slots.map((slot, idx) => (
                                        <tr key={slot.slot_id || idx}>
                                            <td>{idx + 1}</td>
                                            <td>
                                                {slot.practitioner_name ||
                                                    slot.practitioner_id}
                                            </td>
                                            <td>
                                                {slot.service_name ||
                                                    slot.service_id}
                                            </td>
                                            <td>
                                                {new Date(
                                                    slot.start_time
                                                ).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                })}
                                            </td>
                                            <td>
                                                {slot.fee || "$" + slot.fee}
                                            </td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        alert(
                                                            `Booking slot ${slot.slot_id}...`
                                                        )
                                                    }
                                                >
                                                    Book Now
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};
