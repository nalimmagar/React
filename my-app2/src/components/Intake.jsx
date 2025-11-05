import React, { useState, useEffect } from 'react';

const IntakeDropdown = ({ value, onChange }) => {
  const [intakes, setIntakes] = useState([]);

  useEffect(() => {
    const fetchIntakes = async () => {
      try {
        const res = await fetch('http://v2.cloudedu.com.au/api/intake/');
        const data = await res.json();
        setIntakes(data);
      } catch (err) {
        console.error('Error fetching intakes:', err);
      }
    };
    fetchIntakes();
  }, []);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded-md w-[180px]"
    >
      <option value="">All Intakes</option>
      {intakes.slice(0, 6).map((intake) => (
        <option key={intake.id} value={intake.month}>
          {intake.month}
        </option>
      ))}
    </select>
  );
};

export default IntakeDropdown;
