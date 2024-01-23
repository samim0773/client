import React, { useState } from "react";
// import "./ResultForm.css"; // Import CSS file for styling

const ResultForm = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    roll: ''
  });

  const [errors, setErrors] = useState({
    studentId: '',
    roll: ''
  });

  const validateStudentId = (value) => {
    const regex = /^[0-9a-zA-Z]+$/;
    return regex.test(value);
  };

  const validateRoll = (value) => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  };

  const validateSpecialCharacters = (value) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs before submission
    const isStudentIdValid = validateStudentId(formData.studentId);
    const isRollValid = validateRoll(formData.roll);

    if (!isStudentIdValid) {
      setErrors({
        ...errors,
        studentId: 'Student ID should contain only numbers and characters.'
      });
    }

    if (!isRollValid) {
      setErrors({
        ...errors,
        roll: 'Roll should contain only numbers.'
      });
    }

    if (!validateSpecialCharacters(formData.studentId)) {
      setErrors({
        ...errors,
        studentId: 'Special symbols are not allowed in Student ID.'
      });
    }

    if (!validateSpecialCharacters(formData.roll)) {
      setErrors({
        ...errors,
        roll: 'Special symbols are not allowed in Roll.'
      });
    }

    if (isStudentIdValid && isRollValid) {
      // Form data is valid, you can proceed with your desired action
      console.log('Form submitted:', JSON.stringify(formData));
    }
  };

  const isSubmitDisabled = () => {
    return !validateStudentId(formData.studentId) || !validateRoll(formData.roll) || !validateSpecialCharacters(formData.studentId) || !validateSpecialCharacters(formData.roll);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
        />
        <div className="error-message">{errors.studentId}</div>
      </div>

      <div>
        <label htmlFor="roll">Roll:</label>
        <input
          type="text"
          id="roll"
          name="roll"
          value={formData.roll}
          onChange={handleChange}
        />
        <div className="error-message">{errors.roll}</div>
      </div>

      <button type="submit" disabled={isSubmitDisabled()}>
        Submit
      </button>
    </form>
  );
};
export default ResultForm;
