import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
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
                  <NavLink className="footer-link" to="/about">
                    About School
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-link" to="/about">
                    About Principal
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-link" to="/about">
                    About{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-link" to="/about">
                    About School
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-academics">
              <h5>Academics</h5>
              <ul>
                <li>
                  <NavLink className="footer-link" to="/about">
                    Calender
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-link" to="/about">
                    Result
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-link" to="/about">
                    Syllabus
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-link" to="/about">
                    Timetable
                  </NavLink>
                </li>
                <li>
                  <NavLink className="footer-link" to="/about">
                    Admission Fee
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-teacher">
              <h5>Teacher</h5>
              <ul>
                <li>
                  <NavLink className="footer-link" to="/about">
                    Teacher
                  </NavLink>
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
                    <NavLink className="facebook social" to="/about">
                      <FontAwesomeIcon icon={faFacebook} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="youtube social" to="/about">
                      <FontAwesomeIcon icon={faYoutube} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="twitter social" to="/about">
                      <FontAwesomeIcon icon={faTwitter} />
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink className="instagram social" to="/about">
                      <FontAwesomeIcon icon={faInstagram} />
                    </NavLink>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-last">
          <NavLink
            href="https://samim0773.github.io/personal-portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            <p style={{ color: "#fff", textDecoration: "none" }}>
              Made by Samim Aktar
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
