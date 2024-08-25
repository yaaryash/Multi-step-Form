import React from 'react';

const Step1 = ({ formData, errors, handleChange }) => {
  return (
    <div className="step step-1">
      <h2>Step 1: Personal Information</h2>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default Step1;
