import React, { useEffect } from "react";
import styled from "styled-components";
import Line from "../../assets/line1.png";
import FerryCard from "./FerryCard";
import bg from "../../assets/travelheader.png";
import Footer from "../Home/Footer";
import BannerInput from "../cab/BannerInput";

const MainContainer = styled.div`
  display: flex;
  gap: 4vmax;
  margin-top: 5vmax;
`;

const CheckBoxWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2vmax;
  margin-left: 3vmax;
  margin-top: 6vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    display: none;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: none;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 2vmax;
`;
const StyledCheckBox = styled.input`
  height: 1.2vmax;
  width: 1.5vmax;
  border: 3px solid #000000;
  border-radius: 5px;
`;
const MorningText = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;
const TimingText = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;

const StyledHeading = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  color: #145843;
  margin-left: 25%;
`;
const FerryMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 3vmax;
`;

const LineImage = styled.img`
  height: auto;
  margin-top: 10vh;
  @media (min-width: 320px) and (max-width: 375px) {
    display: none;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: none;
  }
`;

const StyledHeader = styled.div``;
const HeaderImage = styled.img`
  width: 100%;
  height: 34vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 160px;
    width: 150%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 160px;
    width: 170%;
  }
`;

const DestinationWrapper = styled.div`
  width: 100%;
  background-color: #145843;
  display: flex;
  justify-content: space-evenly;
  height: 6.5vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 150vw;
    display: grid;
    height: 80vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 170vw;
    display: grid;
    height: 90vh;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    height: 8.5vmax;
  }
`;

const GreenWrapper = styled.div`
  position: absolute;
  margin-top: -2vmax;
  width: 100%;
`;

// different sections->
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 5vmax;
  margin-top: 1vmax;
  margin-left: 5vmax;
  margin-right: 5vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 15vh;
    gap: 30px;
    text-align: center;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 15vh;
    gap: 30px;
    text-align: center;
    margin-top: 6vh;
  }
`;
const FormText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: normal;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1.3rem;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 2rem;
  }
`;

const FormContent = styled.div`
  background: rgba(13, 162, 116, 0.8);
  width: 14vmax;
  height: 2vmax;
  color: white;
  border-radius: 5px;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 90vw;
    height: 20vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 90vw;
    height: 20vh;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    height: 8.5vmax;
  }
`;
const FormContentText = styled.p`
  margin-left: 12px;
  margin-top: 5px;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1.5rem;
    margin-left: -3px;
    margin-top: 6px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 2rem;
    margin-left: -3px;
    margin-top: 15px;
  }
`;

const FerryLists = () => {
  return (
    <>
      <StyledHeader>
        <HeaderImage src={bg} />
      </StyledHeader>
      <BannerInput />
      <MainContainer>
        <CheckBoxWrapperMain>
          <TimingText>Timing:</TimingText>
          <CheckBoxWrapper>
            <StyledCheckBox type="checkbox" />
            <MorningText>Morning to Evening</MorningText>
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <StyledCheckBox type="checkbox" />
            <MorningText>Evening to Morning</MorningText>
          </CheckBoxWrapper>
        </CheckBoxWrapperMain>
        <LineImage src={Line} />
        <FerryMainWrapper>
          <StyledHeading>FERRY</StyledHeading>

          <FerryCard />
        </FerryMainWrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

export default FerryLists;
