import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import card from "../../assets/greencard.svg";

const Carddiv = styled.div`
  background-image: url(${card});
  background-repeat: no-repeat;
  height: 25vmax;
  width: 30vmax;
  text-align: center;
  cursor: pointer;
  /* width:10px; */
  & p {
    font-size: 13px;
    color: #000000;
    font-weight: 500;
    font-family: Poppins;
    /* text-align:center; */
    width: 13vmax;
    text-align: justify;
    padding: 20% 0 0 24%;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 27vmax;
    width: 28vmax;
    & p {
      font-size: 11px;
      padding-top: 34%;
      padding-left: 27%;
    }
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 30vmax;
    width: 27vmax;
    & p {
      font-size: 13px;
      padding-top: 27%;
      padding-left: 27%;
    }
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* /* height:30vmax;
       width:27vmax; */
    & p {
      font-size: 14px;
      padding-top: 22%;
      padding-left: 29%;
    }
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* /* height:30vmax;
       width:27vmax; */
    & p {
      font-size: 14px;
      padding-top: 20%;
      padding-left: 29%;
    }
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    & p {
      font-size: 15px;
      padding-top: 16%;
      padding-left: 15%;
    }
  }
`;
const Maindiv = styled.div`
  /* background-color:red; */
  justify-content: space-between;
  padding: 2% 3% 0 3%;
  display: flex;
  margin-top: 4vmax; ;
`;
const Reviews = styled.p`
  font-size: 27px;
  font-weight: 700;
  font-family: Poppins;
  color: #145843;
  text-align: center;
`;
const Testimonialcard = () => {
  const navigate = useNavigate();

  const clicks = () => {
    navigate("/testimonial");
  };
  return (
    <>
      <Reviews>CUSTOMER REVIEWS</Reviews>
      <Maindiv>
        <Carddiv onClick={clicks}>
          <p>
            {" "}
            In in diam morbi porta ac ante sollicitudin nulla. Malesuada netus
            purus maecenas id molestie ut. Eros magnis lacus, aenean ac, nulla.
          </p>
        </Carddiv>
        <Carddiv onClick={clicks}>
          <p>
            {" "}
            In in diam morbi porta ac ante sollicitudin nulla. Malesuada netus
            purus maecenas id molestie ut. Eros magnis lacus, aenean ac, nulla.
          </p>
        </Carddiv>
        <Carddiv onClick={clicks}>
          <p>
            {" "}
            In in diam morbi porta ac ante sollicitudin nulla. Malesuada netus
            purus maecenas id molestie ut. Eros magnis lacus, aenean ac, nulla.
          </p>
        </Carddiv>
      </Maindiv>
    </>
  );
};

export default Testimonialcard;
