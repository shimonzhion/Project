import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./components/pages/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default Router;
