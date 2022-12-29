import React from "react";
import styled from "styled-components";
import slide1 from "../../assets/slide1.png";
import map from "../../assets/map.png";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { sliders5 } from "./sliders5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import "./view.css";

const Maindiv = styled.div`
  margin-top: 1vmax;
  @media (min-width: 335px) and (max-width: 480px) {
    /* margin-top: 6vmax; */
    display:none;
  }
`;
const Img = styled.img`
  height: 20vmax;
  width: 23vmax;
  object-fit: cover;
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
const Location = styled.p`
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
  font-size: 26px;
  color: rgba(20, 88, 67, 1);
  text-align: center;
  margin-top: 13vh;
  @media (min-width: 335px) and (max-width: 421px) {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 5vmax;
    margin-top: 90px;
    margin-right: -29vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 1.5vmax;
    /* color:red; */
    margin-top: 3vmax;
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 1vmax;
  margin-left: 85vmax;
  padding-top: 2vmax;
  align-items: center;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 40vmax;
    display: none;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    margin-left: 86vmax;
  }
`;
const Icon1 = styled(BsArrowLeftSquare)`
  font-size: 2vmax;
  z-index: 1;
  cursor:pointer;
`;
const Icon2 = styled(BsArrowRightSquare)`
  font-size: 2vmax;
  z-index: 1;
  cursor:pointer;
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
  margin: 0 auto;
  margin-left: -2vmax;
  margin-top: -2vmax;
  width: 102%;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 80vmax;
    margin-top: 1vmax;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 103%;
  }
`;
const Sliderwrapper = styled.div`
  .slick-slide {
  }
  .slick-list {
    height: 30vmax !important;
    margin: 0 0 0 2.4%;
  }

  @media (min-width: 993px) and (max-width: 1024px) {
    .slick-list {
      height: 31vmax !important;
      width: 100% !important;
      margin: 0 0 0 1%;
    }
  }

  @media (min-width: 1341px) and (max-width: 1440px) {
    .slick-list {
      height: 30vmax !important;
    }
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    .slick-list {
      height: 30vmax !important;
    }
  }

  @media (min-width: 1640px) and (max-width: 1741px) {
    .slick-list {
      height: 30vmax !important;
    }
  }
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
  touchThreshold: 1000,

  speed: 500,

  // centerMode: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
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
const Slider5 = () => {

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      "https://seeandamans.onrender.com/api/user/get/activity"
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

  const clicksme = () => {
    navigate("/wateractivity");
  };

  const  Handleclick =(path)=>{
    navigate(path)
  }

  return (
    <>
      <Attraction>ACTIVITIES</Attraction>
      <Buttons>
        <Icon1  onClick={() => gotoPrev()} />
        <P onClick={clicksme} className="open">
          VIEW ALL
        </P>
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
                  <Maindiv
                  className="card"
                    style={{ cursor: "pointer" }}
                    onClick={() => Handleclick(`/scubadetail/${item._id}`)}
                  >
                    <Img src={item.image?.url} />
                    <Innerdiv>
                      <Location>{item.activityType}</Location>
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

export default Slider5;
