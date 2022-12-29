import React, { useState } from "react";
import bg from "../../assets/travelheader.png";
import styled from "styled-components";
import { cabsData } from "./CabsData";
import tick from "../../assets/doc.png";
import Line from "../../assets/line1.png";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Button, Menu, MenuItem } from "@mui/material";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import "./dropdown.css";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
import BannerInput from "./BannerInput";
import { baseURL } from "../../Components/Apibaseurl";

const StyledHeader = styled.div``;
const HeaderImage = styled.img`
  width: 100%;
  height: 34vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 160px;
    width: 150%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 160px;
    width: 170%;
  }
`;

const DestinationWrapper = styled.div`
  width: 100%;
  background-color: #145843;
  display: flex;
  justify-content: space-evenly;
  height: 6.5vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 150vw;
    display: grid;
    height: 80vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 170vw;
    display: grid;
    height: 90vh;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    height: 8.5vmax;
  }
`;

const GreenWrapper = styled.div`
  position: absolute;
  margin-top: -2vmax;
  width: 100%;
`;

// different sections->
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 5vmax;
  margin-top: 1vmax;
  margin-left: 5vmax;
  margin-right: 5vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 15vh;
    gap: 30px;
    text-align: center;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 15vh;
    gap: 30px;
    text-align: center;
    margin-top: 6vh;
  }
`;
const FormText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: normal;
  font-family: Poppins;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1.3rem;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 2rem;
  }
`;

const FormContent = styled.div`
  background: rgba(13, 162, 116, 0.8);
  width: 14vmax;
  height: 2vmax;
  color: white;
  border-radius: 5px;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 90vw;
    height: 20vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 90vw;
    height: 20vh;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    height: 8.5vmax;
  }
`;
const FormContentText = styled.p`
  margin-left: 12px;
  margin-top: 5px;
  font-family: Poppins;
  font-family: Poppins;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1.5rem;
    margin-left: -3px;
    margin-top: 6px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 2rem;
    margin-left: -3px;
    margin-top: 15px;
  }
`;

// checkbox wrapper main ->

const CheckBoxWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1vmax;

  margin-top: 3vmax;

  padding: 0.7%;

  @media (min-width: 320px) and (max-width: 375px) {
    display: none;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: none;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color: red; */
    /* font-size:12px;  */
    /* text-align: flex-end; */
    align-content: flex-start;

    /* justify-content: center; */
    /* align-items:; */
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color: red; */
    /* font-size:12px;  */
    /* text-align: flex-end; */
    align-content: flex-start;
    /* background:red; */
    margin: 0;
    /* justify-content: center; */
    /* align-items:; */
  }
`;

const CarModalCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6vmax;
  gap: 1.8vmax;
`;

const CheckBoxWrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  gap: 1vmax;
  /* background: pink; */
`;

const CheckDivs = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledCheckBox = styled.input`
  /* height: 1.2vmax; */

  border: 3px solid #000000;
  border-radius: 5px;
`;
const DieselText = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  font-weight: 500;
  text-align: center;
  /* padding : 10% 0 0 0; */
  /* margin:-8% 0 0 0 ; */

  font-family: Poppins;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
    /* text-align:justify; */
    width: 100%;
    text-align: left;
    /* padding-top: 1%; */
  }

  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 16px;
  }
`;

// main content div->
const MainContainer = styled.div`
  display: flex;
  margin-top: 5vmax;
  /* background-color: red; */
  justify-content: space-evenly;
  width: 95%;
`;

/* cabs container */

const CabsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 3vmax;
`;
// cabs card container->

const CardMainContainer = styled.div`
  display: flex;
  gap: 4vmax;
  padding: 1%;
  /* width:fit-content; */
  /* height:fit-content; */
  width: 70vw;
  /* width: */
  height: 43.5vh;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (min-width: 320px) and (max-width: 375px) {
    height: 420px;
    width: 75vmax;
    margin-left: 20px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 420px;
    width: 75vmax;
    margin-left: 20px;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    /* justify-content:space-between; */
    /* width:fit-content; */
    /* padding:1%; */
    /* background-color:red; */
    width: 73vw;
    height: 14%;
    /* height:vh; */
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 12.5%;
    padding: 2% 2% 0 2%;

    /* background-color: red; */
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background-color: red; */
    height: 12%;
  }
  @media (min-width: 1366px) and (max-width: 1440px) {
    /* background: red; */
    height: 11.5%;
  }

  @media (min-width: 1640px) and (max-width: 1740px) {
    /* background-color: red; */
    height: 11.4%;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    height: 11.9%;
    /* background-color: blue; */
    width: 100%;
    justify-content: space-around;
    /* align-items: center; */
  }
`;
const CardImageWrapper = styled.div`
  margin-top: 1vmax;
  /* margin-left: 2vmax; */

  height: 40vmax;
`;
const CardImage = styled.img`
  height: 50%;
  width: 20vw;
  /* width: 100%; */
  object-fit: cover;
  border-radius: 5px;

  @media (min-width: 992px) and (max-width: 1024px) {
    height: 52%;
  }
`;

const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  /* height:fit-content; */
  height: 100%;
  /* background: red; */
  width: 100%;
  @media (min-width: 992px) and (max-width: 1024px) {
    /* background-color: yellow; */
    margin: -1% 0 0 0;
    width: 25%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color: gray; */
    /* width:100%; */
    /* height:fit-content; */
    /* justify-content: space-around; */
    margin: -1% 0 0 0;
    /* top:0; */
    /* padding:0; */
    height: 100%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background: red;; */
    height: 100%;
    margin: -1% 0 0 0;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    /* background-color: red; */
    width: 100%;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    /* background-color: red; */
    width: 100%;
    height: 95%;
  } ;
`;
const CarName = styled.p`
  color: #006ce0;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 2vmax;
  font-family: Poppins;
  font-family: Poppins;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 15px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 1.2rem;
    /* color:red; */
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.5rem;
  }
`;

const CarTitle = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 1vmax;
  font-family: Poppins;
  @media (min-width: 1641px) and (max-width: 1945px) {
    font-size: 1.2rem;
    /* color:red; */
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.5rem;
  }
`;
const CarSize = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 6vmax;
  font-family: Poppins;
  @media (min-width: 992px) and (max-width: 1024px) {
    /* font-size:2vmax; */
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.5rem;
  }
`;
const CarDesc = styled.div`
  width: 12vmax;
  height: 10vmax;
  font-family: Poppins;
  /* background-color:red; */

  font-size: 0.8rem;
  margin-top: 1vmax;
  @media (min-width: 1841px) and (max-width: 1940px) {
    width: 16vmax;
    /* font-size: 1.2rem; */
    font-family: Poppins;
    text-align: justify;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 13px;
  }
  @media (min-width: 1641px) and (max-width: 1945px) {
    font-size: 15px;
    /* color:red; */
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1rem;
  }
`;
const Sanitized = styled.div`
  display: flex;
  gap: 1vmax;
  /* background-color: red; */
  align-items: center;
  margin-top: -2vmax;

  @media (min-width: 320px) and (max-width: 375px) {
    margin-top: 19vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-top: 8vh;
  }
  @media (min-width: 992px) and (max-width: 1025px) {
    width: 25vmax;
    display: flex;
    /* align-items: center; */
  }
  @media (min-width: 1026px) and (max-width: 1285px) {
    /* background-color: pink; */
    width: 100%;
    /* font-size:10px; */
    /* color:red; */
  }
`;
const CardBookinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 2.5vmax; */
  width: 21vmax;
  justify-items: end;
  align-items: end;
  height: 100%;
  /* border-color: red; */
  /* background: red; */
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:blue; */
    margin: 1% 0 0 0;
    height: 100%;
    width: 25%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color:blue; */
    width: 30%;
    height: fit-content;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    /* background: green; */
    height: 100%;
    /* width:70%; */
    width: 100%;
  }
`;
const Cancellation = styled.div`
  width: 22vmax;
  height: 1.4vmax;
  font-size: 14px;
  text-align: center;
  border-radius: 30px;
  border: 1px solid #0a8607;
  background: #bdffbc;
  color: #0a8607;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 6vh;
    padding-top: 12px;
    font-size: 10px;
    width: 24vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 3vh;
    padding-top: 12px;
    font-size: 10px;
    width: 24vmax;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    width: 21vmax;
    font-size: 10px;
  }
  /* @media (min-width: 1841px) and (max-width: 1940px) {
   box-sizing: border-box;
   padding: 2%;
   width: 20vmax;
  } */
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 1rem;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.2rem;
  }
`;
const CancelText = styled.p``;

const Discount = styled.div`
  font-size: 14px;
  background: #ffecec;
  border: 1px solid #850000;
  border-radius: 30px;
  margin-top: 6vmax;
  text-align: center;
  width: 14vmax;
  height: 1.4vmax;
  margin-left: 7vmax;
  color: #850000;
  font-weight: 500;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 4vh;
    width: 34vw;
    border-radius: 20px;
    padding-top: 12px;
    font-size: 10px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 2vh;
    width: 34vw;
    border-radius: 20px;
    padding-top: 6px;
    font-size: 10px;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    width: 14vmax;
    font-size: 11px;
  }
  /* @media (min-width: 1841px) and (max-width: 1940px) {
   box-sizing: border-box;
   padding: 1%;
 
  } */
  @media (min-width: 1025px) and (max-width: 1285px) {
    width: 14vmax;
    font-size: 12px;
    width: 70%;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 1rem;
    width: fit-content;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.2rem;
  }
`;

const PriceWrapper = styled.div`
  margin-top: 4vmax;

  display: flex;
  gap: 1.2vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 9vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 9vw;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    justify-content: flex-end;
  }
  /* @media (min-width:164px) and (max-width:1945px){
   font-size:10rem;
  } */
`;
const OldPrice = styled.p`
  color: #8d8d8d;
  font-size: 0.8rem;
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 1rem;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.2rem;
  }
`;

const NewPrice = styled.p`
  color: #000000;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: -0.4vmax;
  @media (min-width: 992px) and (max-width: 1024px) {
    margin: 1% 0 0 0;

    font-size: 11px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.3rem;
  }
`;

const BookNow = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: white;
  width: 9vmax;
  height: 2.5vmax;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1vmax;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 9vw;
    width: 32vw;
    height: 7vh;
    margin-top: 10vh;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* height:3vmax;
    color:black; */
  }
  /* @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 19px;
    
  } */
  @media (min-width: 1366px) and (max-width: 1440px) {
    font-size: 18px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.2rem;
    /* height:20vmax; */
  }
`;

const Taxes = styled.p`
  margin-top: 2vmax;
  font-size: 1rem;

  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 9vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 9vw;
  }
`;
//  next previous button wrapper->

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1vmax;
  margin-top: 4vmax;
  margin-left: 80%;
`;
const PreviousButton = styled.button`
  height: 2vmax;
  width: 2.5vmax;
  background: transparent;
  border: 1px solid black;
  cursor: pointer;
`;
const NexButton = styled.button`
  height: 2vmax;
  width: 2.5vmax;
  background: transparent;
  border: 1px solid black;
  cursor: pointer;
`;

const LineImage = styled.img`
  margin-top: 6vmax;

  /* margin-left:-7vmax; */
  @media (min-width: 320px) and (max-width: 375px) {
    display: none;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: none;
  }
`;

const Center = styled.p`
  font-size: 2vmax;
  color: #145843;
  font-weight: 700;

  margin-top: 6%;

  @media (min-width: 992px) and (max-width: 1024px) {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
const Img = styled.img`
  margin: 0 0 0 -2%;
  width: 0.1px;
  height: auto;
`;
const Input1 = styled.div`
  /* background-color: red; */
  display: flex;
  width: 100%;
  /* height:100%; */
  /* height:2vmax; */
  /* gap:0 0 3vmax 0;/ */

  /* justify-content:space-around; */
  gap: 1vmax;
  align-items: center;
  /* text-align: justify; */
  /* justify-content: center; */
  /* align-items: centekgror; */
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:pink; */
    width: 100%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    width: 100%;
    /* justify-content:space-around; */
    /* align-items:center; */
  }
`;
const Carmodel = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: -20% 0 0 -69%;
  @media (min-width: 993px) and (max-width: 1024px) {
    text-align: center;
    margin-left: 20px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    text-align: center;
    margin-left: 20px;
  }
`;
const Fuel = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 0 -69%;
  @media (min-width: 993px) and (max-width: 1024px) {
    text-align: center;
    margin-left: 20px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin-left: 20psx;
  }
  /* color:red; */
`;
const Spans = styled.p`
  /* color:red; */
  font-size: 1rem;
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 14px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 1.1rem;
  }
  @media (min-width: 1741px) and (max-width: 1945px) {
    font-size: 1.5rem;
  }
`;

const Cabsdetail = () => {
  const navigate = useNavigate();
  const clicks1 = (path) => {
    navigate(path);
  };

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/get/cabs`);
    const data = await res.json();
    console.log(data);

    setdatas(data?.cabs);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => {
    setShowMenu(!showMenu);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [currentPage, setCurrentPage] = useState(1);

  const [cabsPerPage] = useState(4);
  const indexOfLastCab = currentPage + cabsPerPage;
  const indexOfFirstCab = indexOfLastCab - cabsPerPage;
  const currentCabs = datas?.slice(indexOfFirstCab, indexOfLastCab);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const next = () => {
    if (currentPage < Math.ceil(cabsData.length / cabsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  console.log(currentCabs);
  return (
    <>
      <div style={{ width: "100%" }}>
        <StyledHeader>
          <HeaderImage src={bg} />
        </StyledHeader>
        {isMobile ? (
          <>
            <div className="dropdown">
              <div className="dropbtn">
                <AiOutlineMenu onClick={handleShow} />
              </div>
              {showMenu && (
                <div className="dropdown-content">
                  <DestinationWrapper>
                    <FormWrapper>
                      <FormText>From</FormText>
                      <FormContent>
                        <FormContentText>Port Blair</FormContentText>
                      </FormContent>
                    </FormWrapper>
                    <FormWrapper>
                      <FormText>To</FormText>
                      <FormContent>
                        <FormContentText>Ross Garden</FormContentText>
                      </FormContent>
                    </FormWrapper>
                    <FormWrapper>
                      <FormText>Pick-Up Date</FormText>
                      <FormContent>
                        <FormContentText>Sept 8, 2022</FormContentText>
                      </FormContent>
                    </FormWrapper>
                    <FormWrapper>
                      <FormText>Pick-Up Time </FormText>
                      <FormContent>
                        <FormContentText>2:24 PM</FormContentText>
                      </FormContent>
                    </FormWrapper>
                  </DestinationWrapper>
                </div>
              )}
            </div>
          </>
        ) : (
          <BannerInput />
        )}
        <center>
          <Center>Cabs</Center>
          <MainContainer>
            <CheckBoxWrapperMain>
              <Fuel>Fuel Type:</Fuel>
              <CheckBoxWrapper>
                <Input1>
                  <StyledCheckBox
                    type="checkbox"
                    name="thing"
                    value="valuable"
                    id="thing"
                  />
                  <DieselText>Diesel</DieselText>
                </Input1>
                <Input1>
                  <StyledCheckBox type="checkbox" />
                  <DieselText>Patrol</DieselText>
                </Input1>
                <Input1>
                  <StyledCheckBox type="checkbox" />
                  <DieselText>Electric</DieselText>
                </Input1>
              </CheckBoxWrapper>
              <CarModalCheckBox>
                <Carmodel style={{ fontWeight: "bold" }}>Car Modal:</Carmodel>
                <CheckBoxWrapper>
                  <Input1>
                    <StyledCheckBox type="checkbox" />
                    <DieselText>Maruti Suzuki Ertiga</DieselText>
                  </Input1>
                </CheckBoxWrapper>
                <CheckBoxWrapper>
                  <Input1>
                    <StyledCheckBox type="checkbox" />
                    <DieselText>Innova Crystalnnova Crysta</DieselText>
                  </Input1>
                </CheckBoxWrapper>
                <CheckBoxWrapper>
                  <Input1>
                    <StyledCheckBox type="checkbox" />
                    <DieselText>Xylo Ertiga</DieselText>
                  </Input1>
                </CheckBoxWrapper>
              </CarModalCheckBox>
            </CheckBoxWrapperMain>

            <CabsMainContainer>
              {currentCabs?.map((value) => {
                return (
                  <>
                    <CardMainContainer
                      style={{ cursor: "pointer" }}
                      onClick={() => clicks1(`/cabsdetail/${value._id}`)}
                      key={value._id}
                    >
                      <CardImageWrapper>
                        <CardImage src={value.image?.url} />
                      </CardImageWrapper>
                      <CardDetailsWrapper>
                        <CarName>{value.cabModal}</CarName>
                        <CarTitle>{value.carType}</CarTitle>
                        <CarSize>{value.carSize}</CarSize>
                        <CarDesc>{value?.desc}</CarDesc>
                        <Sanitized>
                          <img style={{ height: "1.4vmax" }} src={tick} />
                          <Spans>Sanitizers Installed</Spans>
                        </Sanitized>
                      </CardDetailsWrapper>
                      <Img src={Line} />
                      <CardBookinWrapper>
                        <Cancellation>
                          Free cancelltion till1 hour of departure
                        </Cancellation>
                        <Discount>{value?.offers}% cheaper than usual</Discount>
                        <PriceWrapper>
                          <OldPrice>$726</OldPrice>
                          <NewPrice>${value.price}</NewPrice>
                        </PriceWrapper>
                        <Taxes>$200 Taxes & Fees</Taxes>
                        <BookNow
                          onClick={() => clicks1(`/cabsdetail/${value._id}`)}
                        >
                          Book Now
                        </BookNow>
                      </CardBookinWrapper>
                    </CardMainContainer>
                  </>
                );
              })}
              <ButtonWrapper>
                <PreviousButton onClick={prev}>
                  <HiArrowLeft />
                </PreviousButton>
                <NexButton onClick={next}>
                  <HiArrowRight />
                </NexButton>
              </ButtonWrapper>
            </CabsMainContainer>
          </MainContainer>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default Cabsdetail;
