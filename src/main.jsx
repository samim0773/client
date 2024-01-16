import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

// -- React bootstrap Configuration ---
// import "../node_modules/react-bootstrap/dist/react-bootstrap.js";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "./Layout.jsx";
import Home from "../src/components/Home.jsx";
import About from "../src/components/About.jsx";
import AcademicCalender from "./components/academics/Academic-Calender.jsx";
import Result from "./components/academics/Result.jsx";
import Syllabus from "./components/academics/Syllabus.jsx";
import Timetable from "./components/academics/Timetable.jsx";
import AdmissionFFee from "./components/academics/admission-Fee.jsx";
import Teacher from "./components/teachers/Teachers.jsx";
import Gallery from "./components/gallery/Gallery.jsx";
import Contact from "./components/Contact.jsx";
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
      <Route path="about" element={<About />} />
      <Route
        path="academics/academic-calender"
        element={<AcademicCalender />}
      />
      <Route path="academics/result" element={<Result />} />
      <Route path="academics/syllabus" element={<Syllabus />} />
      <Route path="academics/timetable" element={<Timetable />} />
      <Route path="academics/admission-fee" element={<AdmissionFFee />} />
      <Route path="teacher" element={<Teacher />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/result/result-form" element={<ResultForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
