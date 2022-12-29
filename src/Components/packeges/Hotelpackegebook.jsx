import React from "react";
import comfort from "../../assets/comfort.png";
import styled from "styled-components";
import detail1 from "../../assets/detail1.svg";
import plus from "../../assets/plus.svg";
import detail2 from "../../assets/detail2.svg";
import detail3 from "../../assets/detail3.svg";
import detail4 from "../../assets/detail4.svg";
import detail5 from "../../assets/detail5.svg";
import hr from "../../assets/hr.svg";
import pack from "../../assets/hotelbookpack.png";
import star from "../../assets/star.png";
import location from "../../assets/greenlocation.svg";
import dot from "../../assets/blackdot.svg";
import vertical from "../../assets/vertical.svg";
import pencil from "../../assets/pencil.svg";
import "./book.css";
import req from "../../assets/request.svg";
import call from "../../assets/call.svg";
import mail from "../../assets/greenmail.svg";
import tick from "../../assets/browntick.svg";
import boy from "../../assets/bro.png";
import right from "../../assets/rightarrow1.svg";
import dots from "../../assets/dot.svg";
import Footer from "../../Components/Home/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
// import TextField from '@mui/material/TextField';
import AccountCircle from "@mui/icons-material/AccountCircle";
import {  EmailShareButton , EmailIcon} from "react-share"
import {WhatsappShareButton , WhatsappIcon} from "react-share"

import logo1 from "../../assets/logo1.png";

const Comforts = styled.img`
  background-size: cover;
  height: 35vmax;
  object-fit: cover;
  width: 103%;
`;
const Ideal = styled.p`
  /* padding:2vmax 2vmax; */
  margin-top: 2vmax;
  margin-left: 2%;
  font-size: 1.8vmax;
  font-weight: 600;
  color: #000000;
  font-family: Poppins;
`;
const Icondiv = styled.div`
  display: flex;
  gap: 1vmax;
  /* margin : 0 0 0 2%; */
  /* width:4vmax; */
  padding: 2vmax 2vmax;
  justify-content: center;
  align-items: center;
  margin-left: -7%;
  /* margin-top:-2vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    /* gap:4.7vmax; */
    /* background:red; */
    /* padding:0; */
    margin: 0;
    justify-content: space-around;
    width: 58vmax;
    margin-left: -6%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color:red; */
    width: 100%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background-color:red; */
    width: 100%;
    margin-left: -6%;
    /* background:red; */
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* background-color: red; */
    margin-left: -5%;
    width: 100%;
  }
`;
const Detail1 = styled.img`
  height: fit-content;
  width: 3vmax;
  @media (min-width: 992px) and (max-width: 1024px) {
    height: 2vmax;
    width: 2vmax;
  }
`;
const Plus = styled.img`
  height: 1vmax;
  /* padding-top:1vmax; */
`;
const Textdiv1 = styled.div`
  display: flex;
  margin-left: 2vmax;
  gap: 8.5vmax;
  margin-top: -1.5vmax;

  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 9vmax;
  }
`;
const Plan = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const Hotel = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0 0 0 1.5%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0 0 0 1%;
  }
`;
const Transfer = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 0 0 0 -2%;
  }
`;
const Cruise = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  /* margin-left:-0.8vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    margin: 0 0 0 -6%;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    margin: 0 0 0 -3%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0 0 0 1%;
  }
`;
const Activity = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    margin: 0 0 0 -4%;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    margin: 0 0 0 -3%;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0 0 0 2%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0 0 0 2%;
  }
`;
const Hr = styled.img`
  /* margin-left:1vmax; */
  width: 100%;
  margin-top: -0.5vmax;
`;
const Whitedivs = styled.div`
  /* padding:2vmax 2vmax; */
  /* margin:2% 0 0 2vmax; */
  background: #ffffff;
  box-shadow: 6px 7px 33px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-top: 4vmax;
  display: flex;
  
  /* background:red !important; */
  /* width:55vmax; */
  /* height:19.9vmax; */
  height: 22.2vmax;
  /* margin-left:1vmax; */
  margin-left: 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* height:22.5vmax;
   width:53vmax; */
    /* height: 23.5vmax; */
    /* height:fit-content; */
    height:27vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 23.2vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 24vmax;
    /* background:red; */
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 23.4vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 22.2vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 21.4vmax;
  }
`;
const Pack = styled.img`
  height: 45.7vh;
  width: 20vw;
  /* margin:0; */
  /* margin-top:-1.9vmax; */
  object-fit: cover;
  background-size: cover;
  border-top-left-radius: 5px;
  /* border-bottom-left-radius: 5px; */
  /* margin-left:-2vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    /* height: 23.5vmax; */
    width:40%;
    height:100%;
    object-fit: cover;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 23.1vmax;
  }

  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 24vmax;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 23.4vmax;
    /* height:100%; */
    object-fit: cover;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 22.2vmax;
    object-fit: cover;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 21.4vmax;
    object-fit: cover;
  }
`;
const Secondtextdiv = styled.div`
  display: flex;
  gap: 12vmax;
  padding: 1vmax 1vmax;
  /* margin-top:-2vmax; */
  width: 100%;
`;
const Firsttext = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #000000;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 20px;
  }
`;
const Stardiv = styled.div`
  display: flex;
  gap: 0.5vmax;

  margin: 0 0 0 15%;

  @media (min-width: 993px) and (max-width: 1024px) {
    /* margin : 0 0 0 12%; */
  }
  @media (min-width: 1280px) and (max-width: 1365px) {
    margin: 0 0 0 19%;
  }

  @media (min-width: 1365px) and (max-width: 1450px) {
    margin: 0 0 0 10%;
    /* background:red; */
  }
`;
const Star1 = styled.img`
  height: fit-content;
  width: 1vmax;
`;
const Locationdiv = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap:10px;
  /* width: 6vmax; */
  /* background-color:red; */

  /* gap:1vmax; */
  /* background-color:blue; */
  /* padding:1vmax 1vmax; */
  /* margin-top:-1.4vmax; */
  /* gap:1vmax; */
  /* gap:1vmax;  */
  /* width:9vmax; */
  /* justify-content: space-between; */
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background: red; */
    padding: 0;
    margin: 0;
    /* width: 7vmax; */
    /* background:red; */
    /* justify-content: space-evenly; */
    align-items: center;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    padding: 0;
    margin: 0;
   
    
    align-items: center;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    padding: 0;
    margin: 0;
    /* width: 7vmax; */
    /* justify-content: space-around; */
    align-items: center;
  }

  @media (min-width: 1367px) and (max-width: 1440px) {
    padding: 0;
    margin: 0;
    /* width: 7vmax; */
    /* justify-content: space-around; */
    align-items: center;
    /* background:red; */
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    align-items: center;
    /* background-color: red;; */
    width: fit-content;
    gap: 0.4vmax;
  }
`;
const Locimg = styled.img`
  height: fit-content;
  width: 1vmax;
  /* padding-top:0.2vmax; */
`;
const Lorem = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* color:yellow; */
    font-size: 17px;
  }
`;
const Room = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  /* padding:1vmax 1vmax; */
  color: #494949;
  /* margin-top:-1.6vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 14px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
  }
`;
const Bunglaw = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  /* padding:1vmax 1vmax; */
  color: #494949;
  /* margin-top:-1.6vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 14px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 20px;
  }
`;
const Bigtable = styled.div`
  /* padding:1vmax 1vmax; */
  /* margin-top:-2.5vmax; */
  display: flex;
  /* gap:0.3vmax; */
  /* justify-content: space-between; */
  /* margin-left:0.5vmax; */

  /* width:25vmax; */
`;

const Dot = styled.img``;
const Li = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  /* padding:1vmax 1vmax; */
  color: #494949;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* background-color:red; */
    font-size: 16px;
  }
`;
const Bigtable1 = styled.div`
  /* padding:1vmax 1vmax; */
  /* margin-top:-3.8vmax; */
  display: flex;
  /* gap:0.7vmax; */
  /* margin-left:0.5vmax; */

  /* width:24vmax; */
`;
const Borad = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  /* padding:1vmax 1vmax; */
  color: #494949;
  /* margin-left:-0.4vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 16px;
  }
`;
const Adult = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  /* padding:1vmax 1vmax; */
  color: #494949;
  /* margin-left:-0.5vmax; */

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 16px;
  }
`;
const Bigtable2 = styled.div`
  /* padding:1vmax 1vmax; */
  /* margin-top:-3.8vmax; */
  display: flex;
  /* gap:0.7vmax; */
  /* margin-left:0.5vmax; */
`;
const Fit = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  /* padding:1vmax 1vmax; */
  color: #494949;
  /* margin-left:-0.5vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 16px;
  }
`;
const Griddiv = styled.div`
  display: grid;
  height: 1vmax;
  /* margin-left:1vmax; */
`;
const Change = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  width: 9vmax;
  height: 2vmax;
  margin: 0 0 0 63%;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    margin: 0% 0 0 70%;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 14px;
    margin: 0 0 0 70%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 14px;
    margin: 0 0 0 70%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 19px;
  }
`;
const Colordiv = styled.div`
  background: rgba(0, 85, 159, 0.25);
  /* height:5vmax; */
  margin-top: 1vmax;
  /* margin: 0 0 0 2%; */
  width: 35.8vw;
  /* display:grid; */
  /* font-size: 5rem; */

  @media (min-width: 993px) and (max-width: 1024px) {
   /* width:109%;
 height:5.4vmax;
 margin : 5% 0 0 -2%; */
  margin-top:6.2%;
    width: 100%;
  }
  @media (min-width: 1025px) and (max-width: 1290px) {
    margi-top: 4%;
    height: 4.6vmax;
    width: 111.7%;
  }

  @media (min-width: 1291px) and (max-width: 1366px) {
    height: 4.4vmax;
    width: 119%;
    /* background:red; */
  }

  @media (min-width: 1440px) and (max-width: 1530px) {
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    width: 35.7vmax;
    height: 4.7vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    width: 35.7vmax;
  }
`;
const Smalltext1 = styled.div`
  text-align: left;
  /* background: red; */
  /* margin : 0 0 0 2%; */

  @media (min-width: 993px) and (max-width: 1024px) {
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
  }
  @media (min-width: 1440px) and (max-width: 1530px) {
    margin: 1% 0 0 0;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: 1% 0 0 0%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
  }
`;
const Kindly = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin: 0 0 0 3%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 10px;
    padding: 0 0 0 1%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 16px;
  }
  color: #000000;
`;
const Avalaible = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin: 0 0 0 3%;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 10px;
    padding: 0 0 0 1%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 16px;
  }
`;
const Breakfast = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin: 0 0 0 3%;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 10px;
    padding: 0 0 0 1%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 16px;
  }
`;
const Money = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;

  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 10px;
    padding: 0 0 0 1%;
  }
`;
const Nextwhitediv = styled.div`
  padding: 2vmax 2vmax;
  background: #ffffff;
  box-shadow: 6px 7px 33px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  height: 12vmax;
  width: 52vmax;
  margin-top: 4vmax;
  margin-left: 1vmax;
`;
const Textdiv2 = styled.div`
  display: flex;

  gap: 9vmax;
`;
const Firstgrid = styled.div`
  display: grid;
  padding: 2vmax 0;
  gap: 1vmax;
  height: 10vmax;
  width: 16vmax;
`;

const Inclusion = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
  }
`;
const Nightstay = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #000000;
  margin-top: -3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 22px;
  }
`;
const Vertical = styled.img`
  height: 11vmax;
  padding-top: 2vmax;
`;
const Secondgrid = styled.div`
  display: grid;
  padding: 2vmax 0;
  gap: 1vmax;
  margin-left: 3vmax;
`;
const Exclusions = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
  }
`;
const Meals = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 22px;
  }
`;
const Expenses = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 22px;
  }
`;
const Rightdiv = styled.div`
  margin-top: 2vmax;
  width: 100%;
`;
const Mainfirst = styled.div`
  width: 60%;
  /* background-color: blue; */
`;
const Mainsecond = styled.div`
  width: 30%;
`;

const Mainflexdiv = styled.div`
  display: flex;
  padding: 0 2%;
  justify-content: space-between;
`;
const Lightgreen = styled.div`
  background: #5ccba0;
  height: 4vmax;
  width: 102%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left:-2vmax; */
  gap: 1vmax;
  /* background:red !important; */

  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color:red; */
    /* margin-left:2%; */
  }
`;
const Sep = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  /* padding-top:1.1vmax; */
  /* margin-left:2.3vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
    padding-left: 3%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    padding-left: 4%;
    font-size: 18px;
  }
`;
const John = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  /* padding-top:1.1vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Adults = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  /* padding-top:1.1vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Rooms = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  /* padding-top:1.1vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Pencil = styled.img`
  height: fit-content;
  width: 1vmax;
  padding-left: 8vmax;
  /* padding-top:1.2vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 0 0 0 -6%;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 4% 0 0 30%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 4% 0 0 34%;
  }
`;
const Maindarklight = styled.div`
  background: #9de0c6;
  display: grid;
  height: 35vmax;

  width: 102%;
`;
const Pricediv = styled.div`
  @media (min-width: 1280px) and (max-width: 1366px) {
    margin: 2% 0 0 3.2%;
  }
  display: flex;
  margin: 2% 4% 0 6.5%;
  /* background-color: red; */

  /* gap:19.8vmax; */
  /* margin-left:1vmax; */
  justify-content: space-between;

  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 2% 2% 0 4%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background:blue; */
    justify-content: space-between;
    /* margin: 2% 0 0 -2%; */
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background:blue; */
    justify-content: space-between;

    /* margin: 2% 0 0 -2%; */
  }

  @media (min-width: 1367px) and (max-width: 1460px) {
    justify-content: space-between;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: 3% 0 0 0%;
    padding: 0 3% 0 3%;
    align-items: center;
    justify-content: space-between;
    /* width:100%; */
    /* background:red; */
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 3% 0 0 3%;
  }
`;
const Prices = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* margin-left:1.4vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    padding-left: 4%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 15px;
    padding-left: 5%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 15px;
    padding-left: 5%;
  }

  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 18px;
    padding-left: 5%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
    padding-left: 3.7%;
  }
`;
const Doolar = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  /* align-items: right; */
  /* justify-items: right; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    /* color:yellow; */
    margin-right: 10px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 15px;
    /* padding:0; */
    /* margin : 0 0 0 -2vmax; */
    /* margin:0; */
    /* background:red; */
    margin-right: 5%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    margin-right: 4%;
    font-size: 15px;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    margin: 0 0 0 3%;
    /* color:yellow; */
  }
  @media (min-width: 1640px) and (max-width: 1750px) {
    margin: 0 2% 0 0%;
    /* color:yellow; */
    /* color:yellow; */
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
    margin-right: 3%;
  }
`;
const Pricediv1 = styled.div`
  display: flex;
  /* gap:5.8vmax;
    
  */

  /* margin-left:2vmax; */
  justify-content: space-between;
  margin: 0 2% 0 6.5%;

  @media (min-width: 1280px) and (max-width: 1366px) {
    gap: 4.5vmax;
  }

  @media (min-width: 1367px) and (max-width: 1460px) {
    gap: 4.5vmax;
  }
`;
const Cancelation = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ae0000;
  text-decoration: underline;
  /* margin-left:0.4vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    margin: 0;
    padding-left: 2%;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
    margin-left: 1%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
  }
`;
const Book = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  height: 2vmax;
  width: 7vmax;
  border: none;
  /* margin-left:5vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    margin: 0 0 0 8%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 11px;
    margin: 0 0 0 8%;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 15px;
    font-family: Poppins;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 0 0 0 19%;
    font-size: 21px;
  }
`;
const Hr1 = styled.hr`
  height: 1px;
  background-color: gray;
  border: none;
`;
const Hr2 = styled.hr`
  height: 1px;
  background-color: gray;
  border: none;
`;
const Hr3 = styled.hr`
  height: 1px;
  background-color: gray;
  border: none;
`;
const Pricediv2 = styled.div`
  display: flex;
  gap: 17.9vmax;

  margin-left: 1vmax;
  @media (min-width: 1367px) and (max-width: 1460px) {
    justify-content: space-between;
  }
`;

const Payble = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  margin-left: 1.4vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 14px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
  }
`;
const Doolar1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  align-items: right;
  justify-items: right;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 15px;
    /* color:yellow; */
    /* margin-left:-9px; */
    margin-left: 1%;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    margin: 0 4% 0 -3%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
    margin-left: 2%;
    /* color:yellow; */
  }
`;

const Pricediv3 = styled.div`
  display: flex;
  gap: 13.5vmax;
  margin-left: 1vmax;
  @media (min-width: 1367px) and (max-width: 1460px) {
    justify-content: space-between;
  }
`;
const Doolar3 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  align-items: right;
  justify-items: right;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    padding: 0 0 0 1%;
  }

  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 15px;
    /* margin : 0 0 0 -1.5% ; */
    margin-left: 1.5%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 17px;
    margin: 0 0 0 1.5%;
    /* color:yellow; */
  }

  @media (min-width: 1367px) and (max-width: 1460px) {
    margin: 0 3.6% 0 -3%;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0 0 0 2%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    /* padding: 0 0 0 4%; */
    font-size: 21px;
    /* color:yellow; */
    margin-left: 2.4%;
  }
`;
const Paybale1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  margin-left: 1.4vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 14px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 21px;
  }
`;
const Callbackdiv = styled.div`
  display: flex;
  gap: 1vmax;

  margin-left: 2.3vmax;
`;
const Requests = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding-top: 0.6vmax;
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:21px; */
    padding-top: 1%;
  }
`;
const Request1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Calldiv = styled.div`
  display: flex;
  gap: 1vmax;

  margin-left: 2.3vmax;
`;
const Call = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding-top: 0.6vmax;
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:21px; */
    padding-top: 1%;
  }
`;
const Terms = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Maildiv = styled.div`
  display: flex;
  gap: 1vmax;

  margin-left: 2.3vmax;
`;
const Mail = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding-top: 0.5vmax;
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:21px; */
    padding-top: 1%;
  }
`;
const Quote = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Advantages = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;

  margin-left: 2.3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const Writediv = styled.div`
  display: flex;
  gap: 1vmax;

  margin-left: 2.3vmax;
`;
const Tick = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding-top: 0.2vmax;
`;
const Wtext1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #6d6d6d;
`;
const Nextlightdiv = styled.div`
  display: flex;
  height: 5vmax;
  background: #9de0c6;
  border-radius: 5px;
  margin-top: 3vmax;
  /* width:102%; */
  gap: 2vmax;
  justify-content: center;
  align-items: center;
`;
const Bro = styled.img`
  height: 4vmax;
  width: 4vmax;
  /* margin-top:0.5vmax; */
`;
const WhatsApps = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  /* margin-top:2vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Rightarrow = styled.img`
  height: 1vmax;
  width: 1vmax;
  /* margin-top:2.4vmax; */
`;
const Dots = styled.img`
  height: 18vmax;
  margin-top: 2vmax;
`;
const Mainflex = styled.div`
  /* background:red; */
  display: flex;
  flex-direction: column;
  /* padding:0; */
  margin: 0;
  /* justify-content: center;
  */
  /* width:100%; */
  gap: 0.5vmax;
  margin: 0 0 0 2%;
  padding: 1% 2% 0 2%;
  /* align-items: center; */
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  /* background:red; */
  gap: 0.4vmax;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  // backgroundColor:'red',
  // border: '2px solid #000',
  outline: "none",
  boxShadow: 24,
  borderRadius: "5px",
  p: "4% 2%",
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  outline: "none",
  boxShadow: 24,
  borderRadius: "5px",
  p: "4% 2%",
  overflowX:"scroll",
  height:"33vmax"
};

const Calldivone = styled.div`
  /* background-color:red; */
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  justify-content: center;
  align-items: center;
  /* background:pink;  */
  width: 50%;
  /* padding: 0 2%; */
`;
const Callyor = styled.p`
  font-weight: 700;
  font-family: Poppins;
  font-size: 23px;
  color: #000000;
`;
const Details = styled.p`
  font-weight: 500;
  font-family: Poppins;
  font-size: 18px;
  color: #000000;
  text-align: center;
  /* width:70%; */
`;
const Maincalldiv = styled.div`
  display: flex;
  justify-content: space-around;

  /* background-color:red; */
  /* padding: 2% 2%; */
`;
const Secondcalls = styled.div`
  width: 30%;
  /* background:blue; */
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vmax;
  /* justify-content:flex-start; */
  /* background:blue; */
`;
const Informed = styled.button`
  background: #145843;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  border-radius: 5px;
  height: 3.5vmax;
  width: 14vmax;
  font-family: Poppins;
  outline: none;
  border: none;
`;
const Boxonediv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  /* gap: 1vmax; */
  /* background:red; */
  /* overflow-y: scroll; */
  /* height:36vmax; */
  justify-content: center;
  /* align-items: center; */
`;
const Refunds = styled.p`
  font-weight: 700;
  font-size: 40px;
  color: #000000;

  font-family: Poppins;
`;
const Rights = styled.p`
  font-weight: 500;
  font-size: 17px;
  text-align: justify;
  color: #000000;
  font-family: Poppins;
`;
const Chargesdiv = styled.div`


justify-content:center;
align-items : center;
display:flex;
justify-content:center;
flex-direction: column;
/* background-color:red; */
width:30%;
 padding: 3% 2%;
 gap:1vmax;
`;
const Chargesdiv1 = styled.div`
justify-content:center;
align-items : center;
display:flex;
justify-content:center;
flex-direction: column;
/* background-color:red; */
width:30%;
 padding: 3% 2%;
 gap:1vmax;
`
const Bigchargesdiv = styled.div`
  display:flex;
  /* background-color:red; */
  /* justify-content:center;
  align-items:center; */
  gap:1vmax;
`
const Coloronediv = styled.div`
   justify-content: center;
   align-items : center;
   background: #145843;
     text-align:center;
   padding: 5% 3%;

`;
const Colordivtwo = styled.div`
   justify-content: center;
   align-items : center;
   background:lightgray;

   padding: 3% 3%;

`;
const Timeof = styled.p`
  font-size:15px;
  color:#FFFFFF;
  font-weight:600;
  font-family: Poppins;
  text-align:center;

`
const Daysbefore = styled.p`
 font-size:15px;
  color:#FFFFFF;
  font-weight:400;
  font-family: Poppins;
`
const Subject = styled.p`
  color:#000000;
  font-weight:500;
  font-family:Poppins;
  font-size:16px;
  padding: 0 3.5%;
`
const Hotelpackegebook = ({}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const { id } = useParams();
  console.log(id);

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `https://travel-andman.herokuapp.com/api/user/hotel/${id}`
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);
  const navigate = useNavigate();
  const handle = () => {
    navigate("/userdetail");
  };

  const change = () => {
    /* handleopen() */
    navigate("/packages");
  };
  const url = window.location.href
  return (
    <>
      <Comforts src={comfort} />
      <Mainflexdiv>
        <Mainfirst>
          <Ideal>Ideal 6 day Andaman Packages for Family</Ideal>
          <Icondiv>
            <Div>
              <Detail1 src={detail1} />
              <Plan>Plan</Plan>
            </Div>

            <Plus src={plus} />
            <Div>
              <Detail1 src={detail2} />
              <Hotel>Hotel</Hotel>
            </Div>
            <Plus src={plus} />
            <Div>
              <Detail1 src={detail3} />
              <Transfer>Transfer</Transfer>
            </Div>
            <Plus src={plus} />
            <Div>
              <Detail1 src={detail4} />
              <Cruise>Cruise</Cruise>
            </Div>
            <Plus src={plus} />
            <Div>
              <Detail1 src={detail5} />
              <Activity>Activity</Activity>
            </Div>
          </Icondiv>
          <Textdiv1></Textdiv1>
          <Hr src={hr} />

          {
            <Whitedivs>
              <Pack src={datas?.hotel?.image?.url} />
              <Griddiv>
                <Secondtextdiv>
                  <Firsttext>{datas?.hotel?.name}</Firsttext>
                  <Stardiv>
                    <Star1 src={star} />
                    <Star1 src={star} />
                    <Star1 src={star} />
                  </Stardiv>
                </Secondtextdiv>
                <Mainflex>
                  <Locationdiv>
                    <Locimg src={location} />
                    <Lorem>{datas?.hotel?.location}</Lorem>
                  </Locationdiv>
                  <Room>Room Details</Room>
                  <Bunglaw>Deluxe Beach Bungalow</Bunglaw>
                  <Bigtable>
                    <Li> . Refundable</Li>

                    <Li> . Wifi</Li>

                    <Li> . Air Conditionar</Li>
                  </Bigtable>

                  <Bigtable1>
                    <Borad> . Full Board</Borad>

                    <Adult> . Accomodates 2 adults</Adult>
                  </Bigtable1>
                  <Bigtable2>
                    <Fit> . Area 431 Sqft</Fit>
                  </Bigtable2>
                </Mainflex>
                <Change style={{ cursor: "pointer" }} onClick={change}>
                  Change hotel
                </Change>
                <Colordiv>
                  <Smalltext1>
                    <Kindly>
                      Kindly note that breakfast will be served from 7 AM - 10
                      AM
                    </Kindly>
                    <Avalaible>
                      {" "}
                      Early check-in and late check-out are subject to
                      availability{" "}
                    </Avalaible>
                    <Breakfast>
                      Please note that Veg food options are very limited in
                      buffet breakfast
                    </Breakfast>
                  </Smalltext1>
                </Colordiv>
              </Griddiv>
            </Whitedivs>
          }

          <Nextwhitediv>
            <Textdiv2>
              <Firstgrid>
                <Inclusion>Inclusion</Inclusion>
                <Nightstay>3 Night stay</Nightstay>
              </Firstgrid>
              <Vertical src={vertical} />
              <Secondgrid>
                <Exclusions>Exclusions</Exclusions>
                <Meals>
                  Meals not mentioned in the itinerary or inclusions
                </Meals>
                <Expenses>Expenses of personal nature</Expenses>
              </Secondgrid>
            </Textdiv2>
          </Nextwhitediv>
        </Mainfirst>
        <Mainsecond>
          <Rightdiv>
            <Lightgreen>
              <Sep>15 Sep</Sep>
              <John>John</John>
              <Adults>Adults</Adults>
              <Rooms>Rooms</Rooms>
              <Pencil src={pencil} />
            </Lightgreen>
            <Maindarklight>
              <Pricediv>
                <Prices>Price</Prices>
                <Doolar>${datas?.hotel?.price}</Doolar>
              </Pricediv>
              <Pricediv1>
                <Cancelation>Cancellation Policy</Cancelation>
                <Book onClick={handle} style={{ cursor: "pointer" }}>
                  Book Now
                </Book>
              </Pricediv1>
              <Hr1></Hr1>
              <Pricediv2>
                <Payble>Trip Cost</Payble>
                <Doolar1>$250</Doolar1>
              </Pricediv2>
              <Pricediv3>
                <Paybale1>Paybale Amount</Paybale1>
                <Doolar3>$250</Doolar3>
              </Pricediv3>
              <Hr2></Hr2>
              <Callbackdiv  >
                <Requests onClick={handleOpen}  src={call}  style={{ cursor: "pointer" }}/>
                <Request1 onClick={handleOpen} style={{ cursor: "pointer" }}>
                  Request Callback
                </Request1>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Maincalldiv>
                      <Calldivone>
                        <Callyor>We'll Call You</Callyor>
                        <Details>
                          Have a Question? Enter Your deatils & choose a time
                          that works for you
                        </Details>
                      </Calldivone>
                      <Secondcalls>
                        <FormControl variant="standard">
                          <InputLabel
                            sx={{ fontSize: "20px" }}
                            htmlFor="input-with-icon-adornment"
                          >
                          Sam
                          </InputLabel>
                          <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        <FormControl variant="standard">
                          <InputLabel
                            sx={{ fontSize: "20px" }}
                            htmlFor="input-with-icon-adornment"
                          >
                          Sam
                          </InputLabel>
                          <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        <FormControl variant="standard">
                          <InputLabel
                            sx={{ fontSize: "20px" }}
                            htmlFor="input-with-icon-adornment"
                          >
                          Sam
                          </InputLabel>
                          <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        <FormControl variant="standard">
                          <InputLabel
                            sx={{ fontSize: "20px" }}
                            htmlFor="input-with-icon-adornment"
                          >
                          Sam
                          </InputLabel>
                          <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                        <Informed>Keep me Informed</Informed>
                      </Secondcalls>
                    </Maincalldiv>
                  </Box>
                </Modal>
              </Callbackdiv>

              <Calldiv >
                <Call onClick={handleOpen1}  style={{ cursor: "pointer" }} src={req} />
                <Terms style={{ cursor: "pointer" }}  onClick={handleOpen1}>
                  Cancellation Terms
                </Terms>
                <Modal
                  open={open1}
                  onClose={handleClose1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style1}>
                    <Boxonediv>
                      <Refunds>Cancellation & Refunds</Refunds>
                      <Rights>
                        We Understand that Your travel plans may change. With
                        that in mind, Pickyourtrail has a very simple
                        Cancellation policy. Regardless of whether you mad your
                        reservation using our mobile app or via our travel
                        consultaion we have standard Cancellation policy as
                        depicted below
                      </Rights>
                      <Bigchargesdiv>
                      <Chargesdiv>
                        <Coloronediv>
                        <Timeof>Time Of Cancellation</Timeof>
                        <Daysbefore>(Dyas before departure)</Daysbefore>
                        </Coloronediv>
                        <Coloronediv>
                        <Timeof>Time Of Cancellation</Timeof>
                        <Daysbefore>(Dyas before departure)</Daysbefore>
                        </Coloronediv>
                        <Coloronediv>
                        <Timeof>Time Of Cancellation</Timeof>
                        <Daysbefore>(Dyas before departure)</Daysbefore>
                        </Coloronediv>
                        <Coloronediv>
                        <Timeof>Time Of Cancellation</Timeof>
                        <Daysbefore>(Dyas before departure)</Daysbefore>
                        </Coloronediv>
                        
                      </Chargesdiv>
                      
                      <Chargesdiv1>
                      <Coloronediv>
                      <Timeof>Time Of Cancellation</Timeof>
                      <Daysbefore>(Dyas before departure)</Daysbefore>
                      </Coloronediv>
                      <Coloronediv>
                      <Timeof>Time Of Cancellation</Timeof>
                      <Daysbefore>(Dyas before departure)</Daysbefore>
                      </Coloronediv>
                      <Coloronediv>
                      <Timeof>Time Of Cancellation</Timeof>
                      <Daysbefore>(Dyas before departure)</Daysbefore>
                      </Coloronediv>
                      <Coloronediv>
                      <Timeof>Time Of Cancellation</Timeof>
                      <Daysbefore>(Dyas before departure)</Daysbefore>
                      </Coloronediv>
                      </Chargesdiv1>
                      </Bigchargesdiv>
                      <Subject>Subject To Terms and Conditions and payment recived till date</Subject>
                    </Boxonediv>
                  </Box>
                </Modal>
              </Calldiv>
              <Maildiv>
               
               
              <EmailShareButton EmailShareButton url={url} style={{height:'1.5vmax ' , width:'1.5vmax'   }} iconFillColor="#145843" >
              
             <EmailIcon size={32}  bgStyle={{objectFit:"fill" }} round/>
               
                </EmailShareButton>
                <Quote>Mail this Quote</Quote>
              </Maildiv>
              <Hr3></Hr3>
              <Advantages>SeeAndman Advantages</Advantages>
              <Writediv>
                <Tick src={tick} />
                <Wtext1>All inclusive real-time pricing</Wtext1>
              </Writediv>
              <Writediv>
                <Tick src={tick} />
                <Wtext1>All inclusive real-time pricing</Wtext1>
              </Writediv>
              <Writediv>
                <Tick src={tick} />
                <Wtext1>All inclusive real-time pricing</Wtext1>
              </Writediv>
            </Maindarklight>
            <Nextlightdiv>
            <WhatsappShareButton  url={url} style={{height:'1.5vmax ' , width:'1.5vmax' }} iconFillColor="#145843">
            <WhatsappIcon size={32}/>
              </WhatsappShareButton>
              <WhatsApps>WhatsApp SeeAndamans</WhatsApps>
              <Rightarrow src={right} />
            </Nextlightdiv>
            <Dots src={dots} />
          </Rightdiv>
        </Mainsecond>
      </Mainflexdiv>
      <Footer />
    </>
  );
};

export default Hotelpackegebook;
