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
import { AiOutlineGooglePlus } from "react-icons/ai";
import line from "../../assets/line1.png";
import { Slider2data } from "../../Components/Home/slider2data";
import go from "../../assets/letsgo.png";
import { useNavigate } from "react-router-dom";
import hotel1 from "../../assets/hotelsvg.svg";
import cab1 from "../../assets/cabsvg.svg";
import ferri1 from "../../assets/ferrysvg.svg";
import cruise1 from "../../assets/cruisesvg.svg";
import water1 from "../../assets/watersvg.svg";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { baseURL } from "../../Components/Apibaseurl";

const x = AiOutlineGooglePlus;

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
  width: 100%;
  height: 37vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 140%;
  }
`;

const Line1 = styled.img`
  height: auto;
  margin-top: 2vmax;
  margin-left: 1vmax;
  width: 0.1px;
  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: auto;
  }
`;

const Maindiv = styled.div`
  display: flex;
  /* background-color: red; */
  margin-top: 3vmax;
`;
const Checkdiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 42vmax;
  width: 25%;
  overflow-y: scroll;
  /* background-color:red; */
  /* background-color: red; */
  margin-top: 2vmax;
  /* top: 5vh; */
  position: sticky;
  /* left: 0; */

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
  height: fit-content;
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
  height: 10vmax;
  width: 22vmax;

  overflow: auto;
  margin-top: 1vmax;
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
    font-size: 1.2vmax;
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
  /* background-colo:red; */
  width: 28%;
  /* align-items: center; */
  justify-content: space-around;

  @media (min-width: 335px) and (max-width: 421px) {
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* font-size:13px; */
    /* background:pink; */
    display: flex;
    flex-direction: column;
  }
`;
const Imgss = styled.img`
  height: 15vmax;
  width: 24vmax;
  border-top-right-radius: 5px;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 40vmax;
    width: 55vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* font-size:13px; */
    /* margin-top:10px;; */
  }
`;

const Innerdiv = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-bottom-right-radius: 5px;
  height: 17.6vmax;
  width: 24vmax;
  margin-top: -0.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 39vmax !important;
    width: 55vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:red; */
    margin: 0;
    padding: 0;
  }
`;
const Div1s = styled.div`
  display: grid;
  padding-top: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-left: 2vmax;
  }
`;
const Div2s = styled.div`
  display: grid;
  padding-top: 1vmax;
`;
const Div3s = styled.div`
  display: grid;
  padding-top: 1vmax;
`;
const Div4s = styled.div`
  display: grid;
  padding-top: 1vmax;
`;
const Div5s = styled.div`
  display: grid;
  padding-top: 1vmax;
`;
const Hotel = styled.img`
  height: 1.7vmax;
  width: 2vmax;
  padding-left: 0.8vmax;
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
  @media (min-width: 335px) and (max-width: 421px) {
    height: 6vmax;
    width: 7vmax;
  }
`;
const Cruise = styled.img`
  height: 1.7vmax;
  width: 2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 6vmax;
    width: 7vmax;
  }
`;
const Water = styled.img`
  height: 1.7vmax;
  width: 2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 6vmax;
    width: 7vmax;
  }
`;
const Para = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 0.7vmax;
  padding-left: 0.5vmax;

  font-family: Poppins;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para1 = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 0.7vmax;

  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
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
`;
const Para3 = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 0.7vmax;

  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
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
`;
const Package = styled.p`
  color: #145843;
  font-weight: 700;
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
`;
const Flesx = styled.div`
  display: flex;
  gap: 3.6vmax;
  justify-content: space-between;
  padding: 0 2%;

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
  font-weight: 400;
  font-size: 0.7vmax;
  font-weight: 500;
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-weight: 400;
    font-size: 2vmax;
    font-family: Poppins;
  }
`;
const Mainrupee = styled.div`
  /* background-color:pink; */
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 2.5% 2%;
`;
const Stars = styled.div`
  display: flex;
  gap: 0.4vmax;
  /* padding-left:1vmax; */
  /* padding-top:2vmax; */
  /* justify-content:space-between; */
  /* background: red; */
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
`;
const Rupee = styled.p`
  color: #145843;
  font-size: 1.1vmax;
  /* padding-left:3vmax; */
  font-family: Poppins;
  /* margin-top:-0.3vmax; */
  /* padding-left:13.1vmax; */
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
  font-weight: 700;
  border: 1px solid #145843;
  height: 2vmax;
  margin-left: 8.6vmax;
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
  width: fit-content;
  gap: 2vw 4.5vw;
  margin: 1%;
  /* background-color:red; */
  /* justifyContent */
  justify-content: flex-start;
  /* align-items: flex-start; */
  margin-top: 2vmax;
  /* padding-right: 2%; */
  /* align-content: flex-start; */
  /* background: red; */
  /* align-items:left; */
  @media (min-width: 335px) and (max-width: 421px) {
    width: 80vmax;
    margin-top: 20vmax;
    -webkit-background-clip: none !important;
  }
`;
const Our = styled.p`
  font-family: Poppins;
  font-size: 1.6vmax;
  font-weight: 700;
  color: #145843;
  text-align: center;
  margin-top: 4vmax;
`;

const Packagesbutton = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  font-weight: 600;
  font-size: 18px;
  outline: none;
  border: none;
  height: 2.3vmax;
  color: #ffffff;
  width: 14vmax;
  cursor: pointer;
  font-family: Poppins;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    /* padding: 0% 1%; */
  }
`;
const Divv = styled.div`
  /* background-color:red; */
  display: flex;
  margin-top: 2vmax;
  align-items: right;
  justify-content: right;
  margin-right: 1%; ;
`;
const Ourpackage = () => {
  const open2 = true;
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/get/packages`);
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);

  const click = () => {
    setShow(!show);
  };
  const clicks = () => {
    setShow1(!show1);
  };
  const [showText, setShowText] = React.useState(null);

  const navigate = useNavigate();

  const Handleclick = (path) => {
    navigate(path);
  };
  const clicks1 = () => {
    navigate("/custom1");
  };

  return (
    <>
      <Img src={go} />
      <Divv>
        <Packagesbutton onClick={clicks1}>Customize Packages</Packagesbutton>
      </Divv>
      <Our>OUR PACKAGES</Our>
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
              <Slider
                ThumbComponent={AiOutlineGooglePlus}
                style={{ color: "#28B810", width: "300px" }}
              />
            </Box>
            <Duration12>Duration-(in-30N)</Duration12>
            <Box sx={{ width: 310, marginLeft: "2vmax", paddingTop: "1vmax" }}>
              <Slider sx={{ color: "#28B810" }} />
            </Box>
            <Hotelca>Hotel Categories</Hotelca>
            <Firstdiv>
              <Input type="checkbox" />
              <Div1>
                <P>5</P>
                <Star src={star} />
              </Div1>
              <Input type="checkbox" />
              <Div2>
                <P>4</P>
                <Star src={star} />
              </Div2>
              <Input type="checkbox" />
              <Div3>
                <P>3</P>
                <Star src={star} />
              </Div3>
            </Firstdiv>
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
            <Place>Place:</Place>
            <Checkdiv12>
              <Input13 type="checkbox" />
              <Gangtok>Gangtok</Gangtok>
            </Checkdiv12>
            <Checkdiv13>
              <Input14 type="checkbox" />
              <Shri>Shrinagar</Shri>
            </Checkdiv13>
            <Checkdiv14>
              <Input15 type="checkbox" />
              <Port>Port Blair</Port>
            </Checkdiv14>
            <Checkdiv15>
              <Input16 type="checkbox" />
              <Munnar>Munnar</Munnar>
            </Checkdiv15>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Darj>Darjilling</Darj>
            </Checkdiv16>
            <Show className={show ? "active" : "disable"} onClick={click}>
              Show More
            </Show>
            {show && (
              <>
                <Checkdiv15>
                  <Input16 type="checkbox" />
                  <Munnar>Munnar</Munnar>
                </Checkdiv15>
                <Checkdiv16>
                  <Input17 type="checkbox" />
                  <Darj>Darjilling</Darj>
                </Checkdiv16>
              </>
            )}
            <Show className={show ? "disable" : "active"} onClick={click}>
              Show Less
            </Show>
            <Holiday>Holiday Type</Holiday>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Shore Breaks</Breaks>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Weekend Gateways</Breaks>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Most Popular</Breaks>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Multicity</Breaks>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Offbeat</Breaks>
            </Checkdiv16>
            <Show1 className={show1 ? "active" : "disable"} onClick={clicks}>
              Show More
            </Show1>
            {show1 && (
              <>
                <Checkdiv15>
                  <Input16 type="checkbox" />
                  <Munnar>Munnar</Munnar>
                </Checkdiv15>
                <Checkdiv16>
                  <Input17 type="checkbox" />
                  <Darj>Darjilling</Darj>
                </Checkdiv16>
              </>
            )}
            <Show1 className={show1 ? "disable" : "active"} onClick={clicks}>
              Show Less
            </Show1>
          </Checkdiv>
          <Line1 src={line} />
          <Bigdiv>
            {datas?.allpackages?.map((i) => {
              return (
                <>
                  <Maindivs
                    className="card"
                    onClick={() => Handleclick(`/packagedetail/${i._id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <Imgss src={i.image?.url} />
                    <Innerdiv>
                      <Flesx>
                        <Div1s>
                          <Hotel src={hotel1} />
                          <Para>7 Hotel</Para>
                        </Div1s>
                        <Div2s>
                          <Cab src={cab1} />
                          <Para1>3 Cab</Para1>
                        </Div2s>
                        <Div3s>
                          <Ferri src={ferri1} />
                          <Para2>5 Ferri</Para2>
                        </Div3s>

                        <Div5s>
                          <Water src={water1} />
                          <Para4>8 Activity</Para4>
                        </Div5s>
                      </Flesx>
                      <Package>{i.name}</Package>
                      <Text>
                        <Stext>{i?.description}</Stext>
                      </Text>
                      <Mainrupee>
                        <Stars>
                          <Starimg src={star} />
                          <Starimg src={star} />
                          <Starimg src={star} />
                        </Stars>
                        <Rupee>${i.price}</Rupee>
                      </Mainrupee>
                      <Button
                        onClick={() => Handleclick(`/packagedetail/${i._id}`)}
                      >
                        BOOK NOW
                      </Button>
                    </Innerdiv>
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

export default Ourpackage;
