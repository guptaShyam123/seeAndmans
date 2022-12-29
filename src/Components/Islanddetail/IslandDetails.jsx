import React from "react";
import styled from "styled-components";
import blair from "../../assets/portblair.png";
import useSWR from "swr";
import img1 from "../../assets/island16.png";
import img17 from "../../assets/island17.png";
import img18 from "../../assets/island18.png";
import img2 from "../../assets/iland2.png";
import img3 from "../../assets/iland3.png";
import img4 from "../../assets/iland4.png";
import star from "../../assets/star.png";
import img5 from "../../assets/iland5.png";
import img6 from "../../assets/iland6.png";
import img7 from "../../assets/iland7.png";
import img8 from "../../assets/iland8.png";
import img9 from "../../assets/iland9.png";
import img10 from "../../assets/iland11.png";
import img11 from "../../assets/iland12.png";
import img12 from "../../assets/iland13.png";
import icon1 from "../../assets/waterking5.svg";
import icon2 from "../../assets/taxiback.svg";
import icon3 from "../../assets/hotel1.png";
import icon4 from "../../assets/ferry1.svg";
import icon5 from "../../assets/ship1.svg";
import locationss from "../../assets/greenlocation.svg";
import { cards1 } from "../Home/cards1";
import { useNavigate, useParams, Link } from "react-router-dom";
import arrow from "../../assets/bluearrow.svg";
import Footer from "../Home/Footer";
import andman from "../../assets/Andmanbanner.png";
import axios from "axios";
import { baseURL } from "../../Components/Apibaseurl";

const Banner = styled.div`
  width: 100%;
  height: 37vmax;
  /* background-position: center; */
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;

  height: 100%;
`;
const Inputbanner = styled.div`
  margin: 3% 2% 0 2%;
  display: flex;
  justify-content: space-between;
`;
const First = styled.div`
  background: rgba(92, 203, 160, 0.6);
  border-radius: 36px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  height: 2vmax;
  width: 6vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 16px;
    padding: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  @media (min-width: 1367px) and (max-width: 1460px) {
    font-size: 18px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 5px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
const Second = styled.p`
  background: rgba(92, 203, 160, 0.6);
  border-radius: 36px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  height: 2vmax;
  width: 6vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 16px;
    padding: 3px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    font-size: 18px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 5px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
const Third = styled.p`
  background: rgba(92, 203, 160, 0.6);
  border-radius: 36px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  height: 2vmax;
  width: 8.4vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 16px;
    padding: 3px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    font-size: 18px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 5px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
const Four = styled.p`
  background: rgba(92, 203, 160, 0.6);
  border-radius: 36px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  height: 2vmax;
  width: 16.3vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 16px;
    padding: 3px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    font-size: 18px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 5px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
const Five = styled.div`
  background: rgba(92, 203, 160, 0.6);
  border-radius: 36px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  height: 2vmax;
  width: 9.4vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 16px;
    padding: 3px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    font-size: 18px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 5px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
const Popular = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin: 3% 0 0 0;
  color: #145843;
  text-transform: uppercase;
`;
const Popularsimilar = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin: 3% 0 0 0;
  color: #145843;
  text-transform: uppercase;

  @media (min-width: 993px) and (max-width: 1024px) {
    margin-top: -2%;
  }
  @media (min-width: 1640px) and (max-width: 1745px) {
    margin-top: 5%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    margin-top: 9%;
  }
`;
const Explore = styled.p`
  text-align: right;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  text-decoration: underline;
  color: #0085ff;
  margin: 2% 2% 0 0%;
  /* color:yellow; */
`;
const Explore1 = styled.p`
  text-align: right;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  text-decoration: underline;
  color: #0085ff;
  margin: 2% 5% 0% 0%;
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin: 2% 6% 0 0;
    font-size: 26px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    margin: 2% 6% 0 0;
    font-size: 26px;
  }
  /* color:yellow; */
`;
const Carddiv = styled.div`
  /* margin:2% 2% 0 2%; */

  display: flex;
  margin: 2% 2% 0 2%;
  gap: 2vmax;
  width: 96%;
  justify-content: space-around;
`;
const Card = styled.div`

  display: flex;
  /* height:30vh; */
  flex-direction: column;
  /* padding:0; */
  gap: 100px;
  align-items: center;

  /* justify-content: center; */
`;
const Iland = styled.img`
  /* width: 100%; */
  /* height:30vh; */
  width: 20vw;
  height: 23vh;
  object-fit: cover;
`;
const Innerwhite = styled.div`
  width: 20vw;
  height: 23vh;
  margin: 0;
  padding: 0;
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  /* height: 40vh; */
  /* margin: -1.4% 0 0 0; */
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 16vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 16vmax;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 15vmax;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 13vmax;
  }
`;
const Hotels = styled.p`
  padding: 7% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* font-size:13px;
  font-weight:600; */
    padding: 2%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    padding: 2%;
    font-size: 19px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    padding: 2%;
    font-size: 20px;
  }
`;
const Lorem = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11.6px;
  text-align: justify;
  color: #000000;
  padding: 2% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
    /* color:yellow; */
    font-weight: 500;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    text-align: justify;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    text-align: justify;
  }

  @media (min-width: 1640px) and (max-width: 1740px) {
    text-align: justify;
    font-size: 14px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 14px;
    text-align: justify;
  }
`;
const Mainstar = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 4% 2% 0 2%;
`;
const Stardiv = styled.div`
  display: flex;
  gap: 0.5vmax;
`;
const Star = styled.img`
  height: fit-content;
  width: 1vmax;
`;
const Dollar = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 20px;
  }
`;
const Button = styled.button`
  margin: 5% 2% 0 2%;
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  height: 2vmax;
  width: 8vmax;
  border: 1px solid #145843;
  outline: none;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Popularss = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin: 5% 2% 0 2%;
  color: #145843;
  @media (min-width: 1840px) and (max-width: 14px) {
  }
`;
const Popularss1 = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin: 5% 2% 0 2%;
  color: #145843;
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* color:yellow; */
    margin-top: 6vmax;
  }
`;
const Popularss12 = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  margin: 2% 2% 0 2%;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    margin-top: -2%;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* color:yellow; */
    margin-top: 8vmax;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin-top: 6%;
  }
`;
const Nextcarddiv = styled.div`
  margin: 3% 0% 0 0%;
  display: flex;
  justify-content: space-around;
  /* gap:5.3vmax; */
  /* background:red; */
  width: 100%;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color: red; */
    justify-content: space-evenly;
    gap: 0;
    /* width:95%; */
    margin: 3% 0 0 -2%;
    /* margin-left:0; */
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    /* background-color: red; */
    justify-content: space-evenly;
    gap: 0;
    /* width:95%; */
    margin: 3% 0 0 -2%;
    /* margin-left:0; */
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    justify-content: space-evenly;
    gap: 0;
    /* width:95%; */
    margin: 3% 0 0 -2%;
  }
`;
const Nextcard = styled.div`
  width: 25%;
  /* background:red; */
`;
const Iland1 = styled.img`
  /* width:90%; */
  height: 38.7%;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 35%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 38.7%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 39.7%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 40.3%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    height: 47.6%;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    height: 51%;
  }
`;
const Innerwhitediv1 = styled.div`
  width: 94.2%;
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  margin: -1.5% 0 0 0;
  height: 20vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 22.8vmax;
    margin-top: -2.5%;
    width: 27.7vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 22.8vmax;
    width: 27.3vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 22vmax;
    width: 26.6vmax;
    /* background: red; */
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 20vmax;
    width: 25.1vmax;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    height: 20.5vmax;
    width: 28vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    height: 19vmax;
    width: 27vmax;
  }
`;
const Icon1 = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 1.4vmax;
    width: 1.4vmax;
  }
`;

const Icon2 = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 1.4vmax;
    width: 1.4vmax;
  }
`;
const Icon3 = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 1.4vmax;
    width: 1.4vmax;
  }
`;
const Icon4 = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 1.4vmax;
    width: 1.4vmax;
  }
`;
const Icon5 = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 1.4vmax;
    width: 1.4vmax;
  }
`;
const Icondiv = styled.div`
  display: flex;
  padding: 2.5% 0 0 0;
  justify-content: center;
  align-items: center;
  display: flex;
  /* width:25vmax; */
  width: 100%;

  /* margin-left:-2%; */
  justify-content: space-between;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color: red; */

    /* justify-content:space-evenly; */
    /* pading:0; */
    margin: 0;
    width: 100%;
    /* margin-top:0; */
    /* width:fit-content; */

    /* margin-left:0; */
    /* padding: 02% 0 2%; */
    /* justify-content: space-around;; */
    /* width:100%; */
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color: red; */
    /* width:100%;
     padding:0;
     margin:0;
     justify-content: space-around; */
    /* background:red; */
    /* width:fit-content; */
    /* width:90%; */
    /* padding:1; */
    margin: 0;
  }
`;
const Textdiv = styled.div`
  margin: 1% 2% 0 0;
  /* justify-content:space-between; */
  display: flex;
  /* background-color: blue; */
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:red; */
    /* width:26.6vmax; */
  }
`;
const Hotels7 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 9px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 15px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 15px;
  }
`;
const Cab3 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  color: #145843;
  /* padding: 0 0 0 3%; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 9px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 15px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 15px;
  }
`;
const Ferries = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  color: #145843;
  /* padding: 0 0 0 3%; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 9px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 15px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 15px;
  }
`;
const Cruise = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  color: #145843;
  /* padding: 0 0 0 3%; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 9px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 15px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 15px;
  }
`;

const Packagename = styled.p`
  padding: 1.5% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 16px;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 1px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 17px;
  }
`;
const Loactiondiv = styled.div`
  margin: 2% 2% 0 2%;
  display: flex;
  gap: 1vmax;
`;
const Loaction = styled.img`
  height: 1vmax;
  width: 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    padding: 1% 0 0 0;
  }
`;
const Port = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #145843;
  margin: -0.4% 0 0 0;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* padding: 1% 0 0 0; */
    font-size: 13px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 15px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 15px;
  }
`;
const Stext = styled.p`
  padding: 3% 2% 0 2%;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: #000000;
  text-align: justify;
  line-height: 16px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 9px;
    text-align: justify;
    line-height: 12px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 12px;
    text-align: justify;
    line-height: 15px;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 12px;
    text-align: justify;
    line-height: 15px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 13px;
    text-align: justify;
    line-height: 15px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 14px;
    text-align: justify;
    line-height: 19px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 14px;
    text-align: justify;
    line-height: 20px;
  }
`;
const Stardiv1 = styled.div`
  display: flex;
  margin: 4% 2% 0 2%;
  justify-content: space-between;
  @media (min-width: 993px) and (max-width: 1024px) {
    margin-top: 4%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin-top: 4%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background:red; */
    /* margin-top: 1%;
width:fit-content;
padding: 0 2% 0 2%; */
    margin-top: 4%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* font-size:12px;
  text-align: justify;
  line-height: 15px;; */
    margin-top: 4%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin-top: 4%;
  }
`;
const Star1 = styled.div`
  display: flex;
  gap: 0.5vmax;
`;
const Starimg = styled.img`
  height: fit-content;
  width: 1vmax;
`;
const Dollar1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #145843;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const Button2 = styled.button`
  margin: 3% 0 0 0;
  width: 8vmax;
  height: 2.5vmax;
  font-size: 18px;
  color: #000000;
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border: 1px solid #145843;
  outline: none;
  font-weight: 400;
  font-family: Poppins;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 22px;
  }
`;
const Activity = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  color: #145843;
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 10px;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 15px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 15px;
  }
`;
const Maindiv = styled.div`
  margin-top: 4vmax;
  display: flex;
  /* background-color: violet; */
  gap: 3vmax 3vmax;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;
const Carddivs = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 28%;
  height: 10vmax;
  /* background-color: blue; */
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.1);
`;
const Imgs = styled.img`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  object-fit: cover;
  object-fit: fill;
  width: 35%;
  height: 100%;
`;
const Whitediv = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 65%;
  height: 100%;
  /* background-color: red; */
`;
const P = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  margin: 1vmax 1vmax;
  width: 15vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 15px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 20px;
  }
`;
const Hr = styled.hr`
  background: black;
  height: 0.5px;
  border: none;

  /* margin-top:0.5vmax; */
`;
const Textdivs = styled.div`
  display: flex;
  align-items: flex-end;
  /* justify-content: center; */
  gap: 1vmax;
  height: 40%;
  /* background-color: yellow; */
  /* padding:1vmax 1vmax; */
  /* margin-top:0.1vmax; */
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:20px; */
    /* background:red; */
  }
`;
const Explores = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #0085ff;
  padding: 0 0 5px 10px;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 20px;
    padding-left: 14px;
  }
`;
const Blue = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding: 0 0 10px 0;
  /* padding-top:0.6vmax; */
`;
const Thing = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #145843;
  text-align: center;
  margin-top: 5vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 2% 0 0 0;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 3% 0 0 0;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    margin: 8% 0 0 0;
  }
`;
const Firstdiv = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color:red; */
  align-items: center;
  justify-content: center;
  gap: 0.5vmax;
  width: 100%;
  /* padding: 0 0% 0 0%; */
  /* margin-top: 1%; */
  width: fit-content;
  padding: 0 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background:red; */
    /* margin-top: 1%; */
    /* width:120%; */
    /* background: blue; */
    /* margin-top: 2%; */
    width: fit-content;
    padding: 0 2% 0 2%;
    /* width:11vmax; */
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background:red; */
    /* margin-top: 1%; */
    width: fit-content;
    padding: 0 2% 0 2%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background:red; */
    /* margin-top: 1%; */
    width: fit-content;
    padding: 0 2% 0 2%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* background:red; */
    /* margin-top: 1%; */
    width: fit-content;
    padding: 0 2% 0 2%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    /* margin-top: 1%; */
    width: fit-content;
    padding: 0 2% 0 2%;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* margin-top: 1%; */
    width: fit-content;
    padding: 0 2% 0 2%;
  }
`;
const IslandDetails = () => {
  // const [datas, setdatas] = React.useState([]);

  const one = () => {
    navigate("/hotels");
  };
  // const [location,setLocation] = React.useState("")
  const two = () => {
    navigate("/cabs");
  };
  const three = () => {
    navigate("/bookferry");
  };

  const four = () => {
    navigate("/packages");
  };
  const five = () => {
    navigate("/wateractivity");
  };
  const six = () => {
    navigate("/wedding");
  };
  const seven = () => {
    navigate("/sightseeing");
  };
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const click = () => {
    navigate("/blogs");
  };

  const handle = () => {
    navigate("/hotels");
  };

  const handle1 = () => {
    navigate("/wateractivity");
  };

  const handle12 = () => {
    navigate("/packages");
  };

  const handle123 = () => {
    navigate("/sightseeing");
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${baseURL}/api/user/location/${id}`, fetcher);

  console.log(data);

  // const location = data?.location?.name

  // console.log(myLocation)

  const [datas, setDatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/get/hotels`);
    const data = await res.json();
    console.log(data);

    setDatas(data);
  };
  console.log(datas?.hotels);
  const myval = datas?.hotels?.filter(
    (i) => i.location.toLowerCase() == data?.location?.name.toLowerCase()
  );
  console.log("my val is", myval);

  // const random =  datas?.hotels?.sort(() => Math.random() - Math.random()).slice(0, 4);
  console.log("my random is", myval);

  const hotel1 = myval?.[0];
  console.log("my one  hotels", hotel1);
  const hotel2 = myval?.[1];
  console.log("my one  hotels", hotel2);
  const hotel3 = myval?.[2];
  console.log("my one  hotels", hotel3);
  const hotel4 = myval?.[3];
  console.log("my one  hotels", hotel4);
  // const myimg = random?.hotels?.image?.url
  // console.log("myimg i s" , myimg)
  React.useEffect(() => {
    getdata();
  }, []);

 

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  // if (error2) return "An error has occurred.";
  // if (!data2) return "Loading...";

  // console.log(location)

  return (
    <>
      <Banner>
        <Img src={data?.location?.image?.url} />
      </Banner>
      <Inputbanner>
        <First onClick={one} style={{ cursor: "pointer" }}>
          hotel
        </First>
        <First onClick={two} style={{ cursor: "pointer" }}>
          Cab
        </First>
        <Second onClick={three} style={{ cursor: "pointer" }}>
          Ferries
        </Second>
        <Third onClick={four} style={{ cursor: "pointer" }}>
          Packages
        </Third>
        <Third onClick={five} style={{ cursor: "pointer" }}>
          Activities
        </Third>
        <Four onClick={six} style={{ cursor: "pointer" }}>
          Destination Wedding
        </Four>
        <Five onClick={seven} style={{ cursor: "pointer" }}>
          Sightseeing
        </Five>
      </Inputbanner>
      <Popular>POPULAR HOTELS NEAR {data?.location?.name} </Popular>
      <Explore style={{ cursor: "pointer" }} onClick={handle}>
        Explore All
      </Explore>
      <Carddiv>
      {
       hotel1 === null ? <p>No Data Found</p> :
        <>
        <Link
        style={{ textDecoration: "none" }}
        to={`/hotelselection/${hotel1?._id}`}
      >
        <Card>
          <div style={{ width: "20vw", height: "10vh" }}>
            <Iland src={hotel1?.image?.url} />
          </div>
          <Innerwhite>
            <Hotels>{hotel1?.name}</Hotels>
            <Lorem>{hotel1?.description.substring(0, 50)}</Lorem>
            <Mainstar>
              <Stardiv>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stardiv>
              <Dollar>{hotel1?.price}</Dollar>
            </Mainstar>
            <center>
              <Button onClick={handle} style={{ cursor: "pointer" }}>
                Book Now
              </Button>
            </center>
          </Innerwhite>
        </Card>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={`/hotelselection/${hotel2?._id}`}
      >
        {" "}
        <Card>
          <div style={{ width: "20vw", height: "10vh" }}>
            <Iland src={hotel2?.image?.url} />
          </div>
          <Innerwhite>
            <Hotels>{hotel2?.name}</Hotels>
            <Lorem>{hotel2?.description.substring(0.5)}</Lorem>
            <Mainstar>
              <Stardiv>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stardiv>
              <Dollar>{hotel2?.price}</Dollar>
            </Mainstar>
            <center>
              <Button Button onClick={handle} style={{ cursor: "pointer" }}>
                Book Now
              </Button>
            </center>
          </Innerwhite>
        </Card>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={`/hotelselection/${hotel3?._id}`}
      >
        <Card>
          <div style={{ width: "20vw", height: "10vh" }}>
            <Iland src={hotel3?.image?.url} />
          </div>
          <Innerwhite>
            <Hotels>{hotel3?.name}</Hotels>
            <Lorem>{hotel3?.description.substring(0, 50)}</Lorem>
            <Mainstar>
              <Stardiv>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stardiv>
              <Dollar>{hotel3?.price}</Dollar>
            </Mainstar>
            <center>
              <Button Button onClick={handle} style={{ cursor: "pointer" }}>
                Book Now
              </Button>
            </center>
          </Innerwhite>
        </Card>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={`/hotelselection/${hotel4?._id}`}
      >
        {" "}
        <Card>
          <div style={{ width: "20vw", height: "10vh" }}>
            <Iland src={hotel4?.image?.url} />
          </div>
          <Innerwhite>
            <Hotels>{hotel4?.name}</Hotels>
            <Lorem>{hotel4?.description.substring(0, 50)}</Lorem>
            <Mainstar>
              <Stardiv>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Stardiv>
              <Dollar>{hotel4?.price}</Dollar>
            </Mainstar>
            <center>
              <Button Button onClick={handle} style={{ cursor: "pointer" }}>
                Book Now
              </Button>
            </center>
          </Innerwhite>
        </Card>
      </Link>
        
        </>
      }
      
      </Carddiv>
      
    

      <Popularsimilar>
        SIMILAR LOCATION NEAR {data?.location?.name}
      </Popularsimilar>
      <Explore style={{ cursor: "pointer" }} onClick={handle}>
        Explore All
      </Explore>
      <Carddiv>
        <Link
          style={{ textDecoration: "none" }}
          to={`/hotelselection/${hotel1?._id}`}
        >
          {" "}
          <Card>
            <div style={{ width: "20vw", height: "10vh" }}>
              <Iland src={hotel1?.image?.url} />
            </div>
            <Innerwhite>
              <Hotels>{hotel1?.name}</Hotels>
              <Lorem>{hotel1?.description}</Lorem>
              <Mainstar>
                <Stardiv>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </Stardiv>
                <Dollar>{hotel1?.price}</Dollar>
              </Mainstar>
              <center>
                <Button onClick={handle} style={{ cursor: "pointer" }}>
                  Book Now
                </Button>
              </center>
            </Innerwhite>
          </Card>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={`/hotelselection/${hotel2?._id}`}
        >
          {" "}
          <Card>
            <div style={{ width: "20vw", height: "10vh" }}>
              <Iland src={hotel2?.image?.url} />
            </div>
            <Innerwhite>
              <Hotels>{hotel2?.name}</Hotels>
              <Lorem>{hotel2?.description}</Lorem>
              <Mainstar>
                <Stardiv>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </Stardiv>
                <Dollar>{hotel2?.price}</Dollar>
              </Mainstar>
              <center>
                <Button Button onClick={handle} style={{ cursor: "pointer" }}>
                  Book Now
                </Button>
              </center>
            </Innerwhite>
          </Card>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={`/hotelselection/${hotel3?._id}`}
        >
          {" "}
          <Card>
            <div style={{ width: "20vw", height: "10vh" }}>
              <Iland src={hotel3?.image?.url} />
            </div>
            <Innerwhite>
              <Hotels>{hotel3?.name}</Hotels>
              <Lorem>{hotel3?.description.substring(0,50)}</Lorem>
              <Mainstar>
                <Stardiv>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </Stardiv>
                <Dollar>{hotel3?.price}</Dollar>
              </Mainstar>
              <center>
                <Button Button onClick={handle} style={{ cursor: "pointer" }}>
                  Book Now
                </Button>
              </center>
            </Innerwhite>
          </Card>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to={`/hotelselection/${hotel4?._id}`}
        >
          {" "}
          <Card>
            <div style={{ width: "20vw", height: "10vh" }}>
              <Iland src={hotel4?.image?.url} />
            </div>
            <Innerwhite>
              <Hotels>{hotel4?.name}</Hotels>
              <Lorem>{hotel4?.description.substring(0,50)}</Lorem>
              <Mainstar>
                <Stardiv>
                  <Star src={star} />
                  <Star src={star} />
                  <Star src={star} />
                </Stardiv>
                <Dollar>{hotel4?.price}</Dollar>
              </Mainstar>
              <center>
                <Button Button onClick={handle} style={{ cursor: "pointer" }}>
                  Book Now
                </Button>
              </center>
            </Innerwhite>
          </Card>
        </Link>
      </Carddiv>

     

     
      <Thing>THINGS TO DO WHILE YOU ARE HERE</Thing>
      <Maindiv>
        {cards1.map((i) => {
          return (
            <>
              <Carddivs onClick={click} style={{ cursor: "pointer" }}>
                <Imgs src={i.img} />
                <Whitediv>
                  <P>{i.text} </P>
                  <Hr></Hr>
                  <Textdivs>
                    <Explores>Explore</Explores>
                    <Blue src={arrow} />
                  </Textdivs>
                </Whitediv>
              </Carddivs>
            </>
          );
        })}
      </Maindiv>
      <Footer />
    </>
  );
};

export default IslandDetails;
