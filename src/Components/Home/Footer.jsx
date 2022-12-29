import React from "react";
import footer from "../../assets/footer.png";
import styled from "styled-components";
import onfooter from "../../assets/onfooter.png";
import video from "../../assets/video.mp4";
import line from "../../assets/line.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import frame14 from "../../assets/frame14.png";
import { Link, useNavigate } from "react-router-dom";
import giphy from "../../assets/footergif2.gif";
import logo1 from "../../assets/logo1.png";

const Footerba = styled.div`
  background: url(${giphy});
  display: flex;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 5vmax;
  width: 100%;
  height: 38vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    /* width: 80vmax;
    margin-top: -4vmax; */
    display:none;
  }
  @media (min-width: 1541px) and (max-width: 1680px) {
    margin-top: 5vmax;

    height: 40vmax;
  }
`;

const Maindiv = styled.div`
  margin: 5% 0 0 0;
  height: 22vmax;
  padding: 2% 5.5vw;
  text-align: left;
  /* position: absolute; */
  background: rgba(255, 255, 255, 0.6);
  width: 85vw;
  /* justify-content: space-evenly;
     align-items: center;
    text-align: justify; */
  display: flex;
  justify-content: space-between;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 75vmax;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    width: 95%;
    background: rgba(255, 255, 255, 0.6);
  }
`;
const Fdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  /* align-items: center; */
  width: 21vw;
  text-align: left;

  height: fit-content;
  /* width:20%; */
 /* background:red; */
  margin: 2vh 0 0 0;
  @media (min-width:993px) and (max-width: 1024px) {
    /* font-size:13px; */
    gap:1px;
  }

  @media (min-width:1025px) and (max-width: 1285px) {
    /* font-size:13px; */
    gap:1px;
  }
  @media (min-width:1286px) and (max-width: 1367px) {
    /* font-size:13px; */
    gap:1px;
  }
  @media (min-width:1368px) and (max-width: 1445px) {
    /* font-size:13px; */
    gap:1px;
  }
  
`;
const F1div = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 0 0 0;
  /* background:red; */
  text-align: left;

  height: fit-content;
  gap: 1vmax;
  width: 15vw;
  /* width:20%; */
`;
const F2div = styled.div`
  display: flex;
  width: 15vw;

  flex-direction: column;
  margin: 2vh 0 0 0;

  height: fit-content;
  text-align: left;
  gap: 1vmax;
  /* padding-left:10vmax; */
`;
const F3div = styled.div`
  display: flex;
  /* width: 22%; */
  gap: 2vh;
  height: fit-content;

  flex-direction: column;
  margin: 2vh 0 0 0;

  text-align: left;
  width: 20vw;
`;
const Para1 = styled.p`
  font-size: 2.4vmax;
  color: #000000;
  font-family: Poppins;
  font-weight: 700;

  @media (min-width: 335px) and (max-width: 421px) {
    font-weight: 500;
    font-size: 2.4vmax;
  }
  @media (min-width:993px) and (max-width: 1024px) {
    font-size:1.5vmax;
  }
`;
const Para2 = styled.p`
  font-family: Poppins;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    font-weight: 500;
    font-size: 2.4vmax;
  }
  @media (min-width:993px) and (max-width: 1024px) {
    font-size:13px;
  }
`;

const Para3 = styled.p`
  font-family: Poppins;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;
  @media (min-width:993px) and (max-width: 1024px) {
    font-size:13px;
  }
`;
const Input1 = styled.div`
  display: flex;
`;
const Input = styled.input`
  opacity: 1;
  height: 2.5vmax;
  width: 12vmax;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(66, 66, 66, 1);
    /* padding-left: 0px; */
  }
  border: 3px solid rgba(13, 161, 116, 1);
  font-size: 1vmax;
  font-family: Poppins;
  padding-left: 5px;
  outline: none;
  @media (min-width: 1541px) and (max-width: 1680px) {
    height: 2.5vmax;
    width: 12vmax;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: rgba(66, 66, 66, 1);
      padding-left: 14px;
    }
    border: 2px solid rgba(13, 161, 116, 1);
    font-size: 1vmax;
    font-family: Poppins;
  }
`;
const Arrow = styled.img`
  width: 4vmax;
  height: 2.9vmax;
  margin-left: -0.3vmax;
  background-color: rgba(13, 161, 116, 1);
`;
const Fpara1 = styled.p`
  font-family: Poppins;
  font-size: 1.5vmax;
  color: rgba(0, 0, 0, 1);
  font-style: normal;
  font-weight: 700;
  height: 5vh;
  margin-bottom: 1.5vh;
`;
const Fpara2 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;
`;
const Fpara3 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;
`;
const Fpara4 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;
`;
const Resource = styled.p`
  font-family: Poppins;
  font-size: 1.5vmax;
  color: rgba(0, 0, 0, 1);
  font-style: normal;
  font-weight: 700;
  height: 5vh;
  margin-bottom: 1.5vh;
`;
const Blog = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;

  cursor: pointer;
`;
const Newsletter = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;
`;
const Privacy = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;
`;
const Contact = styled.p`
  font-family: Poppins;
  font-size: 1.5vmax;
  color: rgba(0, 0, 0, 1);
  font-style: normal;
  font-weight: 700;
  height: 5vh;
  margin-bottom: 1.5vh;
`;
const Phone = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;
`;
const Address = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 1.3vmax;
`;
const Path = styled.div`
  width: 15vmax;
  padding-left: 9vmax;
`;
const Address1 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    font-weight: 500;
    font-size: 2vmax;
  }
`;
const Address2 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    font-weight: 500;
    font-size: 2vmax;
  }
`;
const Line = styled.img`
  width: auto;

  margin-top: 10vmax;
  position: absolute;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 96%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    width: 96%;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    width: 96%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    width: 96%;
  }
  @media (min-width: 1541px) and (max-width: 1680px) {
    width: 96%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    width: 96%;
  }
`;
const Copy = styled.p`
  display: flex;
  color: #000000;
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 500;
  /* padding-top: 27vmax; */
  /* height: fit-content; */
  position: absolute;
  margin: 50vh 0 0 -50%;

  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 45vh 0 0 -53%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 42vh 0 0 -53%;
  }

  @media (min-width: 1367px) and (max-width: 1445px) {
    margin: 42vh 0 0 -53%;
  }
`;
const Imagediv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vmax;
  margin: 50vh 0 0 -3%;
  position: absolute;
  padding-left: 76vmax;
  height: 5vh;
  /* background-color: red; */
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 45vh 0 0 1%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 42vh 0 0 1%;
  }

  @media (min-width: 1367px) and (max-width: 1445px) {
    margin: 42vh 0 0 -53%;
  }
`;
const Imgsr = styled(AiOutlineInstagram)`
  color: black;
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Imgsr1 = styled(FiFacebook)`
  color: black;
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Imgsr2 = styled(FiTwitter)`
  color: black;
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Icon = styled.img`
height:70px;
width:80px;
@media (min-width:993px) and (max-width: 1024px) {
/* height:20px; */
 /* width:60px; */
}
`

const Footer = () => {
  const [name, setName] = React.useState("");

  const navigate = useNavigate();

  const handler = () => {
    // navigate("/cablist");
  };
  const click = () => {
    navigate("/blogs");
  };

  const handler1 = () => {
    navigate("/testimonial");
  };

  const clickme = () => {
    navigate("/wedding");
  };

  const about = () => {
    navigate("/aboutus");
  };
  return (
    <>
      <Footerba>
        <Maindiv>
          <Fdiv>
          <Icon src={logo1} />
            <Para1>Be Future Ready</Para1>

            <Para2>Get exclusive offer updates </Para2>
            <Para3>Straight to Your inbox</Para3>
            <Input1>
              <Input
                type="email"
                placeholder="Email address"
                name="username"
                id="usrname"
              />
              <Arrow src={frame14} />
            </Input1>
          </Fdiv>

          <F1div>
            <Fpara1>Company</Fpara1>
            <Fpara2 onClick={handler}>Home</Fpara2>
            <Fpara3 style={{ cursor: "pointer" }} onClick={about}>
              About us
            </Fpara3>
            <Fpara4 onClick={handler1} style={{ cursor: "pointer" }}>
              Testimonial
            </Fpara4>
          </F1div>

          <F2div>
            <Resource>Resource</Resource>
            <Blog onClick={click} style={{ cursor: "pointer" }}>
              Blog
            </Blog>
            <Newsletter style={{ cursor: "pointer" }} onClick={clickme}>
              Wedding
            </Newsletter>
            <Privacy>Privacy Policy</Privacy>
          </F2div>

          <F3div>
            <Contact>Contact</Contact>
            <Phone> Contact SeeAndamans  </Phone>
            <Address>Address</Address>

            <Address1>7716 Kerluke Burgs, 1856 Tilman Parkway</Address1>
          </F3div>
        </Maindiv>

        <Line src={line} />
        <Copy>ANDAMAN TOURISM AND HOSPITALITIES Pvt. Ltd. CIN No: U63000AN2022PTC005623  </Copy>
        <Imagediv>
          <Imgsr />
          <Imgsr1 />
          <Imgsr2 />
        </Imagediv>
      </Footerba>
    </>
  );
};

export default Footer;
