import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function DoctorTopNav() {
  return (
    <nav className="doctorTopBar">
      <div className="doctorProfileTitle">
        <h1>Doctor Profile</h1>
      </div>
      <div class="searchBar">
        <input type="text" className="searchBarInput" placeholder="Search" />
        <button type="submit" className="searchBarButton">
          <SearchIcon style={{ color: "white" }} />
        </button>
      </div>
      <div className="doctorTopBarRight">
        <NotificationsIcon />
        <img src={require("../asset/femalDoctor.jpg")} alt="profile"/>
      </div>
    </nav>
  );
}
