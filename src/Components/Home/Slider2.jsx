import React from "react";
import styled from "styled-components";
import slide1 from "../../assets/slide1.png";
import star from "../../assets/star.png";
import { data } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider2.css";

import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";

const Maindiv = styled.div`
  margin-top: 2vmax;

  flex-wrap: wrap;
`;

const Img1 = styled.img`
  height: 14vmax;
  width: 20vmax;
  object-fit: cover;
`;
const Inerdiv = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  height: 15vmax;
  width: 20vmax;

  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 19vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 16vmax;
  }
`;
const Para = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  padding-top: 1vmax;
  padding-left: 1vmax;
`;
const Para2 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;

  color: #000000;
  padding-top: 1vmax;
  padding-left: 1vmax;
`;
const Package = styled.div`
  display: flex;
  padding-top: 1vmax;
`;
const Starimg = styled.img`
  height: 1vmax;
  width: 1vmax;
`;

const Star = styled.div`
  display: flex;
  gap: 1vmax;
  padding-left: 1vmax;
`;
const Rate = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  padding-left: 7vmax;
  margin-top: -2px;

  color: #145843;
`;
const Button = styled.button`
  color: #000000;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1vmax;
  margin-left: 5.5vmax;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  width: 8vmax;
  height: 2.4vmax;
`;
const Bigdiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Packages = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.9vmax;

  margin-left: 40vmax;
  color: #145843;
  margin-top: 10vmax;
`;
const Hello = styled.p`
  font-family: Poppins;
  font-size: 20px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 1vmax;
  margin-left: 18vmax;
  margin-top: 13vmax;
`;
const Icon1 = styled(BsArrowLeftSquare)`
  font-size: 2vmax;
`;
const Icon2 = styled(BsArrowRightSquare)`
  font-size: 2vmax;
`;
const P = styled.p`
  color: #000000;
  font-family: Poppins;
  font-weight: 600;
  font-size: 1.6vmax;
`;
const PrevButton = (props) => {
  const { className, style, onClick } = props;
  return <Icon1 className={className} onClick={onClick} />;
};

const NextButton = (props) => {
  const { className, style, onClick } = props;
  return <Icon2 className={className} onClick={onClick} />;
};
const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  centerMode: true,

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
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
const Slider2 = () => {
  const customeSlider = React.useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <>
      <Bigdiv>
        <Packages>OUR POPULAR PACKAGE</Packages>
        <Buttons>
          <Icon1 onClick={() => gotoPrev()} />
          <P>VIEW ALL</P>
          <Icon2 onClick={() => gotoNext()} />
        </Buttons>
        <Slider
          style={{ width: "100%", overflow: "hidden" }}
          {...settings}
          ref={customeSlider}
        >
          {data.map((i) => {
            return (
              <>
                <Maindiv>
                  <Img1 src={i.img} />
                  <Inerdiv>
                    <Para>{i.package}</Para>
                    <Para2>{i.text}</Para2>
                    <Package>
                      <Star>
                        <Starimg src={i.star} />
                        <Starimg src={i.star} />
                        <Starimg src={i.star} />
                      </Star>
                      <Rate>{i.rate}</Rate>
                    </Package>
                    <Button>Book Now</Button>
                  </Inerdiv>
                </Maindiv>
              </>
            );
          })}
        </Slider>
      </Bigdiv>
    </>
  );
};

export default Slider2;
