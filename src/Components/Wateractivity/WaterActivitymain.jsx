import React from "react";
import styled from "styled-components";
import water from "../../assets/squba.png";
import arrow from "../../assets/mainarrow.svg";
import arrow1 from "../../assets/rightarrow11.svg";
import s1 from "../../assets/small1.png";
import s2 from "../../assets/s2.svg";
import s3 from "../../assets/s3.svg";
import s4 from "../../assets/s4.svg";
import squba1 from "../../assets/squba1.png";
import smallarrow from "../../assets/smallarrow.svg";
import { watercard } from "./watercard";
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
import { second } from "./second";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Home/Footer";

import { third } from "./third";
import { fourth } from "./fourth";
import { fifth } from "./fifth";
import "./ferrys.css";
import reactSelect from "react-select";
import { useNavigate, Link } from "react-router-dom";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import Scroll from "react-scroll";
import { baseURL } from "../../Components/Apibaseurl";

const Mainimg = styled.div`
  background: url(${water});
  background-size: cover;
  height: 35em;

  background-repeat: no-repeat;
  text-align: center;
  @media (min-width: 1641px) and (max-width: 1740px) {
    object-fit: cover;
    width: 100%;
  }
`;
const Bigtext = styled.p`
  padding-top: 9vmax;
  font-size: 54px;
  font-family: Poppins;
  color: #ffffff;
  width: 50vmax;
  font-weight: 700;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 70vmax;
    text-align: center;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 60vmax;
  }

  @media (min-width: 1367px) and (max-width: 1440px) {
    width: 60vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
  }
`;

const Text = styled.p`
  text-align: center;
  margin-top: 3vmax;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 700;
  color: #145843;
  text-transform: uppercase;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 30px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 30px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 30px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 30px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 30px;
  }
`;
const Text1 = styled.p`
  color: #000000;
  font-weight: 400;
  font-family: Poppins;
  margin-top: 2vmax;
  font-size: 13px;

  text-align: justify;
  width: 93vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    width: 93vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
  }

  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 14px;
    width: 93vmax;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 16px;
    width: 92vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 18px;
    width: 92vmax;
  }
`;
const Read = styled.p`
  text-align: center;
  margin-top: 0.7vmax;
  font-family: Poppins;
  font-size: 13px;
  color: #056c73;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 17px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 18px;
  }

  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 18px;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 18px;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 18px;
  }
`;
const Boxdiv = styled.div`
  margin-top: 2vmax;
  justify-content: space-around;
  width: 100%;
  display: flex;
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* background-color: red; */
    width: 100%;
  }
`;
const Arro = styled.img`
  margin-top: 0.5;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 3vmax;
    width: 2.7vmax;
    margin: 0.5% 0 0 0;
  }
`;
const Firstbox = styled.div`
  display: flex;
  gap: 1vmax;

  background: rgba(92, 203, 160, 0.6);
  border-radius: 50px;
  height: 3vmax;
  width: 15vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
    width: 17.5vmax;
  }
`;
const Imgs4 = styled.img`
  height: 3vmax;
  width: 3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
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
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 14px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 15px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 15px;
  }
`;
const Carddiv = styled.div`
  margin-top: 4vmax;
  width: 25%;
  height: 15vh;
  /* background-color: red; */
  /* height: 10vmax; */
  /* justify-content: space-around; */
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 1% 2% 0 2%;

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
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
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
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 10px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 16px;
  }
  /* margin-left:1.3vmax; */
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
  justify-content: flex-start;
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
  font-size: 27px;
  font-weight: 600;
  color: #145843;
  font-family: Poppins;
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 25px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 30px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 30px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 30px;
  }
`;
const Slidercard = styled.div`
  margin-top: 2vmax;
  padding: 2vmax 2vmax;
`;

const Scubadiv = styled.div`
  /* height: 16vmax; */
  /* width:30vw; */
  height: 16vw;

  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 18vmax;
  }
`;
const Subaimg = styled.img`
  height: 92%;
  object-fit: cover;
`;
const Subaimg1 = styled.img`
  /* height: 92%; */
  width: 23.3vw;
  height: 28vh;
  object-fit: cover;
`;
const Innerwhite = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  height: 18.7vmax;
  width: 23.4vmax;
  margin-top: -1.3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 26.3vmax;
    height: 23vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 21.5vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 20.5vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 20vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* height:fit-content; */
    height: 18.4vmax;
  }
`;
const Icondiv = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
`;
const Icondivs = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
  /* justify-content:center; */
  /* flex-direction:column; */
  align-items: center;
  /* width:21.5vmax;
 */
  width: 100%;
  /* background: green; */
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 26.3vmax;
    /* background:red; */
  }
`;
const Icondivs1 = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
  /* justify-content:center; */
  /* flex-direction:column; */
  align-items: center;
  /* width:21.5vmax;
 */
  width: 100%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 24vmax;

    justify-content: space-between;
    margin: 0 2% 0 4%;
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
`;

const Textinner = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
`;
const Textinners = styled.div`
  justify-content: space-around;
  display: flex;
  width: 100%;
  padding-top: 1vmax;
  /* width:24vmax; */

  @media (min-width: 993px) and (max-width: 1024px) {
    width: 26.3vmax;
    justify-content: space-evenly;
    /* background:red; */
  }
`;
const Textinner1 = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
  width: 24vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    width: 26.3vmax;
    justify-content: space-around;
  }
`;

const T1 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const T2 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const T3 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const T4 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const T5 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const North = styled.div`
  font-size: 15px;
  color: #145843;
  font-family: Poppins;
  font-weight: 600;

  /* padding:1vmax 1vmax; */
  margin: 0 2% 0 4%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 13px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 17px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Portdiv = styled.div`
  margin: 2.5% 2% 0 3.3%;

  display: flex;
  gap: 1vmax;
  /* margin-top:-0.5vmax; */
`;
const Greenimg = styled.img`
  height: fit-content;
  width: 1vmax;
  margin-top: 0.2vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 2% 0 0 0;
  }
`;
const Port = styled.p`
  font-size: 13px;
  font-family: Poppins;
  color: #145843;
  font-weight: 600;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 16px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 1% 0 0 0;
    font-size: 17px;
  }
`;
const Lorem = styled.p`
  font-size: 10px;
  font-family: Poppins;
  color: #000000;
  font-weight: 500;
  padding: 1vmax 1vmax;
  text-align: justify;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
    /* text-align:justify; */
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 11px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 12px;
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
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 17px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 17px;
  }
`;
const Button = styled.button`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
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
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 2.5vmax;
    width: 8vmax;
    font-size: 14px;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 15px;
  }
`;
const Biggest = styled.div`
  display: flex;

  width: 105%;
  margin-left: -4vmax;
  margin-top: -2vmax;
`;
const Buttondiv = styled.div`
  display: flex;

  padding: 1vmax;

  justify-content: flex-end;

  gap: 1vmax;
  margin-left: -2vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 0 5% 0 3%;
  }
`;
const View = styled.p`
  font-size: 14px;
  color: #000000;
  font-family: poppins;
  font-weight: 600;
  padding-top: 0.3vmax;
`;
const Arros = styled.img`
  height: 2vmax;
  width: 2vmax;
  z-index: 1;
`;
const Arros1 = styled.img`
  height: 2vmax;
  width: 2vmax;
  z-index: 1;
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
  font-size: 27px;
  font-weight: 600;
  color: #145843;
  font-family: Poppins;
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 25px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 30px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 30px;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 30px;
  }
`;
const Sliderwrap = styled.div`
  .slick-slide {
    padding: 2vmax 2vmax !important;
    margin-top: -2vmax !important;
  }
  .slick-list {
    height: 40vmax !important;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    .slick-list {
      height: 49vmax !important;
    }
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    .slick-list {
      height: 45vmax !important;
      width: 100% !important;
    }
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    .slick-list {
      height: 45vmax !important;
      width: 100% !important;
    }
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    .slick-list {
      height: 45vmax !important;
      width: 100% !important;
    }
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    .slick-list {
      height: 45vmax !important;
      width: 100% !important;
    }
  }
`;
const Glass = styled.p`
  text-align: center;
  margin-top: 2vmax;
  font-size: 27px;
  font-weight: 600;
  color: #145843;
  font-family: Poppins;
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 25px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 30px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 30px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 30px;
  }
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
  font-size: 27px;
  font-weight: 600;
  color: #145843;
  font-family: Poppins;
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 25px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 30px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 30px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 30px;
  }
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
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const T7 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const T8 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const T9 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const T10 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const Divs = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width:15vmax; */
  gap: 0.4vmax;
`;

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  useTransform: false,
  pauseOnHover: true,

  swipe: true,
  waitForAnimate: true,
  draggable: true,
  swipeToSlide: true,
  touchMove: true,
  // padSlides: true,
  slide: "> div",
  touchThreshold: 100,

  speed: 500,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
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
const WaterActivitymain = () => {
  const dinnerref = React.useRef();
  const scubaref = React.useRef();
  const searef = React.useRef();
  const kaya = React.useRef();

  // const height = window.innerHeight;
  // console.log(height)
  let scro = Scroll.animateScroll;

  const clicks1 = () => {
    scro.scrollTo(dinnerref?.current?.offsetTop, {
      smooth: true,
    });
  };

  const clicks2 = () => {
    scro.scrollTo(searef?.current?.offsetTop, {
      smooth: true,
    });
  };

  const clicks3 = () => {
    scro.scrollTo(scubaref?.current?.offsetTop, {
      smooth: true,
    });
    console.log("hello");
  };

  const clicks4 = () => {
    scro.scrollTo(kaya?.current?.offsetTop, {
      smooth: true,
    });
  };

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/get/activity`);
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const navigate = useNavigate();
  const Handleclick = (path) => {
    navigate(path);
  };
  const clickme1 = () => {
    navigate("/scubacard");
  };

  const customeSlider = React.useRef();
  const customeSlider1 = React.useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
    // console.log("hello")
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const gotoNext1 = () => {
    customeSlider1.current.slickNext();
    // console.log("hello")
  };

  const gotoPrev1 = () => {
    customeSlider1.current.slickPrev();
  };

  console.log("my pai is ", datas?.activity);

  return (
    <>
      <Mainimg>
        <center>
          <Bigtext>
            Top List Of Water Sports in Andaman Islands (Best Places & Prices)
          </Bigtext>
        </center>
      </Mainimg>
      <Text>TOP LIST OF ACTIVITIES</Text>
      <center>
        <Text1>
          {datas?.activity?.map((i) => {
            return <>{i.description}</>;
          })}
        </Text1>
      </center>
      <Read>Read More</Read>

      <center>
        <Boxdiv>
          <Arro src={arrow} />
          <Firstbox onClick={clicks1} style={{ cursor: "pointer" }}>
            <Imgs4 src={s1} />
            <Dinner>Dinner On Cruise</Dinner>
          </Firstbox>
          <Firstbox style={{ cursor: "pointer" }} onClick={clicks2}>
            <Imgs4 src={s4} />
            <Dinner>Sea Walk</Dinner>
          </Firstbox>
          <Firstbox style={{ cursor: "pointer" }} onClick={clicks3}>
            <Imgs4 src={s3} />
            <Dinner>Scuba Diving</Dinner>
          </Firstbox>
          <Firstbox style={{ cursor: "pointer" }} onClick={clicks4}>
            <Imgs4 src={s2} />
            <Dinner>SemiSubmarine</Dinner>
          </Firstbox>
          <Arro src={arrow1} />
        </Boxdiv>
      </center>
      <center>
        <Maindiv>
          {datas?.activity?.map((item) => {
            return (
              <>
                <Carddiv>
                  <div className="name" key={item._id} />
                  <Card
                    style={{ cursor: "pointer" }}
                    onClick={() => Handleclick(`/scubadetail/${item._id}`)}
                  >
                    <Imagedivs>
                      <Squ src={item.image?.url} />
                    </Imagedivs>
                    <Whitedivs>
                      <Diving>Scuba Diving</Diving>
                      <Textdivs>
                        <Rupee>Starting at just $150</Rupee>
                        <Smallar src={smallarrow} />
                      </Textdivs>
                    </Whitedivs>
                  </Card>
                </Carddiv>
              </>
            );
          })}
        </Maindiv>
      </center>

      <Line src={line} ref={scubaref} />
      <Suba>SCUBA DIVING</Suba>
      <Buttondiv>
        <Arros src={arrow} className="open" onClick={() => gotoPrev()} />
        <View style={{ cursor: "pointer" }} onClick={clickme1}>
          View All
        </View>
        <Arros1 src={arrow1} className="open" onClick={() => gotoNext()} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider
            style={{ overflow: "hidden", overflow: "hidden" }}
            {...settings}
            ref={customeSlider}
          >
            {datas?.activity?.map((i) => {
              return (
                <>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/waterbook/${i._id}`}
                  >
                    <Slidercard className="open">
                      <div style={{ height: "30vh", width: "20vmax" }}>
                        <Subaimg1 src={i.image?.url} />
                      </div>
                      <Innerwhite>
                        <Icondiv>
                          <Divs>
                            <Icon1 src={icon1} />
                            <T1>Scuba Diving</T1>
                          </Divs>
                          <Divs>
                            <Icon2 src={icon2} />
                            <T2>Guide</T2>
                          </Divs>
                          <Divs>
                            <Icon3 src={icon3} />
                            <T3>Coordinator</T3>
                          </Divs>
                          <Divs>
                            <Icon4 src={icon4} />
                            <T4>Best Seller</T4>
                          </Divs>
                          <Divs>
                            <Icon5 src={icon5} />
                            <T5>Certificate</T5>
                          </Divs>
                        </Icondiv>
                        <Textinner></Textinner>
                        <North>Scuba Diving in North Bay Island</North>
                        <Portdiv>
                          <Port>{i.activityType}</Port>
                        </Portdiv>
                        <Lorem>{i.description?.substring(0, 100)}..</Lorem>
                        <Star>
                          <Staricons>
                            <Staricon src={star} />
                            <Staricon src={star} />
                            <Staricon src={star} />
                          </Staricons>
                          <Dollar>{i.price}</Dollar>
                        </Star>
                        <center>
                          <Button
                            onClick={clickme1}
                            style={{ cursor: "pointer" }}
                          >
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

      <Line1 ref={dinnerref} src={line} />
      <Diiner>DINNER CRUISE</Diiner>

      <Buttondiv>
        <Arros onClick={() => gotoPrev1()} src={arrow} />
        <View>View All</View>
        <Arros1 onClick={() => gotoNext1()} src={arrow1} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider
            style={{ width: "100%", overflow: "hidden" }}
            {...settings}
            ref={customeSlider1}
          >
            {datas?.activity?.map((i) => {
              return (
                <>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/waterbook/${i._id}`}
                  >
                    {" "}
                    <Slidercard className="open">
                      <div style={{ height: "30vh", width: "20vmax" }}>
                        <Subaimg1 src={i.image?.url} />
                      </div>
                      <Innerwhite>
                        <Icondivs>
                          <Divs>
                            <Icon1 src={iland} />
                            <T6>Island Tour</T6>
                          </Divs>
                          <Divs>
                            <Icon2 src={ware} />
                            <T7>Dinner</T7>
                          </Divs>
                          <Divs>
                            <Icon3 src={site} />
                            <T8>Ferry</T8>
                          </Divs>
                          <Divs>
                            <Icon4 src={icon4} />
                            <T9>Best Seller</T9>
                          </Divs>
                          <Divs>
                            <Icon5 src={surf} />
                            <T10>Sightseeing</T10>
                          </Divs>
                        </Icondivs>
                        <Textinner></Textinner>
                        <North>
                          Dinner Cruise with Live Music, Dinner & DJ
                        </North>
                        <Portdiv>
                          <Port>{i.activityType}</Port>
                        </Portdiv>
                        <Lorem>{i.description?.substring(0, 100)}</Lorem>
                        <Star>
                          <Staricons>
                            <Staricon src={star} />
                            <Staricon src={star} />
                            <Staricon src={star} />
                          </Staricons>
                          <Dollar>{i.price}</Dollar>
                        </Star>
                        <center>
                          <Button
                            onClick={clickme1}
                            style={{ cursor: "pointer" }}
                          >
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
      <Line2 ref={searef} src={line} />
      <Glass>GLASS BOTTOM BOAT</Glass>

      <Buttondiv>
        <Arros src={arrow} />
        <View>View All</View>
        <Arros1 src={arrow1} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider style={{ width: "100%", overflow: "hidden" }} {...settings}>
            {datas?.activity?.map((i) => {
              return (
                <>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/waterbook/${i._id}`}
                  >
                    {" "}
                    <Slidercard className="open">
                      <div style={{ height: "30vh", width: "20vmax" }}>
                        <Subaimg1 src={i.image2?.url} />
                      </div>
                      <Innerwhite>
                        <Icondivs1>
                          <Divs>
                            <Icon1 src={kids} />
                            <T1>Kids</T1>
                          </Divs>
                          <Divs>
                            <Icon2 src={icon1} />
                            <T2>Guide</T2>
                          </Divs>
                          <Divs>
                            <Icon3 src={site} />
                            <T3>Ferry</T3>
                          </Divs>
                          <Divs>
                            <Icon4 src={icon5} />
                            <T4>Best Seller</T4>
                          </Divs>
                          <Divs>
                            <Icon55 src={rides} />
                            <T5>Water Rides</T5>
                          </Divs>
                        </Icondivs1>
                        <Textinner1></Textinner1>
                        <North>Coral Safari Semisubmarine</North>
                        <Portdiv>
                          <Port>{i.activityType}</Port>
                        </Portdiv>
                        <Lorem>{i.description?.substring(0, 100)}</Lorem>
                        <Star>
                          <Staricons>
                            <Staricon src={star} />
                            <Staricon src={star} />
                            <Staricon src={star} />
                          </Staricons>
                          <Dollar>{i.price}</Dollar>
                        </Star>
                        <center>
                          <Button
                            onClick={clickme1}
                            style={{ cursor: "pointer" }}
                          >
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

      <Line3 ref={kaya} src={line} />
      <Kaya>KAYAKING</Kaya>

      <Buttondiv>
        <Arros src={arrow} />
        <View>View All</View>
        <Arros1 src={arrow1} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider style={{ width: "100%", overflow: "hidden" }} {...settings}>
            {datas?.activity?.map((i) => {
              return (
                <>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/waterbook/${i._id}`}
                  >
                    {" "}
                    <Slidercard className="open">
                      <div style={{ height: "30vh", width: "20vmax" }}>
                        <Subaimg1 src={i.image3?.url} />
                      </div>
                      <Innerwhite>
                        <Icondivs>
                          <Divs>
                            <Icon1 src={kids} />
                            <T1>Kids</T1>
                          </Divs>
                          <Divs>
                            <Icon2 src={icon1} />
                            <T2>Guide</T2>
                          </Divs>
                          <Divs>
                            <Icon3 src={site} />
                            <T3>Ferry</T3>
                          </Divs>
                          <Divs>
                            <Icon4 src={icon5} />
                            <T4>Best Seller</T4>
                          </Divs>
                          <Divs>
                            <Icon5 src={rides} />
                            <T5>Water Rides</T5>
                          </Divs>
                        </Icondivs>
                        <Textinners></Textinners>
                        <North>Coral Safari Semisubmarine</North>
                        <Portdiv>
                          <Port>{i.activityType}</Port>
                        </Portdiv>
                        <Lorem>{i.description?.substring(0, 100)}</Lorem>
                        <Star>
                          <Staricons>
                            <Staricon src={star} />
                            <Staricon src={star} />
                            <Staricon src={star} />
                          </Staricons>
                          <Dollar>{i.price}</Dollar>
                        </Star>
                        <center>
                          <Button
                            onClick={clickme1}
                            style={{ cursor: "pointer" }}
                          >
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
      <Footer />
    </>
  );
};

export default WaterActivitymain;
