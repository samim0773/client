import "./New-Admission.css";

function NewAdmission() {
  return (
    <div className="government-school-admission-container container">
      <h2>ABC institute of technology Admission Information</h2>
      <p>
      Welcome to our institute! We are excited to have you as part of our
        community. Here is the information you need for the admission process:
      </p>
      <div className="admission-details">
        <p>
          <strong>Application Period:</strong> April 1, 2024 - April 30, 2024
        </p>
        <p>
          <strong>Required Documents:</strong>
        </p>
        <ul>
          <li>Birth Certificate</li>
          <li>Proof of Residence</li>
          <li>Parent/Guardian Identification</li>
          <li>Previous School Records (if applicable)</li>
        </ul>
        <p>
          <strong>Admission Fee:</strong> No admission fee for government
          schools
        </p>
        <p>
          Ensure that you submit all required documents during the specified
          application period. Late submissions may not be considered.
        </p>
      </div>
    </div>
  );
}
export default NewAdmission;
