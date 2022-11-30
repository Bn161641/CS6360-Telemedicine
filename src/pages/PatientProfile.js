import "./PatientProfile.css";
import "./Patient.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Modal from "../components/Modal";

export default function PatientProfile() {
  const fullName = useSelector((state) => state.patientInfo.name);
  const info = useSelector((state) => state.patientInfo.info);
  const title = useSelector((state) => state.patientInfo.title);
  const phoneNumber = useSelector((state) => state.patientInfo.phoneNumber);
  const email = useSelector((state) => state.patientInfo.email);
  const address = useSelector((state) => state.patientInfo.address);
  const website = useSelector((state) => state.patientInfo.website);
  const reviews = useSelector((state) => state.patientInfo.reviews);
  const services = useSelector((state) => state.patientInfo.services);
  const offices = useSelector((state) => state.patientInfo.offices);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [officeModalOpen, setOfficeModalOpen] = useState(false);

  return (
    <div className="patientProfileGrid">
      <div className="patientProfileCard patientInfoCard">
        <img
          className="patientProfile patientImage"
          alt="profile"
          src={require("../asset/patient.jpg")}
        />
        <div className="patientProfileContent">
          <h1 className="patientProfileContentH1">{fullName}</h1>
          <p className="patientProfileContentP">{title}</p>
          <div className="patientSpecific">
            <div className="patientProfileSpecific patientInfoGrid">
              <p className="patientProfileSpecificTitle">Info</p>
              <p className="patientProfileSpecificContent">{info}</p>
            </div>
            <div className="patientProfileSpecific patientContactGrid">
              <p className="patientProfileSpecificTitle">Contact</p>
              <p className="patientProfileSpecificContent">{phoneNumber}</p>
              <p className="patientProfileSpecificContent">{email}</p>
            </div>
            <div className="patientProfileSpecific patientAddressGrid">
              <p className="patientProfileSpecificTitle">Address</p>
              <p className="patientProfileSpecificContent">{address}</p>
            </div>
            <div className="patientProfileSpecific patientWebsiteGrid">
              <p className="patientProfileSpecificTitle">Website</p>
              <p className="patientProfileSpecificContent">{website}</p>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="patientProfileCard patientReviewsCard">
        <p className="bottonCardTitle">Reviews</p>
        {reviews.map((review) => {
          return (
            <div className="patientReview">
              <p className="patientReviewerName">{review.customerName}</p>
              <StarRatings
                rating={review.rating}
                starRatedColor="#2D3A64"
                starDimension="20px"
                starSpacing="1px"
              />
              <p className="patientReviewerComment">{review.comment}</p>
            </div>
          );
        })}
      </div>*/}
      {/*<div className="patientProfileCard patientServicesCard">
        <div className="header">
          <p className="bottonCardTitle">Services</p>
          <IconButton
            sx={{
              color: "#2D3A64",
            }}
            onClick={() => setServiceModalOpen(true)}
          >
            <input hidden accept="image/*" type="file" />
            <EditIcon />
          </IconButton>
          
        </div>
        <div className="serviceModalContainer">
          {serviceModalOpen && <Modal setOpen={setServiceModalOpen} title="Services" ask1="Service Name" ask2="Description" />}
        </div>
        
        {services.list.map((service) => {
          return (
            <div className="patientServices">
              <p className="patientServiceName">{service.name}:</p>
              <p className="patientServiceDescription">{service.description}</p>
            </div>
          );
        })}
      </div>*/}
      {/*<div className="patientProfileCard patientOfficesCard">
        <div className="header">
          <p className="bottonCardTitle">Offices</p>
          <IconButton
            sx={{
              color: "#2D3A64",
            }}
            onClick={() => setOfficeModalOpen(true)}
          >
            <input hidden accept="image/*" type="file" />
            <EditIcon />
          </IconButton>
        </div>
        <div className="officeModalContainer">
          {officeModalOpen && <Modal setOpen={setOfficeModalOpen} title="Offices" ask1="Office Name" ask2="Address" />}
        </div>
        {offices.list.map((office) => {
          return (
            <div className="patientOffices">
              <p className="patientOfficeName">{office.name}</p>
              <p className="patientOfficeAddress">{office.address}</p>
            </div>
          );
        })}
      </div>*/}
    </div>
  );
}
