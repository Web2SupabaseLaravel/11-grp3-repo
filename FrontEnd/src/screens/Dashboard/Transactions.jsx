import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/practitioners', { timeout: 5000 });
        console.log('API Response:', response.data);
        const transformedData = response.data.map(prac => ({
          name: prac.user?.first_name || 'Unknown',
          image: prac.user?.profile_img_url || './src/assets/default.png',
        }));
        setTransactions(transformedData);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div
      className="position-absolute bg-white rounded"
      style={{ width: '427px', height: '254px', top: '124px', left: '182px', fontFamily: '"Manrope", Helvetica, sans-serif' }}
    >
      <div
        className="position-absolute"
        style={{ width: '427px', height: '254px', top: '0', left: '0' }}
      >
        <div
          className="d-inline-flex align-items-center gap-5 position-absolute"
          style={{ top: '24px', left: '24px' }}
        >
          <div className="position-relative" style={{ marginTop: '-1px' }}>
            <span
              className="fw-bold"
              style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '700', color: '#101828' }}
            >
              Transactions
            </span>
          </div>
        </div>
      </div>
      <div
        className="position-absolute text-body"
        style={{ top: '26px', left: '366px' }}
      >
        <span
          style={{ fontSize: '14px', lineHeight: '24px', fontWeight: '400', color: '#1D2939' }}
        >
          See All
        </span>
      </div>
      {loading ? (
        <div className="position-absolute" style={{ top: '100px', left: '24px', color: 'blue' }}>
          Loading...
        </div>
      ) : error ? (
        <div className="position-absolute" style={{ top: '100px', left: '24px', color: 'red' }}>
          {error}
        </div>
      ) : transactions.length > 0 ? (
        transactions.slice(0, 3).map((trans, index) => (
          <React.Fragment key={index}>
            <div
              className="position-absolute"
              style={{
                top: [86, 135, 185][index] + 'px',
                left: '31px',
                width: index === 0 ? '179px' : index === 1 ? '111px' : '121px',
                height: '40px',
              }}
            >
              <div className="d-inline-flex align-items-center gap-3 position-relative">
                <div
                  className="position-relative rounded-circle"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: `url(${trans.image}) 50% 50% / cover no-repeat`,
                    backgroundColor: trans.image ? 'transparent' : '#ccc',
                  }}
                />
                <div className="position-relative" style={{ marginTop: '-1px' }}>
                  <span
                    className="fw-bold"
                    style={{ fontSize: '16px', lineHeight: '24px', fontWeight: '700', color: '#1D2939' }}
                  >
                    {trans.name}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="position-absolute"
              style={{ top: [95, 142, 190][index] + 'px', left: '362px', width: '60px' }}
            >
              <span
                className="text-success"
                style={{ fontSize: '14px', lineHeight: '24px', fontFamily: '"Manrope", Helvetica', fontWeight: '400' }}
              >
                +300
              </span>
            </div>
          </React.Fragment>
        ))
      ) : (
        <div className="position-absolute" style={{ top: '100px', left: '24px', color: 'red' }}>
          No transactions data available.
        </div>
      )}
    </div>
  );
};