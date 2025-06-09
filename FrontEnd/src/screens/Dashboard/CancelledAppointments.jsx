import React from 'react';

export const CancelledAppointments = () => (
  <div className="position-absolute bg-white rounded" style={{ width: '300px', height: '200px', top: '352px', left: '961px' }}>
    <div className="d-inline-flex align-items-center gap-10 position-absolute" style={{ top: '19px', left: '35px' }}>
      <span className="fw-bold" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '700', color: '#101828', fontFamily: '"Manrope", Helvetica' }}>Cancelled Appointment</span>
    </div>
    <div className="position-absolute" style={{ width: '143px', height: '141px', top: '46px', left: '79px' }}>
      <div className="position-relative" style={{ width: '110px', height: '110px', top: '16px', left: '16px', borderRadius: '55px' }}>
        <div className="position-absolute fw-bold text-danger" style={{ top: '40px', left: '44px', fontSize: '32px', lineHeight: '30px' }}>2</div>
        <div className="position-absolute rounded-circle border border-4 border-light" style={{ width: '110px', height: '110px' }} />
        <img className="position-absolute" style={{ width: '40px', height: '24px', top: '0', left: '55px' }} alt="Ellipse" src="https://c.animaapp.com/mbicircspG0xKp/img/ellipse-17.svg" />
      </div>
    </div>
  </div>
);