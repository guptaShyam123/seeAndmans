import React from "react";
import web from "../../assets/wedding123.png";
import styled from "styled-components";
import couple from "../../assets/couple.png";
import arrow from "../../assets/mainarrow.svg";
import girl from "../../assets/lovebird.png";
import { weddingcard } from "./weddingcard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
import right from "../../assets/rightarrow11.svg";
import {baseURL} from "../../Components/Apibaseurl"

const Divimg = styled.div`
  width: 100%;
  height: 33vmax;
  /* object-fit:cover; */
  /* background-size: cover; */
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* background-size: cover; */
  object-fit: fill;
`;
const Text = styled.p`
  margin-top: 3vmax;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #145843;
  text-align: center;
`;

const Firstdiv = styled.div`
  /* width:95%; */
  padding: 2vmax 2vmax;
  margin-top: 2vmax;
  display: flex;
  align-items: center;

  gap: 5vmax;
  text-align: justify;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* width:95%; */
    /* background:red; */
  }
`;
const Couple = styled.img`
  @media (min-width: 993px) and (max-width: 1024px) {
    height: fit-content;
    width: 100%;
    /* margin:0; */
    /* padding:0; */
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 22vmax;
  }
`;
const Stext = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  line-height: 34px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    text-align: justify;
    width: 100%;
    line-height: 20px;
    /* background:blue; */
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 13px;
    text-align: justify;
    width: 100%;
    line-height: 30px;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 14px;
    text-align: justify;
    width: 100%;
    line-height: 30px;
    /* padding:0; */
    margin: 0;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 18px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 22px;
  }
`;
const Weddingplace = styled.p`
  margin-top: 2vmax;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #145843;
  text-align: center;
`;
const Button = styled.div`
  margin-top: 2vmax;
  justify-content: center;
  margin-left: 85%;
  display: flex;
  gap: 1vmax;
`;
const Arrow = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  z-index: 1;

  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 3% 0 0 0;
  }
  @media (min-width: 1367px) and (max-width: 1460px) {
    outline: none;
    border: 0 none;
    color: black;
    box-shadow: none;
  }
`;
const View = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`;
const Carddiv = styled.div`
  display: grid;
`;
const Image = styled.img`
  background-size: cover;
  object-fit: cover;
  height: 85%;

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 20vmax;
  }
`;
const Whitediv = styled.div`
  background: #ffffff;
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;

  /* background:red; */
  margin: 0;
  /* margin-top:-3vmax; */

  @media (min-width: 993px) and (max-width: 1924px) {
    margin-top: -5.2vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: -17% 0 0 0;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    width: 19.5vmax;
    margin: -16% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 1% 0 0 0;
  }
`;
const Bigcard = styled.div`
  display: flex;
  width: 100%;
  /* margin:0; */

  @media (min-width: 1025px) and (max-width: 1285px) {
    justify-content: space-evenly;
    width: 110%;
    margin: -3vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    margin-top: -3vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    width: 100vmax;

    height: 27vmax;
  }

  @media (min-width: 1840px) and (max-width: 1940px) {
    width: 100vmax;

    height: 29vmax;
  }
`;
const Neil = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: #000000;
  padding-top: 1.5vmax;
  padding-left: 2vmax;
`;
const Slidermain = styled.div`
  .slick-slide {
  }
  .slick-list {
    width: 110% !important;

    height: 31vmax !important;
  }

  @media (min-width: 993px) and (max-width: 1024px) {
    .slick-list {
      height: 44vmax !important;
    }
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    .slick-slide {
      margin-top: 5vmax !important;

      margin-left: 0.6vmax !important;
    }
    .slick-list {
      width: 130% !important;
      height: 39vmax !important;
    }
    @media (min-width: 1640px) and (max-width: 1740px) {
      .slick-list {
        height: 4vmax !important;
      }
    }
  }
`;
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  slide: "p",

  centerPadding: "0px",

  // centerMode: true,
  swipeToSlide: false,
  rows: 1,
  dots: false,
  speed: 500,
  autoplaySpeed: 12000,

  swipe: true,
  waitForAnimate: true,
  draggable: true,
  pauseOnFocus: true,
  touchMove: true,
  // padSlides: true,
  slide: "> div",
  touchThreshold: 100,
  cssEase: "ease-out",

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
  ],
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
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
const Destinationwed = () => {
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/get/weddings`
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
  const customeSlider = React.useRef();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <>
      <Divimg>
        <Img src={web} />
      </Divimg>
      <Text>BEACH SIDE ENGAGEMENT IN ANDAMAN ISLANDS</Text>

      <center>
        <Firstdiv>
          <Couple src={couple} />
          <Stext>
            Amet aliquet neque, semper turpis pellentesque id. Suspendisse sit
            convallis purus donec viverra suspendisse. Elit proin eget at
            fermentum lectus habitant sed. Cras ac id ullamcorper dictum
            ultrices. In enim tincidunt proin vel in venenatis platea. Orci
            purus sit quis feugiat eleifend aenean massa interdum ut. Morbi
            tempor amet, venenatis sollicitudin. Diam, velit aliquam ac sit
            purus congue nullam. Curabitur luctus scelerisque congue elementum
            ac. Ante gravida posuere libero, tellus dictumst amet. Lectus neque
            a vestibulum scelerisque amet, faucibus lectus. Sed dis purus eu et
            vitae vitae, scelerisque in tincidunt. Nec quisque semper accumsan
            arcu tincidunt cursus nec. Lobortis sem nisl fames venenatis, a,
            quisque pharetra, viverra nunc. Non turpis id rhoncus nunc tristique
            ipsum tellus dui. Est ut felis, aliquet sed tellus. Amet elit varius
            nisl, eros. Faucibus sit varius fringilla fusce. Urna, convallis
            dignissim blandit tincidunt venenatis. Dis tellus ut vel id gravida
            eu felis. Suspendisse vel tempor egestas quam etiam tortor senectus.
            Egestas fames mauris sit nunc nec nunc mauris adipiscing. Nunc
            aliquet in at tempus dignissim ornare leo. Placerat mauris donec
            pretium id vel aliquam. Lobortis tellus proin quis dignissim
            suscipit commodo odio nec maecenas. Praesent velit fames egestas
            adipiscing massa neque, pharetra. A vitae donec at vitae ac
            elementum a, vestibulum.
          </Stext>
        </Firstdiv>
      </center>
      <Weddingplace>PLACE FOR WEDDING</Weddingplace>
      <Button>
        <Arrow
          style={{ cursor: "pointer" }}
          src={arrow}
          onClick={() => gotoPrev()}
        />
        <View>View All</View>
        <Arrow
          style={{ cursor: "pointer" }}
          src={right}
          onClick={() => gotoNext()}
        />
      </Button>
      <Slidermain>
        <Bigcard>
          <Slider
            style={{ width: "100% ", overflow: "hidden" }}
            {...settings}
            ref={customeSlider}
          >
            {datas?.weddings?.map((i) => {
              return (
                <>
                  <Carddiv
                    style={{ cursor: "pointer" }}
                    onClick={() => Handleclick(`/weddingform/${i._id}`)}
                  >
                    <div className="name" key={i._id} />
                    <Image src={i.image?.url} />
                    <Whitediv>
                      <Neil>{i.location}</Neil>
                    </Whitediv>
                  </Carddiv>
                </>
              );
            })}
          </Slider>
        </Bigcard>
      </Slidermain>
      <Footer />
    </>
  );
};

export default Destinationwed;
