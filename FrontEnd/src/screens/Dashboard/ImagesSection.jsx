import React from "react";

export const ImagesSection = () => (
  <div className="position-absolute" style={{ width: '154px', height: '235px', top: '382px', left: '187px' }}>
    <div className="position-absolute" style={{ width: '154px', height: '235px', top: '0', left: '0' }}>
      <img
        className="position-absolute object-cover"
        style={{ width: '46px', height: '92px', top: '0.5px', left: '0' }}
        alt="Green"
        src="./src/assets/Green.png"
      />
      <img
        className="position-absolute object-cover"
        style={{ width: '90px', height: '90px', top: '20px', left: '60px' }}
        alt="Purple"
        src="./src/assets/Purple.png"
      />
      <img
        className="position-absolute object-cover"
        style={{ width: '54px', height: '110px', top: '60px', left: '97px' }}
        alt="Orange"
        src="./src/assets/Orange.png"
      />
      <img
        className="position-absolute object-cover"
        style={{ width: '112px', height: '112px', top: '120px', left: '0' }}
        alt="Blue"
        src="./src/assets/Blue.png"
      />
    </div>
  </div>
);