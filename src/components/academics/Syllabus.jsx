import "./Syllabus.css";
import { Link } from "react-router-dom";
function Syllabus() {
  return (
    <>
      <div className="syllabus-body">
        <div className="container">
          <div className="syllabus-heading">
            <h3>Syllabus </h3>
          </div>
          <div className="syllabus-content">
            <div className="syllabus-link">
              <ul>
                <li>
                  <div className="link">
                    <Link className="syll-link" to="/syllabus">
                      Class - V
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="syll-link" to="/syllabus">
                      Class - VI
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="syll-link" to="/syllabus">
                      Class - VII
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="syll-link" to="/syllabus">
                      Class - VIII
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="syll-link" to="/syllabus">
                      Class - IX
                    </Link>
                  </div>
                  <div className="link">
                    <Link className="syll-link" to="/syllabus">
                      Class - X
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Syllabus;
