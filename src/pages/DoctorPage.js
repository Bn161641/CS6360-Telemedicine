import "./DoctorPage.css";
import { useParams, Outlet } from 'react-router-dom';
import { useState } from "react";
import DoctorSideNav from "./DoctorSideNav";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function DoctorPage() {
  const [fullName, setFullName] = useState("Helena Hall");
  const [title, setTitle] = useState("Podiatrist");
  const [hospitalName, setHospitalName] = useState("Vibra Hospital");
  const [state, setState] = useState("Texas, US");


  return (
    <div className="doctorPage">
      <DoctorSideNav fullName={fullName} title={title} hospitalName={hospitalName} state={state} />
      <div className="doctorContent">
        <nav className="doctorTopBar">
          <div className="doctorProfileTitle">
            <h1>Doctor Profile</h1>
          </div>
          <div class="searchBar">
            <input
              type="text"
              className="searchBarInput"
              placeholder="Search"
            />
            <button type="submit" className="searchBarButton">
              <SearchIcon style={{ color: "white" }} />
            </button>
          </div>
          <div className="doctorTopBarRight">
            <NotificationsIcon />
            <img src={require("../asset/femalDoctor.jpg")} />
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
