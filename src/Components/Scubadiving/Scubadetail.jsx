import React from "react";
import styled from "styled-components";
import go from "../../assets/wateris.svg";
import sdetail from "../../assets/sdetail1.png";
import sdetail1 from "../../assets/sdetal2.png";
import sdetail2 from "../../assets/sdetail3.png";
import sdetail3 from "../../assets/sdetail4.png";
import { second } from "../Wateractivity/second";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon1 from "../../assets/touricon.svg";
import icon2 from "../../assets/scubaicon.svg";
import icon3 from "../../assets/reicon.svg";
import icon4 from "../../assets/certiicons.svg";
import icon5 from "../../assets/cooricon.svg";
import Footer from "../Home/Footer";
import { useNavigate , useParams } from "react-router-dom";
import { baseURL } from "../Apibaseurl";

const Img = styled.img`
  background-size: cover;
  object-fit: cover;
  height: 42.5vmax;
  width: 100%;
  margin-top: -6vmax;
`;

const Diving = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #145843;
  margin-top: 2vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const P = styled.p`
  text-align: center;
  margin-top: 1vmax;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;

  width: 97%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    width: 95%;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 17px;
    width: 95%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
    width: 97%;
  }
`;
const Price = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  color: #145843;
  margin-top: 3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Greendiv = styled.div`
  width: 97%;
  background: linear-gradient(90deg, #2ebe8b 0%, #11a576 49.48%, #49ce9b 100%);
  display: flex;
  justify-content: space-around;
  margin-top: 2vmax;
  height: 3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 3.6vmax;
  }
`;
const Divingt = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  margin: 0.5vmax 0 0 5%;
  width: 33%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 0.5% 0 0 0;
  }
`;
const Location = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  margin-top: 0.5vmax;
  width: 33%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 0.5% 0 0 0;
  }
`;
const Prices = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  margin: 0.5vmax 5% 0 0;
  text-align: right;
  width: 33%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 0.5% 0 0 0;
  }
`;

const Lightdiv = styled.div`
  background: #e0fff5;
  margin: 1vmax 0 0 0;
  width: 97%;
  justify-content: space-evenly;
  display: flex;

  gap: 3vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 4vmax;
  }

  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 3vmax;
  }

  @media (min-width: 1367px) and (max-width: 1460px) {
    height: 3vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 3vmax;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 3vmax;
  }
`;
const Shore = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  text-align: left;
  /* background-color: red; */
  margin: 0 0 0 5%;
  width: 33%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 0.8% 0 0 0;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    padding: 0.6% 0 0 0;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    padding: 0.6% 0 0 0;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0.8% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0.8% 0 0 0;
  }
`;
const Norths = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  width: 33%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 0.8% 0 0 0;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    padding: 0.6% 0 0 0;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    padding: 0.6% 0 0 0;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0.8% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0.8% 0 0 0;
  }
  /* background-color: blue; */
`;
const Dollars = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  width: 33%;
  margin: 0 5% 0 0;
  text-align: right;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    padding: 0.8% 0 0 0;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    padding: 0.6% 0 0 0;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    padding: 0.6% 0 0 0;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0.8% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0.8% 0 0 0;
  }
  /* background-color: yellow; */
`;
const Bookonline = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #0a8607;
  margin: 3% 0% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Slot = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;
  margin: 3% 0% 0 2%;
`;
const Age = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;
  margin: 2% 0% 0 2%;
`;
const Medical = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;
  margin: 0% 0% 0 2%;
`;
const Bigtext = styled.p`
  margin: 3.5% 1% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000000;
`;
const Typesof = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #145843;
  text-align: center;
  margin-top: 3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
    margin: 2% 0 0 0;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    margin: 2% 0 0 0;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    margin: 2% 0 0 0;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: 2% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 2% 0 0 0;
  }
`;
const Firstdiv = styled.div`
  margin: 3% 2% 0 2%;
  text-align: justify;
  display: flex;
  justify-content: space-between;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:red; */
  }
`;
const Image1 = styled.img`
  height: 100%;
  margin: 2% 0 0 0;
  background-size: cover;
  width: 25%;

  @media (min-width: 993px) and (max-width: 1024px) {
    width: 32%;
    margin-top: 1%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    margin-top: 1%;
  }
`;
const Textdiv = styled.div`
  width: 62vmax;
  height: 100%;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:blue; */
    line-height: 17px;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background-color:blue; */
    line-height: 20px;
  }
`;
const Text1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;
const Text2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin: 0.6% 0 0 0;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1025px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 13px;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    font-size: 15px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 17.5px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 20px;
  }
`;
const Frequently = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  margin-top: 3vmax;
  font-size: 24px;
  color: #145843;
  margin-top: 2vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Bullet1 = styled.div`
  margin: 2% 2% 0 2.5%;
  display: flex;
  gap: 1vmax;
`;
const Bull = styled.p`
  color: #1e1e1e;
  margin: -1.9% 0 0 0;
  font-size: 3vmax;
  @media (min-width: 1840px) and (max-width: 1945px) {
    margin-top: -2.2vmax;
  }
`;
const Required = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  color: #000000;
`;
const Lorem2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  text-align: justify;
  margin: 2% 2% 0 2%;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 17px;
  }
`;
const Bullet2 = styled.div`
  margin: 2% 2% 0 2.5%;
  display: flex;
  gap: 1vmax;
`;
const Bullet3 = styled.div`
  margin: 2% 2% 0 2.5%;
  display: flex;
  gap: 1vmax;
`;
const Sports = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #145843;
  margin-top: 2vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;

const Slidercard = styled.div`
  margin-top: 2vmax;
  padding: 2vmax 2vmax;
`;

const Scubadiv = styled.div`
  height: 16vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 17vmax;
  }
`;
const Subaimg = styled.img`
  height: 92%;
  object-fit: cover;
  @media (min-width: 993px) and (max-width: 1024px) {
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 92%;
  }
`;
const Innerwhite = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  height: 18vmax;
  width: 23.4vmax;
  margin-top: -1.3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 25vmax;
    height: 22.5vmax;
  }

  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 21.2vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 20.6vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 19.8vmax;
  }
`;
const Icondiv = styled.div`
  justify-content: space-around;
  display: flex;
  padding-top: 1vmax;
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
  padding-top: 1px;
  @media (min-width: 993px) and (max-width: 1024px) {
    padding-top: 1px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    padding-top: 1px;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    padding-top: 1px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    padding-top: 1px;
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
    font-size: 12px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 13px;
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
    font-size: 12px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 13px;
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
    font-size: 12px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 13px;
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
    font-size: 12px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 13px;
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
    font-size: 12px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 13px;
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
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 17px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 19px;
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
const Port = styled.p`
  font-size: 13px;
  font-family: Poppins;
  color: #145843;
  font-weight: 600;
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 15px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Lorem = styled.p`
  font-size: 10px;
  font-family: Poppins;
  color: #000000;
  font-weight: 500;
  padding: 1vmax 1vmax;
  text-align: justify;
  margin-top: -0.4vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 8px;
    margin-top: -4px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* padding-top:1px; */
    margin-top: -0.4vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* padding-top:1px; */
    margin-top: -0.4vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* padding-top:1px; */
    margin-top: -0.4vmax;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    /* padding-top:1px; */
    /* margin-top:-0.4vmax; */
    font-size: 11px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
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
  font-weight: 700;
  font-size: 16px;
  color: #145843;
  margin-top: -0.2vmax;
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 18px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 19px;
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
    width: 8vmax;
    height: 2.3vmax;
    font-size: 14px;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 2.5vmax;
    width: 8vmax;
    font-size: 17px;
  }
`;
const Biggest = styled.div`
  display: flex;

  width: 105%;
  margin-left: -4vmax;
  margin-top: -2vmax;

  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 103.5%;
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
      height: 45vmax !important;
    }
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    .slick-list {
      height: 42.6vmax !important;
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
  lazyLoad: true,
  // centerMode: true,

  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
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
const Scubadetail = () => {
  const customeSlider = React.useRef();

  const navigate = useNavigate();
  const click = () => {
    navigate("/scubacard");
  };

  const {id} = useParams()
  console.log("my id is " , id)
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/activity/${id}`);
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  console.log("my img is " , datas?.activity?.image?.url)

  return (
    <>
      <Img src={datas?.activity?.image?.url} />
      <Diving>SCUBA DIVING {datas?.activity?.location}</Diving>
      <center>
        <P>
         {datas?.activity?.description}
        </P>
      </center>
      <Price>PRICE OF SCUBA DIVING IN ANDMAN</Price>
      <center>
        <Greendiv>
          <Divingt>Diving Type</Divingt>
          <Location>Location</Location>
          <Prices>Price</Prices>
        </Greendiv>
      </center>
      <center>
        <Lightdiv>
          <Shore>{datas?.activity?.activityType}</Shore>
          <Norths>{datas?.activity?.location}</Norths>
          <Dollars>{datas?.activity?.price}</Dollars>
        </Lightdiv>
      </center>
      <center>
        <Lightdiv>
          <Shore>Shore Diving (Recommended)</Shore>
          <Norths>North Bay </Norths>
          <Dollars>$310</Dollars>
        </Lightdiv>
      </center>
      <center>
        <Lightdiv>
          <Shore>Shore Diving</Shore>
          <Norths>North Bay </Norths>
          <Dollars>$310</Dollars>
        </Lightdiv>
      </center>
      <center>
        <Lightdiv>
          <Shore>Shore Diving</Shore>
          <Norths>North Bay </Norths>
          <Dollars>$310</Dollars>
        </Lightdiv>
      </center>
      <center>
        <Lightdiv>
          <Shore>Shore Diving</Shore>
          <Norths>North Bay </Norths>
          <Dollars>$310</Dollars>
        </Lightdiv>
      </center>
      <center>
        <Lightdiv>
          <Shore>Shore Diving</Shore>
          <Norths>North Bay </Norths>
          <Dollars>$310</Dollars>
        </Lightdiv>
      </center>
      <Bookonline>
        Book Online & Get Instant Discounts! Free Cancellation Until 24 Hours*
      </Bookonline>
      <Slot>Book Your Slot</Slot>
      <Age>Age Restriction: 12 Years To 50 Years</Age>
      <Medical>
        Medical restrictions for people who have Asthma, Heart, BP, Pregnant
        women, etc. Please consult your doctor before going Scuba Diving.
      </Medical>
      <Bigtext>
        There are many experienced and certified instructors who can help the
        divers in exploring various dive sites in the Andaman archipelago. Most
        of the diving happens in North Bay Island, Port Blair and Havelock
        Island. Neil island has started picking up slowly. You also have an
        option to dive near Barren island, the only active volcano in India. For
        Advanced diving experience, you need to be open water certified. Below
        are the various types of diving experience for people coming to Andaman{" "}
      </Bigtext>
      <Typesof>TYPES OF SCUBA DIVING</Typesof>
      <Firstdiv>
        <Textdiv>
          <Text1>
            {datas?.activity?.activityType} For Beginners - Recommended For Non-Swimmers
          </Text1>
          <Text2>
            {datas?.activity?.description} 
          </Text2>
        </Textdiv>
        <Image1 src={datas?.activity?.image?.url} />
      </Firstdiv>

      <Firstdiv>
        <Image1 src={datas?.activity?.image?.url} />
        <Textdiv>
          <Text1>
            Boat Scuba Diving in Andaman - Can be done by Non-Swimmers
          </Text1>
          <Text2>
          {datas?.activity?.description} 
          </Text2>
        </Textdiv>
      </Firstdiv>

      <Firstdiv>
        <Textdiv>
          <Text1>
            Scuba Diving Courses in Andaman - Swimming Skills Mandatory
          </Text1>
          <Text2>
            In tristique venenatis volutpat quam aliquam odio dui massa. Nunc
            habitasse felis, fames amet. Mauris purus netus cursus vitae id.
            Tellus arcu cras vel euismod arcu egestas. Urna faucibus sagittis a,
            est in nunc, adipiscing in feugiat. Imperdiet eu odio blandit in
            diam pharetra. Vitae eget nisi, sed a neque. Scelerisque nulla diam
            pharetra posuere ut in magna sit ipsum. Sit eget scelerisque risus
            ornare facilisis cursus. Euismod et, in tempus eu, risus aliquam
            arcu tempor. Dolor nec, nisl aliquet ut donec nulla vel. Sodales
            odio varius enim, viverra donec tempor, nam morbi. Nullam enim risus
            mauris nibh bibendum eu. Quam vestibulum ultricies vestibulum risus
            at sagittis tincidunt interdum egestas. In odio amet tempor sit
            tortor. Suspendisse in sollicitudin metus laoreet vitae adipiscing
            amet, mattis viverra. Viverra feugiat pellentesque dignissim sociis
            mauris hendrerit potenti. Volutpat aenean tempor, sagittis phasellus
            eu pharetra fames purus in. Volutpat at sed id suspendisse a id
            sapien egestas. Sed tortor, amet libero, neque.
          </Text2>
        </Textdiv>
        <Image1 src={sdetail2} />
      </Firstdiv>

      <Firstdiv>
        <Image1 src={sdetail3} />
        <Textdiv>
          <Text1>Open Water Diving Or Advanced Courses - For Deep Diving</Text1>
          <Text2>
            In tristique venenatis volutpat quam aliquam odio dui massa. Nunc
            habitasse felis, fames amet. Mauris purus netus cursus vitae id.
            Tellus arcu cras vel euismod arcu egestas. Urna faucibus sagittis a,
            est in nunc, adipiscing in feugiat. Imperdiet eu odio blandit in
            diam pharetra. Vitae eget nisi, sed a neque. Scelerisque nulla diam
            pharetra posuere ut in magna sit ipsum. Sit eget scelerisque risus
            ornare facilisis cursus. Euismod et, in tempus eu, risus aliquam
            arcu tempor. Dolor nec, nisl aliquet ut donec nulla vel. Sodales
            odio varius enim, viverra donec tempor, nam morbi. Nullam enim risus
            mauris nibh bibendum eu. Quam vestibulum ultricies vestibulum risus
            at sagittis tincidunt interdum egestas. In odio amet tempor sit
            tortor. Suspendisse in sollicitudin metus laoreet vitae adipiscing
            amet, mattis viverra. Viverra feugiat pellentesque dignissim sociis
            mauris hendrerit potenti. Volutpat aenean tempor, sagittis phasellus
            eu pharetra fames purus in. Volutpat at sed id suspendisse a id
            sapien egestas. Sed tortor, amet libero, neque.
          </Text2>
        </Textdiv>
      </Firstdiv>
      <Frequently>FREQUENTLY ASKED QUESTIONS</Frequently>
      <Bullet1>
        <Bull> . </Bull>
        <Required>
          {" "}
          How many days are required to Do Scuba Diving in Andaman?
        </Required>
      </Bullet1>
      <Lorem2>
        Interdum nunc, dictum vel sit condimentum in est. Ultrices magna lacus
        enim vel, eu arcu, senectus. Sed diam eget purus sit gravida eget duis.
        Proin sagittis ipsum montes, mattis montes, fames. Sodales urna, in elit
        arcu viverra sit gravida amet. Purus venenatis sed vulputate quis.
        Vulputate sit tristique eu blandit euismod pharetra cursus. Adipiscing
        est ut arcu molestie libero sit ipsum in pellentesque. Purus sit lorem
        aliquam aliquam. Egestas vitae morbi ac quis facilisi eu. Vivamus nunc
        sagittis sit faucibus faucibus sed.
      </Lorem2>
      <Bullet2>
        <Bull> . </Bull>
        <Required> What is Included in Our Diving Program?</Required>
      </Bullet2>
      <Lorem2>
        Interdum nunc, dictum vel sit condimentum in est. Ultrices magna lacus
        enim vel, eu arcu, senectus. Sed diam eget purus sit gravida eget duis.
        Proin sagittis ipsum montes, mattis montes, fames. Sodales urna, in elit
        arcu viverra sit gravida amet. Purus venenatis sed vulputate quis.
        Vulputate sit tristique eu blandit euismod pharetra cursus. Adipiscing
        est ut arcu molestie libero sit ipsum in pellentesque. Purus sit lorem
        aliquam aliquam. Egestas vitae morbi ac quis facilisi eu. Vivamus nunc
        sagittis sit faucibus faucibus sed.
      </Lorem2>
      <Bullet3>
        <Bull> . </Bull>
        <Required> Who accompanies us underwater?</Required>
      </Bullet3>
      <Lorem2>
        Interdum nunc, dictum vel sit condimentum in est. Ultrices magna lacus
        enim vel, eu arcu, senectus. Sed diam eget purus sit gravida eget duis.
        Proin sagittis ipsum montes, mattis montes, fames. Sodales urna, in elit
        arcu viverra sit gravida amet. Purus venenatis sed vulputate quis.
        Vulputate sit tristique eu blandit euismod pharetra cursus. Adipiscing
        est ut arcu molestie libero sit ipsum in pellentesque. Purus sit lorem
        aliquam aliquam. Egestas vitae morbi ac quis facilisi eu. Vivamus nunc
        sagittis sit faucibus faucibus sed.
      </Lorem2>
      <Sports>SIMILAR WATER SPORTS</Sports>

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
                        <Icon1 src={icon1} />
                        <Icon2 src={icon2} />
                        <Icon3 src={icon3} />
                        <Icon4 src={icon4} />
                        <Icon5 src={icon5} />
                      </Icondiv>
                      <Textinner>
                        <T1>{i.text1}</T1>
                        <T2>{i.text2}</T2>
                        <T3>{i.text3}</T3>
                        <T4>{i.text4}</T4>
                        <T5>{i.text5}</T5>
                      </Textinner>
                      <North>Scuba Diving in North Bay Island</North>
                      <Portdiv>
                        <Greenimg src={i.location} />
                        <Port>{i.port}</Port>
                      </Portdiv>
                      <Lorem>{i.lorem}</Lorem>
                      <Star>
                        <Staricons>
                          <Staricon src={i.star} />
                          <Staricon src={i.star} />
                          <Staricon src={i.star} />
                        </Staricons>
                        <Dollar>{i.dollar}</Dollar>
                      </Star>
                      <center>
                        <Button style={{ cursor: "pointer" }} onClick={click}>
                          Book Now
                        </Button>
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

export default Scubadetail;
