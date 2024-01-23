import "./Academic-Calender.css";
function AcademicCalender() {
  const academicDates = [
    { event: "Semester Start", date: "August 30, 2024" },
    { event: "Add/Drop Period", date: "September 1-7, 2024" },
    { event: "Midterm Exams", date: "October 15-20, 2024" },
    { event: "Fall Break", date: "November 1-5, 2024" },
    { event: "Registration for Spring Semester", date: "November 15-30, 2024" },
    { event: "Final Exams", date: "December 10-15, 2024" },
    { event: "Winter Break", date: "December 20, 2024 - January 3, 2025" },
    // Add more academic events and dates as needed
  ];

  const downloadCalendar = () => {
    console.log("Downloading Enhanced Academic Calendar...");
    // Implement the download logic here
  };

  return (
    <div className="enhanced-academic-calendar-container container">
      <h2>Enhanced Academic Calendar</h2>
      <p>
        Stay informed about important dates and events for the upcoming academic
        year.
      </p>
      <ul>
        {academicDates.map((item, index) => (
          <li key={index}>
            <span className="event">{item.event}:</span> {item.date}
          </li>
        ))}
      </ul>
      <div className="additional-info">
        <h3>Additional Information</h3>
        <p>
          <strong>Spring Semester 2025:</strong> Classes begin on January 15,
          2025.
        </p>
        <p>
          <strong>Holiday Breaks:</strong> Please note that the school will be
          closed on public holidays, and specific holiday breaks are mentioned
          in the calendar.
        </p>
        <p>
          <strong>Notes:</strong> Make sure to check your email and the
          institute's website for any updates or changes to the academic
          calendar.
        </p>
      </div>
      <button className="download-button" onClick={downloadCalendar}>
        Download Enhanced Academic Calendar
      </button>
    </div>
  );
}
export default AcademicCalender;
