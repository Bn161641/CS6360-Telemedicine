import "./PatientPage.css";
import { useParams, Outlet } from 'react-router-dom';
import PatientSideNav from "./PatientSideNav";
import PatientTopNav from "./PatientTopNav";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatientInfo, sendOfficesData, sendServicesData } from "../store/patientInfo-action";

export default function PatientPage() {
  const dispatch = useDispatch();
  const fullName = useSelector(state => state.patientInfo.name);
  const title = useSelector(state => state.patientInfo.title);
  const state = useSelector(state => state.patientInfo.state);
  const hospitalName = useSelector(state => state.patientInfo.hospitalName);
  const offices = useSelector(state => state.patientInfo.offices);
  const services = useSelector(state => state.patientInfo.services);
  const params = useParams();
  const { id: patientId } = params;

  useEffect(() => {
    dispatch(fetchPatientInfo(params.id));
  }, [dispatch]);

  useEffect(() => {
    if (offices.changed) {
      dispatch(sendOfficesData(offices, patientId));
    }
  }, [offices, dispatch]);

  useEffect(() => {
    if (services.changed) {
      dispatch(sendServicesData(services, patientId));
    }
  }, [services, dispatch]);

  return (
    <div className="patientPage">
      <PatientSideNav id={patientId} fullName={fullName} title={title} hospitalName={hospitalName} state={state} />
      <div className="patientContent">
        <PatientTopNav fullName={fullName}/>
        <Outlet />
      </div>
    </div>
  );
}
