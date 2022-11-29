import "./main.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import Login from "./pages/Login.page";
import Register from "./pages/Register.page";
import Navigation from "./components/Navigation/Navigation.component";
import Welcome from "./pages/Welcome.page";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
