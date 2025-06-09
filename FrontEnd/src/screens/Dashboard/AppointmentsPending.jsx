import React from 'react';

export const AppointmentsPending = () => (
  <div className="position-absolute bg-white rounded" style={{ width: '300px', height: '200px', top: '352px', left: '641px' }}>
    <div className="d-inline-flex align-items-center gap-10 position-absolute" style={{ top: '19px', left: '25px' }}>
      <span className="fw-bold" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '700', color: '#101828', fontFamily: '"Manrope", Helvetica' }}>Appointments Pending</span>
    </div>
    <div className="position-absolute rounded-circle" style={{ width: '110px', height: '110px', top: '58px', left: '95px' }}>
      <div className="position-absolute fw-bold text-warning" style={{ top: '36px', left: '34px', fontSize: '32px', lineHeight: '30px' }}>38</div>
      <div className="position-absolute rounded-circle border border-4 border-light" style={{ width: '110px', height: '110px' }} />
      <img className="position-absolute" style={{ width: '104px', height: '110px', top: '0', left: '1.5px' }} alt="Ellipse" src="https://c.animaapp.com/mbicircspG0xKp/img/ellipse-19.svg" />
    </div>
  </div>
);