import React from "react";
import useSWR from "swr";

import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotel1 from "../../assets/hotelsvg.svg";
import cab1 from "../../assets/cabsvg.svg";
import ferri1 from "../../assets/ferrysvg.svg";
import cruise1 from "../../assets/cruisesvg.svg";
import water1 from "../../assets/watersvg.svg";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

import "./slider2f.css";
import dots from "../../assets/dots.svg";
import { useNavigate } from "react-router-dom";

import star from "../../assets/star.png";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Maindiv = styled.div`
  @media (min-width: 335px) and (max-width: 421px) {
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    /* margin-top:-1vmax; */
  }
`;
const Img = styled.img`
  height: 13vmax;
  width: 22vmax;

  object-fit: cover;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 40vmax;
    width: 55vmax;
  }
`;

const Innerdiv = styled.div`
  background:#FFFFFF;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-bottom-right-radius: 5px;
  /* height: fit-content; */
  display:flex;
  flex-direction: column;
  /* padding:0; */
  width: 22vmax;
  border-radius: 5px;
  transition: 0.3s;
  /* padding-bottom: 3vh; */
  @media (min-width: 335px) and (max-width: 421px) {
    height: 39vmax !important;
    width: 55vmax;
  }

  @media (min-width: 1366px) and (max-width: 1440px) {
    /* height:18vmax;; */
  }
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  justify-content: center;
  align-items: center;
  width: fit-content;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-left: 2vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color: gray; */
    width: fit-content;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color: red; */
    width: fit-content;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background-color: red; */
    width: fit-content;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* background-color: red; */
    width: fit-content;
  }
`;
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  justify-content: center;
  align-items: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color: green; */
    width: fit-content;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color: red; */
    width: fit-content;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background-color: red; */
    width: fit-content;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* background-color: red; */
    width: fit-content;
  }
`;
const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  justify-content: center;
  align-items: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color: pink; */
    width: fit-content;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color: red; */
    width: fit-content;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background-color: red; */
    width: fit-content;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* background-color: red; */
    width: fit-content;
  }
`;
const Div4 = styled.div`
  display: grid;
  padding-top: 1vmax;
`;
const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1vmax;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  width: fit-content;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color: blue; */
    /* width:60%; */
    /* width:10vmax; */
    /* width:8vmax; */
    /* wifth:100%; */
    width: fit-content;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* background-color: red; */
    width: fit-content;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    /* background-color: red; */
    width: fit-content;
  }
  @media (min-width: 1366px) and (max-width: 1440px) {
    /* background-color: red; */
    width: fit-content;
  }
`;
const Hotel = styled.img`
  height: 1.7vmax;
  width: 2vmax;

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
`;
const Flesx = styled.div`
  display: flex;
  gap: 2.5vmax;
  /* background-color:red; */
  justify-content: space-between;
  padding: 0 15px;

  @media (min-width: 335px) and (max-width: 421px) {
    gap: 3vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* gap:3vmax; */
    /* background-color:red; */
    /* width:fit-content; */
    justify-content: space-between;
    padding: 1% 3% 0 3%;
    /* justify-content: space-around; */
    /* width:fit-content; */
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    /* gap:3vmax; */
    /* background-color:red; */
    /* width:100%; */
    width: fit-content;
    padding: 0% 2% 0 4%;
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
  width: 20vmax;
  text-align: justify;

  @media (min-width: 335px) and (max-width: 421px) {
    font-weight: 400;
    font-size: 2vmax;
    font-family: Poppins;
  }
`;
const Star = styled.div`
  display: flex;
  gap: 0.4vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-left: 2.6vmax;
  }
`;
const Starimg = styled.img`
  height: auto;
  width: 1vmax;
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
  /* padding-left:12vmax; */
  font-weight: 600;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-top: -0.7vmax;
    padding-left: 24vmax;
    font-size: 3.6vmax;
  }
`;
const Button = styled.button`
  color: #000000;
  font-size: 0.8vmax;
  font-family: Poppins;
  font-weight: 600;
  border: 1px solid #145843;
  height: 2vmax;
  margin-left: 7vmax;
  background-color: white;
   margin-bottom:20px;
  width: 7vmax;

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
  margin-top: 8vmax;
  display: flex;
  flex-wrap: wrap;

  width: 102%;
  margin-top: 8vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    /* width: 80vmax;
    margin-top: 20vmax;
    -webkit-background-clip: none !important; */
    display:none;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 103%;
    margin-left: -2vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 106vmax !important;
    overflow-x: hidden;
  }
`;
const Packages = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 1.7vmax;
  padding-left: 38vmax;
  text-align: center;
  color: #145843;
  margin-top: 37vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 4vmax;
    margin-top: 75vmax;
    margin-left: 17vmax;
  }
  @media (min-width: 335px) and (max-width: 421px) {
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 1.5vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 2vmax;
    font-weight: 800;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 2vmax;
    font-weight: 800;
    text-align: center;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 2vmax;
    font-weight: 800;
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 2vmax;
  align-items: center;
  margin-left: 26vmax;
  margin-top: 43vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }

  @media (min-width: 993px) and (max-width: 1024px) {
    margin-left: 17vmax;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    margin-left: 21vmax;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    margin-left: 27%;
  }
`;
const Icon1 = styled(BsArrowLeftSquare)`
  font-size: 2vmax;
  @media (min-width: 1841px) and (max-width: 1940px) {
  }
`;
const Icon2 = styled(BsArrowRightSquare)`
  font-size: 2vmax;
`;
const P = styled.p`
  color: #000000;
  font-family: Poppins;
  font-weight: 600;
  font-size: 1vmax;
`;
const Dots = styled.img`
  margin-top: 1vmax;
`;
const Sliderwrapper = styled.div`
  .slick-list {
    /* scroll-snap-align: x mandatory; */
    height: 34.6vmax !important;
    width: 100vmax !important;
  }

  .slick-list {
    @media (min-width: 993px) and (max-width: 1024px) {
      height: 37vmax !important;
      margin: 0 0 0 -5%;
      width: 103% !important;
    }
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    .slick-list {
      height: 36vmax !important;
    }
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    .slick-list {
      height: 38vmax !important;
    }
  }
  @media (min-width: 1840px) and (max-width: 1941px) {
    .slick-list {
      height: 35vmax !important;
    }
  }
`;
const Div = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 1vh 1vw 0vh 1vw;
`;
const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  // padSlides: true,

  // centerMode: true,
  useTransform: false,
  pauseOnHover: true,

  swipe: true,
  waitForAnimate: true,
  draggable: true,
  swipeToSlide: true,
  touchMove: true,
  // padSlides: true,
  slide: "> div",
  touchThreshold: 5000,

  speed: 500,
  cssEase: "ease-in-out",

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
      },
    },
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

const Slider2f1 = () => {
  const open2 = true;

  const [loading, setLoading] = React.useState(true);
  const [datas, setdatas] = React.useState([]);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const getdata = async () => {
    const res = await fetch(
      "https://seeandamans.onrender.com/api/user/get/packages"
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const customeSlider = React.useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const navigate = useNavigate();

  const Handleclick = (path) => {
    navigate(path);
  };

  const clicksme = () => {
    navigate("/hotels");
  };

  return (
    <>
      {loading ? (
        <Backdrop
          open={open2}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Sliderwrapper>
          <Bigdiv>
            <Packages>OUR POPULAR PACKAGE</Packages>
            <Buttons>
              <Icon1 style={{ cursor: "pointer" }} onClick={() => gotoPrev()} />
              <P onClick={clicksme} style={{ cursor: "pointer" }}>
                View All
              </P>
              <Icon2 style={{ cursor: "pointer" }} onClick={() => gotoNext()} />
            </Buttons>
            <Slider
              style={{ width: "100%", overflow: "hidden" }}
              {...settings}
              ref={customeSlider}
            >
              {datas?.allpackages?.map((i) => {
                return (
                  <>
                    <Maindiv style={{ cursor: "pointer" }} onClick={() => Handleclick(`/packagedetail/${i._id}`)}>
                      <div  className="card">
                        <div className="hello" key={i._id} />
                        <Img src={i.image?.url} />
                        <Innerdiv>
                          <Flesx>
                            <Div1>
                              <Hotel src={hotel1} />
                              <Para>7 Hotel</Para>
                            </Div1>
                            <Div2>
                              <Cab src={cab1} />
                              <Para1> 3 Cab</Para1>
                            </Div2>
                            <Div3>
                              <Ferri src={ferri1} />
                              <Para2> 5 Ferri</Para2>
                            </Div3>

                            <Div5>
                              <Water src={water1} />
                              <Para4>8 Activity</Para4>
                            </Div5>
                          </Flesx>
                          <Package>{i.location}</Package>
                          <Text>
                            <Stext>
                              Enim nibh interdum amet mi aliquet mauris quam.
                              Ullamcorper imperdiet felis, duis ornare. Nec,
                              faucibus cras nascetur cursus sit. Viverra a,
                              augue quam lacus at tincidunt purus.
                            </Stext>
                          </Text>
                          <Div>
                            <Star>
                              <Starimg src={star} />
                              <Starimg src={star} />
                              <Starimg src={star} />
                            </Star>
                            <Rupee>${i.price}</Rupee>
                          </Div>
                          <Button onClick={() => Handleclick(`/packagedetail/${i._id}`)} style={{ cursor: "pointer" }}>
                            BOOK NOW
                          </Button>
                        </Innerdiv>
                      </div>
                    </Maindiv>
                  </>
                );
              })}
            </Slider>
          </Bigdiv>
        </Sliderwrapper>
      )}

      <center></center>
    </>
  );
};

export default Slider2f1;
