import "./Result.css";
// import ResultForm from "./Result-Form";
import { Link } from "react-router-dom";
function Result() {
  return (
    <>
      <div className="result-container">
        <div className="result-body">
          <div className="result-link">
            <ul>
              <li>
                <Link to="/result/result-form">Class V: Unit Text-1</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Result;
