import React from "react";
import { DownArrow1 } from "../../icons/DownArrow1";
import { SevenBell1 } from "../../icons/SevenBell1";

export const Header = () => (
  <div className="position-absolute bg-white border-bottom border-light" style={{ width: '100%', height: '80px', top: '0', left: '0', padding: '0 20px' }}>
    <div className="d-flex align-items-center justify-content-between h-100 position-relative">
      <div className="d-flex align-items-center">
        <div className="position-relative" style={{ width: '70px', height: '70px', marginRight: '20px' }}>
          <img
            className="position-absolute"
            style={{ width: '70px', height: '70px', left: '0' }}
            alt="Logo"
            src="./src/assets/Logo.png"
          />
        </div>
        <div className="d-flex align-items-center gap-4 position-relative" style={{ height: '80px' }}>
          <span style={{ fontFamily: 'Roboto, Helvetica', fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: '#1E5DBC', whiteSpace: 'nowrap' }}>Home</span>
          <span style={{ fontFamily: 'Roboto, Helvetica', fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: '#0F2F64', whiteSpace: 'nowrap' }}>About Us</span>
          <span style={{ fontFamily: 'Roboto, Helvetica', fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: '#0F2F64', whiteSpace: 'nowrap' }}>Location</span>
          <span style={{ fontFamily: 'Roboto, Helvetica', fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: '#0F2F64', whiteSpace: 'nowrap' }}>Health News</span>
          <span style={{ fontFamily: 'Roboto, Helvetica', fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: '#0F2F64', whiteSpace: 'nowrap' }}>Careers</span>
          <div className="position-absolute bg-light rounded-circle" style={{ width: '40px', height: '40px', padding: '6px', left: '1080px', top: '50%', transform: 'translateY(-50%)' }}>
          <SevenBell1 className="position-absolute" style={{ width: '24px', height: '24px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
</div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center gap-2">
          <div className="position-relative rounded-circle" style={{ width: '48px', height: '48px', background: 'url(./src/assets/Ahmad.jpg) 50% 50% / cover' }} />
          <div className="position-relative" style={{ marginTop: '-1px' }}>
            <span style={{ fontFamily: 'Manrope, Helvetica', fontSize: '18px', fontWeight: 700, lineHeight: '30px', color: '#0f1728', whiteSpace: 'nowrap' }}>Ahmad</span>
          </div>
          <DownArrow1 className="position-relative" style={{ width: '24px', height: '24px' }} />
        </div>
      </div>
    </div>
    <img
      className="position-absolute object-cover"
      style={{ width: '1140px', height: '1px', top: '80px', left: '150px' }}
      alt="Rectangle"
      src="https://c.animaapp.com/mbicircspG0xKp/img/rectangle-220.svg"
    />
  </div>
);