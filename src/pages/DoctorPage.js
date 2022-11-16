import "./DoctorPage.css";
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function DoctorPage() {
  const [fullName, setFullName] = useState("Helena Hall");
  const [title, setTitle] = useState("Podiatrist");
  const [hospitalName, setHospitalName] = useState("Vibra Hospital");
  const [state, setState] = useState("Texas, US");

  return (
    <div className="doctorPage">
      <nav className="doctorSideBar">
        <img
          className="doctorInverseLogo"
          src={require("../asset/telemedicine-inverse-logo-crop.png")}
        />
        <img className="doctorPic" src={require("../asset/femalDoctor.jpg")} />
        <p className="doctorName">{fullName}</p>
        <p className="doctorTitle">{title}</p>
        <p className="doctorHospital">@{hospitalName}</p>
        <p className="doctorState">
          <LocationOnIcon />
          {state}
        </p>
        <ul className="doctorSidebarMenu">
          <li className="active">
            {" "}
            <AccountBoxIcon className="doctorSideBarIcon" /> Profile
          </li>
          <li>
            {" "}
            <CalendarTodayIcon className="doctorSideBarIcon" /> Appointments
          </li>
          <li>
            {" "}
            <LogoutIcon className="doctorSideBarIcon" /> Logout
          </li>
        </ul>
      </nav>
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
      </div>
    </div>
  );
}
