import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import DoctorPage from "./pages/DoctorPage";
import PatientPage from "./pages/PatientPage";
import SystemUser from "./pages/SystemUser";
import { useSelector, useDispatch } from 'react-redux';
import { sendAppointmentData, fetchAppointmentData } from "./store/appointment-action";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointmentInfo);

  useEffect(() => {
    dispatch(fetchAppointmentData());
  }, [dispatch]);

  useEffect(() => {
    if (appointments.changed) {
      dispatch(sendAppointmentData(appointments));
    }
  }, [appointments, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/*" element={<DoctorPage />}>
          <Route path=":id/profile" element={<doctorProfile />} />
          <Route path=":id/appointments" element={<doctorAppointments />} />
        </Route>
        <Route path="/system-user" element={<SystemUser />} />
        <Route path="/patient" element={<PatientPage />} />
      </Routes>
    </div>
  );
}

export default App;
