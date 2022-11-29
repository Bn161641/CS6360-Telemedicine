import "./DoctorProfile.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

export default function DoctorProfile() {
  const fullName = useSelector((state) => state.doctorInfo.name);
  const info = useSelector((state) => state.doctorInfo.info);
  const title = useSelector((state) => state.doctorInfo.title);
  const phoneNumber = useSelector((state) => state.doctorInfo.phoneNumber);
  const email = useSelector((state) => state.doctorInfo.email);
  const address = useSelector((state) => state.doctorInfo.address);
  const website = useSelector((state) => state.doctorInfo.website);
  const reviews = useSelector((state) => state.doctorInfo.reviews);
  const services = useSelector((state) => state.doctorInfo.services);
  const offices = useSelector((state) => state.doctorInfo.offices);

  return (
    <div className="doctorProfileGrid">
      <div className="doctorProfileCard doctorInfoCard">
        <img
          className="doctorProfile"
          alt="profile"
          src={require("../asset/femalDoctor.jpg")}
        />
        <div className="doctorProfileContent">
          <h1 className="doctorProfileContentH1">{fullName}</h1>
          <p className="doctorProfileContentP">{title}</p>
          <div className="doctorSpecific">
            <div className="doctorProfileSpecific doctorInfoGrid">
              <p className="doctorProfileSpecificTitle">Info</p>
              <p className="doctorProfileSpecificContent">{info}</p>
            </div>
            <div className="doctorProfileSpecific doctorContactGrid">
              <p className="doctorProfileSpecificTitle">Contact</p>
              <p className="doctorProfileSpecificContent">{phoneNumber}</p>
              <p className="doctorProfileSpecificContent">{email}</p>
            </div>
            <div className="doctorProfileSpecific doctorAddressGrid">
              <p className="doctorProfileSpecificTitle">Address</p>
              <p className="doctorProfileSpecificContent">{address}</p>
            </div>
            <div className="doctorProfileSpecific doctorWebsiteGrid">
              <p className="doctorProfileSpecificTitle">Website</p>
              <p className="doctorProfileSpecificContent">{website}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="doctorProfileCard doctorReviewsCard">
        <p className="bottonCardTitle">Reviews</p>
        {reviews.map((review) => {
          return (
            <div className="doctorReview">
              <p className="doctorReviewerName">{review.customerName}</p>
              <StarRatings
                rating={review.rating}
                starRatedColor="#2D3A64"
                starDimension="20px"
                starSpacing="1px"
              />
              <p className="doctorReviewerComment">{review.comment}</p>
            </div>
          );
        })}
      </div>
      <div className="doctorProfileCard doctorServicesCard">
        <p className="bottonCardTitle">Services</p>
        {services.list.map((service) => {
          return (
            <div className="doctorServices">
              <p className="doctorServiceName">{service.name}:</p>
              <p className="doctorServiceDescription">{service.description}</p>
            </div>
          );
        })}
      </div>
      <div className="doctorProfileCard doctorOfficesCard">
        <p className="bottonCardTitle">Offices</p>
        {offices.list.map((office) => {
          return (
            <div className="doctorOffices">
              <p className="doctorOfficeName">{office.name}</p>
              <p className="doctorOfficeAddress">{office.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
