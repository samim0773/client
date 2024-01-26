import "./Teachers.css";
import { useState } from "react";
import TeacherCard from "./Teacher-Card";
import Dropdown from "react-bootstrap/Dropdown";

function Teachers() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <>
      
      <div className="teacher-dropdown container">
      <h3 className="tech-heading">Faculty Members</h3>
        <Dropdown className="drop-down" onSelect={handleSubjectChange}>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {selectedSubject ? `Subject: ${selectedSubject}` : "All Subjects"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey={null}>All Subjects</Dropdown.Item>
            <Dropdown.Item eventKey="Bengali">Bengali</Dropdown.Item>
            <Dropdown.Item eventKey="English">English</Dropdown.Item>
            <Dropdown.Item eventKey="Geography">Geography</Dropdown.Item>
            <Dropdown.Item eventKey="Sociology">Sociology</Dropdown.Item>
            {/* Add more subjects as needed */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <TeacherCard selectedSubject={selectedSubject} />
    </>
  );
}

export default Teachers;
