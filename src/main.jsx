import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

// -- React bootstrap Configuration ---
// import "../node_modules/react-bootstrap/dist/react-bootstrap.js";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "./Layout.jsx";
import Home from "./components/home/Home.jsx";
import AboutSchool from "./components/about/About-School.jsx";
import Management from "./components/about/Management.jsx";
import VisionMission from "./components/about/Vision-Mission.jsx";
import AcademicCalender from "./components/academics/Academic-Calender.jsx";
import Result from "./components/academics/Result.jsx";
import Syllabus from "./components/academics/Syllabus.jsx";
import Timetable from "./components/academics/Timetable.jsx";
import NewAdmission from "./components/academics/New-Admission.jsx";
import Teacher from "./components/teachers/Teachers.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Contact from "./components/contact/Contact.jsx";
import ResultForm from "./components/academics/Result-Form.jsx";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about/institute" element={<AboutSchool />} />
      <Route path="about/management" element={<Management />} />
      <Route path="about/vision-mission" element={<VisionMission />} />
      <Route
        path="academics/academic-calender"
        element={<AcademicCalender />}
      />
      <Route path="academics/result" element={<Result />} />
      <Route path="academics/syllabus" element={<Syllabus />} />
      <Route path="academics/timetable" element={<Timetable />} />
      <Route path="academics/new-admission" element={<NewAdmission />} />
      <Route path="teacher" element={<Teacher />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/result/result-form/:selectedItem" element={<ResultForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
