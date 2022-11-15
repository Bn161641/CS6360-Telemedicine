import logo from "./logo.svg";
import "./App.css";
import Navar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DoctorPage from "./pages/DoctorPage";
import PatientPage from "./pages/PatientPage";
import SystemUserPage from "./pages/SystemUser";

function App() {
  return (
      <div className="App">
        <Navar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/system-user" element={<SystemUserPage />} />
        <Route path="/patient" element={<PatientPage />} />
      </Routes>
      </div>
  );
}

export default App;
