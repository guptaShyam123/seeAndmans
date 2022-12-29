import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import blues from "../../assets/blues.png";
import slide3 from "../../assets/slide4.png";
import "./homecard.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate, useLocation } from "react-router-dom";
import {baseURL} from "../../Components/Apibaseurl"

import Test from "../Test";

const Switchs = styled.div`
  background-color: #145843;
  height: 4vmax;
  width: 85%;
  margin-top: 10vmax;
  display: flex;
  gap: 3vmax;
  justify-content: space-around;
  @media (min-width: 335px) and (max-width: 421px) {
    /* width: 75vmax;

    margin-left: 2vmax;
    height: 6.4vmax; */
  }
`;
const Para = styled.p`
  font-family: Poppins;
  font-size: 1.5vmax;
  padding-top: 0.9vmax;
  font-weight: 600;
  color: #ffffff;
  @media (min-width: 335px) and (max-width: 421px) {
    /* font-size: 2.5vmax;
    font-weight: bold;
    padding-top: 1.2vmax; */
  }
`;
const Maindiv = styled.div`
  padding-top: 4vmax;
  filter: saturate();
  /* transform: .5s; */
  @media (min-width: 335px) and (max-width: 421px) {
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-top: -2vmax;
  }
`;
const Img = styled.img`
  aspect-ratio: 3;
  height: 13vmax;
  width: 18vmax;
  object-fit: cover;
  background-size: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 39vmax;
    width: 45vmax;
  }
`;
const Innerdiv = styled.div`
  background: #ffffff;
  box-shadow: 7px 8px 16px rgba(0, 0, 0, 0.21);
  height: 11.7vmax;
  width: 18vmax;
  margin-top: -10px;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 35vmax;
    width: 45vmax;
  }
`;
const P1 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2vmax;
  color: #000000;
  padding-left: 0.5vmax;
  padding-top: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 3vmax;
    color: #000000;
    padding-top: 3vmax;
  }
`;
const P2 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1vmax;
  color: #000000;
  padding-left: 0.5vmax;
  padding-top: 0.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 3vmax;
    color: #000000;
    padding-top: 3vmax;
  }
`;

const Book = styled.p`
  font-family: Poppins;
  font-size: 1vmax;
  padding-left: 11vmax;
  color: #145843;
  /* font-weight:100; */
  padding-top: 0.7vmax;
  font-weight: 800;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 4vmax;
    color: #000000;
    padding-top: 3vmax;
    padding-left: 15vmax;
  }
`;

const Bigdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5vmax;
  padding: 0 2vmax;

  margin-left: -5vmax;
  width: 100vmax;

  position: relative;

  @media (min-width: 335px) and (max-width: 421px) {
    /* width: 80vmax;
    height: 80vmax;
    background: none !important;
    box-shadow: none !important; */
    display:none;
  }

  @media (min-width: 993px) and (max-width: 1024px) {
    width: 100vmax !important;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 103vmax;
  }

  @media (min-width: 1366px) and (max-width: 1440px) {
    width: 100vmax !important;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    width: 100vmax !important;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    width: 100vmax !important;
  }
`;
const Sliderwrapper = styled.div`
  .slick-slide {
    /* scroll-snap-align: x mandatory; */
  }

  .slick-list {
    width: 100vmax !important;
    height: 39vmax !important;
    margin-left: 1%;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    .slick-list {
      width: 100vmax !important;
    }
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    .slick-list {
      width: 100vmax !important;
      margin: 0 0 0 2%;
    }
  }
  @media (min-width: 1840px) and (max-width: 1946px) {
    .slick-list {
      width: 106vmax !important;
      margin: 0 0 0 2%;
      height: 32vmax !important;
    }
  }
`;

const settings = {
  // centerPadding: "46px",

  infinite: false,
  slidesToShow: 7,
  slidesToScroll: 3,
  initialSlide: 0,
  // padSlides: true,

  useTransform: false,
  pauseOnHover: true,

  swipe: true,
  waitForAnimate: true,
  draggable: true,
  // swipeToSlide: true,
  touchMove: true,
  padSlides: true,
  // slide: '> div',
  // touchThreshold:1000,

  speed: 500,
  cssEase: "ease-in-out",

  // centerMode: true,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        initialSlide: 0,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: true,
        initialSlide: 0,
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 421,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
      },
    },
  ],
};

const Slider3 = () => {
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/get/hotels`
    );
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


  const MainC =()=>{
    return (
      <>
      
      </>
    )
  }


  return (
    <>
      <Sliderwrapper>
        <Bigdiv>
          <Slider style={{ width: "100%", overflow: "hidden" }} {...settings}>
            {datas?.hotels?.map((i) => {
              return (
                <>
                  <Maindiv  className="card" onClick={() => Handleclick(`/hotelselection/${i._id}`)} style={{cursor:'pointer'}} >
                    <Img src={i.image?.url} />
                    <Innerdiv>
                      <P1>Power Packed deals on hotels</P1>
                      <P2>Book hotel and more @ upto {i.offers} off</P2>
                      <Book style={{ cursor: "pointer" }} onClick={() => Handleclick(`/hotelselection/${i._id}`)}>
                        Book Now
                      </Book>
                    </Innerdiv>
                  </Maindiv>
                </>
              );
            })}
          </Slider>
        </Bigdiv>
      </Sliderwrapper>
    </>
  );
};

export default Slider3;
