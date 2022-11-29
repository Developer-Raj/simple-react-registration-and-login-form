import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer.component";
import Header from "../header/Header.component";

function Navigation() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Navigation;
