import React from 'react';

export const AppointmentsServed = () => (
  <div className="position-absolute bg-white rounded" style={{ width: '300px', height: '200px', top: '132px', left: '961px' }}>
    <div className="d-inline-flex align-items-center gap-10 position-absolute" style={{ top: '28px', left: '29px' }}>
      <span className="fw-bold" style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '700', color: '#101828', fontFamily: '"Manrope", Helvetica' }}>Appointments Served</span>
    </div>
    <div className="position-absolute" style={{ width: '102px', height: '100px', top: '77px', left: '100px' }}>
      <div className="position-relative" style={{ width: '110px', height: '110px', top: '-5px', left: '-5px', borderRadius: '55px' }}>
        <div className="position-absolute fw-bold text-success" style={{ top: '32px', left: '36px', fontSize: '32px', lineHeight: '30px' }}>10</div>
        <div className="position-absolute rounded-circle border border-4 border-light" style={{ width: '110px', height: '110px' }} />
        <img className="position-absolute" style={{ width: '60px', height: '60px', top: '0', left: '50px' }} alt="Ellipse" src="https://c.animaapp.com/mbicircspG0xKp/img/ellipse-17-1.svg" />
      </div>
    </div>
  </div>
);