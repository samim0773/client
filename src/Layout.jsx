import { Outlet } from "react-router-dom";
import Navigation from "./components/header/Navigation.jsx";
import Footer from "./components/footer/Footer";

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
