// Suggested code may be subject to a license. Learn more: ~LicenseLog:1172533871.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3641892040.
import React, { useState } from 'react';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process inputValue here
    console.log('Submitted value:', inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-group d-flex flex-column align-items-center justify-content-center">
  <label htmlFor="input" className="form-label mt-3">We are here to help you fix your code complexity</label>
      <input
        type="text"
        id="input"
    className="form-control w-75"
        placeholder="Enter your code here"
        value={inputValue}
        onChange={handleChange}
      />
  <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>





  );
};

export default InputForm;
