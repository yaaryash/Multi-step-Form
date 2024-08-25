import React from 'react';

const Step2 = ({ formData, errors, handleChange }) => {
  return (
    <div className="step step-2">
      <h2>Step 2: Address Information</h2>
      <div>
        <label>Address Line 1</label>
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
        {errors.address1 && <p className="error">{errors.address1}</p>}
      </div>
      <div>
        <label>Address Line 2</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
      </div>
      <div>
        <label>City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div>
        <label>State</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
        {errors.state && <p className="error">{errors.state}</p>}
      </div>
      <div>
        <label>Zip Code</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} />
        {errors.zip && <p className="error">{errors.zip}</p>}
      </div>
    </div>
  );
};

export default Step2;
