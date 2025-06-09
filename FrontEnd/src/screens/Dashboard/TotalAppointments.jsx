import React from 'react';

export const TotalAppointments = () => (
  <div className="position-absolute bg-white rounded" style={{ width: '300px', height: '200px', top: '132px', left: '641px' }}>
    <div className="d-inline-flex align-items-center gap-10 position-absolute" style={{ top: '28px', left: '25px' }}>
      <span className="fw-bold" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '700', color: '#101828', fontFamily: '"Manrope", Helvetica' }}>Total No of Appointments</span>
    </div>
    <div className="position-absolute" style={{ width: '102px', height: '100px', top: '77px', left: '100px' }}>
      <div className="position-relative" style={{ width: '100px', height: '100px' }}>
        <div className="position-absolute fw-bold text-primary" style={{ top: '35px', left: '30px', fontSize: '32px', lineHeight: '30px' }}>50</div>
        <div className="position-absolute rounded-circle border border-4 border-light" style={{ width: '100px', height: '100px' }} />
        <img className="position-absolute" style={{ width: '100px', height: '100px' }} alt="Ellipse" src="https://c.animaapp.com/mbicircspG0xKp/img/ellipse-14.svg" />
      </div>
    </div>
  </div>
);