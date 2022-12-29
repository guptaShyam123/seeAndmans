import React from "react";
import axios from "axios";
import shut from "../../assets/perashut.png";
import styled from "styled-components";
import location from "../../assets/greenlocation.svg";
import star from "../../assets/star.png";
import icons from "../../assets/book1.svg";
import icons1 from "../../assets/book2.svg";
import icons2 from "../../assets/book3.svg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import boximg from "../../assets/box.png";
import six from "../../assets/six.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import veg from "../../assets/veg.svg";
import { second } from "./second";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../assets/touricon.svg";
import icon2 from "../../assets/scubaicon.svg";
import icon3 from "../../assets/reicon.svg";
import icon4 from "../../assets/certiicons.svg";
import icon5 from "../../assets/cooricon.svg";
import arrow from "../../assets/mainarrow.svg";
import Footer from "../Home/Footer";
import right from "../../assets/rightarrow11.svg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { baseURL } from "../../Components/Apibaseurl";

const Para = styled.img`
  width: 100%;
  background-size: cover;
  object-fit: cover;
  height: 35vmax;
`;
const Lightgreendiv = styled.div`
  margin: 2% 2% 0 2.5%;
  height: 84%;
  background: #ffffff;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* height:180vmax; */
    height: 160vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
  }

  /* @media (min-width:1280px) and (max-width:1366px){
  height:150vmax;
} */
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 110vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 100vmax;
  }
`;
const Sailing = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  padding: 2% 2% 0 3%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;

const Location = styled.div`
  margin: 0.6% 2% 0 2.5%;
  display: flex;
  gap: 1vmax;
`;
const Loc = styled.img``;
const Port = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;
const Stardiv = styled.div`
  margin: 1% 2% 0 2.5%;
  display: flex;
  justify-content: space-between;
`;
const Star = styled.div`
  display: flex;
  gap: 0.5vmax;
`;
const Icon = styled.img`
  height: fit-content;
  width: 1vmax;
`;
const Rupee = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  margin: -1% 0 0 0;
`;
const Hr = styled.hr`
  width: auto;
  height: 0.2px;
  background: #9f9f9f;
  margin: 2% 0 0 0;

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 0.1px;
  }
`;
const Includes = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  padding: 2% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Icondivs = styled.div`
  margin: 1.4% 2% 0 2%;
  /* background-color:pink; */
  /* width:100%; */
  padding: 0 1% 0 0;
  /* justify-content:space-around; */
  /* background-color:red; */
  gap: 4.6vmax;
  display: flex;
  /* display:none; */
  /* gap:4.5vmax; */

  @media (min-width: 993px) and (max-width: 1025px) {
    gap: 6vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    gap: 5vmax;
  }
`;
const First = styled.img``;
const Textdiv1 = styled.div`
  display: flex;

  margin: 0 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 80vmax;
  }
`;
const Guide = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #145843;
  width: 10%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 10%;
    font-size: 14px;
  }
`;
const Seller = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #145843;
  width: 10%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    padding: 0 0 0 1%;
    font-size: 14px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* color:red; */
    width: fit-content;
  }
`;
const Equipements = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #145843;
  padding: 0 0 0 2%;
  width: 10%;
  @media (min-width: 1280px) and (max-width: 1366px) {
    padding: 0 0 0 3%;
    font-size: 14px;
  }
`;
const Hr1 = styled.hr`
  width: auto;
  height: 0.5px;
  background: #9f9f9f;
  margin: 2.5% 0 0 0;

  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 0.1px;
  }
`;
const About = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  padding: 2% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Lorem = styled.p`
  padding: 2% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  text-align: justify;
  @media (min-width: 993px) and (max-width: 1025px) {
    line-height: 19px;
    /* color:red; */
  }
`;
const Read = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #0085ff;
  padding: 0 2% 0 2%;
  text-decoration: underline;
`;
const Hr2 = styled.hr`
  width: auto;
  height: 0.5px;
  background: #9f9f9f;
  margin: 2.6% 0 0 0;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 0.1px;
  }
`;
const Highlight = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  padding: 2% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Bullet = styled.div`
  display: flex;
  margin: 1.4% 2% 0 2.4%;
  gap: 1vmax;
`;
const Dot = styled.p`
  font-size: 40px;
  margin: -2% 0 0 0;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 3vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 3vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 2.6vmax;
    /* padding:0; */
    margin-top: -1.7vmax;
  }
`;
const Carbyan = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 22px;
  }
`;
const Available = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  padding: 3% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Calenderdiv = styled.div`
  margin: 2% 2% 0 2%;
`;
const Calendars = styled(Calendar)`
  width: 27vmax;
  background: #ffffff;
  font-size: 20px;
  color: black;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    width: 30vmax;
  }
`;
const Hr3 = styled.hr`
  width: auto;
  height: 0.5px;
  background: #9f9f9f;
  margin: 2.8% 0 0 0;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 0.1px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 0.1px;
  }
`;
const Faq = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  padding: 2% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Accordiandiv = styled.div`
  margin: 2% 2% 0 2%;
`;
const Hr4 = styled.hr`
  width: 50%;
  height: 0.5px;
  background: #9f9f9f;
  margin: 2.8% 10% 0 25%;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 0.1px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 0.1px;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 0.1px;
  }
`;
const Hr5 = styled.hr`
  width: 50%;
  height: 0.5px;
  background: #9f9f9f;
  margin: 2.6% 10% 0 25%;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 0.1px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 0.1px;
  }
`;
const Hr6 = styled.hr`
  height: 0.2px;
  background: #9f9f9f;
  margin: 8% 0 0 0;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 0.1px;
  }
`;
const Revies = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  padding: 2% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Kelly = styled.div`
  margin: 2% 0 0 0;
  display: flex;
  justify-content: space-around;
`;
const Upton = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 20px;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 20px;
  }
`;

const Secondlightdiv = styled.div`
  margin: 2% 2% 0 2%;

  height: 25vmax;
  background: #ffffff;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  @media (min-width: 1641px) and (max-width: 1740px) {
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 22vmax;
  }
`;
const Story = styled.p`
  padding: 4% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 19px;
  }
`;
const Divstar = styled.div`
  display: flex;
  gap: 0.5vmax;
  margin: 2% 2% 0 2%;
`;
const Borderdiv = styled.div`
  margin: 2% 2% 0 2%;
  border: 2px solid #373434;
  height: 6vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 8vmax;
  }
`;
const Write = styled.p`
  padding: 2% 2% 0 6%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #808080;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    padding: 5% 0 0 0;
    text-align: center;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 3% 0 0 0;
    font-size: 22px;
    text-align: center;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 22px;
    text-align: center;
    padding: 3.5% 0 0 0;
  }
`;
const Buttonss = styled.button`
  margin: 2% 0 0 0;
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  border: none;
  height: 3vmax;
  width: 16vmax;
  font-family: Poppins;
  cursor: pointer;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* height:2vmax;
        width:17vmax;
        font-size: 19px;; */
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 25px;
    letter-spacing: 1px;
  }
`;
const Thirdmaindiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
const Firstdivmain = styled.div`
  width: 65%;

  @media (min-width: 1280px) and (max-width: 1366px) {
    margin: 0 0 0 -1%;
  }
`;
const Secondrightdiv = styled.div`
  margin: 1.5% 2% 0 2.5%;
  width: 30%;
  /* @media(min-width:1280px) and (max-width:1366px){
margin: 1% 0 0 0%;
} */
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color:red; */
  }
`;
const Firstlight = styled.div`
  background: #ffffff;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 100%;
  height: 35vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 36vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 38vmax;
    /* background:red; */
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 38vmax;
    /* background:red; */
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 34vmax;
  }
`;
const Summery = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  padding: 3% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Hr7 = styled.hr`
  background: #9f9f9f;
  height: 0.3px;
  width: auto;
  margin: 2% 0 0 0;
`;
const Pricediv = styled.div`
  margin: 2% 2% 0 2%;
  display: flex;
  justify-content: space-between;
`;
const Total = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Availabel1 = styled.p`
  margin: 3% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 22px;
  }
`;
const DatePickers = styled(DatePicker)`
  margin: 2% 2% 0 2%;
  width: 94%;
  height: 2vmax;
  background: #ffffff;
  border: none !important;
  padding: 0 0 0 2%;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
  outline: none;
`;
const Number = styled.p`
  padding: 2% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 20px;
  }
`;
const Selects = styled.select`
  padding: 0% 0% 0 2%;
  width: 96%;
  margin: 2% 2% 0% 2%;
  height: 2vmax;
  background: #ffffff;

  border: none !important;
  outline: none;
  font-weight: 500;
  letter-spacing: 2px;
  color: #000000;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Cancelation = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #ff0000;
  padding: 2.3% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Button1 = styled.button`
  height: 2.8vmax;
  width: 12vmax;
  font-family: Poppins;
  text-align: center;
  margin: 10% 0 0 30%;
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  /* @media (min-width:993px) and (max-width:1024px){
  height:2vmax;
  width:7vmax;

} */
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 22px;
    letter-spacing: 1px;
  }
`;
const Coupandiv = styled.div`
  margin: 6% 2% 0 2%;
  height: 46vmax;
  background: #ffffff;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 100%;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 65vmax;
  }

  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color:red; */
    height: 30%;
  }

  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 40%;
  }
  /* @media (min-width: 1280px) and (max-width: 1366px) {
  height:63vmax;
} */
  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 58vmax;
  }
`;
const Offers1 = styled.p`
  padding: 2% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 22px;
  }
`;
const Line1 = styled.hr`
  margin: 2% 0 0 0;
  width: auto;
  background: #9f9f9f;
  height: 0.2px;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 0.1px;
  }
`;
const Vegdiv = styled.div`
  margin: 2% 2% 0 2%;
  display: flex;
  justify-content: space-between;
`;
const Firstveg = styled.div`
  display: flex;
  gap: 1vmax;
`;
const Vegicon = styled.img`
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 1.5vmax;
    width: 1.5vmax;
  }
`;

const Go = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #0a8607;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Rates = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #0a8607;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Congratulation = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14.6px;
  color: #000000;
  width: 100%;
  padding: 2% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1291px) {
    font-size: 12px;
  }
`;
const Line2 = styled.hr`
  margin: 3% 0 0 0%;
  width: auto;
  background: #9f9f9f;
  height: 0.2px;
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 0.1px;
  }
`;
const Explore = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  color: #145843;
  margin: 10% 0 0 0;
`;
const Slidercard = styled.div`
  margin-top: 2vmax;
  padding: 2vmax 2vmax;
`;

const Scubadiv = styled.div`
  height: 16vmax;
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
const Innerwhite = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  height: 18vmax;
  width: 23.4vmax;
  margin-top: -1.5vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    height: 23.5vmax;
    width: 26.5vmax;
    /* background:red; */
    margin-top: -1.7vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color: red; */
    margin-top: -1.5vmax;
    height: 21vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background-color: red; */
    margin-top: -1.5vmax;
    height: 20.6vmax;
  }

  /* @media (min-width: 1280px) and (max-width: 1366px) {
  height:22vmax;
} */
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 19.6vmax;
    /* background:red; */
    margin-top: -1.5vmax;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    height: 17.6vmax;
    /* background:red; */
    margin-top: -1.6vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    height: 17.6vmax;
    /* background:red; */
    margin-top: -1.6vmax;
  }
`;
const Icondiv = styled.div`
  justify-content: space-around;
  display: flex;
  /* padding-top:1vmax; */
  margin-top: 1%;
  /* background: pink; */
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:blue; */
    width: 100%;
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
const Textinner = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
`;
const T1 = styled.p`
  font-family: Poppins;
  font-size: 10px;
  color: #145843;
  font-weight: 700;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
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
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
  }
`;
const North = styled.div`
  font-size: 15px;
  color: #145843;
  font-family: Poppins;
  font-weight: 600;

  padding: 1vmax 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Portdiv = styled.div`
  padding: 0.1vmax 0.9vmax;
  display: flex;
  gap: 1vmax;
  margin-top: -0.5vmax;
`;
const Greenimg = styled.img`
  height: 1vmax;
  width: 1vmax;
  margin-top: 0.2vmax;
`;
const Ports1 = styled.p`
  font-size: 13px;
  font-family: Poppins;
  color: #145843;
  font-weight: 600;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 16px;
  }
`;
const Lorems1 = styled.p`
  font-size: 10px;
  font-family: Poppins;
  color: #000000;
  font-weight: 500;
  padding: 1vmax 1vmax;
  text-align: justify;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
    text-align: justify;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 12px;
  }
`;
const Starss = styled.div`
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
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 17px;
  }
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
  cursor: pointer;
  margin-top: -0.7vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 9vmax;
    height: 2.5vmax;
    font-size: 16px;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 8vmax;
    height: 2.4vmax;
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
    /* margin:0; */
    /* padding:0; */
    align-items: center;
    margin-right: 1vmax;
    /* width:fit-content;
  justify-content:flex-end;
  background-color:red; */
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
`;

const Diiner = styled.p`
  text-align: center;
  margin-top: 2vmax;
  font-size: 20px;
  font-weight: 600;
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
  @media (min-width: 993px) and (max-width: 1024px) {
    .slick-list {
      height: 50vmax !important;
    }
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    .slick-list {
      height: 44vmax !important;
    }
  }
`;

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  rows: 1,
  dots: false,
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
  // centerMode: true,

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

const Input3 = styled.input`
  height: 2vmax;
  width: 20vmax;
  margin: 3% 2% 0 2%;
  padding: 0 0 0 3%;
  border: none;
  outline: none;
  font-family: Poppins;
  color: black;
  @media (min-width: 1840px) and (max-width: 1945px) {
    ::placeholder {
      font-size: 20px;
    }
  }
`;
const Divs = styled.div`
  display: flex;
  flex-direction: column;
  /* width:30%; */
  /* background:red; */
  align-items: center;
  gap: 0.4vmax;
  margin-top: 0.5vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    margin-top: 1vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin-top: 0.5vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    margin-top: 0.5vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    margin-top: 0.5vmax;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin-top: 0.5vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    margin-top: 0.5vmax;
  }
`;
const Waterbook = () => {
  const [gender, setGender] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const navigate = useNavigate();

  const clicks = () => {
    navigate("/scubacard");
  };

  const clickss = () => {
    navigate("/login");
  };
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [mobile, setMobile] = React.useState();

  const { id } = useParams();

  const [datas, setdatas] = React.useState([]);

  console.log("this is my id ", id);
  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/activity/${id}`);
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  const amount = datas?.activity?.price;

  React.useEffect(() => {
    getdata();
  }, []);

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

  const postdatas = async (e) => {
    e.preventDefault();

    const { data } = await API.post(
      `${baseURL}/api/user/book/activity/${id}`,
      {
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

  const [startDate, setStartDate] = React.useState(new Date());
  const [value, onChange] = React.useState(new Date());

  const customeSlider = React.useRef();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const users = JSON.parse(localStorage.getItem("user"));

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <>
      <Para src={datas?.activity?.image?.url} />
      <Thirdmaindiv>
        <Firstdivmain>
          <Lightgreendiv>
            <Sailing> {datas?.activity?.activityType} In Port Blair</Sailing>
            <Location>
              <Loc src={location} />
              <Port>Port Blair</Port>
            </Location>
            <Stardiv>
              <Star>
                <Icon src={star} />
                <Icon src={star} />
                <Icon src={star} />
              </Star>
              <Rupee>${datas?.activity?.price}</Rupee>
            </Stardiv>
            <Hr></Hr>
            <Includes>Includes</Includes>
            <Icondivs>
              <First src={icons} />
              <First src={icons1} />
              <First src={icons2} />
            </Icondivs>
            <Textdiv1>
              <Guide>Guide</Guide>
              <Seller>Best Seller</Seller>
              <Equipements>Equipments</Equipements>
            </Textdiv1>
            <Hr1></Hr1>
            <About>About</About>
            <Lorem>{datas?.activity?.description}</Lorem>
            <Read>Read More</Read>
            <Hr2></Hr2>
            <Highlight>Highlights</Highlight>
            <Bullet>
              <Dot>.</Dot>
              <Carbyan>{datas?.activity?.activityType} at Carbyn Beach</Carbyan>
            </Bullet>
            <Available>Availability</Available>
            <Calenderdiv>
              <Calendars onChange={onChange} value={value} />
            </Calenderdiv>
            <Hr3></Hr3>
            <Faq>FAQ</Faq>

            <Accordiandiv>
              <Accordion style={{ background: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{
                      color: "#000000",
                      fontWeight: "600",
                      fontSize: "20px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Who should avoid it?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      color: "#000000",
                      fontWeight: "400",
                      fontSize: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {datas?.activity?.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Accordiandiv>
            <Hr4></Hr4>

            <Accordiandiv>
              <Accordion style={{ background: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{
                      color: "#000000",
                      fontWeight: "600",
                      fontSize: "20px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Do we require advanced bookings?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      color: "#000000",
                      fontWeight: "400",
                      fontSize: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {datas?.activity?.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Accordiandiv>

            <Hr5></Hr5>
            <Accordiandiv>
              <Accordion style={{ background: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{
                      color: "#000000",
                      fontWeight: "600",
                      fontSize: "20px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Does this activity takes place on all days?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      color: "#000000",
                      fontWeight: "400",
                      fontSize: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {datas?.activity?.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Accordiandiv>

            <Hr6></Hr6>

            <Revies>Reviews</Revies>
            <Kelly>
              <Upton>Kelly Upton</Upton>
              <Upton>Kelly Upton</Upton>
            </Kelly>
          </Lightgreendiv>
          <Secondlightdiv>
            <Story>Write Your Story</Story>
            <Divstar>
              <Icon src={star} />
              <Icon src={star} />
              <Icon src={star} />
            </Divstar>
            <Borderdiv>
              <Write>
                Please write at least 50 characters about your experience at
                this destination.
              </Write>
            </Borderdiv>
            <center>
              <Buttonss> Publish Review </Buttonss>
            </center>
          </Secondlightdiv>
        </Firstdivmain>

        <Secondrightdiv>
          <Firstlight>
            <Summery>Price Summary</Summery>
            <Hr7></Hr7>
            <Pricediv>
              <Total>Total Price</Total>
              <Total>${datas?.activity?.price}</Total>
            </Pricediv>
            <Availabel1>Availability</Availabel1>

            <DatePickers
              portalId="root-portal"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Calender"
            />
            <Number>Number Of Traveller</Number>

            <Input3 type="text" placeholder="number of people" id="cars" />
              
            
            <form onSubmit={postdatas}>
              <Input3
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
              <Input3
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <Input3
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile Number"
                required
              />

              <Cancelation>Free Cancellation Unil 24 Hours</Cancelation>

              {users ? (
                <Button1 type="submit">Book Now</Button1>
              ) : (
                <Button1 onClick={clickss}>Login Now</Button1>
              )}
            </form>
          </Firstlight>
          <Coupandiv>
            <Offers1>Offers</Offers1>
            <Line1></Line1>
            <Vegdiv>
              <Firstveg>
                <input
                  value="Female"
                  name="gender"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  type="radio"
                />
                <Go>GETSETGO</Go>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congratulation>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.{" "}
            </Congratulation>
            <Line2></Line2>
            <Vegdiv>
              <Firstveg>
                <input
                  value="Female"
                  name="gender"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  type="radio"
                />
                <Go>GETSETGO</Go>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congratulation>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.{" "}
            </Congratulation>
            <Line2></Line2>
            <Vegdiv>
              <Firstveg>
                <input
                  name="gender"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  type="radio"
                />
                <Go>GETSETGO</Go>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congratulation>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.{" "}
            </Congratulation>
            <Line2></Line2>
            <Vegdiv>
              <Firstveg>
                <input
                  name="gender"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  type="radio"
                />
                <Go>GETSETGO</Go>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congratulation>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.{" "}
            </Congratulation>
            <Line2></Line2>
            <Vegdiv>
              <Firstveg>
                <input
                  name="gender"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  type="radio"
                />
                <Go>GETSETGO</Go>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congratulation>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.{" "}
            </Congratulation>
            <Line2></Line2>
            <Vegdiv>
              <Firstveg>
                <input
                  name="gender"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  type="radio"
                />
                <Go>GETSETGO</Go>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congratulation>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.{" "}
            </Congratulation>
            <Line2></Line2>
          </Coupandiv>
        </Secondrightdiv>
      </Thirdmaindiv>
      <Explore>EXPLORE MORE</Explore>

      <Buttondiv>
        <Arros src={arrow} onClick={() => gotoPrev()} />
        <View>View All</View>
        <Arros src={right} onClick={() => gotoNext()} />
      </Buttondiv>
      <Sliderwrap>
        <Biggest>
          <Slider
            style={{ overflow: "hidden" }}
            {...settings}
            ref={customeSlider}
          >
            {second.map((i) => {
              return (
                <>
                  <Slidercard>
                    <Scubadiv>
                      <Subaimg src={i.img} />
                    </Scubadiv>
                    <Innerwhite>
                      <Icondiv>
                        <Divs>
                          <Icon1 src={icon1} />
                          <T1>{i.text1}</T1>
                        </Divs>
                        <Divs>
                          <Icon2 src={icon2} />
                          <T2>{i.text2}</T2>
                        </Divs>
                        <Divs>
                          <Icon3 src={icon3} />
                          <T3>{i.text3}</T3>
                        </Divs>
                        <Divs>
                          <Icon4 src={icon4} />
                          <T4>{i.text4}</T4>
                        </Divs>
                        <Divs>
                          <Icon5 src={icon5} />
                          <T5>{i.text5}</T5>
                        </Divs>
                      </Icondiv>

                      <North>Scuba Diving in North Bay Island</North>
                      <Portdiv>
                        <Greenimg src={i.location} />
                        <Ports1>{i.port}</Ports1>
                      </Portdiv>
                      <Lorems1>{i.lorem}</Lorems1>
                      <Starss>
                        <Staricons>
                          <Staricon src={i.star} />
                          <Staricon src={i.star} />
                          <Staricon src={i.star} />
                        </Staricons>
                        <Dollar>{i.dollar}</Dollar>
                      </Starss>
                      <center>
                        <Button onClick={clicks}>Book Now</Button>
                      </center>
                    </Innerwhite>
                  </Slidercard>
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

export default Waterbook;
