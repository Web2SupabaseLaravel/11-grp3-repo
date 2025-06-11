import React from "react";
import backGround from "../../assets/images/backgroundF.png";
import icon from "../../assets/logo/icon.png";
export const Frame = () => {
  return (
    <div
      className="position-absolute"
      style={{
        width: "983px",
        height: "242px",
        top: "42px",
        left: "0",
      }}
    >
      <div
        className="position-relative"
        style={{
          width: "953px",
          height: "242px",
          left: "204px",
          backgroundImage: `url(${backGround})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          className="position-absolute m-0 text-white"
          style={{
            width: "270px",
            height: "51px",
            top: "36px",
            left: "34px",
            fontFamily: "var(--h5-open-sans-28pt-bold-font-family)",
            fontWeight: "var(--h5-open-sans-28pt-bold-font-weight)",
            fontSize: "var(--h5-open-sans-28pt-bold-font-size)",
            letterSpacing: "var(--h5-open-sans-28pt-bold-letter-spacing)",
            lineHeight: "var(--h5-open-sans-28pt-bold-line-height)",
          }}
        >
          Hello, Let’s Talk !
        </h2>

        <p
          className="position-absolute m-0 text-white"
          style={{
            width: "699px",
            height: "22px",
            top: "163px",
            left: "65px",
            fontFamily: "Open Sans, Helvetica",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "normal",
            letterSpacing: "0",
          }}
        >
          This is optional but highly recommended!
        </p>

        <p
          className="position-absolute m-0 text-white"
          style={{
            width: "410px",
            height: "51px",
            top: "94px",
            left: "36px",
            fontFamily: "Open Sans, Helvetica",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "normal",
            letterSpacing: "0",
          }}
        >
          Schedule a 30 min one-to-one Appointment to discuss your challenges
        </p>

        <img
          className="position-absolute"
          style={{
            width: "22px",
            height: "22px",
            top: "164px",
            left: "30px",
          }}
          alt="Icon"
          src={icon}
        />
      </div>
    </div>
  );
};
