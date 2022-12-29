import React from "react";
import styled from "styled-components";
import GreenBan from "../Home/GreenBan";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import location from "../../assets/location.png";
import calender from "../../assets/calender.png";
import andman from "../../assets/newand.png";
import DatePicker from "react-datepicker";
import Test from "../Test";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { cabdata } from "./cabdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../Home/Footer";

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
const Selectdiv = styled.div`
  display: flex;
  padding-top: 2vmax;
  padding-left: 9vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Selects = styled.select`
  font-family: Poppins;
  background-color: rgba(47, 191, 140, 1);
  color: #ffffff;
  font-size: 1.4vmax;
  padding-left: 3vmax;
  height: 2.5vmax;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  width: 12vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 16vmax;
    height: 4vmax;
    font-size: 1.9vmax;
    padding-left: 5vmax;
  }
`;
const Location = styled.img`
  height: 1.2vmax;
  width: 10vmax;
  padding-left: 1vmax;
  padding-top: 0.6vmax;
  position: absolute;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 1.9vmax;
    width: 2vmax;
    padding-top: 1vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: fit-content;
    width: 1.5vmax;
  }
`;
const Second = styled.div`
  display: flex;
  padding-left: 1vmax;
  padding-top: 2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Calender = styled.img`
  height: 1.2vmax;
  width: 1.2vmax;

  position: absolute;
  @media (min-width: 335px) and (max-width: 421px) {
    padding: 10px;
    margin-top: -0.6vmax;
    height: 1.9vmax;
    width: 2vmax;
    padding-top: 1.4vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: -30% 0 0 0;
  }
`;
const DatePickers = styled(DatePicker)`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 1);
  }
  font-family: Poppins;
  background-color: rgba(47, 191, 140, 1);
  color: rgba(255, 255, 255, 1);

  font-size: 1.4vmax;
  padding-left: 3vmax;
  height: 2.5vmax;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  width: 11vmax;
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

const Maindiv = styled.div``;
const Img = styled.img`
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
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4vmax;
  color: rgba(20, 88, 67, 1);
  text-align: center;
  margin-top: 45%;

  text-align: center;
  width: 100%;
  text-align: center;
  position: absolute;
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
  position: absolute;
  margin-top: 50%;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 30vmax;
    display: none;
  }
`;
const Icon1 = styled(BsArrowLeftSquare)`
  font-size: 1.7vmax;
`;
const Icon2 = styled(BsArrowRightSquare)`
  font-size: 1.7vmax;
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

  margin: 50% 0 0 -1%;
  width: 102%;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 80vmax;
    margin-top: 1vmax;
  }
`;
const Sliderwrapper = styled.div`
  .slick-list {
    height: 30vmax !important;
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
        slidesToShow: 3,
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
const Cabs = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const customeSlider = React.useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const navigate = useNavigate();
  const clickme = () => {
    navigate("/cablist");
  };
  return (
    <>
      <Bigimage>
        <GreenBan />
      </Bigimage>

      <center>
        <Greens>
          <Selectdiv>
            <Location src={location} />
            <Selects name="plan" id="plan">
              <option value="free">Free</option>
              <option value="starter" selected>
                From to
              </option>
              <option value="professional">Professional</option>
              <option value="corporate">Corporate</option>
            </Selects>
          </Selectdiv>
          <Second>
            <DatePickers
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Calender"
            />
            <Calender src={calender} />
            <Icon />
          </Second>
          <Third>
            <Location src={location} />
            <Selects name="plan" id="plan">
              <option value="free">Free</option>
              <option value="starter" selected>
                Travellers
              </option>
              <option value="professional">Professional</option>
              <option value="corporate">Corporate</option>
            </Selects>
          </Third>
        </Greens>
      </center>
      <center>
        {" "}
        <Button style={{ cursor: "pointer" }} onClick={clickme}>
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
            {cabdata.map((item) => {
              return (
                <>
                  <Maindiv>
                    <Img src={item.img} />
                    <Innerdiv>
                      <Map src={item.img2} />
                      <Locations>{item.text}</Locations>
                    </Innerdiv>
                  </Maindiv>
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

export default Cabs;
