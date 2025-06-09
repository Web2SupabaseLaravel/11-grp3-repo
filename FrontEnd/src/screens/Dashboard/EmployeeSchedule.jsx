import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const EmployeeSchedule = () => {
  const [practitioners, setPractitioners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPractitioners = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/practitioners');
        console.log('API Response:', response.data);
        setPractitioners(response.data);
      } catch (error) {
        console.error('Error fetching practitioners:', error.response ? error.response.data : error.message);
        setError('Failed to fetch practitioners. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchPractitioners();
  }, []);

  const handleAdd = async () => {
    const newPractitioner = {
      practitioner_id: prompt('Enter practitioner_id:'),
      specialty: prompt('Enter specialty:'),
      working_hours: prompt('Enter working hours (e.g., 9 AM - 5 PM):'),
      user_id: prompt('Enter user_id:'),
    };
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/practitioners', newPractitioner);
      setPractitioners([...practitioners, response.data]);
    } catch (error) {
      console.error('Error adding practitioner:', error.response ? error.response.data : error.message);
    }
  };

  const handleEdit = async (practitioner) => {
    if (practitioner) {
      const updatedSpecialty = prompt('Enter new specialty:', practitioner.specialty);
      const updatedWorkingHours = prompt('Enter new working hours:', practitioner.working_hours);
      const updatedData = {
        specialty: updatedSpecialty,
        working_hours: updatedWorkingHours,
        user_id: practitioner.user_id,
      };
      try {
        const response = await axios.put(`http://127.0.0.1:8000/api/practitioners/${practitioner.practitioner_id}`, updatedData);
        setPractitioners(practitioners.map(p => 
          p.practitioner_id === practitioner.practitioner_id ? response.data : p
        ));
      } catch (error) {
        console.error('Error editing practitioner:', error.response ? error.response.data : error.message);
      }
    }
  };

  const handleDelete = async (practitioner) => {
    if (practitioner) {
      if (confirm(`Are you sure you want to delete ${practitioner.user?.first_name || 'this practitioner'}?`)) {
        try {
          await axios.delete(`http://127.0.0.1:8000/api/practitioners/${practitioner.practitioner_id}`);
          setPractitioners(practitioners.filter(p => p.practitioner_id !== practitioner.practitioner_id));
        } catch (error) {
          console.error('Error deleting practitioner:', error.response ? error.response.data : error.message);
        }
      }
    }
  };

  return (
    <div className="position-absolute bg-white rounded" style={{ width: '427px', height: '361px', top: '630px', left: '182px' }}>
      <div className="d-inline-flex align-items-start gap-10 position-absolute" style={{ top: '24px', left: '24px' }}>
        <div className="position-relative" style={{ marginTop: '-1px' }}>
          <span className="fw-bold" style={{ fontFamily: 'Manrope, Helvetica', fontWeight: 700, fontSize: '20px', lineHeight: '30px', color: '#000000' }}>
            Employee Schedule
          </span>
        </div>
      </div>
      <div className="position-relative" style={{ top: '24px', left: '375px' }}>
        <button
          onClick={handleAdd}
          style={{
            padding: '5px 10px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
      {loading ? (
        <div className="position-absolute" style={{ top: '100px', left: '24px', color: 'blue' }}>
          Loading...
        </div>
      ) : error ? (
        <div className="position-absolute" style={{ top: '100px', left: '24px', color: 'red' }}>
          {error}
        </div>
      ) : practitioners.length > 0 ? (
        practitioners.map((prac, index) => (
          <React.Fragment key={prac.practitioner_id}>
            <button
              onClick={() => handleDelete(prac)}
              style={{
                position: 'absolute',
                top: `${82 + (index * 80)}px`,
                left: '-97px',
                padding: '5px 10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit(prac)}
              style={{
                position: 'absolute',
                top: `${82 + (index * 80)}px`,
                left: '-40px',
                padding: '5px 10px',
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Edit
            </button>
            <div
              className="position-absolute"
              style={{
                width: index === 0 ? '101px' : index === 1 ? '110px' : index === 2 ? '95px' : '104px',
                height: '35px',
                top: `${79 + (index * 80)}px`,
                left: '14px',
              }}
            >
              <div className="d-inline-flex align-items-center gap-3 position-relative">
                <div
                  className="position-relative rounded-circle"
                  style={{
                    width: '35px',
                    height: '35px',
                    background: `url(${prac.user?.profile_img_url || '/static/default.png'}) 50% 50% / cover no-repeat`,
                    backgroundColor: prac.user?.profile_img_url ? 'transparent' : '#ccc',
                  }}
                />
                <div className="position-relative" style={{ marginTop: '-1px' }}>
                  <span className="fw-bold text-dark" style={{ fontSize: '16px', lineHeight: '24px' }}>
                    {prac.user?.first_name || 'Unknown'}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="position-absolute fw-bold text-dark"
              style={{ top: `${83 + (index * 80)}px`, left: '152px', fontSize: '16px', lineHeight: '24px' }}
            >
              {prac.specialty || 'N/A'}
            </div>
            <div
              className="position-absolute"
              style={{
                width: '108px',
                height: index === 1 ? '31px' : '30px',
                top: `${81 + (index * 80)}px`,
                left: '312px',
              }}
            >
              <div
                className="position-absolute rounded border border-1 border-dark"
                style={{ width: '108px', height: '26px', top: index === 1 ? '5px' : '3px', left: '0' }}
              />
              <div className="position-absolute" style={{ top: '0', left: '15px' }}>
                <span
                  style={{
                    fontFamily: '"Manrope", Helvetica',
                    fontWeight: '500',
                    fontSize: '14px',
                    lineHeight: '36px',
                    color: '#1d2939',
                  }}
                >
                  {prac.working_hours || 'N/A'}
                </span>
              </div>
            </div>
          </React.Fragment>
        ))
      ) : (
        <div className="position-absolute" style={{ top: '100px', left: '24px', color: 'red' }}>
          No practitioners data available.
        </div>
      )}
    </div>
  );
};