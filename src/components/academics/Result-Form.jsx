import "./Result-Form.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ResultForm = () => {
  const { selectedItem } = useParams();
  const [formData, setFormData] = useState({
    studentId: "", // Leave studentId empty initially
    roll: "",
    examType: selectedItem || "", // Set examType using useParams
  });

  const [errors, setErrors] = useState({
    studentId: "",
    roll: "",
  });

  useEffect(() => {
    // Assuming you have a JSON variable, replace 'jsonVariable' with your actual JSON variable
    const jsonVariable = { examType: "yourExamTypeValue" };

    setFormData((prevFormData) => ({
      ...prevFormData,
      examType: selectedItem || jsonVariable.examType, // Set the examType based on useParams or JSON
    }));
  }, [selectedItem]);

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
    <>
      <div className="result-form-body">
        <div className="result-form container">
          <form onSubmit={handleSubmit}>
            <div className="exam-type-field">
              <label className="field-label" htmlFor="examType">
                Exam Type:
              </label>
              <input
                className="input-field"
                type="text"
                id="examType"
                name="examType"
                value={formData.examType}
                disabled
              />
            </div>
            <div className="student-id-field">
              <label className="field-label" htmlFor="studentId">
                Student ID:
              </label>
              <input
                className="input-field"
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
              />
              <div className="error-message">{errors.studentId}</div>
            </div>
            <div className="roll-field">
              <label className="field-label" htmlFor="roll">
                Roll:
              </label>
              <input
                className="input-field"
                type="text"
                id="roll"
                name="roll"
                value={formData.roll}
                onChange={handleChange}
              />
              <div className="error-message">{errors.roll}</div>
            </div>
            <div className="result-sub-btn-outer">
              <button
                className="result-sub-btn"
                type="submit"
                disabled={isSubmitDisabled()}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResultForm;
