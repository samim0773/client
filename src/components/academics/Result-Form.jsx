import React, { useState } from "react";
// import "./ResultForm.css"; // Import CSS file for styling

const ResultForm = () => {
  const initialFormData = {
    studentId: "",
    studentRoll: "",
    studentName: "",
    studentClass: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    if (!/^\d+$/.test(formData.studentId.trim())) {
      newErrors.studentId = "Student ID must be a numeric value";
    }
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${key} cannot be empty`;
      }
    });

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If validation passes, log the form data as JSON, clear the form, and set submitted data
      console.log("Form Data:", JSON.stringify(formData));
      setFormData(initialFormData);
      setErrors({});
      setSubmittedData(formData);
    }
  };

  // Check if the form is valid
  React.useEffect(() => {
    const isValid =
      /^\d+$/.test(formData.studentId.trim()) &&
      Object.values(formData).every((value) => value.trim() !== "");
    setIsSubmitDisabled(!isValid);
  }, [formData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            className={errors.studentId ? "error" : ""}
          />
          <span className="error-message">{errors.studentId}</span>
        </div>

        <div className="form-group">
          <label htmlFor="studentRoll">Student Roll:</label>
          <input
            type="text"
            id="studentRoll"
            name="studentRoll"
            value={formData.studentRoll}
            onChange={handleChange}
            className={errors.studentRoll ? "error" : ""}
          />
          <span className="error-message">{errors.studentRoll}</span>
        </div>

        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className={errors.studentName ? "error" : ""}
          />
          <span className="error-message">{errors.studentName}</span>
        </div>

        <div className="form-group">
          <label htmlFor="studentClass">Class:</label>
          <input
            type="text"
            id="studentClass"
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
            className={errors.studentClass ? "error" : ""}
          />
          <span className="error-message">{errors.studentClass}</span>
        </div>

        <button type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ResultForm;
