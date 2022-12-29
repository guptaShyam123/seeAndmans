import React from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Footer from "../Home/Footer";
import img1 from "../../assets/G2.png";
import img2 from "../../assets/G1.png";
import img3 from "../../assets/slide10.png";
import img4 from "../../assets/slide11.png";
import doc from "../../assets/doc1.svg";
import star from "../../assets/star.png";
import line from "../../assets/line1.png";
import { scubaslider } from "./scubaslider";
import go from "../../assets/wateris.svg";
import { useNavigate } from "react-router-dom";
import icon1 from "../../assets/touricon.svg";
import icon2 from "../../assets/scubaicon.svg";
import icon3 from "../../assets/reicon.svg";
import icon4 from "../../assets/certiicons.svg";
import icon5 from "../../assets/cooricon.svg";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { baseURL } from "../../Components/Apibaseurl";

const da = [
  {
    img: go,
    name: "shyam",
  },
  {
    img: star,

    name: "ram",
  },
];
const Img = styled.img`
  background-size: cover;
  object-fit: cover;
  height: 42.5vmax;
  width: 100%;
  margin-top: -6vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 140%;
  }
`;

const Line1 = styled.img`
  height: auto;
  /* margin-top:3vmax; */
  margin-left: 1vmax;
  width: 0.1px;
  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 106vmax;
  }
`;

const Maindiv = styled.div`
  display: flex;
  margin-top: 5vmax;
  /* background-color:red; */
  justify-content: space-between;
  /* justify-content:space-around; */
`;
const Checkdiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 42vmax;
  width: 87%;
  overflow-y: scroll;
  /* background-color: red; */
  /* margin-top:3vmax; */
  /* top: 10vh; */
  position: sticky;
  /* position: -webkit-sticky; */

  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    position: sticky;
  }
`;
const Firstdiv = styled.div`
  display: flex;
  margin-top: 2vmax;
  width: 1vmax;
  gap: 1vmax;
`;
const Div1 = styled.div`
  display: flex;
  margin-left: 1vmax;

  width: 0.5vmax;
`;
const Div2 = styled.div`
  display: flex;
  margin-left: 1vmax;

  width: 0.5vmax;
`;
const Div3 = styled.div`
  display: flex;
  margin-left: 1vmax;

  width: 0.5vmax;
`;

const P = styled.p`
  font-size: 1.5vmax;
  font-weight: 700;
  font-family: Poppins;
  font-style: normal;
  margin-top: -0.2vmax;
`;

const Star = styled.img`
  height: 1.3vmax;
  width: 1.3vmax;
  margin-top: 0.2vmax;
`;
const Input = styled.input`
  color: black;
  font-size: 1.5vmax;
  height: 1.6vmax;
  width: 1.6vmax;
  margin-left: 2vmax;
`;
const Sort = styled.p`
  font-size: 1.5vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 3vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Checkdiv1 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input2 = styled.input`
  font-size: 1.2vmax;
  height: 1.2vmax;
  width: 1vmax;
  color: black;
`;
const Popular = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv2 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input3 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Prize = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
  @media (min-width: 1024px) and (max-width: 1279px) {
    font-size: 0.8vmax;
  }
`;

const Checkdiv3 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input4 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Prizes = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Checkdiv4 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input5 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Duration = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Checkdiv5 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input6 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Duration1 = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Themes = styled.p`
  font-size: 1.5vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 3vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Checkdiv6 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input7 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Pil = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv7 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input8 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Honeymoon = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv8 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input9 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Lesuire = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv9 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input10 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Luxury = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv10 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input11 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Beach = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv11 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input12 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Adventure = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Scroll = styled.div`
  overflow-y: scroll;
  position: relative;
  height: 15vmax;
  width: 22vmax;

  overflow: auto;
  margin-top: 0.3vmax;
  font-weight: 700;

  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 15vmax;
    height: 13vmax;
    overflow: auto;
    overflow-y: scroll;
  }
`;
const Place = styled.p`
  font-size: 1.5vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 3vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;

const Checkdiv12 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input13 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Gangtok = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv13 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input14 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Shri = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv14 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input15 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Port = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv15 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input16 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Munnar = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv16 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input17 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Darj = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Show = styled.p`
  color: #0088a6;
  font-size: 1vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.9vmax;
  padding-left: 16.9vmax;
  cursor: pointer;
`;
const Show1 = styled.p`
  color: #0088a6;
  font-size: 1vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.9vmax;
  padding-left: 16.9vmax;
  cursor: pointer;
`;
const Holiday = styled.p`
  font-size: 1.5vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 3vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Breaks = styled.p`
  font-size: 1vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Duration12 = styled.p`
  font-size: 1.3vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 3vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Budget = styled.p`
  font-size: 1.3vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
  font-style: normal;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 1.3vmax;
  }
`;
const Hotelca = styled.p`
  font-size: 1.3vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;

const Maindivs = styled.div`
  /* background: #FFFFFF;
box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16); */
  width: 28%;
  /* background:red; */
  height: 34vmax;
  /* align-items: center; */
  justify-content: space-around;

  @media (min-width: 335px) and (max-width: 421px) {
  }
`;
const Imgss = styled.img`
  height: 15.5vmax;
  width: 24vmax;
  /* object-fit: fill;; */

  border-top-right-radius: 5px;
  object-fit: cover;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 40vmax;
    width: 55vmax;
  }
`;

const Innerdiv = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-bottom-right-radius: 5px;
  height: 17.9vmax;
  width: 24vmax;
  margin-top: -0.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 39vmax !important;
    width: 55vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* height: 39vmax !important;
    width: 55vmax; */
    /* background-color:red; */
    margin-top: -1vmax;
  }
`;
const Div1s = styled.div`
  /* display:grid; */
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  /* background:blue; */
  justify-content: center;
  align-items: center;
  width: fit-content;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-left: 2vmax;
  }
`;
const Div2s = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  /* background:red; */
  width: fit-content;
  justify-content: center;
  align-items: center;
`;
const Div3s = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  /* background:black; */
  width: fit-content;
  justify-content: center;
  align-items: center;
`;
const Div4s = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  /* background:green; */
  width: fit-content;
  justify-content: center;
  align-items: center;
`;
const Div5s = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  /* background:pink; */
  width: fit-content;
  justify-content: center;
  align-items: center;
`;
const Hotel = styled.img`
  height: 1.7vmax;
  width: 2vmax;
  /* padding-left:1.4vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    height: 6vmax;
    width: 7vmax;
  }
`;
const Cab = styled.img`
  height: 1.7vmax;
  width: 2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 6vmax;
    width: 7vmax;
  }
`;
const Ferri = styled.img`
  height: 1.7vmax;
  width: 2vmax;
  /* padding-left:1.2vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    height: 6vmax;
    width: 7vmax;
  }
`;
const Cruise = styled.img`
  height: 1.7vmax;
  width: 2vmax;
  /* padding-left:0.7vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    height: 6vmax;
    width: 7vmax;
  }
`;
const Water = styled.img`
  height: 1.7vmax;
  width: 2vmax;
  /* padding-left:0.7vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    height: 6vmax;
    width: 7vmax;
  }
`;
const Para = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 0.7vmax;
  /* padding-left:0.5vmax; */

  font-family: Poppins;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
    width: fit-content;
  }
`;
const Para1 = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 0.7vmax;
  /* padding-left:0.4vmax; */
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
    width: fit-content;
  }
`;
const Para2 = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 0.7vmax;

  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
    width: fit-content;
  }
`;
const Para3 = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 0.7vmax;

  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
    width: fit-content;
  }
`;
const Para4 = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 0.7vmax;

  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 14px;
    width: fit-content;
  }
`;
const Package = styled.p`
  color: #145843;
  font-weight: 600;
  font-family: Poppins;
  font-size: 0.9vmax;
  padding-left: 0.7vmax;
  padding-top: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    ont-weight: 600;
    font-family: Poppins;
    font-size: 4vmax;
    padding-left: 2.7vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 1vmax;
  }
`;
const Flesx = styled.div`
  display: flex;
  gap: 1vmax;
  margin: 0 0% 0 2%;
  /* background:red; */
  /* padding: 0 2% 0 2%; */

  @media (min-width: 335px) and (max-width: 421px) {
    gap: 3vmax;
  }
`;
const Text = styled.div`
  padding-left: 0.8vmax;
  padding-top: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 1.3vmax;
    width: 50vmax;
    padding-left: 3vmax;
    display: none;
  }
`;
const Stext = styled.p`
  color: #000000;
  font-weight: 500;
  font-size: 0.7vmax;
  font-family: Poppins;
  text-align: justify;
  width: 95%;
  @media (min-width: 335px) and (max-width: 421px) {
    font-weight: 400;
    font-size: 2vmax;
    font-family: Poppins;
  }
`;
const Mainrupee = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 2.5% 2%;
`;
const Stars = styled.div`
  display: flex;
  gap: 0.4vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-left: 2.6vmax;
  }
`;
const Starimg = styled.img`
  height: fit-content;
  /* width:1vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    height: 3vmax;
    width: 3vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* height: 3vmax;
    width: 3vmax; */
  }
`;
const Rupee = styled.p`
  color: #145843;
  font-size: 1.1vmax;
  /* padding-left:3vmax; */
  font-family: Poppins;
  /* margin-top:-0.3vmax;
padding-left:18.1vmax; */
  font-weight: 700;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-top: -0.7vmax;
    padding-left: 24vmax;
    font-size: 3.6vmax;
  }
`;
const Button = styled.button`
  color: #000000;
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 400;
  border: 1px solid #145843;
  height: 2vmax;
  margin-left: 8vmax;
  background-color: white;
  margin-top: 1vmax;
  width: 8vmax;
  cursor: pointer;
  @media (min-width: 335px) and (max-width: 421px) {
    color: #000000;
    font-size: 2.4vmax;
    font-family: Poppins;
    font-weight: 400;
    border: 1px solid #145843;
    height: 6vmax;
    margin-left: 13vmax;
    background-color: white;
    font-weight: 600;
    width: 25vmax;
    margin-top: 4vmax;
  }
`;
const Bigdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* width:80vmax; */
  gap: 3vmax;
  /* position:fixed; */
  justify-content: space-evenly;
  align-items: center;
  padding-right: 2%;
  /* margin-top:2vmax; */

  /* margin-top:4vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    width: 80vmax;
    margin-top: 20vmax;
    -webkit-background-clip: none !important;
  }
`;
const Div11s = styled.div`
  height: 30vmax;
`;
const Acts = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 3vmax;
  color: #145843;
`;
const Scubadiving = () => {
  const open2 = true;

  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

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
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);

  const click = () => {
    setShow(!show);
  };
  const clicks = () => {
    setShow1(!show1);
  };
  const [showText, setShowText] = React.useState(null);

  return (
    <>
      <Img src={go} />
      <Acts>ACTIVITIES</Acts>

      {loading ? (
        <Backdrop
          open={open2}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Maindiv>
          <Checkdiv>
            <Budget>Budget Per Person:($0-$25000) </Budget>
            <Box sx={{ width: 310, marginLeft: "2vmax", paddingTop: "1vmax" }}>
              <Slider sx={{ color: "#28B810" }} />
            </Box>
            <Duration12>Duration-(1h-15h)</Duration12>
            <Box sx={{ width: 310, marginLeft: "2vmax", paddingTop: "1vmax" }}>
              <Slider sx={{ color: "#28B810" }} />
            </Box>

            <Sort>Sorted By</Sort>
            <Checkdiv1>
              <Input2 type="checkbox" />
              <Popular>Power</Popular>
            </Checkdiv1>
            <Checkdiv2>
              <Input3 type="checkbox" />
              <Prize>Prize - Low to high</Prize>
            </Checkdiv2>
            <Checkdiv3>
              <Input4 type="checkbox" />
              <Prizes>Prize - High to Low</Prizes>
            </Checkdiv3>
            <Checkdiv4>
              <Input5 type="checkbox" />
              <Duration>Duration - High to Low</Duration>
            </Checkdiv4>
            <Checkdiv5>
              <Input6 type="checkbox" />
              <Duration1>Duration - Low To High</Duration1>
            </Checkdiv5>

            <Themes>Themes</Themes>
            <Checkdiv1>
              <Input2 type="checkbox" />
              <Popular>Power</Popular>
            </Checkdiv1>
            <Checkdiv2>
              <Input3 type="checkbox" />
              <Prize>Prize - Low to high</Prize>
            </Checkdiv2>
            <Checkdiv3>
              <Input4 type="checkbox" />
              <Prizes>Prize - High to Low</Prizes>
            </Checkdiv3>
            <Checkdiv4>
              <Input5 type="checkbox" />
              <Duration>Duration - High to Low</Duration>
            </Checkdiv4>
            <Checkdiv5>
              <Input6 type="checkbox" />
              <Duration1>Duration - Low To High</Duration1>
            </Checkdiv5>
            <Themes>Themes</Themes>
            <Scroll>
              <Checkdiv6>
                <Input7 type="checkbox" />
                <Pil>Pilgrimage</Pil>
              </Checkdiv6>
              <Checkdiv7>
                <Input8 type="checkbox" />
                <Honeymoon>Honeymoon</Honeymoon>
              </Checkdiv7>
              <Checkdiv8>
                <Input9 type="checkbox" />
                <Lesuire>Lesuire</Lesuire>
              </Checkdiv8>
              <Checkdiv9>
                <Input10 type="checkbox" />
                <Luxury>Luxury</Luxury>
              </Checkdiv9>
              <Checkdiv10>
                <Input11 type="checkbox" />
                <Beach>Beach</Beach>
              </Checkdiv10>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
            </Scroll>
          </Checkdiv>
          <Line1 src={line} />
          <Bigdiv>
            {datas?.activity?.map((i) => {
              return (
                <>
                  <Maindivs
                    style={{ cursor: "pointer" }}
                    onClick={() => Handleclick(`/waterbook/${i._id}`)}
                  >
                    <Div11s>
                      <Imgss src={i.image5?.url} />
                      <Innerdiv>
                        <Flesx>
                          <Div1s>
                            <Hotel src={icon1} />
                            <Para>Scuba Diving</Para>
                          </Div1s>
                          <Div2s>
                            <Cab src={icon2} />
                            <Para1>Guide</Para1>
                          </Div2s>
                          <Div3s>
                            <Ferri src={icon3} />
                            <Para2>Coordinator</Para2>
                          </Div3s>
                          <Div4s>
                            <Cruise src={icon4} />
                            <Para3>Best Seller</Para3>
                          </Div4s>
                          <Div5s>
                            <Water src={icon5} />
                            <Para4>Certificate</Para4>
                          </Div5s>
                        </Flesx>
                        <Package>{i.activityType}</Package>
                        <Text>
                          <Stext>{i.description.substring(0, 150)}</Stext>
                        </Text>
                        <Mainrupee>
                          <Stars>
                            <Starimg src={star} />
                            <Starimg src={star} />
                            <Starimg src={star} />
                          </Stars>
                          <Rupee>${i?.price}</Rupee>
                        </Mainrupee>
                        <Button
                          onClick={() => Handleclick(`/waterbook/${i._id}`)}
                        >
                          BOOK NOW
                        </Button>
                      </Innerdiv>
                    </Div11s>
                  </Maindivs>
                </>
              );
            })}
          </Bigdiv>
        </Maindiv>
      )}

      <Footer />
    </>
  );
};

export default Scubadiving;
