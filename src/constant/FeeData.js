// FeeData.js
import React, { useState } from 'react';

const FeeData = () => {
  const [data, setData] = useState([
    { id: 1, name: 'school fees', amount: `30000`, isChecked: false },
    { id: 2, name: 'School Uniform', amount: 15000, isChecked: false },
    { id: 3, name: 'text books', amount: 20000, isChecked: false },
    { id: 4, name: 'sport wear', amount: 10000, isChecked: false },
    { id: 5, name: 'Excursion', amount: 25000, isChecked: false },
    // Add more items as needed
  ]);

  return {
    data,
    setData,
  };
};

export default FeeData;
