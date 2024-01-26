import { useState } from "react";
import "./SignUpLogin.css";

const SignUpLogin = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "student", // Default role
    image: null, // To store the selected image file (only for sign-up)
    subject: "",
    designation: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload (only for sign-up)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    if (
      activeTab === "signup" &&
      (!formData.fullName || !formData.subject || !formData.designation)
    ) {
      alert("Please fill in all required fields for Sign Up.");
      return;
    }

    // Log form data
    console.log(
      `Submitted form for ${activeTab}:\n`,
      JSON.stringify(formData, null, 2)
    );

    // Clear form fields
    setFormData({
      fullName: "",
      email: "",
      password: "",
      role: "student", // Reset to default role
      image: null,
      subject: "",
      designation: "",
    });
  };

  return (
    <div className="sing-up-body">
      <div className="sing-up-container">
      <div className="sing-up-tabs">
        <div
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => handleTabClick("login")}
        >
          Login
        </div>
        <div
          className={`tab ${activeTab === "signup" ? "active" : ""}`}
          onClick={() => handleTabClick("signup")}
        >
          Sign Up
        </div>
      </div>
      <div className="form-container">
        {activeTab === "login" && (
          <form className="sing-up-form" onSubmit={handleSubmit}>
            <label className="sing-up-lable">Role</label>
            <select
              className="sing-up-select"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
            <label className="sing-up-lable">Email address</label>
            <input
              className="sing-up-input"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label className="sing-up-lable">Password</label>
            <input
              className="sing-up-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button className="sing-up-btn" type="submit">
              Login
            </button>
          </form>
        )}
        {activeTab === "signup" && (
          <form className="sing-up-form" onSubmit={handleSubmit}>
            <label className="sing-up-lable">Full Name</label>
            <input
              className="sing-up-input"
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <label className="sing-up-lable">Email address</label>
            <input
              className="sing-up-input"
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label className="sing-up-lable">Password</label>
            <input
              className="sing-up-input"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label className="sing-up-lable">Subject</label>
            <input
              className="sing-up-input"
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <label className="sing-up-lable">Designation</label>
            <input
              className="sing-up-input"
              type="text"
              name="designation"
              placeholder="Enter designation"
              value={formData.designation}
              onChange={handleInputChange}
              required
            />
            <label className="sing-up-lable">Profile Image</label>
            <input
              className="sing-up-input"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
            />
            <button className="sing-up-btn" type="submit">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
    </div>
  );
};

export default SignUpLogin;
