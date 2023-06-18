import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();

    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

    setAge(ageInYears);
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <h4>Enter your Date of Birth</h4>
      <label htmlFor="dob">Date of Birth:</label>
      <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p>Your age is: {age}</p>}
    </div>
  );
  
};

export default App;