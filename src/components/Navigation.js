import React from 'react';

const Navigation = ({ currentStep, handleNext, handleBack }) => {
  return (
    <div className="navigation">
      <button onClick={handleBack} disabled={currentStep === 1}>
        Back
      </button>
      {currentStep < 3 && (
        <button onClick={handleNext}>Next</button>
      )}
      {currentStep === 3 && (
        <button type="submit">Submit</button>
      )}
    </div>
  );
};

export default Navigation;
