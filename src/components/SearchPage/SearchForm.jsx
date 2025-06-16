import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import drop from "../../assets/logo/drop.png";

export const SearchForm = () => {
    const [specialization, setSpecialization] = useState("General");
    const [serviceType, setServiceType] = useState("Consultation");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [openDropdown, setOpenDropdown] = useState(null);

    const specializations = [
        "General",
        "Cardiology",
        "Neurology",
        "Pediatrics",
        "Orthopedics",
    ];
    const serviceTypes = [
        "Vaccination",
        "Consultation",
        "Check-up",
        "Surgery",
        "Therapy",
    ];

    const wrapperRef = useRef();
    useEffect(() => {
        function onClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    const navigate = useNavigate();

    const handleSearch = () => {
        const params = new URLSearchParams();
        params.append("specialization", specialization);
        params.append("serviceType", serviceType);
        params.append("date", date);
        if (time) params.append("time", time);

        navigate("/results?" + params.toString());
    };

    return (
        <div className="search-form" ref={wrapperRef}>
            <div
                className={`field specialization ${
                    openDropdown === "spec" ? "open" : ""
                }`}
                onClick={() =>
                    setOpenDropdown(openDropdown === "spec" ? null : "spec")
                }
            >
                <label>Specialization</label>
                <div className="value">
                    <span>{specialization}</span>
                    <img alt="▼" src={drop} />
                </div>
                {openDropdown === "spec" && (
                    <ul className="dropdown-list">
                        {specializations.map((item) => (
                            <li
                                key={item}
                                onClick={() => {
                                    setSpecialization(item);
                                    setOpenDropdown(null);
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div
                className={`field service-type ${
                    openDropdown === "service" ? "open" : ""
                }`}
                onClick={() =>
                    setOpenDropdown(
                        openDropdown === "service" ? null : "service"
                    )
                }
            >
                <label>Service Type</label>
                <div className="value">
                    <span>{serviceType}</span>
                    <img alt="▼" src={drop} />
                </div>
                {openDropdown === "service" && (
                    <ul className="dropdown-list">
                        {serviceTypes.map((item) => (
                            <li
                                key={item}
                                onClick={() => {
                                    setServiceType(item);
                                    setOpenDropdown(null);
                                }}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="field date-picker">
                <label>Date Picker</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="Select date"
                />
            </div>

            <div className="field pick-time">
                <label>Pick A Time</label>
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Optional"
                />
            </div>

            <button className="btn-search" onClick={handleSearch}>
                Search Now
            </button>
        </div>
    );
};
