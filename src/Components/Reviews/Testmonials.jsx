import React from "react";
import styled from "styled-components";
import man4 from "../../assets/man4.png";
import star from "../../assets/star.png";
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";
import test4 from "../../assets/test4.png";
import test5 from "../../assets/test5.png";
import left from "../../assets/leftarrow1.svg";
import right from "../../assets/rightarrow.svg";
import man1 from "../../assets/mans1.png";
import man2 from "../../assets/mans2.png";
import man3 from "../../assets/mans3.png";
import man44 from "../../assets/mans4.png";
import man5 from "../../assets/mans5.png";
import man6 from "../../assets/mans6.png";
import Footer from "../Home/Footer";

const Maindiv = styled.div`
  margin-top: 2vmax;
  /* background:red; */
  padding: 0 2% 0 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.img`
  height: fit-content;
  /* width:20%; */

  @media (min-width: 993px) and (max-width: 1024px) {
    width: 30%;
  }

  @media (min-width: 1025px) and (max-width: 1279px) {
    height: 100%;
    width: 44%;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 100%;
    width: 26%;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    width: 22%;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 100%;
    width: 20%;
  }
`;
const Rightdiv = styled.div`
  width: 74%;
  /* margin: 0 0 0 4%; */
  padding: 0 2% 0 2%;
  /* background:red; */
  @media (min-width: 1024px) and (max-width: 1279px) {
    height: 100%;
    width: 50%;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 100%;
    width: 90%;
  }
`;
const Ron = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #000000;
  padding: 0 0 0 2%;
`;
const Consult = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  padding: 0 0 0 2%;
`;
const Stardiv = styled.div`
  display: flex;
  margin: 0.5% 0 0 2%;
  gap: 0.5vmax;
`;
const Star = styled.img`
  height: fit-content;
  width: 1vmax;
`;
const Stext = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  padding: 4% 0 0 2%;
  line-height: 29px;
  text-align: justify;

  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 13px;
    line-height: 18px;
    text-align: justify;
  }
  @media (min-width: 1026px) and (max-width: 1285px) {
    text-align: justify;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    text-align: justify;
    line-height: 23px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    text-align: justify;
    line-height: 25px;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 18px;
    width: 97%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    width: 97%;
    font-size: 19px;
  }
`;
const Imagediv = styled.div`
  margin: 3% 2% 0 2%;
  height: 30vmax;
  display: flex;
  justify-content: space-between;
  /* background: red; */
`;
const Img1 = styled.img`
  height: 100%;
  width: 28%;
  background-size: cover;
  object-fit: cover;
`;
const Img2 = styled.img`
  height: 45%;
  width: 100%;
  object-fit: cover;
  background-size: cover;
`;
const Img3 = styled.img`
  height: 45%;
  width: 100%;
  object-fit: cover;
`;
const Img4 = styled.img`
  height: 45%;
  width: 100%;
  object-fit: cover;
`;
const Img5 = styled.img`
  height: 45%;
  width: 100%;
  object-fit: cover;
`;
const Secdiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-content: space-between; */
  justify-content: space-between;
  /* gap:1vmax; */
  width: 30%;
  /* background-color: blue; */
  height: 100%;
`;
const Tdiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-content: space-between; */
  justify-content: space-between;
  /* gap:1vmax; */
  width: 30%;
  /* background-color: blue; */
  height: 100%;
`;
const Customer = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 3% 0 0 0;
  color: #145843;
`;
const Nextdiv = styled.div`
  @media (min-width: 1024px) and (max-width: 1279px) {
    margin: 3% 2% 0 2%;

    justify-content: space-between;
  }
  margin: 3% 2% 0 2%;
  display: flex;

  justify-content: space-between;
`;
const Left = styled.img``;
const Right = styled.img``;
const Mans1 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1025px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans2 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1025px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans3 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1025px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans4 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1025px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans5 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1025px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Mans6 = styled.img`
  height: 100%;
  width: 15%;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 13%;
  }
  @media (min-width: 1025px) and (max-width: 1279px) {
    height: 100%;
    width: 12%;
  }
`;
const Testmonials = () => {
  return (
    <>
      <Maindiv>
        <Main src={man4} />
        <Rightdiv>
          <Ron>RON BERNIER</Ron>
          <Consult>(Consult)</Consult>
          <Stardiv>
            <Star src={star} />
            <Star src={star} />
            <Star src={star} />
          </Stardiv>
          <Stext>
            Consectetur eu dignissim sit aliquam sit leo orci, odio fermentum.
            Id est at eu auctor lacus, quis iaculis sapien. Ac vel pretium
            turpis fermentum suspendisse aliquam tempus porttitor tempor.
            Ullamcorper ridiculus sodales convallis pharetra sed bibendum.
            Pretium tellus consectetur dolor tortor lacus morbi. Mattis nullam
            ridiculus nec sit dictum enim praesent. Tempor commodo pellentesque
            purus commodo maecenas facilisi amet, fermentum. Aenean sed morbi
            nam convallis lobortis ac. Sed ut tincidunt fringilla gravida
            habitant. Ultricies magnis nunc eu aliquet neque, habitant massa.
            Nisl, blandit nisi sem in leo. Ac placerat tempor, in morbi eget
            pellentesque a maecenas. Amet, faucibus vel adipiscing laoreet nisl.
            Adipiscing sit enim mauris maecenas eget ut erat. Lacus, curabitur
            nulla orci tortor sed nunc a, scelerisque. Id sed in consequat,
            praesent habitant massa. Tincidunt at pellentesque consequat lectus
            vitae. Mi mi nibh duis feugiat ultrices. Libero id sed risus
            potenti. Aliquet varius sollicitudin scelerisque adipiscing viverra
            ultrices viverra venenatis tempus. Id fringilla risus dui ultricies
            imperdiet. Pharetra adipiscing amet nisi, nulla gravida.
            Pellentesque in rutrum in venenatis rhoncus. Interdum faucibus non a
            nunc. In tellus eros posuere quisque quis integer consectetur nunc
            pellentesque. Habitasse morbi dictum quam sit. Hac ipsum gravida
            nulla magna.
          </Stext>
        </Rightdiv>
      </Maindiv>
      <Imagediv>
        <Img1 src={test1} />
        <Secdiv>
          <Img2 src={test2} />
          <Img3 src={test3} />
        </Secdiv>
        <Tdiv>
          <Img4 src={test4} />
          <Img5 src={test5} />
        </Tdiv>
      </Imagediv>
      <Customer>MORE CUSTOMER REVIEWS</Customer>

      <Nextdiv style={{cursor:'pointer'}}>
        <Right src={right} />
        <Mans1 src={man1} />
        <Mans2 src={man2} />
        <Mans3 src={man3} />
        <Mans4 src={man44} />
        <Mans5 src={man5} />
        <Mans6 src={man6} />
        <Left src={left} />
      </Nextdiv>
      <Footer />
    </>
  );
};

export default Testmonials;
