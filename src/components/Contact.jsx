import "./Contact.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted:", { fullName, email, message });
    // Clear form fields after submission
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact-heading">
        <h3>CONTACT US</h3>
      </div>
      <div className="contact-body">
        <div className="contact-address">
          <p> Jalalpur High Madrasah(H.S)</p>
          <p>Jalalpur H. Jalalpur Chanchal</p>
          <p>West Bengal, 732123</p>
          <p>Phone No : +911234567898</p>
          <p>E-mail : jhm@gmail.com</p>
          <p>Website : www.jhm.in</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Enter valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {/* <button className="form-sub-btn" type="submit">
              Submit
            </button> */}
            <Button
              variant="outline-success"
              className="form-sub-btn"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
