import { useState, useEffect } from "react";
import "./Timetable.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import axios from "axios";

function TimeTable() {
  const classes = [
    { className: "V", sections: ["A", "B", "C", "D"] },
    { className: "VI", sections: ["A", "B", "C", "D"] },
    { className: "VII", sections: ["A", "B", "C", "D"] },
    { className: "VIII", sections: ["A", "B", "C", "D"] },
    { className: "IX", sections: ["A", "B", "C", "D"] },
    { className: "X", sections: ["A", "B", "C", "D"] },
  ];

  const [pdfContent, setPdfContent] = useState(""); // State to store PDF content

  useEffect(() => {
    // Fetch the PDF content on component mount
    fetchPdfContent();
  }, []);

  const fetchPdfContent = async () => {
    try {
      const response = await axios.get("YOUR_BACKEND_PDF_URL");
      setPdfContent(response.data);
    } catch (error) {
      console.error("Error fetching PDF content:", error);
    }
  };

  const handleDownload = async (className, section) => {
    try {
      let backendEndpoint;

      // Determine the backend endpoint based on class and section
      if (className === "V" && section === "A") {
        backendEndpoint = "YOUR_BACKEND_ENDPOINT_1";
      } else if (className === "V" && section === "B") {
        backendEndpoint = "YOUR_BACKEND_ENDPOINT_2";
      } else if (className === "VI" && section === "A") {
        backendEndpoint = "YOUR_BACKEND_ENDPOINT_3";
      }
      // Add more conditions as needed

      if (backendEndpoint) {
        // Request to the specific backend endpoint for the given class and section
        const response = await axios.get(backendEndpoint, {
          params: { class: className, section: section },
        });
        const cloudinaryUrl = response.data.cloudinaryUrl;

        // Now, you can use the cloudinaryUrl for downloading or displaying the PDF on the client side.
        // For example, you can create a link to download the PDF or open it in a new tab.

        // For downloading:
        const link = document.createElement("a");
        link.href = cloudinaryUrl;
        link.download = `${className}-Section-${section}.pdf`;
        link.click();
      } else {
        console.error(
          "Backend endpoint not found for the given class and section."
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container result-body">
      <Accordion>
        {classes.map((classInfo, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{`Class - ${classInfo.className}`}</Accordion.Header>
            <Accordion.Body>
              <div className="section-body">
                {classInfo.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="section">
                    <div className="section-title">
                      <h6>{`Section-${section}`}</h6>
                    </div>
                    <div className="result-btn">
                    <Button
                      className="btn"
                      variant="light"
                      style={{ margin: "5px 0", border: "1px solid #a9a9a9" }}
                      onClick={() =>
                        handleDownload(classInfo.className, section)
                      }
                    >
                      Download
                    </Button>
                    </div>
                    
                  </div>
                ))}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default TimeTable;
