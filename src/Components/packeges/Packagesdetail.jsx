import React from "react";
import comfort from "../../assets/comfort.png";
import styled from "styled-components";
import detail1 from "../../assets/detail1.svg";
import plus from "../../assets/plus.svg";
import detail2 from "../../assets/detail2.svg";
import detail3 from "../../assets/detail3.svg";
import detail4 from "../../assets/detail4.svg";
import detail5 from "../../assets/detail5.svg";
import line from "../../assets/hr.svg";
import vr from "../../assets/vr.svg";
import car from "../../assets/ferrygroup.svg";
import "./package.css";
import useSWR from "swr";
import dot from "../../assets/dot.svg";
import Packard from "./Packcard";
import Footer from "../Home/Footer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import left from "../../assets/leftarrow.svg";
import m1 from "../../assets/modelimg.png";
import star from "../../assets/star.png";
import moon from "../../assets/moon.png";
import cab1 from "../../assets/cabsvg.svg";
import ferri1 from "../../assets/ferrysvg.svg";
import cruise1 from "../../assets/cruisesvg.svg";
import water1 from "../../assets/watersvg.svg";
import hotel1 from "../../assets/hotelsvg.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.css";
import { packagemodel } from "./packagemodel";
import Hotelpackegebook from "./Hotelpackegebook";

import { Link, useNavigate, useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { baseURL } from "../../Components/Apibaseurl";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: "auto",
  outline: "none",
  // height:'71%',
  border: "none",
};

const Detailfirstdiv = styled.div`
  /* background: red; */
  display: flex;
  gap: 1vmax;
  margin: 4vh 0;
  justify-content: center;
  align-items: center;
  /* flex-direction:columns; */
  /* align-items: center; */
  /* justify-content:center; */
  @media (min-width: 1640px) and (max-width: 1740px) {
    width: 45vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* background:blue; */
    width: 48vmax;
  }
`;

const Divss = styled.div`
  width: 20%;
  /* background-color:red; */
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* background-color:red; */
    /* width:100%; */
  }
`;

const Comfort = styled.div``;

const Comimg = styled.img`
  background-size: cover;
  height: 35vmax;
  object-fit: cover;
  width: 100%;
`;
const Firstdiv = styled.div`
  display: grid;
  margin-top: 2vmax;
  margin-left: 2vmax;
`;
const Text = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 24px;
  }
`;
const Detaildiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1vmax;
  width: 47vmax;
  justify-content: space-around;
`;
const Detail = styled.img`
  height: 3vmax;
  width: 3vmax;
  @media (min-width: 1025px) and (max-width: 1290px) {
    height: 2vmax;
    width: 2vmax;
  }
`;
const Plus = styled.img`
  height: 1vmax;
  /* padding-top: 1vmax; */
  @media (min-width: 1025px) and (max-width: 1290px) {
    height: 1vmax;
    width: 1vmax;
  }
`;
const Textdiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.6vmax;

  /* width:fit-content; */
  width: 100%;
  /* background-color:red; */
`;
const Plan = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
    font-weight: 600;
  }
`;
const Transfer = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  /* margin-left: 1vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 0 -3%;
  }
`;
const Hotel = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  /* margin-left: -1vmax;; */
  /* margin-left:1.6vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
    font-weight: 600;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    margin: 0 0 0 1%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0 0 0 3%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin: 0 0 0 2%;
  }
`;
const Cruise = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  /* margin-left: 2vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 0 -3%;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    margin: 0 0 0 -3%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0 2% 0 0;
  }
`;
const Activity = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  /* margin-left:2vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    margin: 0 0 0 -3%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0 2% 0 0;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin: 0 2% 0 0;
  }
`;
const Seconddiv = styled.div`
  display: grid;
  margin-top: 2vmax;
  margin-left: 3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:red; */
    height: 13vmax;
  }
`;
const Light = styled.div`
  background: #5ccba0;
  height: 3.2vmax;
  width: 20vmax;
  text-align: center;
  border-radius: 5px;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:blue; */
  }
`;
const Edit = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }

  color: #000000;
  margin-top: 0.5vmax; ;
`;
const Dark = styled.div`
  background: rgba(92, 203, 160, 0.6);

  height: 4vmax;
  width: 20vmax;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: -5vmax;
  border-radius: 5px;

  @media (min-width: 1640px) and (max-width: 1740px) {
    margin-top: -5.2vmax;
  }
`;
const Buttons = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  height: 2vmax;
  width: 8vmax;
  color: #ffffff;
  font-family: Poppins;
  font-size: 15px;
  border: none;
  margin-top: 1vmax;
  cursor: pointer;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;
const Flexdiv = styled.div`
  display: flex;
  gap: 7vmax;
`;
const Hr = styled.img`
  /* padding:2vmax 2vmax; */
  margin: 0 2% 0 2%;
  width: 96%;
`;
const Greendiv = styled.div`
  margin-left: 2vmax;
  width: 46vmax;
  margin-top: 3vmax;
`;
const Firstgreen = styled.div`
  display: flex;
  height: 4vmax;
  background: #5ccba0;
  justify-content: space-around;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:red; */
  }
`;
const Night = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  /* margin-top:1vmax; */

  /* @media (min-width:993px ) and (max-width:1024px){
   font-size:12px;
   font-weight:600;
} */
  @media (min-width: 993px) and (max-width: 1024px) {
    display: flex;
    font-size: 13px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 14px;
    width: fit-content;
    /* color:yellow; */
  }
`;
const Night1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* display:flex; */
    font-size: 13px;
  }
  /* margin-top:1vmax; */
  /* margin : 2% 0 0 -10%; */
  /* @media (min-width:993px ) and (max-width:1024px){
   font-size:12px;
   padding: 0 0 0 4%;
   
} */
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 14px;
    /* padding: 0 0 0 4%; */
  }
`;
const View = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: underline;
  color: #3a3a3a;
`;
const Viewgu = styled.p`
  margin-left: 12vmax;
  margin-top: 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 14px;
  }
`;
const Secondgreen = styled.div`
  background: rgba(92, 203, 160, 0.6);

  display: flex;
  justify-content: space-around;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 6vmax;
    /* height:fit-content; */
  }
`;
const Day1 = styled.p`
  /* width:1vmax; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  /* padding-top:2vmax; */
  width: 4.92vmax;
  display: flex;

  justify-content: center;
  align-items: center;
  /* margin-left:1.1vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
  }
`;
const Vr = styled.img`
  width: 0.1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 5vmax;
  }
`;
const Vr1 = styled.img`
  width: 0.1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4.5vmax;
  }
`;
const Vrs = styled.img`
  width: 1.1vmax;
`;
const Vr2 = styled.img`
  width: 0.1vmax;
  /* @media (min-width:993px ) and (max-width:1024px){
   height:7.5vmax;
   width:1px;
} */
`;
const Inner = styled.div`
  display: grid;
  width: 22vmax;
`;
const Morning = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 17px;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
  }
`;
const Lore = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 11px;
    /* color:yellow; */
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 14px;
  }
`;
const Evening = styled.div`
  display: grid;
  width: 9vmax;
`;
const Eve = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
  }
`;
const Div = styled.div`
  display: flex;
  gap: 0.1vmax;
  margin-top: -1vmax;
`;
const Amet = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 14px;
  }
`;
const Add = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #0085ff;
  /* display:flex; */
  text-decoration: underline;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Hr1 = styled.img`
  width: 46vmax;
  height: 1vmax;
  position: absolute;
  margin-top: -0.5vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
  }
`;
const Thirddiv = styled.div`
  background: rgba(92, 203, 160, 0.6);
  height: 4.5vmax;
  width: 46vmax;
  margin-left: 2vmax;
  display: flex;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:red; */
    /* display:flex; */

    height: 6vmax;
  }
`;
const Day2 = styled.p`
  /* width:1vmax; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  /* padding-top:2vmax; */
  /* background:red; */
  /* padding:0; */
  margin-left: -5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 7.9vmax;
  /* margin-left:1.8vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Nextdiv = styled.div`
  /* display:grid; */
  /* margin-left:2vmax; */
  /* background: pink; */
  /* justify-content:flex-end;
    */

  gap: 1vmax;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 0 5%;
  /* text-align:right; */
  /* justify-content:flex-end; */
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:blue; */
    /* margin:0; */
    /* background:black; */

    margin: 1% 2% 0 3%;
    /* height:1vmax; */
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background:blue; */
    /* margin:0; */
    /* background:black; */

    margin: 0% 2% 0 0%;
    /* align-items:justify;  */
    /* height:1vmax; */
    padding-left: 4%;
    display: flex;
    flex-direction: column;
    gap: 0.6vmax;
    width: 100%;

    /* width:fit-content; */
  }
`;
const Fullday = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 0 6%;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 15px;
  }
`;
const Inner2 = styled.div`
  display: flex;
  /* background: black; */
  padding: 0;
  margin: 0;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:pink; */
    display: flex;
    /* justify-content:center;
 align-items:center; */
    margin: 0 0 0 4%;
    /* background-color:blue; */
    width: 25vmax;
    /* gap:1vmax; */
    justify-content: space-around;
    /* justify-content:center; */
    align-items: center;
    text-align: center;
    padding: 0;
  }
  @media (min-width: 1285px) and (max-width: 1366px) {
    /* background-color:red; */
    padding: 0 0 2% 0;
  }
`;
const Lorem2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 11px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 14px;
  }
`;
const Centerimg = styled.img`
  margin-left: 19vmax;
  height: 10vmax;
  width: 16vmax;
  margin-top: -0.6vmax;
`;
const Classdiv = styled.div`
  margin-top: -3vmax;
  /* margin:0; */
  /* background: red; */
`;
const Firstbigdiv = styled.div`
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:red;  */
  }
`;
const Biggestdiv = styled.div`
  display: flex;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:red; */
  }
`;
const Dot = styled.img`
  /* margin-top:-33vmax; */
  margin-left: 7vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    margin-left: 12.8%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* margin-top: -30%;
margin-left:-1%; */
    /* margin-left:10vmax; */
    /* display:none; */
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    margin-left: 11.7%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin-left: 10%;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    margin-left: 13%;
    /* height:fit-content; */
  }
`;
const Helpdiv = styled.div`
  margin-top: 2vmax;
  margin-left: 2vmax;
  gap: 8vmax;
  display: flex;
  width: 43vmax;
`;
const Firsthelp = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Secondhelp = styled.div`
  display: grid;
  gap: 1vmax;
  margin-left: 1.4vmax;
`;
const Need = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 17px;
  }
`;
const Speak = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  width: 20vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 17px;
  }
`;
const Talk = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  border: none;
  height: 2.7vmax;
  width: 10vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 9px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 10px;
    letter-spacing: 1px;
  }
  @media (min-width: 1366px) and (max-width: 1440px) {
    font-size: 13px;
    font-family: Poppins;
    letter-spacing: 1px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 15px;
    font-family: Poppins;
    letter-spacing: 1px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 17px;
    font-family: Poppins;
    letter-spacing: 1px;
  }
`;
const Like = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 17px;
  }
`;
const Bookho = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  width: 19vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 17px;
  }
`;
const Calculate = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: #ffffff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  border: none;
  height: 2.7vmax;
  width: 10vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 9px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 10px;
    letter-spacing: 1px;
  }
  @media (min-width: 1366px) and (max-width: 1440px) {
    font-size: 13px;
    font-family: Poppins;
    letter-spacing: 1px;
    /* width:11vmax; */
    /* color:yellow; */
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 15px;
    font-family: Poppins;
    letter-spacing: 1px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 17px;
    font-family: Poppins;
    letter-spacing: 1px;
    /* padding:1%; */
    font-weight: 700;
  }
`;
const Similar = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #145843;
  margin-top: 4vmax;
  margin-left: 18vmax;
`;
const Question = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  color: #145843;
  margin-top: 2vmax;
  margin-left: 2vmax;
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin-top: 4vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    margin-top: 4vmax;
  }
`;
const Table = styled.table`
  margin-left: 3vmax;
  /* background:red; */

  /* margin:10px; */
  margin-top: 2vmax;
`;
const Ul = styled.ul`
  gap: 1vmax;
  display: flex;
  font-weight: 500;
  flex-direction: column;
`;
const Li = styled.li`
  font-family: Poppins;
  font-style: normal;
  /* font-weight: 400; */
  font-size: 20px;
  color: #000000;
  /* gap:2vmax; */
  height: 2.5vmax;
  /* background:red; */
  font-weight: 500;
  margin-left: 2vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "#D9FFF0",
  outline: "none",
  /* height:'100%', */
  /* background:'red', */

  justifyContent: "center",
  alignItmes: "center",
  borderRadius: "5px",

  "@media(min-width:993px) and (max-width:1024px)": {
    /* background:'red', */
    /* width:'fit-content',
      height:'60%',
      padding:'1',
      margin:'1' */
  },

  "@media (min-width:1840px) and (max-width:1940px)": {
    /* width:'60%' */
  },
  "@media (min-width:1640px) and (max-width:1740px)": {
    /* width:'60%' */
  },
  "@media (min-width:1025px) and (max-width:1285px)": {
    /* width:'58%' */
  },
};

const Modeldiv = styled.div`
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:red; */
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    background-color: red;
  }
`;
const Greendivs = styled.div`
  background: #145843;
  height: 4vmax;
  width: 100%;
  align-items: center;
  /* padding:0 1vmax; */
  /* margin-left:-2.1vmax; */
  display: flex;
  gap: 4vmax;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  justify-content: space-around;

  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color: red; */
    /* margin:0; */
    /* padding: 0; */
    /* margin-top: -3vmax;;
 width:100%; */
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* width:102.4%;
    margin-left:-34px; */
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    /* width:103.4%; */
  }
  @media (min-width: 1340px) and (max-width: 1440px) {
    /* width:103.5%; */
  }
`;
const Activitys = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-family: Poppins;
  color: #ffffff;
  /* margin-top:0.6vmax; */
  font-size: 1.4vmax;
`;
const Input = styled.input`
  background: #ffffff;
  border-radius: 40px;
  height: 2.4vmax;
  width: 18vmax;
  :placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 0.9vmax;
  }
  border: none;
  outline: none;
  padding-left: 2vmax;
  /* margin-top:0.6vmax; */
`;
const Thirddivs = styled.div`
  display: flex;

  gap: 0.9vmax;
  /* margin-top:0.8vmax; */
`;
const Left = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Back = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-family: Poppins;
  color: #ffffff;
  font-size: 1vmax;
`;
const Option = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5vmax;
  padding: 0 0 0 3%;
  margin-top: 1vmax;
  color: #000000;
`;
const Carddiv = styled.div`
  margin-top: 1vmax;
`;
const Imagediv = styled.div``;
const Img = styled.img`
  height: 15%;
  width: 16.7vmax;
  background-size: cover;
  object-fit: cover;
`;
const White = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  width: 16.7vmax;
  margin-top: -2vmax;
  height: 12.4vmax;
`;
const Coral = styled.p`
  padding: 1vmax 1vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9vmax;
  color: #145843;
  margin-top: 1vmax;
`;
const Loremtext = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 00;
  font-size: 0.7vmax;
  padding: 1vmax 1vmax;
  margin-top: -1.4vmax;
`;
const Star = styled.div`
  display: flex;
  gap: 0.5vmax;
  padding: 0.8vmax 0.8vmax;
  margin-top: -1vmax;
`;
const Satrimg = styled.img`
  height: fit-content;
  width: 1vmax;
`;
const Buttonclose = styled.button`
  margin: 0 auto;
  height: 2vmax;
  width: 5vmax;

  border: 1px solid #145843;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1vmax;
  color: #000000;
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  margin-left: 6.3vmax;
`;
const Maincard = styled.div`
  /* background: red; */
  height: 28vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:red; */
  }

  position: -webkit-sticky;
`;

const Moon = styled.img`
  height: 100%;
  /* width:22vmax;  */
  /* margin-left:-2.2vmax; */
  /* margin-top:-2.1vmax; */
  background-size: cover;
  object-fit: cover;
  border-radius: 5px;
  width: 25vmax;
  align-items: center;
  /* background:red; */
`;
const Modeldivss = styled.div`
  display: flex;
  background: red;
  height: 40vmax;
`;
const Secondiv = styled.div`
  background: #fff0df;
  border-radius: 5px;
  width: 29vmax;
  background-size: cover;
  object-fit: cover;
  /* margin-top:-2.1vmax; */
  /* height:38.6vmax; */
`;
const Travel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2vmax;
  color: #000000;
  padding: 4vmax 4vmax;
  width: 23vmax;
  margin-left: 1vmax;
`;
const Departing = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  color: #000000;
  margin-top: -2vmax;
  margin-left: 5vmax; ;
`;
const Select = styled.select`
  border: 1px solid #000000;
  width: 19vmax;
  height: 2vmax;
  margin-top: 1vmax;
  margin-left: 5vmax;
  padding-left: 1vmax;
  border-radius: 5px;
  font-size: 0.9vmax;
  color: #8c8c8c;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  outline: none;
`;
const Dates = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  color: #000000;

  margin-left: 5vmax;
  margin-top: 2vmax; ;
`;
const DatePickers = styled(DatePicker)`
  width: 17.5vmax;
  height: 1.8vmax;
  margin-top: 1vmax;
  margin-left: 5vmax;
  padding-left: 1vmax;
  border-radius: 5px;
  font-size: 0.9vmax;
  color: #8c8c8c;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  outline: none;
`;
const Travelling = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  color: #000000;

  margin-left: 5vmax;
  margin-top: 2vmax; ;
`;
const Moondiv = styled.div`
  background-size: cover;
  align-items: center;
  /* justify-content : center; */
  /* background-color: pink; */
  /* padding: 0 3% 0 3%; */
  /* width:30vmax; */
  /* text-align: center; */
`;

const Texts1 = styled.p`
  position: relative;
  margin-top: -14vmax;
  /* margin-left:-0.5vmax; */
  padding-left: 4%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1vmax;
  color: #000000;
  width: 17.5vmax;
`;
const Icondiv = styled.div`
  position: relative;
  display: flex;
  margin-top: 1vmax;
  margin-left: 3%;
  gap: 3vmax;
  /* margin-left:-0.5vmax; */
  @media (min-width: 1840px) and (max-width: 1940px) {
    background: blue;
  }
`;

const Hotelss = styled.img`
  height: 2vmax;
  width: 2vmax;
`;
const Textdivss = styled.div`
  margin-left: 3%;
  display: flex;
  gap: 4vmax;
  margin-top: 0.5vmax;
`;
const P1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const P2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const P3 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const P4 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
  padding-left: 0.3vmax;
`;
const Textdiv1 = styled.div`
  display: flex;
  gap: 2vmax;
  margin-left: 3%;
`;

const Hotel1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const Transfer1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const Cruise1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const Water1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const Buttondiv = styled.div`
  margin-top: 1vmax;
  display: flex;
  gap: 1vmax;
  margin-left: 5vmax;
`;
const Solo = styled.button`
  font-size: 1vmax;
  color: #000000;
  font-weight: 600;
  font-family: Poppins;
  height: 2vmax;
  width: 4vmax;
  border: 1px solid #000000;
  background: #fff0df;
`;
const Family = styled.button`
  font-size: 1vmax;
  color: #000000;
  font-weight: 600;
  font-family: Poppins;
  height: 2vmax;
  width: 4vmax;
  border: 1px solid #000000;
  background: #fff0df;
`;
const Friend = styled.button`
  font-size: 1vmax;
  color: #000000;
  font-weight: 600;
  font-family: Poppins;
  height: 2vmax;
  width: 4vmax;
  border: 1px solid #000000;
  background: #fff0df;
`;
const Couple = styled.button`
  font-size: 1vmax;
  color: #000000;
  font-weight: 600;
  font-family: Poppins;
  height: 2vmax;
  width: 4vmax;
  border: 1px solid #000000;
  background: #fff0df;
`;
const Getcost = styled.button`
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  color: #ffffff;
  font-weight: 600;
  height: 2vmax;
  width: 8vmax;
  margin-top: 3vmax;
  margin-left: 11vmax;
  border: none;
`;
const Mainflexcard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vmax 2vmax;
  /* align-items:flex-start; */
  /* width:60vmax;z */
  /* height:39vmax; */
  height: 28vmax;
  /* padding: 0 4% 2% 4%,; */
  padding: 0 0% 2% 3%;
  overflow-y: scroll;
  /* background:red; */
  /* margin-bottom: 2vmax;; */

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 2px;
    border-radius: 8px;
    border: 4px solid transparent;
    background-clip: content-box;
    background-color: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:pink; */
    /* height:fit-content;
   */
    /* height:29vmax; */
  }
  @media (min-width: 1340px) and (max-width: 1440px) {
    /* height:50vmax; */
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* height:50vmax; */
  }
`;

const Divone = styled.div`
  /* background-color:red; */
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  /* idwth:100%; */
  /* height:100%; */
  margin: 0 0 0 -3.5%;
  /* padding: 0; */
  @media (min-width: 993px) and (max-width: 1024px) {
    display: flex;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    display: flex;
    /* background:red; */
    width: fit-content;
    margin-left: -7%;
  }
`;
const Divsec = styled.div`
  /* background-color:red; */
  display: flex;
  width: 100%;
  justify-content: space-around;
  /* align-items : center; */
  margin: 0;
  /* @media (min-width:992px) and (max-width:1024px){
      background-color:Red;
      display:flex;
    } */
`;
const Divthir = styled.div`
  /* background:blue; */
  display: flex;
  /* width:100%; */
  width: 68%;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:pink; */
    /* margin:0; */
    display: flex;
  }
`;
const Divfo = styled.div`
  display: flex;

  @media (min-width: 1840px) and (max-width: 1940px) {
    /* background-color:red; ? */
    width: 7.54vmax;
  }
`;

const Fulldaysec = styled.div`
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:pink; */
    /* background-color: gray; */
    /* margin-top:4vmax; */
    /* width:100vmax; */

    /* margin:0; */
    /* padding:0 */
    /* height:10vmax; */
    /* width:100%; */
  }
`;
const Packagesdetail = () => {
  const [show, setShow] = React.useState();
  const [hide, setHide] = React.useState(false);
  const [hide1, setHide1] = React.useState(false);

  const [query, setQuery] = React.useState("");
  const [query1, setQuery1] = React.useState("");

  const { id } = useParams();

  console.log("my id is ", id);
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/package/${id}`);
    const data = await res.json();
    console.log("myist is ", data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const day = datas?.mypackage?.days?.filter((i) => i.day);
  console.log("my day is ", day);

  const my = datas?.allCabs?.length
  console.log("my cab le is ", my);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const Handleclick = (path) => {
    navigate(path);
  };

  const redirect = () => {
    navigate("/hotels");
  };

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [lenght, setLength] = React.useState();

  //for hotel
  let z = datas?.allHotels?.filter((datas) =>
    datas.name.toLowerCase().includes(query)
  );
  console.log(" z length is ", z);
  // for cab
  let t = datas?.allCabs?.filter((x) =>
    x.cabModal.toLowerCase().includes(query1)
  );
  let y = datas?.allActivities?.filter((value) =>
    value.activityType.toLowerCase().includes(query)
  );
  console.log("my t is ", t);
  console.log(
    "all models ",
    datas?.allCabs?.map((x) => x.cabModal)
  );

  const cablist = () => {
    navigate("/cablist");
  };

  const clicks = () => {
    navigate("/ferrylist");
  };

  const water = () => {
    navigate("/wateractivity");
  };
  // cab modal

  const [opencab1, setOpencab] = React.useState(false);
  const handleOpencab = () => setOpencab(true);
  const handleClose2 = () => setOpencab(false);

  //activitties
  const [openwater, setOpenwater] = React.useState(false);
  const handleopenwater = () => setOpenwater(true);
  const handleclosewater = () => setOpenwater(false);

  const [datas1, setDatas1] = React.useState([]);

  const getdata1 = async () => {
    const res = await fetch(`${baseURL}/api/user/get/locations`);
    const data12 = await res.json();
    console.log("my 12 is ", data12);

    setDatas1(data12);
  };

  React.useEffect(() => {
    getdata1();
  }, []);

  const [datas2, setdatas2] = React.useState([]);

  const getdata2 = async () => {
    const res = await fetch(`${baseURL}/api/user/get/packages`);
    const data = await res.json();
    console.log("my pack is ", data);

    setdatas2(data);
  };

  React.useEffect(() => {
    getdata2();
  }, []);

  const xm = datas1?.locations?.filter(
    (i) => i.name.toLowerCase() == datas2?.allpackages?.name
  );
  console.log("my x is", xm);

  const clickme = () => {
    navigate("/");
  };

  const CustomComponent = () => {
    return (
      <>
        {show && <Hotelpackegebook handleopen={handleOpen} myname={"shyam"} />}
      </>
    );
  };

  return (
    <>
      <Comfort>
        <Comimg src={datas?.mypackage?.image?.url} />
      </Comfort>
      <Flexdiv>
        <Firstdiv>
          <Text>Ideal 6 day Andaman Packages for Family</Text>
          <Detailfirstdiv>
            <Divss>
              <Detail src={detail1} />
              <Plan>Plan</Plan>
            </Divss>
            <Plus src={plus} />
            <Divss>
              <Detail onClick={handleOpen} src={detail2} />
              <Hotel>Hotel</Hotel>
            </Divss>

            <Plus src={plus} />
            <Divss>
              <Detail
                onClick={handleOpencab}
                style={{ cursor: "pointer" }}
                src={detail3}
              />

              <Transfer>Transfer</Transfer>
            </Divss>
            <center>
              <Modeldiv>
                <Modal
                  open={opencab1}
                  onClose={handleClose2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Greendivs>
                      <Activitys>change Activity </Activitys>
                      <Input
                        onChange={(e) => setQuery1(e.target.value)}
                        placeholder="Find a activity"
                      />
                      <Thirddivs>
                        <Left src={left} />
                        <Back
                          style={{ cursor: "pointer" }}
                          onClick={handleClose2}
                        >
                          Back to itinerary
                        </Back>
                      </Thirddivs>
                    </Greendivs>
                    <Option>{t?.length} Options Found</Option>
                    <Mainflexcard>
                      {datas?.allCabs
                        ?.filter((datas) =>
                          datas.cabModal.toLowerCase().includes(query1)
                        )
                        .map((x) => {
                          return (
                            <>
                              <Maincard>
                                <Carddiv>
                                  <Imagediv>
                                    <Img src={x.image?.url} />
                                  </Imagediv>
                                  <White>
                                    <Coral>{x.cabModal}</Coral>
                                    <Loremtext>
                                      Non libero, ultricies magna ipsum egestas
                                      vel nec nunc, sed. Ut enim scelerisque
                                      orci in lacinia risus viverra non. Sodales
                                      nisl tristique adipiscing tincidun
                                    </Loremtext>
                                    <Star>
                                      <Satrimg src={star} />
                                      <Satrimg src={star} />
                                      <Satrimg src={star} />
                                    </Star>
                                    <Buttonclose
                                      style={{ cursor: "pointer" }}
                                      onClick={redirect}
                                    >
                                      Change
                                    </Buttonclose>
                                  </White>
                                </Carddiv>
                              </Maincard>
                            </>
                          );
                        })}
                    </Mainflexcard>
                  </Box>
                </Modal>
              </Modeldiv>
            </center>
            <Plus src={plus} />
            <Divss>
              <Detail
                style={{ cursor: "pointer" }}
                onClick={clicks}
                src={detail4}
              />
              <Cruise>Cruise</Cruise>
            </Divss>
            <Plus src={plus} />
            <Divss onClick={handleopenwater}>
              <Detail style={{ cursor: "pointer" }} src={detail5} />
              <Activity>Activity </Activity>
            </Divss>
            <center>
              <Modeldiv>
                <Modal
                  open={openwater}
                  onClose={handleclosewater}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Greendivs>
                      <Activitys>change Activity </Activitys>
                      <Input
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Find a activity"
                      />
                      <Thirddivs>
                        <Left src={left} />
                        <Back
                          style={{ cursor: "pointer" }}
                          onClick={handleclosewater}
                        >
                          Back to itinerary
                        </Back>
                      </Thirddivs>
                    </Greendivs>
                    <Option>{y?.length} Options Found</Option>
                    <Mainflexcard>
                      {datas?.allActivities
                        ?.filter((datas) =>
                          datas.activityType.toLowerCase().includes(query)
                        )
                        .map((x) => {
                          return (
                            <>
                              <Maincard>
                                <Carddiv>
                                  <Imagediv>
                                    <Img src={x.image?.url} />
                                  </Imagediv>
                                  <White>
                                    <Coral>{x.activityType}</Coral>
                                    <Loremtext>
                                      Non libero, ultricies magna ipsum egestas
                                      vel nec nunc, sed. Ut enim scelerisque
                                      orci in lacinia risus viverra non. Sodales
                                      nisl tristique adipiscing tincidun
                                    </Loremtext>
                                    <Star>
                                      <Satrimg src={star} />
                                      <Satrimg src={star} />
                                      <Satrimg src={star} />
                                    </Star>
                                    <Buttonclose
                                      style={{ cursor: "pointer" }}
                                      onClick={redirect}
                                    >
                                      Change
                                    </Buttonclose>
                                  </White>
                                </Carddiv>
                              </Maincard>
                            </>
                          );
                        })}
                    </Mainflexcard>
                  </Box>
                </Modal>
              </Modeldiv>
            </center>
          </Detailfirstdiv>
        </Firstdiv>
        <Seconddiv>
          <Light>
            <Edit> Edit Travel Detail</Edit>
          </Light>
          <Dark>
            <Buttons> Get Trip Cost </Buttons>
          </Dark>
        </Seconddiv>
      </Flexdiv>
      <Hr src={line} />
      <Biggestdiv>
        <Firstbigdiv>
          <Greendiv>
            <Firstgreen>
              <Divone>
                <Night>{datas?.mypackage?.days?.day}</Night>
                <Night1>-2 Night Stay</Night1>
              </Divone>
              <View>
                <Viewgu style={{ cursor: "pointer" }} onClick={clickme}>
                  View Guide
                </Viewgu>
                <Modal
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styles}>
                    <Modeldivss>
                      <Moondiv>
                        <Moon src={moon} />

                        <Texts1>
                          We will get the best prices for your Maldives trip
                          from our trusted travel partners.
                        </Texts1>
                        <Icondiv>
                          <Hotelss src={hotel1} />
                          <Hotelss src={cab1} />

                          <Hotelss src={cruise1} />
                          <Hotelss src={water1} />
                        </Icondiv>
                        <Textdivss>
                          <P1>257 </P1>
                          <P2>14 </P2>
                          <P3>5 </P3>
                          <P4>24</P4>
                        </Textdivss>
                        <Textdiv1>
                          <Hotel1>Hotels</Hotel1>
                          <Transfer1>Transfer</Transfer1>
                          <Cruise1>Cruise</Cruise1>
                          <Water1>Water Activity</Water1>
                        </Textdiv1>
                      </Moondiv>
                      <Secondiv>
                        <Travel>What's Your Andman Travel Plan</Travel>

                        <Departing>Departing From ?</Departing>
                        <Select name="cars" id="cars">
                          <option value="volvo">Audi</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Select location</option>
                        </Select>
                        <Dates>Departure Date</Dates>
                        <DatePickers
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <Travelling>Travelling as</Travelling>
                        <Buttondiv>
                          <Solo>Solo</Solo>
                          <Family>Family</Family>
                          <Friend>Friend</Friend>
                          <Couple>Couple</Couple>
                        </Buttondiv>

                        <Getcost>Get Cost</Getcost>
                      </Secondiv>
                    </Modeldivss>
                  </Box>
                </Modal>
              </View>
            </Firstgreen>
            <Secondgreen>
              <Divsec style={{ cursor: "pointer" }}>
                <Day1>Day-1</Day1>
                <Vr src={vr} />
                <Inner>
                  <Morning>Morning to Noon</Morning>
                  <Lore>
                    Penatibus duis felis orci, quisque sed.Nisi ultricies mauris
                    pretium, pretium elit.
                  </Lore>
                </Inner>
                <Vr src={vr} />
                <Evening>
                  <Eve>Evening</Eve>
                  <Div>
                    <Amet>Amet</Amet>
                    <Add style={{ cursor: "pointer" }} onClick={handleOpen}>
                      Add Activity{" "}
                    </Add>

                    <center>
                      <Modeldiv>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Greendivs>
                              <Activitys>change Activity </Activitys>
                              <Input
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Find a activity"
                              />
                              <Thirddivs>
                                <Left src={left} />
                                <Back
                                  style={{ cursor: "pointer" }}
                                  onClick={handleClose}
                                >
                                  Back to itinerary
                                </Back>
                              </Thirddivs>
                            </Greendivs>
                            <Option>{z?.length} Options Found</Option>
                            <Mainflexcard>
                              {datas?.allHotels
                                ?.filter((datas) =>
                                  datas.name.toLocaleLowerCase().includes(query)
                                )
                                .map((i) => {
                                  return (
                                    <>
                                      <Maincard>
                                        <Carddiv>
                                          <Imagediv>
                                            <Img src={i.image?.url} />
                                          </Imagediv>
                                          <White>
                                            <Coral>{i.name}</Coral>
                                            <Loremtext>
                                              Non libero, ultricies magna ipsum
                                              egestas vel nec nunc, sed. Ut enim
                                              scelerisque orci in lacinia risus
                                              viverra non. Sodales nisl
                                              tristique adipiscing tincidun
                                            </Loremtext>
                                            <Star>
                                              <Satrimg src={star} />
                                              <Satrimg src={star} />
                                              <Satrimg src={star} />
                                            </Star>
                                            <Buttonclose
                                              style={{ cursor: "pointer" }}
                                              onClick={redirect}
                                            >
                                              Change
                                            </Buttonclose>
                                          </White>
                                        </Carddiv>
                                      </Maincard>
                                    </>
                                  );
                                })}
                            </Mainflexcard>
                          </Box>
                        </Modal>
                      </Modeldiv>
                    </center>
                  </Div>
                </Evening>
              </Divsec>
            </Secondgreen>
            <Hr1 src={line} />
          </Greendiv>
          <Fulldaysec>
            <Thirddiv>
              <Divthir>
                <Divfo>
                  <Day2>Day-2</Day2>
                </Divfo>
                <Vrs src={vr} />
                <Nextdiv>
                  <Fullday>Fullday</Fullday>
                  <Inner2>
                    <Lorem2>Penatibus duis felis orci, quisque </Lorem2>
                    <Add style={{ cursor: "pointer" }} onClick={handleOpen}>
                      {" "}
                      Add Avtivity
                    </Add>
                  </Inner2>
                </Nextdiv>
              </Divthir>
            </Thirddiv>
          </Fulldaysec>
          <Centerimg src={car} />

          <Classdiv>
            <Greendiv>
              <Firstgreen>
                <Divone>
                  <Night>Ross Garden</Night>
                  <Night1>-2 Night Stay</Night1>
                </Divone>
                <View>
                  <Viewgu>View Guide</Viewgu>
                </View>
              </Firstgreen>
              <Secondgreen>
                <Day1>Day-3</Day1>
                <Vr src={vr} />
                <Inner>
                  <Morning>Morning to Noon</Morning>
                  <Lore>
                    Penatibus duis felis orci, quisque sed.Nisi ultricies mauris
                    pretium, pretium elit.
                  </Lore>
                </Inner>
                <Vr src={vr} />
                <Evening>
                  <Eve>Evening</Eve>
                  <Div>
                    <Amet>Amet</Amet>
                    <Add style={{ cursor: "pointer" }} onClick={handleOpen}>
                      Add Activity
                    </Add>
                  </Div>
                </Evening>
              </Secondgreen>
              <Hr1 src={line} />
            </Greendiv>
            <Thirddiv>
              <Divthir>
                <Divfo>
                  <Day2>Day-4</Day2>
                </Divfo>
                <Vrs src={vr} />
                <Nextdiv>
                  <Fullday>Fullday</Fullday>
                  <Inner2>
                    <Lorem2>Penatibus duis felis orci, quisque </Lorem2>
                    <Add style={{ cursor: "pointer" }} onClick={handleOpen}>
                      {" "}
                      Add Avtivity
                    </Add>
                  </Inner2>
                </Nextdiv>
              </Divthir>
            </Thirddiv>
          </Classdiv>
          <Centerimg src={car} />

          <Classdiv>
            <Greendiv>
              <Firstgreen>
                <Divone>
                  <Night>Havelock</Night>
                  <Night1>-2 Night Stay</Night1>
                </Divone>
                <View>
                  <Viewgu>View Guide</Viewgu>
                </View>
              </Firstgreen>
              <Secondgreen>
                <Day1>Day-5</Day1>
                <Vr2 src={vr} />
                <Inner>
                  <Morning>Morning to Noon</Morning>
                  <Lore>
                    Penatibus duis felis orci, quisque sed.Nisi ultricies mauris
                    pretium, pretium elit.
                  </Lore>
                </Inner>
                <Vr2 src={vr} />
                <Evening>
                  <Eve>Evening</Eve>
                  <Div>
                    <Amet>Amet</Amet>
                    <Add style={{ cursor: "pointer" }} onClick={handleOpen}>
                      Add Activity
                    </Add>
                  </Div>
                </Evening>
              </Secondgreen>
              <Hr1 src={line} />
            </Greendiv>
            <Thirddiv>
              <Divthir>
                <Divfo>
                  <Day2>Day-6</Day2>
                </Divfo>
                <Vrs src={vr} />
                <Nextdiv>
                  <Fullday>Fullday</Fullday>
                  <Inner2>
                    <Lorem2>Penatibus duis felis orci, quisque </Lorem2>
                    <Add style={{ cursor: "pointer" }} onClick={handleOpen}>
                      {" "}
                      Add Avtivity
                    </Add>
                  </Inner2>
                </Nextdiv>
              </Divthir>
            </Thirddiv>
          </Classdiv>
        </Firstbigdiv>
        <Dot src={dot} />
      </Biggestdiv>
      <Helpdiv></Helpdiv>
      <Similar>SIMILAR ITINERARIES</Similar>
      <Packard />
      <Question>FAQ</Question>
      <Table>
        <Ul>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Can I the Customize the itinerary?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Can I change or replace a city in an itinerary?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How do I save the itinerary?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How Do I change an existing activity?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                Can I talk to the travel consultants to help me plan my
                itinerary better?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Ul>
      </Table>

      <Footer />
    </>
  );
};

export default Packagesdetail;
