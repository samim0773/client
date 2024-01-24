import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ResultForm = () => {
  const { selectedItem } = useParams();
  const [formData, setFormData] = useState({
    studentId: selectedItem || "",
    roll: "",
  });

  const [errors, setErrors] = useState({
    studentId: "",
    roll: "",
  });

  useEffect(() => {
    if (selectedItem && formData.studentId !== selectedItem) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        studentId: selectedItem,
      }));
    }
  }, [selectedItem, formData.studentId]);

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

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isStudentIdValid = validateStudentId(formData.studentId);
    const isRollValid = validateRoll(formData.roll);

    if (!isStudentIdValid) {
      setErrors({
        ...errors,
        studentId: "Student ID should contain only numbers and characters.",
      });
    }

    if (!isRollValid) {
      setErrors({
        ...errors,
        roll: "Roll should contain only numbers.",
      });
    }

    if (!validateSpecialCharacters(formData.studentId)) {
      setErrors({
        ...errors,
        studentId: "Special symbols are not allowed in Student ID.",
      });
    }

    if (!validateSpecialCharacters(formData.roll)) {
      setErrors({
        ...errors,
        roll: "Special symbols are not allowed in Roll.",
      });
    }

    if (isStudentIdValid && isRollValid) {
      console.log("Form submitted:", JSON.stringify(formData));
      console.log("Selected Class:", selectedItem);
    }
  };

  const isSubmitDisabled = () => {
    return (
      !validateStudentId(formData.studentId) ||
      !validateRoll(formData.roll) ||
      !validateSpecialCharacters(formData.studentId) ||
      !validateSpecialCharacters(formData.roll)
    );
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
