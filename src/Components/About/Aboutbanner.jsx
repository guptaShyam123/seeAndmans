import React from "react";
import styled from "styled-components";
import img1 from "../../assets/41.png";
import img2 from "../../assets/42.png";
import img3 from "../../assets/43.png";
import img4 from "../../assets/44.png";
import sea from "../../assets/21.png";
import Slider1 from "../Home/Slider1";
import ele from "../../assets/ele.png";
import man from "../../assets/Man.png";
import beach from "../../assets/beach.png";
import waters from "../../assets/waters.png";
import nav from "../../assets/navb.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clear from "../../assets/clear.png";

import Footer from "../Home/Footer";

const Text = styled.p`
  text-align: center;
  color: #7a7a7a;
  font-style: normal;
  font-weight: 600;
  font-family: Poppins;
  font-size: 1.3vmax;
  margin-top: 4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 3.6vmax;
    margin-right: -22vmax;
  }
`;

const Stext = styled.p`
  text-align: center;
  color: #145843;
  font-style: normal;
  font-weight: 700;
  font-family: Poppins;
  font-size: 1.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 3.3vmax;
    margin-right: -22vmax;
    margin-top: 2vmax;
  }
`;
const Bigtext = styled.p`
  width: 80%;
  /* margin : 2% 3% 0 4%; */
  text-align: center;
  margin-top: 1%;
  font-size: 13px;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 60vmax;
    margin-left: 3.9vmax;
    margin-top: 2vmax;
  }
`;
const Newtext = styled.p`
  font-size: 1vmax;
  font-weight: 400;
  font-family: Poppins;
  font-style: normal;
  text-align: center;

  color: #7a7a7a;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 3vmax;
    font-weight: 400;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    /* text-align:justify;
      background-color:red; */
  }
`;
const Imagediv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 1vmax;
  margin-top: 3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    margin-right: -22vmax;
    flex-wrap: wrap;
    margin-top: 2.5vmax;
  }
`;

const Img = styled.img`
  height: 22vmax;
  width: 21vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 30vmax;
    width: 28vmax;
    border-radius: 10px;
  }
`;
const Img1 = styled.img`
  height: 22vmax;
  width: 21vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 30vmax;
    width: 28vmax;
    border-radius: 10px;
  }
`;
const Img2 = styled.img`
  height: 22vmax;
  width: 21vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 30vmax;
    width: 28vmax;
    border-radius: 10px;
  }
`;
const Img3 = styled.img`
  height: 22vmax;
  width: 21vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 30vmax;
    width: 28vmax;
    border-radius: 10px;
  }
`;
const P = styled.p`
  margin-top: 5vmax;
  color: #145843;
  text-align: center;
  font-size: 1.5vmax;
  font-weight: 700;
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 5vmax;
    font-weight: 600;
    margin-left: 19vmax;
  }
`;
const Secdiv = styled.div`
  display: flex;

  margin: 3% 0 0 0%;
  /* background-color: red; */
  justify-content: space-between;
  /* width:95%; */
  width: 90%;

  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 3vmax;

    display: grid;
    margin-left: 23vmax;
  }
`;

const Text1 = styled.p`
  color: #000000;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.1vmax;
  line-height: 30px;
  width: 50%;
  /* padding: 2% 0 0 0; */
  text-align: justify;
  @media (min-width: 335px) and (max-width: 421px) {
    font-weight: 400;
    font-size: 1.2rem;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    line-height: 22px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    padding: 0;
    line-height: 27px;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    padding: 0;
    line-height: 27px;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    line-height: 34px;
    padding: 0;
  }
`;
const Image = styled.img`
  height: fit-content;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 40vmax;
    width: 60vmax;
    margin-top: -10vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 27vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 27vmax;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 25vmax;
  }
  @media (min-width: 1640px) and (max-width: 1745px) {
    height: 23vmax;
  }
`;
const Gallery = styled.p`
  color: #145843;
  font-size: 1.6vmax;
  font-weight: 700;
  font-family: Poppins;
  text-align: center;
  margin: 5% 0 0 0;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 4vmax;
    font-weight: 600;
    margin-top: -24vmax;
    margin-left: 23vmax;
  }
`;
const Gallarydiv = styled.div`
  display: flex;
  gap: 3vmax;
  justify-content: center;
  align-items: center;
  margin-top: 5vmax;
  width: 100%;
  /* background:red; */
  @media (min-width: 335px) and (max-width: 421px) {
    flex-wrap: wrap;
    display: grid;
    margin-left: 10vmax;
  }
`;
const G1div = styled.div`
  display: grid;
  gap: 1vmax;
  /* background-color:red; */
  @media (min-width: 335px) and (max-width: 421px) {
    margin-right: -3vmax;
    display: flex;
  }
`;
const Image2 = styled.img`
  height: 15vmax;
  width: 15vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 24vmax;
    width: 30vmax;
    border-radius: 10px;
  }
`;
const Image3 = styled.img`
  height: 15vmax;
  width: 15vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 24vmax;
    width: 30vmax;
    border-radius: 10px;
  }
`;

const Image4 = styled.img`
  height: 31vmax;
  width: 20vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 36vmax;
    width: 61vmax;
    border-radius: 10px;
    display: none;
  }
`;
const G2div = styled.div`
  gap: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-right: -3vmax;
  }
`;
const Image5 = styled.img`
  height: 15vmax;
  width: 31vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 36vmax;
    width: 61vmax;
    border-radius: 10px;
  }
`;
const Sdiv = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 0.5vmax;
`;
const Image6 = styled.img`
  height: 15vmax;
  width: 15vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 24vmax;
    width: 30vmax;
    border-radius: 10px;
  }
`;
const Image7 = styled.img`
  height: 15vmax;
  width: 15vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 24vmax;
    width: 30vmax;
    border-radius: 10px;
  }
`;
const Image8 = styled.img`
  height: 31vmax;
  width: 15vmax;
  margin-left: -2vmax;
  object-fit: cover;
  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
`;
const Aboutbanner = () => {
  return (
    <>
      <Text>Duis semper tincidunt quis</Text>

      <Stext>WELCOME TO SEEANDAMANS TOUR</Stext>
      <center>
        <Bigtext>
          <Newtext>
            Facilisis egestas laoreet pharetra nullam pharetra, netus etiam
            ante. Et in velit accumsan tempor platea dui risus elementum. Sit mi
            fames euismod vel. Integer integer gravida ultricies elit id dictum
            nullam eget habitant. Faucibus tellus adipiscing in vitae
            consectetur. Tortor, nam urna, lobortis nisl arcu habitasse montes,
            mauris, sed. Turpis at nisl fusce integer arcu.
          </Newtext>
        </Bigtext>
      </center>

      <Imagediv>
        <Img src={img1} />
        <Img1 src={img2} />
        <Img2 src={img3} />
        <Img3 src={img4} />
      </Imagediv>

      <P>Why Us</P>
      <center>
        <Secdiv>
          <Text1>
            {" "}
            Pellentesque nibh velit ipsum ac cursus molestie. Ipsum hac egestas
            in enim leo commodo. Adipiscing lacus, amet nunc tortor quis nulla
            velit mauris. Pellentesque quisque dui cras leo pharetra sed vel
            cras nullam. Iaculis netus sit morbi nunc. Id turpis quis sit
            condimentum. Pulvinar aliquam tempus, lacinia cursus diam cras
            aenean nulla dignissim. Cursus eu dui aliquam cursus in. Duis vitae
            et non elementum nam porttitor dui commodo nec. Vitae imperdiet sit
            tristique molestie quis arcu at condimentum neque. Pulvinar in
            porttitor accumsan pellentesque ac. Lorem eget consequat aliquet
            arcu. Quisque scelerisque ultrices odio at tortor massa. Sed a
            tellus amet eget id mi vehicula. Facilisis ut pellentesque cursus
            maecenas. Lorem tortor sem tincidunt adipiscing. Euismod
            pellentesque posuere massa nec erat. Blandit a, condimentum Sit mi
            id nulla id. Ac vitae pretium sed viverra eu enim. Nulla amet
            integer sagittis, erat.
          </Text1>

          <Image src={sea} />
        </Secdiv>
      </center>
      <Slider1 />
      <Gallery>Gallery</Gallery>
      <Gallarydiv>
        <G1div>
          <Image2 src={nav} />
          <Image3 src={clear} />
        </G1div>
        <Image4 src={waters} />
        <G2div>
          <Image5 src={beach} />
          <Sdiv>
            <Image6 src={img1} />
            <Image7 src={ele} />
          </Sdiv>
        </G2div>
        <Image8 src={man} />
      </Gallarydiv>
      <Footer />
    </>
  );
};

export default Aboutbanner;
