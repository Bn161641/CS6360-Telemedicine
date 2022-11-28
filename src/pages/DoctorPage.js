import "./DoctorPage.css";
import { useParams, Outlet } from 'react-router-dom';
import { useState } from "react";
import DoctorSideNav from "./DoctorSideNav";
import DoctorTopNav from "./DoctorTopNav";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { doctorInfoActions } from "../store/doctorInfoSlice";

export default function DoctorPage() {
  const dispatch = useDispatch();
  const fullName = useSelector(state => state.doctorInfo.name);
  const title = useSelector(state => state.doctorInfo.title);
  const state = useSelector(state => state.doctorInfo.state);
  const [hospitalName, setHospitalName] = useState("");
  const params = useParams();
  const { id: doctorId } = params;


  useEffect(() => {
    //use the doctorID to querry the database to get the following information
    //depending how long it takes to querry you may have to implement a loading icon on the screen
    //you may have to add more info to the database like the state the doctor is located and their title

    //replace the hard coded fake data
    dispatch(doctorInfoActions.setId(parseInt(doctorId)));
    dispatch(doctorInfoActions.setName("Helena Hall"));
    dispatch(doctorInfoActions.setEmail("helenahall@vibrahospital.org"));
    dispatch(doctorInfoActions.setTitle("Podiatrist"));
    //alter the string from the database to match format i.e. 8175559999 => (817)-555-9999
    dispatch(doctorInfoActions.setPhoneNumber("(817)-555-9999"));
    //setHospitalName will be the main office name
    setHospitalName("Vibra Hospital");
    // setState("Texas, US");
  });

  return (
    <div className="doctorPage">
      <DoctorSideNav fullName={fullName} title={title} hospitalName={hospitalName} state={state} />
      <div className="doctorContent">
        <DoctorTopNav />
        <Outlet />
      </div>
    </div>
  );
}
