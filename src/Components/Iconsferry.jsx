import React from "react";
import styled from "styled-components";
import img1 from "../assets/ferryicon1.png";
import img2 from "../assets/ferryicon2.png";
import img3 from "../assets/ferryicon3.png";
import img4 from "../assets/ferryicon4.png";
import img5 from "../assets/ferryicon5.png";

const Maindiv = styled.div`
  display: flex;
  justify-content: space-around;
  /* background:red; */
  margin-top: 4vmax;
  align-items: center;
`;
const Firstdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vmax;
`;
const First = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: fit-content;
  width: fit-content;
`;
const Imgs = styled.img`
  height: fit-content;
  width: fit-content;
  /* align-items: center; */

  /* justify-content: center; */
`;
const Search = styled.p`
  font-weight: 800;
  color: #000000;
  font-family: Poppins;
  font-size: 20px;
`;
const Compare = styled.p`
  font-weight: 500;
  color: #000000;
  font-family: Poppins;
  font-size: 17px;
`;
const Large = styled.p`
  font-weight: 500;
  color: #000000;
  font-family: Poppins;
  font-size: 17px;
`;
const Selection = styled.p`
  font-weight: 500;
  color: #000000;
  font-family: Poppins;
  font-size: 17px;
`;
// const Compare = styled.p`

// `

const Process = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6vmax;
  text-align: center;
  margin-top: 3vmax;
  color: #145843;
`;

const Iconsferry = () => {
  return (
    <>
      <Process>Ferry Booking Process</Process>
      <Maindiv>
        <Firstdiv>
          <Img src={img1} />
          <First>
            <Search>Search</Search>
            <Compare>And Compare Ferries</Compare>
            <Large>From a large</Large>
            <Selection>Selection</Selection>
          </First>
        </Firstdiv>
        <Imgs src={img5} />
        <Firstdiv>
          <Img src={img2} />
          <First>
            <Search>Search</Search>
            <Compare>And Compare Ferries</Compare>
            <Large>From a large</Large>
            <Selection>Selection</Selection>
          </First>
        </Firstdiv>
        <Imgs src={img5} />
        <Firstdiv>
          <Img src={img3} />
          <First>
            <Search>Search</Search>
            <Compare>And Compare Ferries</Compare>
            <Large>From a large</Large>
            <Selection>Selection</Selection>
          </First>
        </Firstdiv>
        <Imgs src={img5} />
        <Firstdiv>
          <Img src={img4} />
          <First>
            <Search>Search</Search>
            <Compare>And Compare Ferries</Compare>
            <Large>From a large</Large>
            <Selection>Selection</Selection>
          </First>
        </Firstdiv>
        <Imgs src={img5} />
      </Maindiv>
    </>
  );
};

export default Iconsferry;
