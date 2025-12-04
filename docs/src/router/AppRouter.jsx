import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import HumanPage from "../pages/HumanPage";
import InfectedPage from "../pages/InfectedPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/humans" element={<HumanPage />} />
        <Route path="/infecteds" element={<InfectedPage />} />
      </Routes>
    </BrowserRouter>
  );
}