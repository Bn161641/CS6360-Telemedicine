import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LogoutIcon from "@mui/icons-material/Logout";
import "./DoctorSideNav.css";

export default function DoctorSideNav(props) {
  return (
    <nav className="doctorSideBar">
      <img
        className="doctorInverseLogo"
        src={require("../asset/telemedicine-inverse-logo-crop.png")}
        alt="logo"
      />
      <img className="doctorPic" alt="profile" src={require("../asset/femalDoctor.jpg")} />
      <p className="doctorName">{props.fullName}</p>
      <p className="doctorTitle">{props.title}</p>
      <p className="doctorHospital">@{props.hospitalName}</p>
      <p className="doctorState">
        <LocationOnIcon />
        {props.state}
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
  );
};
