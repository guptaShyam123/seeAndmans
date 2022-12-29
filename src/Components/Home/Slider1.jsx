import { data } from "../Home/data";
import React from "react";
import styled from "styled-components";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Footer from "./Footer";


const First = styled.div``;
const Maindiv = styled.div`
  margin: 5% 2% 0 2%;
  display: flex;
  box-sizing: border-box !important;
  /* padding: 0 !important;
    margin: 0 !important; */
  /* justify-content: space-evenly; */
  /* margin:0 auto ; */
  /* display:block !important; */
  /* width:80%; */
  /* left:0 !important ;right:0 !important; */
  height: 24vmax;
  /* background-color:red; */

  text-align: center;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 70vmax;
    margin-left: -2vmax;
    margin-top: 1vmax;
  }
`;
const Bigdiv = styled.div``;
const Para1 = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 22px;
  padding-top: 200px;
  padding-left: 10px;
  font-weight: bolder;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 250px;
    font-size: 4vmax;
    margin-left: -14vmax;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    padding-top: 130px;
  }
`;

const Firstimg1 = styled.div`
  background: url(${slide1});
  object-fit: cover;
  height: 22vmax;
  /* width:100%; */
  background-repeat: no-repeat;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 50vmax;
    width: 50vmax;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    /* height:20vmax; */
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* height:fit-content; */
  }
`;

const Firstimg2 = styled.div`
  background: url(${slide2});
  height: 22vmax;
  /* width:100%;  */
  object-fit: cover;
  background-repeat: no-repeat;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 50vmax;
    width: 50vmax;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    /* height:20vmax; */
  }
`;
const Firstimg3 = styled.div`
  background: url(${slide3});
  height: 22vmax;
  /* width:100%; */
  object-fit: cover;
  background-repeat: no-repeat;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 50vmax;
    width: 50vmax;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    /* height:20vmax; */
  }
`;
const Firstimg4 = styled.div`
  background: url(${slide4});
  height: 22vmax;
  width: 100%;
  /* height:22%; */
  object-fit: cover;
  background-repeat: no-repeat;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 50vmax;
    width: 50vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* height:fit-content; */
    /* background-color:red; */
  }
`;
const Our = styled.p`
  color: #145843;
  font-family: Poppins;
  font-weight: 700;
  font-size: 1.7vmax;
  margin-top: 5vmax;
  text-align: center;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-top: 5vmax;
    text-align: center;
    font-size: 4vmax;
    margin-left: 18vmax;
  }
`;
const Slickslider = styled.div`
  .slick-list {
    /* scroll-snap-align: x mandatory; */
    height: 22vmax !important;
    /* width:100% !important; */
    /* display:block !important; */
    /* padding : 0 10vmax 0 10vmax !important; */
    /* margin-left: 0px;
    margin-right: 0px; */

    @media (min-width: 993px) and (max-width: 1024px) {
      .slick-list {
        /* height:1vmax !important; */
      }
    }

    @media (min-width: 1025px) and (max-width: 1285px) {
      .slick-list {
        /* height:25vmax !important; */
      }
    }
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* height:fit-content; */
    .slick-list {
      width: 100%;
    }
  }
`;

const settings = {
  // centerPadding: "-80px",
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
  touchThreshold: 100,

  speed: 500,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: false,
        slidesToShow: 4,
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
        touchThreshold: 100,

        speed: 500,
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
      breakpoint: 320,
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
        prevArrow: false,
        nextArrow: false,
      },
    },
  ],
};
const Slider1 = () => {
  return (
    <>
      <Our>Our Services</Our>
      <Slickslider>
        <Maindiv>
          <Slider style={{ width: "100%" }} {...settings}>
            <Firstimg1>
              <Para1>Lifestyle</Para1>
            </Firstimg1>
            <Firstimg1>
              <Para1>Lifestyle</Para1>
            </Firstimg1>
            <Firstimg1>
              <Para1>Lifestyle</Para1>
            </Firstimg1>
            <Firstimg2>
              <Para1>Lifestyle</Para1>
            </Firstimg2>
            <Firstimg3>
              <Para1>Lifestyle</Para1>
            </Firstimg3>
            <Firstimg4>
              <Para1>Lifestyle</Para1>
            </Firstimg4>
            <Firstimg4>
              <Para1>Lifestyle</Para1>
            </Firstimg4>
            <Firstimg4>
              <Para1>Lifestyle</Para1>
            </Firstimg4>{" "}
            <Firstimg4>
              <Para1>Lifestyle</Para1>
            </Firstimg4>
          </Slider>
        </Maindiv>
      </Slickslider>
    </>
  );
};

export default Slider1;
