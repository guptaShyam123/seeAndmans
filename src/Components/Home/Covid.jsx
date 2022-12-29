import React from "react";
import styled from "styled-components";

const Maindiv = styled.div`
  /* margin-top:100vh; */
  background-color: #b0eea6;
  height: 9vmax;
  justify-content: space-around;
  margin: 6vh 2vw;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 11vmax;
    justify-content: space-around;
    width: 75vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 10vmax;
    justify-content: space-around;
    width: 75vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 10vmax;
    justify-content: space-around;
    width: 75vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 9vmax;
    justify-content: space-around;
    width: 75vmax;
  }
`;
const Para = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  padding-top: 1vmax;
  font-size: 18px;
`;
const Para1 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  padding-top: 0.5vmax;
`;
const Button = styled.button`
  background-color: #036f00;
  color: #ffffff;
  font-size: 1vmax;
  height: 2vmax;
  width: 8vmax;
  border: none;
  margin-top: 1.5vmax;
`;
const Covid = () => {
  return (
    <>
      <center>
        <Maindiv>
          <Para>Latest updates on COVID-19 safety regulations & guidlines</Para>
          <Para1>
            learn about the precautionary measures to be taken by travellers to
            ensure safe vacation
          </Para1>
          <Button style={{ cursor: "pointer" }}>Read More</Button>
        </Maindiv>
      </center>
    </>
  );
};

export default Covid;
