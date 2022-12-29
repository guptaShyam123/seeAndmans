import React from "react";
import styled from "styled-components";
import Practice from "../../Components/Practice";

import arrow from "../../assets/bluearrow.svg";
import { cards1 } from "./cards1";
import card1 from "../../assets/secondcard.png";
import card2 from "../../assets/secondcard1.png";
import card3 from "../../assets/secondcard2.png";
import card4 from "../../assets/secondcard3.png";
import card5 from "../../assets/secondcard4.png";
import card6 from "../../assets/secondcard5.png";
import card7 from "../../assets/secondcard6.png";
import card8 from "../../assets/secondcard7.png";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import "./homecard.css";

const Maindiv = styled.div`
  margin-top: 4vmax;
  display: flex;
  height: fit-content;
  /* background-color: violet; */
  gap: 3vmax 3vmax;
  flex-wrap: wrap;
  align-items: center;
  /* background-color: red; */
  justify-content: space-evenly;
  @media (min-width:322px) and (max-width:421px){
    display: none;
  }
`;
const Carddiv = styled.div`
  display: flex;
  /* background-color: blue; */
  width: 28%;
  height: 10vmax;
  /* background-color: blue; */
  box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.1);
  margin: 2% 0 0 0;
`;
const Img = styled.img`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  object-fit: cover;
  object-fit: fill;
  width: 35%;
  height: 100%;
`;
const Whitediv = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 65%;
  height: 100%;
  /* background-color: red; */
`;
const P = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  margin: 1vmax 1vmax;
  width: 15vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 15px;
  }
`;
const Hr = styled.hr`
  background: black;
  height: 0.5px;
  border: none;

  /* margin-top:0.5vmax; */
`;
const Textdiv = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 2vh;
  /* justify-content: center; */
  gap: 1vmax;
  height: fit-content;
  /* background-color: yellow; */
  /* padding:1vmax 1vmax; */
  /* margin-top:0.1vmax; */
`;
const Explore = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #0085ff;
  height: 3.5vh;
  padding: 0 0 0 10px;
  text-decoration: underline;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Blue = styled.img`
  height: 3.5vh;
  width: 1vmax;
  /* padding: 0 0 10px 0; */
  /* padding-top:0.6vmax; */
`;
const Thing = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: #145843;
  text-align: center;
  margin-top: 5vh;
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 4% 0 0 0;
  }
`;
const Top = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  color: #145843;
  text-align: center;
  margin-top: 13vh;
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 4% 0 0 0;
  }
`;
const Secondcard = styled.div`
  background: url(${card6});
  height: 20vmax;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  width: 20.5%;
  margin: 2% 0 0 0;
`;
const Port = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #ffffff;
  text-align: center;

  line-height: 20vmax;
`;
const Secondbigcard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1vmax 1vmax;
  justify-content: space-evenly;
  margin-top: 4vmax;
`;
const Homecard = () => {
  const navigate = useNavigate();

  const click = () => {
    navigate("/blogs");
  };

  const click1 = () => {
    navigate("/island");
  };
  return (
    <>
      <Thing>THINGS TO DO WHILE YOU ARE HERE</Thing>
      <Maindiv>
        {cards1.map((i) => {
          return (
            <>
              <Carddiv
                className="card"
                onClick={click}
                style={{ cursor: "pointer" }}
              >
                <Img src={i.img} />
                <Whitediv>
                  <P>{i.text} </P>
                  <Hr></Hr>
                  <Textdiv>
                    <Explore>Explore</Explore>
                    <Blue src={arrow} />
                  </Textdiv>
                </Whitediv>
              </Carddiv>
            </>
          );
        })}
      </Maindiv>
      <Top>TOP ANDAMAN GUIDES</Top>

      <Practice />
    </>
  );
};

export default Homecard;
