import React, { useState } from "react";
import './Stepper.css';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderMessage = () => {
    switch (currentStep) {
      case 1:
        return "This is step 1";
      case 2:
        return "This is step 2";
      case 3:
        return "This is step 3";
      default:
        return "Unknown step";
    }
  };

  return (
    <div className="stepper-container">
      <div className="steps">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`step ${currentStep === step ? "active" : ""} ${currentStep > step ? "completed" : ""}`}
          >
            {step}
          </div>
        ))}
      </div>
      <div className="message">{renderMessage()}</div>
      <div className="step-number">{currentStep}</div>
      <div className="buttons">
        <button onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === totalSteps}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
