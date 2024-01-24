import React from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const resultItems = [
    "Class V: Unit Test-1",
    "Class VI: Unit Test-1",
    "Class VII: Unit Test-1",
    "Class VIII: Unit Test-1",
    "Class IX: Unit Test-1",
    "Class X: Unit Test-1",
  ];

  const navigate = useNavigate();

  const handleItemClick = (selectedItem) => {
    navigate(`/result/result-form/${encodeURIComponent(selectedItem)}`);
  };

  return (
    <div className="result-container container">
      <div className="result-body">
        <h3 className="result-heading">Result Link</h3>
        <div className="result-link">
          <ul>
            {resultItems.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Result;
