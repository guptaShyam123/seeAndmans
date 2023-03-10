import React from "react";
import Line from "../../assets/line1.png";
import { RiEdit2Fill } from "react-icons/ri";
import "./EditFerryTravelDetail.scss";
import invest from "../../assets/investment.png";
import styled from "styled-components";
import Footer from "../Home/Footer";
import BannerInput from "../cab/BannerInput";

const EditFerryTravelDetail = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [fullNameIsDisabled, setFullNameIsDisabled] = React.useState(true);
  const [emailIsDsiabled, setEmailIsDisabled] = React.useState(true);
  const [numberIsDisabled, setNumberIsDisabled] = React.useState(true);
  const [age, setAge] = React.useState("");
  const handleEdit = () => {
    setIsDisabled(!isDisabled);
  };
  const handleEditFullName = () => {
    setFullNameIsDisabled(!fullNameIsDisabled);
  };
  const handleEditEmail = () => {
    setEmailIsDisabled(!emailIsDsiabled);
  };
  const handleEditNumber = () => {
    setNumberIsDisabled(!numberIsDisabled);
  };
  const nationList = [
    "India",
    "Australia",
    "China",
    "Pakistan",
    "Sri Lanka",
    "UAE",
  ];

  const Img = styled.img`
    height: 35vmax;
    width: 100%;
    object-fit: cover;
  `;

  const genderList = ["Male", "Female", "Other"];
  return (
    <>
      <Img src={invest} />
      <BannerInput />
      <div className="main-container">
        <div className="summary-wrapper">
          <p className="summary-heading">Trip Summary:</p>
          <p className="summary-title">Trip - 1:</p>
          <p className="location">PORTBLAIR → HAVELOCK</p>
          <div className="date-wrapper">
            <p className="date-text">Date:</p>
            <p className="date">10 Sep 2022</p>
          </div>
          <div className="time-wrapper">
            <p className="time-text">Time:</p>
            <p className="time">7:00 AM - 9:15 AM ( 135 Minutes )</p>
          </div>
          <div className="ferry-name-wrapper">
            <p className="ferry-text">Ferry:</p>
            <p className="ferry-name">Green Ocean 1 ( Economy Class )</p>
          </div>
          <div className="total-fare-wrapper">
            <p className="total-text">Total Fare:</p>
            <p className="total">0 x Adult($1,100) = $0</p>
          </div>
        </div>
        <img src={Line} alt="line image" className="line-image" />
        <form>
          <div className="detail-wrapper">
            <p className="ferry-heading">Ferry</p>
            <p className="add-traveller-text">Review Booking</p>
            <div className="text-icon-wrapper">
              <p className="adult-heading">Adult 1</p>
              <RiEdit2Fill
                onClick={handleEdit}
                style={{ cursor: "pointer" }}
                className="edit-icon"
              />
            </div>
            {/* form div here */}
            <div className="form-wrapper-1">
              <div className="title-wrapper">
                <p className="title-text">Title</p>
                <select className="select-title">
                  <option>Select</option>
                  <option>Mr</option>
                  <option>Mrs</option>
                </select>
              </div>
              <div className="full-name-wrapper">
                <p className="full-name-text">Full Name</p>
                <input className="full-name-input" placeholder="Full Name" />
              </div>

              <div className="gender-wrapper">
                <p className="gender-text">Gender</p>
                <select disabled={isDisabled} className="select-gender">
                  <option>Select</option>
                  {genderList.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* form div here */}
            <div className="fomr-wrapper-2">
              <div className="age-wrapper">
                <p className="age-text">Age</p>
                <input
                  defaultValue={age}
                  // disabled={isDisabled}
                  type="text"
                  className="age-input"
                  placeholder="Age"
                />
              </div>
              <div className="nationality-wrapper">
                <p className="natioanality-text">Nationality</p>
                <select className="select-natioanality">
                  <option>Select</option>
                  {nationList.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/*  billing detail form  */}
            <div className="billing-detail-wrapper">
              <p className="billing-text">Billing Details</p>
              <div className="billing-form-wrapper">
                <div className="edit-full-name-wrapper">
                  <div className="full-name-text-icon">
                    <p className="full-name-text">Full Name</p>
                    <RiEdit2Fill
                      onClick={handleEditFullName}
                      className="edit-full-name-icon"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <input
                    type="text"
                    className="full-name-edit-input"
                    placeholder="Full Name"
                  />
                </div>
                <div className="edit-full-name-wrapper">
                  <div className="full-name-text-icon">
                    <p className="full-name-text">E-Mail</p>
                    <RiEdit2Fill
                      onClick={handleEditEmail}
                      className="edit-full-name-icon"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <input
                    type="text"
                    className="full-name-edit-input"
                    placeholder="Email"
                  />
                </div>
                <div className="edit-full-name-wrapper">
                  <div className="full-name-text-icon">
                    <p className="full-name-text">Mobile Number</p>
                    <RiEdit2Fill
                      style={{ cursor: "pointer" }}
                      onClick={handleEditNumber}
                      className="edit-number-icon"
                    />
                  </div>
                  <input
                    type="text"
                    className="full-name-edit-input"
                    placeholder="Number"
                  />
                </div>
              </div>
            </div>
            {/* travel summary detail */}
            <div className="summary-detail-wrapper">
              <div className="travel-detail-text">
                <p className="travel-text">
                  Trip 1 [PortBlair → Havelock] Green Ocean 1 7:00 AM | 08 Sep
                  2022
                </p>
              </div>
              <div className="passanger-detail">
                <div className="passanger-wrapper">
                  <p className="passanger-text">Passengers</p>
                  <p className="travel-text">Adult(1 Person)</p>
                </div>
                <div className="passanger-wrapper">
                  <p className="passanger-text">Price</p>
                  <p className="travel-text">$250</p>
                </div>
                <div className="passanger-wrapper">
                  <p className="passanger-text">Convenience Fee</p>
                  <p className="travel-text">$0</p>
                </div>
                <div className="passanger-wrapper">
                  <p className="passanger-text">Sum</p>
                  <p className="travel-text">$250</p>
                </div>
              </div>
            </div>
            <hr style={{ marginTop: "4vmax" }} />
            <div className="payment-process-wrapper">
              <div className="grand-total-wrapper">
                <p className="grand-text">Grand Total</p>
                <p className="grand-text">$250</p>
              </div>

              <hr />
              <div className="pay-now-wrapper">
                <p className="grand-text">Pay Now</p>
                <p className="grand-text">$50</p>
              </div>
              <hr />
              <div className="payment-confirmation-wrapper">
                <p className="grand-text">Pay After Confirmation</p>
                <p className="grand-text">$200</p>
              </div>
            </div>
            {/* Pay advance button */}
            <button type="submit" className="button-proceed">
              Pay Advance
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default EditFerryTravelDetail;
