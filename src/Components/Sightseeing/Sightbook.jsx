import React from "react";

import axios from "axios";
import styled from "styled-components";
import star from "../../assets/star.png";
import flag1 from "../../assets/flag1.svg";
import flag2 from "../../assets/flag2.svg";
import flag3 from "../../assets/flag3.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide from "../../assets/slideimage.png";
import left from "../../assets/greenleft.svg";
import useSWR from 'swr'
import right from "../../assets/greenright.svg";
import sight from "../../assets/sight1.png";
import sight1 from "../../assets/sight2.png";
import sight2 from "../../assets/sight3.png";
import sight3 from "../../assets/sight4.png";
import sight4 from "../../assets/sight5.png";
import schedule from "../../assets/schedule.svg";
import mark from "../../assets/mark.png";
import cancel from "../../assets/cancel.svg";
import dot from "../../assets/greendot.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import maps from "../../assets/maps.png";
import Footer from "../Home/Footer";
import { useParams } from "react-router-dom";
import {baseURL} from "../../Components/Apibaseurl"

const Maindiv = styled.div`
  margin: 3% 2% 0 2%;
  width: 63%;

  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 63%;
  }
`;
const Neil = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  padding: 1% 2% 0 1.5%;
  color: #000000;

  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
`;
const Pickdiv = styled.div`
  margin: 0.1% 2% 0 2%;
  display: flex;
  gap: 1vmax;

  @media (min-width: 992px) and (max-width: 1025px) {
    margin: 2% 2% 0 2%;
  }
`;
const Pick = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: #000000;
`;
const Stardiv = styled.div`
  display: flex;
  gap: 0.5vmax;
  margin: 1% 0 0 0;
`;
const Star = styled.img`
  height: fit-content;
  width: 1vmax;
  @media (min-width: 992px) and (max-width: 1025px) {
    margin-top: 14%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin-top: -0.2vmax;
  }
`;
const Secondiv = styled.div`
  margin: 3% 0% 0 -5%;
  /* gap:8.7vmax; */
  display: flex;
  width: 96%;
  justify-content: space-around;
  /* background: RED; */
  @media (min-width: 992px) and (max-width: 1025px) {
    /* gap:3vmax; */
    margin-top: 2%;
    /* margin-left:0%; */
    /* background: red; */
    width: 100%;
    /* margin-left:0px; */
    backgroundcolor: red;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    margin-top: 2%;
    /* margin-left:0%; */
    /* background: red; */
    width: 98%;
    /* margin-left:1%; */
    /* margin-left:0px; */
    backgroundcolor: red;
  }

  @media (min-width: 1367px) and (max-width: 1460px) {
    margin-top: 2%;
    /* margin-left:0%; */
    /* background: red; */
    width: 98%;
    /* margin-left:1%; */
    /* margin-left:0px; */
    justify-content: space-evenly;
    backgroundcolor: red;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin-top: 2%;
    /* margin-left:0%; */
    /* background: red; */
    width: 96%;
    /* margin-left:1%; */
    /* margin-left:0px; */
    /* backgroundColor:red; */
  }
`;
const Flagdiv = styled.div`
  display: flex;
  gap: 1vmax;
  /* margin:0;
  padding:0; */
  @media (min-width: 993px) and (max-width: 1025px) {
    /* background-color: red; */
    align-items: center;
    justify-content: space-around;
  }
`;
const Cardiv = styled.div`
  display: flex;
  gap: 1vmax;
  @media (min-width: 993px) and (max-width: 1025px) {
    /* background-color: red; */
    align-items: center;
    justify-content: space-around;
  }
`;
const Hourdiv = styled.div`
  display: flex;
  gap: 1vmax;
  @media (min-width: 993px) and (max-width: 1025px) {
    /* background-color: red; */
    align-items: center;
    justify-content: space-around;
  }
`;
const Flag = styled.img`
  @media (min-width: 992px) and (max-width: 1025px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Tour = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 2% 0 0 0;

  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 14px;
    padding: 5% 0 0 0;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 20px;
  }
`;
const Car = styled.img`
  @media (min-width: 992px) and (max-width: 1025px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Hotel = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 2% 0 0 0;

  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 14px;
    padding: 5% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 20px;
  }
`;
const Hour = styled.img`
  @media (min-width: 992px) and (max-width: 1025px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Clock = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  padding: 3% 0 0 0;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 14px;
    padding: 8% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 20px;
  }
`;
const Sliderwrap = styled.div`
  .slick-slide:focus {
    border: 0 none !important;
    outline: 0 !important;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
  }
  .slick-list {
    height: 30vmax !important;
    width: 40% !important;

    margin: 0 2% 0 1% !important;
  }
`;
const Img = styled.img`
  /* width: 100%; */
  height: 100%;
  width:100%;

  @media (min-width: 992px) and (max-width: 1025px) {
  }

  &:focus {
    outline: 0 !important;
    border: none !important;
  }
`;
const Div = styled.div`
  width: 50vw;
  background:red;

  /* height: 20vmax; */
  margin: 1% 0 0 0;
`;
const Buttons = styled.div`
  display: flex;
  margin: -15% 2% 0 2%;
  position: absolute;
  gap: 46.3vmax;

  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 45vmax;
  }
`;
const Left = styled.img`
  margin: 0 0 0 -2%;
  height: fit-content;
  width: 4vmax;
  @media (min-width: 992px) and (max-width: 1025px) {
    height: 4vmax;
    width: 4vmax;
  }
  @media (min-width: 1026px) and (max-width: 1285px) {
    height: fit-content;
    width: 4vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    height: fit-content;
    width: 4vmax;
    margin: 0;
    padding: 0;
  }
`;
const Right = styled.img`
  margin: 0 0 0 -3%;
  height: fit-content;
  width: 4vmax;
  @media (min-width: 992px) and (max-width: 1025px) {
    height: 4vmax;
    width: 4vmax;
  }

  @media (min-width: 1026px) and (max-width: 1285px) {
    height: fit-content;
    width: 4vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: 0 0 0 -1.5%;
  }
`;
const Imagediv = styled.div`
  margin: 1% 0 0 1.1%;
  display: flex;
  gap: 0.7vmax;
`;
const Sight1 = styled.img`
  height: 12%;

  @media (min-width: 992px) and (max-width: 1025px) {
    height: 10.2vmax;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 10.2vmax;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 10.2vmax;
  }
  @media (min-width: 1641px) and (max-width: 1741px) {
    height: 10.2vmax;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 10.2vmax;
  }
`;
const About = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
`;
const Stext = styled.p`
  padding: 3% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  width: 83%;
  text-align: justify;

  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 14px;
  }
`;
const Visit = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 25px;
  }
`;
const Tablediv = styled.div`
  margin: 3% 2% 0 4%;
`;
const Ul = styled.ul``;
const Li = styled.li`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;

const Full = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
`;
const Schedulediv = styled.div`
  margin: 2% 2% 0 2%;
  display: flex;
  gap: 4vmax;
`;
const Schedule = styled.img``;
const Timediv = styled.div`
  height: 26%;

  @media (min-width: 992px) and (max-width: 1025px) {
    height: 37%;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 31%;
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    height: 28%;
  }
  @media (min-width: 1641px) and (max-width: 1741px) {
    height: 24%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 22%;
  }
`;
const Innerdiv = styled.div`
  gap: 1vmax;
  height: 30vmax;
`;
const Time = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
`;
const Time1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 18px;
  }
`;
const Include = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
`;
const Markdiv = styled.div`
  margin: 2% 2% 0 2%;
  display: flex;
  gap: 1vmax;
`;
const Mark = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Air = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 18px;
  }
`;
const Canceldiv = styled.div`
  margin: 3% 2% 0 2%;
`;
const Canceldiv1 = styled.div`
  display: flex;
  gap: 3vmax;
  height: 2.5vmax;
`;
const Cancel = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Guide = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 18px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 18px;
  }
`;
const Information = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
`;
const Tablediv2 = styled.div`
  margin: 3% 2% 0 4%;
`;
const Ul1 = styled.ul``;
const Li1 = styled.li`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`;
const Cancelations = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
`;
const Lorem2 = styled.p`
  padding: 3% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  text-align: justify;
  width: 86%;

  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 14px;
  }
`;
const Provide = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
`;

const Faq = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
`;
const Vegidv = styled.div`
  display: flex;
  gap: 1vmax;
`;
const Dot = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding: 1% 0 0 0;
`;
const Days = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
`;
const Accordiandiv = styled.div`
  margin: 3% 2% 0 2%;
  width: 86%;
`;
const Hr = styled.hr`
  margin: 4% 2% 0 3%;
  height: 0.1px;
  background: #898989;
  width: 82%;
`;
const Map = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  padding: 3% 2% 0 2%;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 25px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    display: none;
  }
`;
const Maps = styled.img`
  margin: 3% 2% 0 2%;

  @media (min-width: 992px) and (max-width: 1025px) {
    display: none;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 13%;
    widh: 100%;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    display: none;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    display: none;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    display: none;
  }
`;
const Firstmain = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Secondivmain = styled.div`
  width: 30vmax;
  margin: 4% 2% 0 0;
`;
const Lightgreen = styled.div`
  width: 100%;
  background: rgba(92, 203, 160, 0.15);
  box-shadow: 6px 8px 23px rgba(122, 122, 122, 0.1);
  border-radius: 12px;
  height: 48vmax;

  @media (min-width: 992px) and (max-width: 1025px) {
    height: 54vmax;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 58vmax;
    width: 32vmax;
    margin: 0 0 0 -6%;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 53vmax;
  }

  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 52vmax;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 48vmax;
  }
`;
const Book = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #000000;
  padding: 2% 2% 0 3%;

  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 20px;
  }
`;
const Hr3 = styled.hr`
  margin: 3% 0 0 0;
  width: auto;
  height: 0.2px;
  background: #9f9f9f;
`;
const Prices = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  color: #000000;
  padding: 2% 2% 0 3%;

  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 20px;
  }
  @media (min-width: 1026px) and (max-width: 1285px) {
    font-size: 22px;
  }
`;
const Pricesdiv = styled.div`
  margin: 3% 3% 0 3%;
  display: flex;
  gap: 1vmax;
`;
const Marks = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding: 2% 0 0 0;
  @media (min-width: 1026px) and (max-width: 1285px) {
    margin: 0;
    padding: 0.4%;
  }
`;
const Quote = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #000000;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 15px;
  }
  @media (min-width: 1026px) and (max-width: 1285px) {
    font-size: 15px;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 18px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 1% 0 0 0;
  }
`;
const Details = styled.p`
  padding: 2% 3% 0 3%;
  color: #000000;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 12px;
  }
  @media (min-width: 1026px) and (max-width: 1285px) {
    font-size: 14px;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 15px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 16px;
  }
`;
const Numbers = styled.p`
  padding: 2% 3% 0 3%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 17px;
  }
`;
const Input = styled.input`
  outline: none;
  margin: 3% 2% 0 3%;
  padding: 0 0 0 2%;
  width: 26vmax;
  height: 2vmax;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  :placeholder {
    color: #898989;
  }
`;
const Name = styled.p`
  padding: 3% 3% 0 3%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 17px;
  }
`;

const Email = styled.p`
  padding: 3% 3% 0 3%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 17px;
  }
`;
const Mobile = styled.p`
  padding: 3% 3% 0 3%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  @media (min-width: 992px) and (max-width: 1025px) {
    font-size: 17px;
  }
`;
const Reserve = styled.button`
  margin: 3% 0 0 0;
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  width: 14vmax;
  height: 2.5vmax;
  color: #ffffff;
  font-weight: 600;
  font-family: Poppins;
  border: none;
  font-size: 16px;

  @media (min-width: 993px) and (max-width: 1025px) {
    height: 3.5vmax;
    margin: 6% 0 0 0;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 3.5vmax;
    margin: 6% 0 0 0;
  }

  @media (min-width: 1367px) and (max-width: 1460px) {
    margin: 10% 0 0 0;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: 10% 0 0 0;
    font-size: 22px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 22px;
    letter-spacing: 1px;
    margin: 10% 0 0 0;
    height: 3vmax;
  }
`;
const Nextlightdiv = styled.div`
  width: 100%;
  background: rgba(92, 203, 160, 0.15);
  box-shadow: 6px 8px 23px rgba(122, 122, 122, 0.1);
  border-radius: 12px;
  margin: 7% 0 0 0;
  height: 25vmax;
  @media (min-width: 992px) and (max-width: 1025px) {
    height: 35vmax;
  }

  @media (min-width: 1026px) and (max-width: 1285px) {
    height: 28vmax;
    /* width:32vmax; */
    margin: 7% 0 0 0%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 28vmax;
    /* width:32vmax; */
    margin: 7% 0 0 0%;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 28vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 24vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 23vmax;
  }
`;
const Thank = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  padding: 3% 2% 0 3%;
  color: #000000;
`;
const Booking = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 2% 2% 0 3%;
  color: #000000;
`;
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  variableWidth: true,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
      },
    },
  ],
};

const Sightbook = () => {

  const {id} = useParams();

 


  const [numofPeople, setNumofpeople] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/api/user/sight/${id}`,
    fetcher
  );

  const data1 = React.useRef();
  const clickme = () => {
    data1.current.src = sight;
    data1.current.style.height = "25vmax";
  };

  

 


  console.log(data);

  const amount = data?.sight?.price

  
  
  const API = axios.create({ baseURL: `${baseURL}` });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });


 
  

  const key = "rzp_live_aZqAKdQLWLFwpJ";
  const postdata = async (e) => {
    e.preventDefault();

    const { data } = await API.post(
      `${baseURL}/api/user/book/sight/${id}`,
      {
        numofPeople,
        name,
        email,
        mobile,
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: "INR",
      description: "Acme Corp",
      image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      order_id: data.order.id,
      callback_url: "http://localhost:5000/api/paymentverification",
      prefill: {
        email: "gaurav.kumar@example.com",
        contact: +919900000000,
      },
      config: {
        display: {
          blocks: {
            hdfc: {
              //name for HDFC block
              name: "Pay using HDFC Bank",
              instruments: [
                {
                  method: "upi",
                },
                {
                  method: "card",
                },
                {
                  method: "card",
                  issuers: ["HDFC"],
                },
                {
                  method: "netbanking",
                  banks: ["HDFC"],
                },
              ],
            },
            other: {
              //  name for other block
              name: "Other Payment modes",
              instruments: [
                {
                  method: "card",
                  issuers: ["ICIC"],
                },
                {
                  method: "netbanking",
                },
              ],
            },
          },
          hide: [
            {
              method: "upi",
            },
          ],
          sequence: ["block.hdfc", "block.other"],
          preferences: {
            show_default_blocks: false, // Should Checkout show its default blocks?
          },
        },
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          if (confirm("Are you sure, you want to close the form?")) {
            txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
          } else {
            txt = "You pressed Cancel!";
            console.log("Complete the Payment");
          }
        },
      },
    };

    var rzp1 = new window.Razorpay(options);

    rzp1.open();

    console.log(data);
  };
  const customeSlider = React.useRef();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
 

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  
  const users =  JSON.parse(localStorage.getItem("user"))
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <>
      <Firstmain>
        <Maindiv>
          <Neil>Neil Island Full Day Tour</Neil>
          <Pickdiv>
            <Pick>pick up and drop + private car</Pick>
            <Stardiv>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
            </Stardiv>
          </Pickdiv>
          <Secondiv>
            <Flagdiv>
              <Flag src={flag1} />
              <Tour>Private Tour</Tour>
            </Flagdiv>
            <Cardiv>
              <Car src={flag2} />
              <Hotel>Hotel Pickup & Drop</Hotel>
            </Cardiv>
            <Hourdiv>
              <Hour src={flag3} />
              <Clock>9 Hour Tour</Clock>
            </Hourdiv>
          </Secondiv>

          <Sliderwrap>
            <Slider {...settings} ref={customeSlider}>
              <Div>
                <Img src={data?.sight?.image?.url} ref={data1} />
              </Div>
              <Div>
                <Img src={data?.sight?.image?.url}/>
              </Div>
              <Div>
                <Img src={data?.sight?.image?.url}/>
              </Div>
              <Div>
                <Img src={data?.sight?.image?.url} />
              </Div>
              <Div>
                <Img src={data?.sight?.image?.url} />
              </Div>
              <Div>
                <Img src={data?.sight?.image?.url} />
              </Div>
            </Slider>
          </Sliderwrap>
          <Buttons>
            <Right src={right} onClick={() => gotoPrev()} />
            <Left src={left} onClick={() => gotoNext()} />
          </Buttons>
          <Imagediv>
            <Sight1 onClick={clickme} src={sight} />
            <Sight1 src={sight1} />
            <Sight1 src={sight2} />
            <Sight1 src={sight3} />
            <Sight1 src={sight4} />
          </Imagediv>
          <About>About {data?.sight?.location} Full Day Tour</About>
          <Stext>
         {data?.sight?.desc}
          </Stext>
          <Visit>Place You Will Visit</Visit>
          <Tablediv>
            <Ul>
              <Li>Bharatpur Beach </Li>
              <Li>Neil Island’s natural rock formation </Li>
              <Li>Laxmanpur Beach</Li>
            </Ul>
          </Tablediv>
          <Full>Full schedule</Full>
          <Schedulediv>
            <Schedule src={schedule} />
            <Innerdiv>
              <Timediv>
                <Time>8.30 AM – 9.00 AM</Time>
                <Time1>Pick up from Neil Island Jetty/Hotel</Time1>
              </Timediv>
              <Timediv>
                <Time>8.30 AM – 9.00 AM</Time>
                <Time1>Drive to Bharatpur Beach</Time1>
              </Timediv>
              <Timediv>
                <Time>8.30 AM – 9.00 AM</Time>
                <Time1>
                  Proceed to see the Neil Island’s natural rock formation
                  composed entirely of dead corals and Lakshmanpur Beach
                </Time1>
              </Timediv>
              <Timediv>
                <Time>8.30 AM – 9.00 AM</Time>
                <Time1>Lunch</Time1>
              </Timediv>
              <Timediv>
                <Time>8.30 AM – 9.00 AM</Time>
                <Time1>
                  End the day soaking in a graceful sunset at the Lakshmanpur
                  Beach
                </Time1>
              </Timediv>
            </Innerdiv>
          </Schedulediv>
          <Include>What is Included</Include>

          <Markdiv>
            <Mark src={mark} />
            <Air>Air-Conditioned Car Included (point to point only)</Air>
          </Markdiv>
          <Include>What is Excluded</Include>
          <Canceldiv>
            <Canceldiv1>
              <Cancel src={cancel} />
              <Guide>Guide</Guide>
            </Canceldiv1>
            <Canceldiv1>
              <Cancel src={cancel} />
              <Guide>Snacks/Meals are not included</Guide>
            </Canceldiv1>
            <Canceldiv1>
              <Cancel src={cancel} />
              <Guide>No Car Diversions allowed</Guide>
            </Canceldiv1>
            <Canceldiv1>
              <Cancel src={cancel} />
              <Guide>
                Extra charges are applicable if large diversions are made from
                the Itinerary.
              </Guide>
            </Canceldiv1>
          </Canceldiv>
          <Information>Important Information</Information>
          <Tablediv2>
            <Ul1>
              <Li1>Ac quisque egestas mauris viverra semper.</Li1>
              <Li1>
                Amet, vitae sapien, fringilla fames massa nulla tortor.{" "}
              </Li1>
              <Li1>
                Aliquam sapien proin ante fusce tincidunt arcu massa facilisis.
              </Li1>
              <Li1>Nam erat tempus sit turpis libero.</Li1>
            </Ul1>
          </Tablediv2>
          <Cancelations>Cancellations</Cancelations>
          <Lorem2>
            Amet, ultrices egestas morbi augue pellentesque pretium, ipsum
            dolor. Purus euismod magna id sed in amet. Eget commodo suspendisse
            donec tortor cursus et risus rhoncus tellus. Accumsan nisl turpis
            dignissim lobortis est adipiscing arcu. Dolor sagittis amet, sed
            feugiat. Facilisis nullam feugiat fermentum pellentesque. Gravida
            ullamcorper at neque, orci pharetra blandit interdum. Quisque
            gravida eu vel, quis.
          </Lorem2>
          <Provide>About the Provider</Provide>
          <Lorem2>
            Amet, ultrices egestas morbi augue pellentesque pretium, ipsum
            dolor. Purus euismod magna id sed in amet. Eget commodo suspendisse
            donec tortor cursus et risus rhoncus tellus. Accumsan nisl turpis
            dignissim lobortis est adipiscing arcu. Dolor sagittis amet, sed
            feugiat. Facilisis nullam feugiat fermentum pellentesque. Gravida
            ullamcorper at neque, orci pharetra blandit interdum. Quisque
            gravida eu vel, quis.
          </Lorem2>
          <Faq>FAQ</Faq>

          <Accordiandiv>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Vegidv>
                  <Dot src={dot} />
                  <Typography
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "15px",
                      fontWeight: "400",
                      color: "#000000",
                    }}
                  >
                    How many days do you need at Neil Island?
                  </Typography>
                </Vegidv>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "400",
                    padding: "0 2% 0 4%",
                  }}
                >
                  {data?.sight?.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Accordiandiv>
          <Hr></Hr>
          <Accordiandiv>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Vegidv>
                  <Dot src={dot} />
                  <Typography
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "15px",
                      fontWeight: "400",
                      color: "#000000",
                    }}
                  >
                    What is the new name of Neil Island?
                  </Typography>
                </Vegidv>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "400",
                    padding: "0 2% 0 4%",
                  }}
                >
                {data?.sight?.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Accordiandiv>
          <Hr></Hr>
          <Accordiandiv>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Vegidv>
                  <Dot src={dot} />
                  <Typography
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "15px",
                      fontWeight: "400",
                      color: "#000000",
                    }}
                  >
                    What is there to do in Neil Island?
                  </Typography>
                </Vegidv>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "400",
                    padding: "0 2% 0 4%",
                  }}
                >
                {data?.sight?.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Accordiandiv>
          <Hr></Hr>
        </Maindiv>
        <Secondivmain>
          <Lightgreen>
            <Book>Book Your Tour</Book>
            <Hr3></Hr3>
            <Prices>Price Starts at $500</Prices>

            <Pricesdiv>
              <Marks src={mark} />
              <Quote>Get Instant Price Quote</Quote>
            </Pricesdiv>
            <Pricesdiv>
              <Marks src={mark} />
              <Quote>Premium Service Providers Only</Quote>
            </Pricesdiv>
            <Pricesdiv>
              <Marks src={mark} />
              <Quote>Private Car</Quote>
            </Pricesdiv>
            <Details>Get details in next 3-4 hours on Email/ Mobile.</Details>
            <form onSubmit={postdata}>
              <Numbers>Number of People</Numbers>
              <Input
                onChange={(e) => setNumofpeople(e.target.value)}
                type="text"
                placeholder="2-20"
                required
              />
              <Name>Name</Name>

              <Input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
                required
              />
              <Email>Email</Email>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <Mobile>Mobile</Mobile>

              <Input
                onChange={(e) => setMobile(e.target.value)}
                type="text"
                placeholder="Enter Your Number"
                required
              />
              <center>
              
                       <Reserve type="submit" style={{ cursor: "pointer" }}>
                Book Now
              </Reserve> 
              

              </center>
            </form>
          </Lightgreen>
          <Nextlightdiv>
            <Book>Book Your Tour</Book>
            <Hr3></Hr3>
            <Prices>Price Starts at $500</Prices>
            <Pricesdiv>
              <Marks src={mark} />
              <Quote>Get Instant Price Quote</Quote>
            </Pricesdiv>
            <Pricesdiv>
              <Marks src={mark} />
              <Quote>Premium Service Providers Only</Quote>
            </Pricesdiv>
            <Pricesdiv>
              <Marks src={mark} />
              <Quote>Private Car</Quote>
            </Pricesdiv>
            <Thank>Thank You</Thank>
            <Booking>
              We have received your inquiry and shall get back in atmost 4
              working hours.
            </Booking>
          </Nextlightdiv>
        </Secondivmain>
      </Firstmain>
      <Footer />
    </>
  );
};

export default Sightbook;
