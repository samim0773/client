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
      <Route path="about" element={<About />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
