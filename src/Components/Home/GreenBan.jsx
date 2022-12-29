import React from "react";

import styled from "styled-components";
import restro from "../../assets/hotelstar.png";
import cabs from "../../assets/cab.png";
import ferries from "../../assets/ferries.png";
import cruise from "../../assets/cruise.png";
import water from "../../assets/water.png";
import greencab from "../../assets/greencab.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./greenban.css";
import greenferry from "../../assets/greenferry.png";
import greencruise from "../../assets/greencruise.png";
import hotel from "../../assets/hotel.png";
import whitecruise from "../../assets/whitecruise.png";
import { style } from "@mui/system";
import reactSelect from "react-select";

const Maindiv = styled.div`
  height: 8vmax;
  width: 70vmax;
  background: rgba(20, 88, 67, 0.2);
  backdrop-filter: blur(84px);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vmax;
  margin-left: 14vmax;
  margin-top: 14vmax;
  position: absolute;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 85%;
    gap: 6vmax;
    height: 9vmax;
    display: none;
  }
`;
const Hotels = styled.div`
  display: grid;
  gap: 1vmax;
`;

const Cabs = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Ferries = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Cruise = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Water = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Img1 = styled.img`
  height: 3vmax;
  width: 3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Img2 = styled.img`
  height: 3vmax;
  width: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Img3 = styled.img`
  height: 3vmax;
  width: 3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Img4 = styled.img`
  height: 3vmax;
  width: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Img5 = styled.img`
  height: 3vmax;
  width: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Para = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  margin-left: -0.3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  margin-left: -0.6vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para3 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  margin-left: -1.9vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para4 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  margin-left: -0.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const GreenBan = () => {
  return (
    <>
      <center>
        <Maindiv>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Hotels>
              <Img1 src={restro} />

              <Para style={{ color: "#31FFC1" }}>Hotels</Para>
            </Hotels>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/cabs">
            <Cabs>
              <Img2 src={cabs} />

              <Para1>Cabs</Para1>
            </Cabs>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/ferry">
            {" "}
            <Ferries>
              <Img3 src={ferries} />

              <Para2>Ferries</Para2>
            </Ferries>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/cruise">
            {" "}
            <Cruise>
              <Img4 src={whitecruise} />

              <Para3>Tour Packages</Para3>
            </Cruise>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/water">
            {" "}
            <Water>
              <Img5 src={water} />
              <Para4>Activities</Para4>
            </Water>
          </Link>
        </Maindiv>
      </center>
    </>
  );
};

export default GreenBan;
