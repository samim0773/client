import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-body">
        <div className="container">
          <div className="footer-heading">
            <h3>Jalalpur High Madrasha (H.S)</h3>
          </div>
          <div className="footer-sub">
            <div className="footer-about">
              <h5>About</h5>
              <ul>
                <li>
                  <a href="#">About School</a>
                </li>
                <li>
                  <a href="#">About Principal</a>
                </li>
                <li>
                  <a href="#">About </a>
                </li>
                <li>
                  <a href="#">About School</a>
                </li>
              </ul>
            </div>
            <div className="footer-academics">
              <h5>Academics</h5>
              <ul>
                <li>
                  <a href="#">Calender</a>
                </li>
                <li>
                  <a href="#">Result</a>
                </li>
                <li>
                  <a href="#">Syllabus</a>
                </li>
                <li>
                  <a href="#">Timetable</a>
                </li>
                <li>
                  <a href="#">Admission Fee</a>
                </li>
              </ul>
            </div>
            <div className="footer-teacher">
              <h5>Teacher</h5>
              <ul>
                <li>
                  <a href="#">Teacher</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h5>Contact</h5>
              <ul>
                <li>Jalalpur High Madrasah(H.S)</li>
                <li>Jalalpur H. Jalalpur Chanchal</li>
                <li>West Bengal, 732123</li>
                <li>Phone No : +911234567898</li>
              </ul>
              <div className="social-media-link">
                <ul>
                  <li>
                    <a href="#">facebook</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                  <li>
                    <a href="#">Linkend</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
