import React, { useEffect } from "react";
import useSWR from "swr";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slider3.css";
import Test from "../../../Components/Test";
import { useNavigate } from "react-router-dom";

const Switchs = styled.div`
  background-color: #145843;
  height: 4vmax;
  width: 85%;
  margin-top: 10vmax;
  display: flex;
  gap: 3vmax;
  justify-content: space-around;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 75vmax;

    margin-left: 2vmax;
    height: 6.4vmax;
  }
`;
const Para = styled.p`
  font-family: Poppins;
  font-size: 1.5vmax;
  padding-top: 0.9vmax;
  font-weight: 600;
  color: #ffffff;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 2.5vmax;
    font-weight: bold;
    padding-top: 1.2vmax;
  }
`;
const Maindiv = styled.div`
  padding-top: 4vmax;
  filter: saturate();

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
  @media (min-width: 335px) and (max-width: 421px) {
    height: 39vmax;
    width: 45vmax;
  }
`;
const Innerdiv = styled.div`
  background: #ffffff;
  box-shadow: 7px 8px 16px rgba(0, 0, 0, 0.21);
  height: 12vmax;
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
  padding-left: 12vmax;
  color: #145843;
  font-weight: 800;
  padding-top: 0.7vmax;

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
    width: 80vmax;
    height: 80vmax;
    background: none !important;
    box-shadow: none !important;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 103%;
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
  @media (min-width: 1840px) and (max-width: 1946px) {
    .slick-list {
      width: 106vmax !important;
      margin: 0 0 0 2%;
      height: 32vmax !important;
    }
  }
`;

const settings = {
  infinite: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  // padSlides: true,

  // centerMode: true,
  speed: 500,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 4,
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

const Cab = () => {
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      "https://seeandamans.onrender.com/api/user/get/cabs"
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const navigate = useNavigate();

  const clicks1 = (path) => {
    navigate(path);
  };

  return (
    <>
      <Sliderwrapper>
        <Bigdiv>
          <Slider style={{ width: "100%", overflow: "hidden" }} {...settings}>
            {datas?.cabs?.map((i) => {
              return (
                <>
                  {datas.length === 0 ? (
                    <h1>loading ...</h1>
                  ) : (
                    <Maindiv  className="card" onClick={() => clicks1(`/cabsdetail/${i._id}`)} style={{cursor:'pointer'}}>
                      <Img src={i.image?.url} />
                      <Innerdiv>
                        <P1>Power Packed deals on hotels</P1>
                        <P2>Book hotel and more @ upto {i.offers} off</P2>
                        <Book style={{ cursor: "pointer" }} onClick={() => clicks1(`/cabsdetail/${i._id}`)}>
                          Book Now
                        </Book>
                      </Innerdiv>
                    </Maindiv>
                  )}
                </>
              );
            })}
          </Slider>
        </Bigdiv>
      </Sliderwrapper>
    </>
  );
};

export default Cab;
