import React from "react";
import styled from "styled-components";
import water from "../../assets/sightseeing.png";
import arrow from "../../assets/mainarrow.svg";
import arrow1 from "../../assets/rightarrow11.svg";
import s1 from "../../assets/small1.png";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
import squba1 from "../../assets/squba1.png";
import smallarrow from "../../assets/smallarrow.svg";
import { Sightcard } from "./Sightcard";
import line from "../../assets/Line4.png";
import suba1 from "../../assets/suba1.png";
import icon1 from "../../assets/touricon.svg";
import icon2 from "../../assets/scubaicon.svg";
import icon3 from "../../assets/reicon.svg";
import icon4 from "../../assets/certiicons.svg";
import icon5 from "../../assets/cooricon.svg";
import iland from "../../assets/islandicon.svg";
import ware from "../../assets/ware.svg";
import site from "../../assets/siteicon.svg";
import surf from "../../assets/surf.svg";
import kids from "../../assets/kids.svg";
import rides from "../../assets/rides.svg";
import location from "../../assets/greenlocation.svg";
import star from "../../assets/star.png";
import { secondsight } from "./secondsight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Home/Footer";
import { thirdsight } from "./thirdsight";
import { fourthsight } from "./fourthsight";
import { fifthsight } from "./fifthsight";
import "../Wateractivity/ferrys.css";
import reactSelect from "react-select";
import { useNavigate, Link } from "react-router-dom";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { baseURL } from "../../Components/Apibaseurl";

const Mainimg = styled.div`
  background: url(${water});
  background-size: cover;
  height: 35em;

  background-repeat: no-repeat;
  text-align: center;
`;
const Bigtext = styled.p`
  padding-top: 9vmax;
  font-size: 54px;
  font-family: Poppins;
  color: #ffffff;
  width: 50vmax;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 3vmax;
  font-family: Poppins;
  font-size: 23px;
  font-weight: 700;
  color: #145843;
  text-transform: uppercase;
`;
const Text1 = styled.p`
  color: #000000;
  font-weight: 500;
  font-family: Poppins;
  margin-top: 2vmax;
  font-size: 13px;
  text-align: justify;

  width: 92vmax;

  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 10px;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 15px;
    width: 95%;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 15px;
    width: 95%;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 17px;
    width: 93vmax;
  }
`;
const Read = styled.p`
  text-align: center;
  margin-top: 0.7vmax;
  font-family: Poppins;
  font-size: 13px;
  color: #056c73;

  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 20px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 22px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 20px;
  }
`;
const Boxdiv = styled.div`
  margin-top: 2vmax;
  justify-content: space-around;
  width: 100%;
  display: flex;
  @media (min-width: 993px) and (max-width: 1025px) {
    justify-content: space-evenly;
  }
`;
const Arro = styled.img`
  margin-top: 0.5;
  @media (min-width: 993px) and (max-width: 1025px) {
    height: 4vmax;
    width: 3.2vmax;
  }
`;
const Firstbox = styled.div`
  display: flex;
  gap: 1vmax;

  background: rgba(92, 203, 160, 0.6);
  border-radius: 50px;
  height: 3vmax;
  width: 15vmax;

  @media (min-width: 993px) and (max-width: 1025px) {
    width: 17.5vmax;
    height: 4vmax;
  }
`;
const Imgs4 = styled.img`
  height: 3vmax;
  width: 3vmax;

  @media (min-width: 993px) and (max-width: 1025px) {
    height: 4vmax;
    width: 4vmax;
    object-fit: cover;
  }
`;
const Dinner = styled.p`
  color: #145843;
  font-family: Poppins;
  font-size: 13px;
  padding-top: 15px;
  padding-left: 14px;
  font-weight: 600;
  @media (min-width: 1367px) and (max-width: 1460px) {
    font-size: 15px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 17px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 19px;
  }
`;
const Carddiv = styled.div`
  margin-top: 4vmax;
  width: 25%;
  height: 15vh;
  align-items: stretch;
  /* justify-content: space-between;  */

  /* height: 10vmax; */
  /* justify-content: space-around; */
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;

  /* padding: 5% 0; */
`;
const Squ = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* height:20vmax; */
  /* background-size: ; */
  /* display: none; */
`;
const Imagedivs = styled.div`
  width: 100%;

  height: 19vmax;
  /* background-size:contain; */
`;

const Whitedivs = styled.div`
  background: #ffffff;
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 2% 0;
  /* height:4vmax; */
  width: 100%;
`;
const Diving = styled.p`
  font-family: "Poppins";
  text-align: left;
  padding: 0 5%;
  font-style: normal;
  font-weight: 600;
  color: #000000;
  font-size: 16px;
  /* margin-right: 10vmax; */

  padding-top: 0.3vmax;
  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 13px;
  }
`;
const Textdivs = styled.div`
  display: flex;
  margin-top: 0.7vmax;
  padding: 0 5%;
  justify-content: space-between;
`;
const Rupee = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: black;

  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 10px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    font-size: 15px;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 17px;
  }
  /* margin-left:1.3vmax; */
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 18px;
  }
`;
const Smallar = styled.img`
  margin-left: 9vmax;
`;

const Maindiv = styled.div`
  display: flex;

  gap: 15vmax 10vmax;
  width: 100%;
  padding: 0 2%;
  /* padding: 0 5vmax; */
  /* height:0; */
  /* margin:3vmax; */
  /* margin-left:1vmax;; */

  /* align-items: flex-start; */
  justify-content: space-between;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-direction: row;
  /* -webkit-flex-flow: row wrap; */
  /* flex-flow: row wrap; */
  /* -webkit-flex-flow: ; */
`;
const Line = styled.img`
  height: 0.1vmax;
  width: 95%;
  padding: 2vmax 2vmax;
  margin-top: 17vmax;
`;
const Suba = styled.p`
  text-align: center;
  margin-top: 2vmax;
  font-size: 20px;
  font-weight: 700;
  color: #145843;
  font-family: Poppins;
`;
const Slidercard = styled.div`
  margin-top: 2vmax;
  /* background-color:red; */
  padding: 2vmax 2vmax;
  /* width:50%; */
`;

const Scubadiv = styled.div`
  height: 16vmax;

  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);

  @media (min-width: 993px) and (max-width: 1025px) {
    height: 20.6vmax;
  }
`;
const Subaimg = styled.img`
  &.hover {
  }
  height: 92%;
 width:23.3vw;
  object-fit: cover;
  transition: all ease-in-out 0.4s;
`;
const Innerwhite = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  height: 18.7vmax;
  width: 23.4vmax;
  margin-top: -1.3vmax;

  @media (min-width: 993px) and (max-width: 1025px) {
    width: 30vmax;
    height: 26vmax;
    /* background:red; */
    margin-top: -2vmax;
  }
  @media (min-width: 1026px) and (max-width: 1285px) {
    height: 22vmax;
    /* background:red; */
  }
  /* @media (min-width:1280px) and (max-width:1366px){
  height:21vmax;
} */

  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 21.8vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 21vmax;
  }
`;
const Icondiv = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
`;
const Icondiv4 = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;

  @media (min-width: 993px) and (max-width: 1025px) {
    width: 94%;
    /* background:pink; */
    justify-content: space-between;
    padding: 3% 3% 0 4%;
  }
`;
const Icon1 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Icon2 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Icon3 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Icon4 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Icon5 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Icon55 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 0 4% 0 0%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    margin: 0 4% 0 0;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    margin: 0 4% 0 0;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin: 0 4% 0 0%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 0 4% 0 0;
  }
`;

const Icon11 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 0 0 0 -2%;
  }
`;
const Icon22 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 0 0 0 -2%;
  }
`;
const Icon33 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 0 0 0 -1%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    margin: 0 0 0 -1%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    margin: 0 0 0 -1%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin: 0 0 0 -1%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 0 0 0 -1%;
  }
`;
const Icon44 = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  @media (min-width: 1025px) and (max-width: 1285px) {
  }
`;
const Icon5s = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  padding: 0 0 0 5%;
`;
const Textinner = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
  /* background-color: pink; */
`;
const Textinnerf = styled.div`
  background-color: pink;
`;
const Textinners = styled.div`
  /* justify-content: space-around; */

  @media (min-width: 1025px) and (max-width: 1366px) {
    justify-content: space-around;
  }
`;
const T1 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 12px;
  }
`;
const T2 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 12px;
  }
`;
const T3 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 12px;
  }
`;
const T4 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 12px;
  }
`;
const T5 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 12px;
  }
`;
const North = styled.p`
  font-size: 15px;
  color: #145843;
  font-family: Poppins;
  font-weight: 600;
  /* margin-top:-2vmax; */
  padding: 1vmax 1vmax;

  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 13px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 14px;
  }
`;

const Norths = styled.p`
  font-size: 15px;
  color: #145843;
  font-family: Poppins;
  font-weight: 600;
  /* color:pink; */
  padding: 3% 0% 0 4%;
`;
const Northf = styled.p`
  font-size: 15px;
  color: #145843;
  font-family: Poppins;
  font-weight: 600;
  /* color:red; */
  padding: 3% 0% 0 4%;
`;
const Portdiv = styled.div`
  padding: 0.1vmax 0.9vmax;
  display: flex;
  gap: 1vmax;
  margin-top: -0.5vmax;
`;
const Portdivf = styled.div`
  /* padding:0.1vmax 0.9vmax; */
  display: flex;
  gap: 1vmax;
  /* margin-top:-0.5vmax; */
  /* margin-top: 1vmax; */
  margin: 0.6vmax 2% 0 5%;
`;
const Portdivs = styled.div`
  padding: 3% 0% 0 4%;
  display: flex;
  gap: 1vmax;
  /* margin-top:-0.5vmax; */
  /* background:red; */
`;
const Greenimg = styled.img`
  height: 1vmax;
  width: 1vmax;
  margin-top: 0.2vmax;
`;
const Port = styled.p`
  font-size: 13px;
  font-family: Poppins;
  color: #145843;
  font-weight: 600;
`;
const Lorem = styled.p`
  font-size: 10px;
  font-family: Poppins;
  color: #000000;
  font-weight: 500;
  padding: 1vmax 1vmax;
  text-align: justify;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 12.6px;
  }
`;
const Lorems = styled.p`
  font-size: 10px;
  font-family: Poppins;
  color: #000000;
  font-weight: 500;
  padding: 1vmax 1vmax;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 12.6px;
  }
`;
const Star = styled.div`
  display: flex;
  padding: 1vmax 1vmax;
  justify-content: space-between;
  margin-top: -1vmax;
`;
const Staricons = styled.div`
  display: flex;
  gap: 0.5vmax;
`;
const Staricon = styled.img`
  height: fit-content;
  width: 1vmax;
`;
const Dollar = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #145843;
  margin-top: -0.2vmax;
`;
const Button = styled.button`
  background: #ffffff;

  border-radius: 1px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  width: 7vmax;
  border: 1px solid #145843;
  height: 2vmax;
  font-family: Poppins;
  margin-top: -0.7vmax;
  cursor: pointer;
  @media (min-width: 993px) and (max-width: 1025px) {
    height: 2.9vmax;
    width: 10vmax;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 8vmax;
    height: 2.6vmax;
  }
`;
const Biggest = styled.div`
  display: flex;

  width: 105%;
  margin-left: -4vmax;
  margin-top: -2vmax;
  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 103vmax !important;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    width: 100vmax;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    width: 104vmax !important;
  }
  @media (min-width: 1641p) and (max-width: 1740px) {
    width: 104vmax !important;
  }
`;
const Buttondiv = styled.div`
  display: flex;

  padding: 1vmax;

  justify-content: flex-end;

  gap: 1vmax;
  margin-left: -2vmax;
`;
const View = styled.p`
  font-size: 14px;
  color: #000000;
  font-family: poppins;
  font-weight: 600;
  padding-top: 0.3vmax;
`;
const Arros = styled(BsArrowLeftSquare)`
  height: 2vmax;
  width: 2vmax;
  z-index: 9999;
`;
const Arros1 = styled(BsArrowRightSquare)`
  height: 2vmax;
  width: 2vmax;
  z-index: 9999;
`;
const Line1 = styled.img`
  width: 95%;
  padding: 2vmax 2vmax;
  height: 0.1vmax;
  margin-left: 0.5vmax;
`;
const Diiner = styled.p`
  text-align: center;
  margin-top: 2vmax;
  font-size: 20px;
  font-weight: 700;
  color: #145843;
  font-family: Poppins;
`;
const Sliderwrap = styled.div`
  .slick-slide {
    padding: 2vmax 2vmax !important;
    margin-top: -2vmax !important;
  }
  .slick-list {
    height: 40vmax !important;
  }
  @media (min-width: 993px) and (max-width: 1025px) {
    .slick-list {
      height: 53vmax !important;
    }
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    .slick-list {
      height: 46vmax !important;
      width: 104vmax !important;
    }
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    .slick-list {
      height: 43vmax !important;

      width: 103vmax !important;
    }
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    .slick-list {
      height: 43vmax !important;

      width: 103vmax !important;
    }
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    .slick-list {
      height: 43vmax !important;

      width: 103vmax !important;
    }
  }
`;
const Glass = styled.p`
  text-align: center;
  margin-top: 2vmax;
  font-size: 20px;
  font-weight: 700;
  color: #145843;
  font-family: Poppins;
`;
const Line2 = styled.img`
  width: 95%;
  padding: 2vmax 2vmax;
  height: 0.1vmax;
  margin-left: 0.5vmax;
`;
const Kaya = styled.p`
  text-align: center;
  margin-top: 2vmax;
  font-size: 20px;
  font-weight: 700;
  color: #145843;
  font-family: Poppins;
`;
const Line3 = styled.img`
  width: 95%;
  padding: 2vmax 2vmax;
  height: 0.1vmax;
  margin-left: 0.5vmax;
`;

const T6 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
`;
const T7 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
`;
const T8 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
`;
const T9 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
`;
const T10 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
`;
const Firstdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color:red; */
  width: 20%;
  margin-left: -4%;
  gap: 0.5vmax;
  @media (min-width: 993px) and (max-width: 1025px) {
    /* background:red; */
    width: fit-content;
    margin-left: 1px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background:red; */
    width: fit-content;
    margin-left: 1px;
  }
`;
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  rows: 1,
  dots: false,
  useCSS: true,

  draggable: true,
  swipeToSlide: true,
  touchMove: true,
  // padSlides: true,
  slide: "> div",
  touchThreshold: 100,

  speed: 500,
  // centerMode: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 421,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "50px",
      },
    },
  ],
};
const Sightseeingpage = () => {
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/get/sights`);
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  const clickme = () => {
    navigate("/wateractivity");
  };
  React.useEffect(() => {
    getdata();
  }, []);
  const navigate = useNavigate();

  const Handleclick = (path) => {
    navigate(path);
  };
  const customeSlider = React.useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <>
      <Mainimg>
        <center></center>
      </Mainimg>
      <Text>Sightseeing in Andaman Islands</Text>
      <center>
        <Text1>
          Massa risus ornare nunc phasellus dui. Dui tempus quis viverra risus.
          Pretium ut amet, quis porta dolor. Aliquam euismod pellentesque a,
          risus ut. Vestibulum tellus et accumsan, aliquam proin non. Risus non
          in rutrum nisi, duis tristique sed adipiscing in. Tincidunt placerat
          morbi lacus nibh fames. Porttitor sit elit at nulla donec malesuada
          consectetur faucibus integer. Sed imperdiet hac vitae arcu morbi
          tortor, in in. Condimentum sit pellentesque mattis eros, tincidunt id
          feugiat risus. Mauris dictum id nibh sapien scelerisque pharetra
          egestas gravida ultrices. Viverra placerat purus sit sapien, id et.
          Tincidunt blandit iaculis sit nunc tristique. Sed ipsum dignissim sed
          sed in ultricies. Mattis a morbi quis dolor.
        </Text1>
      </center>
      <Read>Read More</Read>

      <center>
        <Boxdiv>
          <Arro src={arrow} />
          <Firstbox>
            <Imgs4 src={s1} />
            <Dinner>Dinner On Cruise</Dinner>
          </Firstbox>
          <Firstbox>
            <Imgs4 src={s4} />
            <Dinner>Sea Walk</Dinner>
          </Firstbox>
          <Firstbox>
            <Imgs4 src={s3} />
            <Dinner>Scuba Diving</Dinner>
          </Firstbox>
          <Firstbox>
            <Imgs4 src={s2} />
            <Dinner>SemiSubmarine</Dinner>
          </Firstbox>
          <Arro src={arrow1} />
        </Boxdiv>
      </center>
      <center>
        <Maindiv>
          {datas?.sights?.map((item) => {
            return (
              <>
                <Carddiv className="card" style={{ cursor: "pointer" }}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/sightbook/${item._id}`}
                  >
                    <Card>
                      <Imagedivs>
                        <Squ src={item.image?.url} />
                      </Imagedivs>
                      <Whitedivs>
                        <Diving>{item.location}</Diving>
                        <Textdivs>
                          <Rupee>Starting at just ${item.price}</Rupee>
                          <Smallar src={smallarrow} />
                        </Textdivs>
                      </Whitedivs>
                    </Card>
                  </Link>
                </Carddiv>
              </>
            );
          })}
        </Maindiv>
      </center>

      <Line src={line} />
      <Suba>PORT BLAIR</Suba>
      <Buttondiv>
        <Arros src={arrow} onClick={() => gotoPrev()} />
        <View>View All</View>
        <Arros1 src={arrow1} onClick={() => gotoNext()} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider
            style={{ overflow: "hidden" }}
            {...settings}
            ref={customeSlider}
          >
            {datas?.sights?.map((i) => {
              return (
                <>
                <Link
                style={{ textDecoration: "none" }}
                to={`/sightbook/${i._id}`}
              >  <Slidercard className="card">
                    <Scubadiv>
                      <Subaimg src={i.image?.url} />
                    </Scubadiv>
                    <Innerwhite>
                      <Icondiv>
                        <Icon1 src={icon1} />
                        <Icon2 src={icon2} />
                        <Icon3 src={icon3} />
                        <Icon4 src={icon4} />
                        <Icon5 src={icon5} />
                      </Icondiv>
                      <Textinner>
                        <T1>Scuba Diving</T1>
                        <T2>Guide</T2>
                        <T3>Coordinator</T3>
                        <T4>Best Seller</T4>
                        <T5>Certificate</T5>
                      </Textinner>
                      <North>Scuba Diving in North Bay Island</North>
                      <Portdiv>
                        <Greenimg src={location} />
                        <Port>{i.location}</Port>
                      </Portdiv>
                      <Lorem>{i.desc}</Lorem>
                      <Star>
                        <Staricons>
                          <Staricon src={star} />
                          <Staricon src={star} />
                          <Staricon src={star} />
                        </Staricons>
                        <Dollar>{i.price}</Dollar>
                      </Star>
                      <center>
                        <Button style={{ cursor: "poniter" }} onClick={clickme}>
                          Book Now
                        </Button>
                      </center>
                    </Innerwhite>
                  </Slidercard>
                  </Link>
                </>
              );
            })}
          </Slider>
        </Biggest>
      </Sliderwrap>

      <Line1 src={line} />
      <Diiner>HAVELOCK (SWARAJ DWEEP)</Diiner>

      <Buttondiv>
        <Arros src={arrow} />
        <View>View All</View>
        <Arros1 src={arrow1} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider
            style={{ width: "100%", overflow: "hidden" }}
            {...settings}
            ref={customeSlider}
          >
            {datas?.sights?.map((i) => {
              return (
                <>
                <Link
                style={{ textDecoration: "none" }}
                to={`/sightbook/${i._id}`}
              > <Slidercard className="card">
                    <Scubadiv>
                      <Subaimg src={i.image?.url} />
                    </Scubadiv>
                    <Innerwhite>
                      <Icondiv>
                        <Icon1 src={iland} />
                        <Icon2 className="dinner" src={ware} />
                        <Icon3 className="fery" src={site} />
                        <Icon4 className="best" src={icon4} />
                        <Icon5 src={surf} />
                      </Icondiv>
                      <Textinner>
                        <T6>Island Tour</T6>
                        <T7>Dinner</T7>
                        <T8>Ferry</T8>
                        <T9>Best Seller</T9>
                        <T10> Sightseeing</T10>
                      </Textinner>
                      <North>Dinner Cruise with Live Music, Dinner & DJ</North>
                      <Portdiv>
                        <Greenimg src={location} />
                        <Port>{i.location}</Port>
                      </Portdiv>
                      <Lorem>{i.desc}</Lorem>
                      <Star>
                        <Staricons>
                          <Staricon src={star} />
                          <Staricon src={star} />
                          <Staricon src={star} />
                        </Staricons>
                        <Dollar>{i.dollar}</Dollar>
                      </Star>
                      <center>
                        <Button onClick={clickme}>Book Now</Button>
                      </center>
                    </Innerwhite>
                  </Slidercard>
                  </Link>
                </>
              );
            })}
          </Slider>
        </Biggest>
      </Sliderwrap>
      <Line2 src={line} />
      <Glass>NEIL (SHAEED DWEEP)</Glass>

      <Buttondiv>
        <Arros src={arrow} />
        <View>View All</View>
        <Arros1 src={arrow1} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider
            style={{ width: "100%", overflow: "hidden" }}
            {...settings}
            ref={customeSlider}
          >
            {datas?.sights?.map((i) => {
              return (
                <>
                <Link
                style={{ textDecoration: "none" }}
                to={`/sightbook/${i._id}`}
              >  <Slidercard className="card">
                    <Scubadiv>
                      <Subaimg src={i.image?.url} />
                    </Scubadiv>
                    <Innerwhite>
                      <Icondiv4>
                        <Firstdiv>
                          <Icon11 src={kids} />
                          <T1>Kids</T1>
                        </Firstdiv>
                        <Firstdiv>
                          <Icon22 src={icon1} />
                          <T2>Guide</T2>
                        </Firstdiv>
                        <Firstdiv>
                          <Icon33 src={site} />
                          <T3>Ferry</T3>
                        </Firstdiv>
                        <Firstdiv>
                          <Icon44 src={icon5} />
                          <T4>Best Seller</T4>
                        </Firstdiv>
                        <Firstdiv>
                          <Icon55 src={rides} />
                          <T5>Sightseeing</T5>
                        </Firstdiv>
                      </Icondiv4>
                      <Textinnerf></Textinnerf>
                      <Northf>Coral Safari Semisubmarine</Northf>
                      <Portdivf>
                        <Greenimg src={location} />
                        <Port>{i.location}</Port>
                      </Portdivf>
                      <Lorem>{i.desc}</Lorem>
                      <Star>
                        <Staricons>
                          <Staricon src={star} />
                          <Staricon src={star} />
                          <Staricon src={star} />
                        </Staricons>
                        <Dollar>{i.dollar}</Dollar>
                      </Star>
                      <center>
                        <Button onClick={clickme}>Book Now</Button>
                      </center>
                    </Innerwhite>
                  </Slidercard>
                  </Link>
                </>
              );
            })}
          </Slider>
        </Biggest>
      </Sliderwrap>

      <Line3 src={line} />
      <Kaya>KAYAKING</Kaya>

      <Buttondiv>
        <Arros src={arrow} />
        <View>View All</View>
        <Arros1 src={arrow1} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider
            style={{ width: "100%", overflow: "hidden" }}
            {...settings}
            ref={customeSlider}
          >
            {datas?.sights?.map((i) => {
              return (
                <>
                <Link
                style={{ textDecoration: "none" }}
                to={`/sightbook/${i._id}`}
              ><Slidercard className="card">
                    <Scubadiv>
                      <Subaimg src={i.image?.url} />
                    </Scubadiv>
                    <Innerwhite>
                      <Icondiv4>
                        <Firstdiv>
                          <Icon11 src={kids} />
                          <T1>Kids</T1>
                        </Firstdiv>
                        <Firstdiv>
                          <Icon22 src={icon1} />
                          <T2>Guide</T2>
                        </Firstdiv>
                        <Firstdiv>
                          <Icon33 src={site} />
                          <T3>Ferry</T3>
                        </Firstdiv>
                        <Firstdiv>
                          <Icon44 src={icon5} />
                          <T4>Best Seller</T4>
                        </Firstdiv>
                        <Firstdiv>
                          <Icon55 src={rides} />
                          <T5>Water rides</T5>
                        </Firstdiv>
                      </Icondiv4>
                      <Textinners></Textinners>
                      <Norths>Coral Safari Semisubmarine</Norths>
                      <Portdivs>
                        <Greenimg src={location} />
                        <Port>{i.location}</Port>
                      </Portdivs>
                      <Lorems>{i.desc}</Lorems>
                      <Star>
                        <Staricons>
                          <Staricon src={star} />
                          <Staricon src={star} />
                          <Staricon src={star} />
                        </Staricons>
                        <Dollar>{i.dollar}</Dollar>
                      </Star>
                      <center>
                        <Button>Book Now</Button>
                      </center>
                    </Innerwhite>
                  </Slidercard>
                  </Link>
                </>
              );
            })}
          </Slider>
        </Biggest>
      </Sliderwrap>
      <Footer />
    </>
  );
};

export default Sightseeingpage;
