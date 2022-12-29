import React from "react";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import map from "../../assets/map.png";
import logo1 from "../../assets/logo1.png";
import location1 from "../../assets/location.png";
import calender from "../../assets/calender.png";
import andman from "../../assets/newand.png";
import DatePicker from "react-datepicker";
import Test from "../Test";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { water } from "./water";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../Home/Footer";
import restro from "../../assets/hotelstar.png";
import cabs from "../../assets/cab.png";
import ferries from "../../assets/ferries.png";
import cruise from "../../assets/cruise.png";
import waters from "../../assets/greenwater.svg";
import greencab from "../../assets/greencab.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../Components/Home/greenban.css";
import greenferry from "../../assets/greenferry.png";
import greencruise from "../../assets/greencruise.png";
import hotel from "../../assets/hotel.png";
import whitecruise from "../../assets/whitecruise.png";
import raja from '../../assets/rajadey.svg'
import {baseURL} from "../../Components/Apibaseurl"

const Navbar = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.1);
  height: 4.4vmax;
  width: 100%;
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  z-index: 1;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 80vmax;
    height: 8vmax;
  }
`;
const Innerdiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;
const Img1 = styled.img`
  height: 3.6vmax;
  width: 3.6vmax;
  padding-top: 0.5vmax;
  padding-left: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 7.7vmax;
    width: 10vmax;
  }
`;
const Authdiv = styled.div`
  display: flex;
  padding-left: 5vmax;
  gap: 1vmax;
  padding-top: 1vmax;
  margin-right: 5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
    margin-right: 3vmax;
  }
`;
const Login = styled.button`
  height: 2.1vmax;
  width: 10vmax;
  background-color: rgba(20, 88, 67, 1);
  color: #ffffff;
  font-size: 1vmax;
  border: none;
  border-radius: 20px;
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 1vmax;
    width: 9vmax;
    height: 3vmax;
    margin-right: -4vmax;
    font-size: 1.5vmax;
  }
`;
const Signip = styled.button`
  height: 2.1vmax;
  width: 10vmax;
  background-color: rgba(20, 88, 67, 1);
  color: #ffffff;
  font-size: 1vmax;
  border: none;
  border-radius: 20px;
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 1vmax;
    width: 9vmax;
    height: 3vmax;
    margin-left: 4vmax;
    font-size: 1.5vmax;
  }
`;
const Bigimage = styled.div`
  background: url(${andman});
  height: 35vmax;
  width: 100%;
  background-size: cover;
  margin-top: -6vmax;
  padding-top: 4vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 80vmax;

    background-position: center;
    padding-top: 2vmax;
  }
`;
const Greens = styled.div`
  background-color: rgba(20, 88, 67, 1);
  height: 7.9vmax;
  width: 60%;
  backdrop-filter: blur(84px);
  border-radius: 10px;
  margin-top: -3vmax;
  display: flex;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 70vmax;
    margin-left: 5vmax;
    height: 10vmax;
  }
`;
const Divselect = styled.div`
  font-family: Poppins;
  background-color: rgba(47, 191, 140, 1);
  color: #ffffff;
  font-size: 1vmax;
  /* padding-left:5%; */
  height: 3vmax;
  width: 100%;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Selectdiv = styled.div`
  display: flex;
  width: 33%;
  padding: 0 2.5% 2%;
  align-items: center;
  justify-content: center;
  /* padding-top: 2vmax;
  padding-left:9vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Selects = styled.select`
  border: none;
  outline: none;
  background-color: rgba(47, 191, 140, 1);
  width: 80%;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 20px;
  color: white;
  padding-left: 5px;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 16vmax;
    height: 4vmax;
    font-size: 1.9vmax;
    padding-left: 5vmax;
  }
`;
const Location = styled.img`
  height: 1.5rem;
  width: auto;
  margin-left: 10px;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 1.9vmax;
    width: 2vmax;
    padding-top: 1vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 0.1% 0 0 0;
    height: fit-content;
    width: 1.5vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 0.4% 0 0 0;
    height: 1vmax;
    width: 1vmax;
  }
`;
const Second = styled.div`
  display: flex;
  width: 33%;
  padding: 0 2.5% 2%;
  align-items: center;
  justify-content: center;
  /* padding-left:1vmax;
  padding-top: 2vmax; */

  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Calender = styled.img`
  height: 1.5rem;
  width: auto;
  margin-left: 10px;
  @media (min-width: 335px) and (max-width: 421px) {
    padding: 10px;
    margin-top: -0.6vmax;
    height: 1.9vmax;
    width: 2vmax;
    padding-top: 1.4vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: -0.5% 0 0 0;
    height: fit-content;
    width: 1.5vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: -0.3% 0 0 0;
    height: 1vmax;
    width: 1vmax;
  }
`;
const Divdate = styled.div`
  /* background-color:pink; */
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DatePickers = styled(DatePicker)`
  ::placeholder,
  ::-webkit-input-placeholder {
  }

  border: none;
  outline: none;
  color: white;
  width: 100%;
  height: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  background-color: transparent;
  font-size: 20px;
  margin: 0;
  z-index: 1;
  padding-left: 5px;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 14vmax;
    height: 4vmax;
    padding-left: 5vmax;
    font-size: 2vmax;
  }
`;
const Icon = styled(IoIosArrowDown)`
  height: 1vmax;
  width: 1vmax;
  color: white;
  padding-top: 0.6vmax;
  margin-left: -1.6vmax;
  position: relative;
`;
const Third = styled.div`
  padding-left: 1.5vmax;
  padding-top: 2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Button = styled.div`
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  height: 2.5vmax;
  width: 10vmax;
  color: #ffffff;
  border: none;
  margin-top: -2vmax;
  font-size: 1.2vmax;
  padding-top: 0.7vmax;
  position: relative;
  align-items: center;
  justify-content: center;
  p {
  }
  @media (min-width: 335px) and (max-width: 421px) {
    height: 2.5vmax;
    width: 10vmax;
    margin-left: 31vmax;
    margin-top: -0.6vmax;
    font-size: 1.4vmax;
  }
`;

const Textdiv = styled.div`
  gap: 2.6vmax;
  display: flex;
  padding-top: 0.9vmax;
  padding-left: 16vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-left: 10vmax;
    padding-top: 2.6vmax;
    gap: 10px;
    display: none;
  }
`;
const Stext = styled.p`
  font-family: Poppins;
  font-size: 1.4vmax;
  font-weight: 700;
  color: #145843;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 1.8vmax;
    font-weight: bolder;
  }
`;

const Maindivs = styled.div``;
const Imgs = styled.img`
  height: 20vmax;
  width: 23vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 48vmax;
    width: 55vmax;
  }
`;
const Innerdiv = styled.div`
  display: flex;

  background: #ffffff;
  width: 22vmax;
  height: 2.5vmax;
  padding-top: 1vmax;
  padding-left: 1vmax;
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.1);
  gap: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 8vmax;
    width: 54vmax;
  }
`;
const Map = styled.img`
  height: 1.2vmax;
  width: 1.2vmax;
  padding-top: 0.1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
    padding-top: 0.1vmax;
  }
`;
const Locations = styled.p`
  font-size: 1vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 4vmax;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    padding-left: 2vmax;
    margin-top: -0.5vmax;
  }
`;
const Attraction = styled.p`
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 1.4vmax;
  color: rgba(20, 88, 67, 1);
  text-align: center;
  margin-top: 43vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 5vmax;

    margin-right: -29vmax;
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 1vmax;
  margin-left: 84vmax;
  margin-top: 5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 30vmax;
    display: none;
  }
`;
const Icon1 = styled(BsArrowLeftSquare)`
  font-size: 1.7vmax;
  cursor: pointer;
`;
const Icon2 = styled(BsArrowRightSquare)`
  font-size: 1.7vmax;
  cursor: pointer;
`;
const P = styled.p`
  color: #000000;
  font-family: Poppins;
  font-weight: 600;
  font-size: 1vmax;
`;
const Bigdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -2vmax;

  width: 102%;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 80vmax;
    margin-top: 1vmax;
  }
`;

const Maindiv = styled.div`
  height: 8vmax;
  width: 70vmax;
  background: rgba(20, 88, 67, 0.2);
  backdrop-filter: blur(84px);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vmax;
  margin-left: 14vmax;
  margin-top: 14vmax;
  position: absolute;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 85%;
    gap: 6vmax;
    height: 9vmax;
    display: none;
  }
`;
const Hotels = styled.div`
  display: grid;
  gap: 1vmax;
`;

const Cabs1 = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Ferries = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Cruise = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Water = styled.div`
  display: grid;
  gap: 1vmax;
`;
const Img11 = styled.img`
  height: 3vmax;
  width: 3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Img2 = styled.img`
  height: 3vmax;
  width: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Img3 = styled.img`
  height: 3vmax;
  width: 3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Img4 = styled.img`
  height: 3vmax;
  width: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Img5 = styled.img`
  height: 3vmax;
  width: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Para = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  margin-left: -0.3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  margin-left: -0.6vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para3 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  margin-left: -1.9vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Para4 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vmax;
  color: #ffffff;
  margin-left: -0.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2vmax;
  }
`;
const Sliderwrapper = styled.div`
  .slick-list {
    height: 30vmax !important;
    margin: 0 0 0 2%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    .slick-list {
      height: 29vmax !important;
      margin: 0 0 0 2%;
    }
  }
`;

const Maindropss = styled.div`
  position: absolute;
  background-color: rgba(47,191,140,1);
  right: 15px;
  bottom: -50px;
  padding:  5px 20px;
  border-radius: 5px;
`;
const Childdiv = styled.div`
display:flex;
justify-content: space-between;
align-items : center;
color: white;
width: 15vw;

`;

const Ch1 = styled.div`

`
const Ch2 = styled.div`
  display:flex; 
`
const Chbtn1 = styled.button`
 height:20px;
  width:20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 2px;
  cursor: pointer;
`
const   Chinput = styled.input`
  height:20px;
  width: 20px;
  padding:0;
  margin: 0 5px;
  outline: none;
  border  : none;
  text-align: center;
  background-color: white;
  border-radius: 2px;
  /* z-index: 10; */

`
const Inputdiv = styled.div`
display:flex;
`
const Chbtn2 = styled.button`
 height:20px;
  width:20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 2px;

`

const AdDiv = styled.div`
display:flex;
justify-content: space-between;
align-items : center;
color: white;
width: 15vw;`;

const Rdiv = styled.div`
display:flex;
justify-content: space-between;
align-items : center;
color: white;
width: 15vw;`;

const Apply = styled.button`
background-color: rgba(20,88,67,1);
color: white;
border: none;
outline: none;
border-radius: 5px;
padding: 5px 20px;
margin-top: 20px;
`;
const Selectdivs1 = styled.input`
  display: flex;
  
  /* padding:  2.5% 2%; */
  /* align-items: center; */
  /* margin-top:2vmax; */
  /* justify-content: center; */
  border:none;
  outline: none;
  color:white;
  font-size:20px;
  font-weight:600;
  border-radius:5px;
  background-color: transparent;
  width: 85%;

  ::placeholder{
    color:white;
    font-size:20px;
    font-weight:600;
  }
  /* width:30%; */
  /* padding-top: 2vmax;
  padding-left:9vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Second1 = styled.div`
  font-family: Poppins;
  background-color: rgba(47, 191, 140, 1);
  color: #ffffff;
  font-size: 1vmax;
  /* padding-left:5%; */
  height: 3vmax;
  width: 100%;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  // padSlides: true,

  // centerMode: true,
  speed: 500,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
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
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
const Tabwater = () => {
 

  const navigate = useNavigate();

  const clicks1 = () => {
    navigate("/wateractivity");
  };

  

  const [startDate, setStartDate] = React.useState(new Date());
  const customeSlider = React.useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const data = React.useRef(null);

  const clickdate = () => {

    console.log("hello");
    console.log(data.current);
    data.current.onInputClick(false);
    // data.current.input.value = data.current.value;
    // data.current.shouldCloseOnSelect = true;
    // data.current.setIsOpen(false);
    // data.current.shouldCloseOnSelect = false;
  };
  
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/get/activity`
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };
  React.useEffect(() => {
    getdata();
  }, []);


  const [show , setShow] = React.useState(false)
const [stateinput ,setStateinput] = React.useState("")
const [stateinput1 , setStateinput1] = React.useState(0)
const [stateinput2 , setStateinput2] = React.useState(0)
const  [ stateinput3 , setStateinput3] = React.useState(0)

const apply = ()=>{
setShow(!show);
}

const minus = ()=>{
  if(stateinput1  <= 1) return 
 
     
  setStateinput1(stateinput1 - 1)

 
}
const minus1 = ()=>{
  if(stateinput2  <= 1) return 
 
  setStateinput2(stateinput2 -1)
}
const minus2 = ()=>{
  if(stateinput3 <= 1) return 
 
  setStateinput3(stateinput3 - 1)
}

const plus =  ()=>{
  
  setStateinput1(stateinput1 + 1) 
}
const plus1 =  ()=>{
  setStateinput2(stateinput2 + 1)
}
const plus2 =  ()=>{
  setStateinput3(stateinput3 + 1)
}

const inputclick = ()=>{
 setShow(!show);
}

  const Handleclick = (path)=>{
  navigate(path)
  }
  return (
    <>
      <Bigimage>
        <center>
          <Maindiv>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              <Hotels>
                <Img11 src={hotel} />

                <Para>Hotels</Para>
              </Hotels>
            </Link>

            <Link to="/cabs" style={{ textDecoration: "none" }}>
              {" "}
              <Cabs1>
                <Img2 src={cabs} />

                <Para1>Cabs</Para1>
              </Cabs1>
            </Link>

            <Link to="/ferry" style={{ textDecoration: "none" }}>
              {" "}
              <Ferries>
                <Img3 src={ferries} />

                <Para2>Ferries</Para2>
              </Ferries>
            </Link>
            <Link to="/cruise" style={{ textDecoration: "none" }}>
              {" "}
              <Cruise>
                <Img4 src={whitecruise} />

                <Para3>Tour Packages</Para3>
              </Cruise>
            </Link>

            <Water>
              <Img5 src={waters} />
              <Para4 style={{ color: "#31FFC1" }}>Activities</Para4>
            </Water>
          </Maindiv>
        </center>
      </Bigimage>

      <center>
        <Greens>
          <Selectdiv>
            <Divselect>
              <Location src={location1} />
              <Selects name="plan" id="plan">
              
              <option>Havelock</option>
              <option>Port Blair</option>
              <option>Swaraj Dweep</option>
              <option>Cellular Jail</option>
              <option>Ross Island</option>
              <option>Chidiya Tapu</option>
              <option>Wandor Beach</option>
                
              </Selects>
            </Divselect>
          </Selectdiv>

          <Second>
            <Divselect onClick={clickdate}>
              <Calender src={calender} />
              <Divdate>
                <DatePickers
                  portalId="root-portal"
                  selected={startDate}
                  shouldCloseOnSelect="false"
                  onChange={(date) => setStartDate(date)}
                  ref={data}
                  placeholderText="Calender"
                />
              </Divdate>
              <Icon />
            </Divselect>
          </Second>
          <Second>
 <Second1>
  <img src={raja} />
 <Selectdivs1 onClick={inputclick}  type="text" placeholder="  1 Room & 3 Children" readonly  value={`${stateinput1} Travellers`}/>
   </Second1>
   </Second>
 {
   show &&   <Maindropss>
   <Childdiv>
     <Ch1>Travellers</Ch1>
     <Ch2>
     <Chbtn1 onClick={minus}>-</Chbtn1>
     <Inputdiv>
     <Chinput type="text" value={stateinput1} />
     </Inputdiv>
     <Chbtn2 onClick={plus}>+</Chbtn2>
     </Ch2>
   </Childdiv>
  
  
   <Apply style={{cursor:'pointer'}} onClick={apply}>Apply</Apply>
 </Maindropss> 
 }
        </Greens>
      </center>
      <center>
        {" "}
        <Button style={{ cursor: "pointer" }} onClick={clicks1}>
          {" "}
          <p>Search </p>{" "}
        </Button>
      </center>
      <center></center>
      <Test />
      <Attraction>OUR POPULAR LOCATIONS</Attraction>
      <Buttons>
        <Icon1 onClick={() => gotoPrev()} />
        <P>VIEW ALL</P>
        <Icon2 onClick={() => gotoNext()} />
      </Buttons>
      <Sliderwrapper>
        <Bigdiv>
          <Slider
            style={{ width: "100%", overflow: "hidden" }}
            {...settings}
            ref={customeSlider}
          >
            {datas?.activity?.map((item) => {
              return (
                <>
                  <Maindivs style={{cursor:'pointer'}} onClick={() => Handleclick(`/scubadetail/${item._id}`)}>
                    <Imgs src={item.image?.url} />
                    <Innerdiv>
                      <Map src={map} />
                      <Locations>{item.activityType}</Locations>
                    </Innerdiv>
                  </Maindivs>
                </>
              );
            })}
          </Slider>
        </Bigdiv>
      </Sliderwrapper>
      <Footer />
    </>
  );
};

export default Tabwater;
