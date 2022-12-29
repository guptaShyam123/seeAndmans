import React from "react";
import styled from "styled-components";
import slide11 from "../../assets/slide11.png";
import hotel1 from "../../assets/hotelsvg.svg";
import cab1 from "../../assets/cabsvg.svg";
import ferri1 from "../../assets/ferrysvg.svg";
import cruise1 from "../../assets/cruisesvg.svg";
import water1 from "../../assets/watersvg.svg";
import location from "../../assets/greenlocation.svg";
import star from "../../assets/star.png";
import "./package.css";

import { useNavigate } from "react-router-dom";
import { Diversity3 } from "@mui/icons-material";

const Carddiv = styled.div`
  margin-top: 2vmax;
  margin-left: 2vmax;
`;
const Card = styled.div``;
const Img = styled.img`
  background-size: cover;
  object-fit: cover;
  height: 15vmax;
  width: 23vmax;
`;
const Innerdiv = styled.div`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  width: 23vmax;
  height: 16.5vmax;
  // margin:0;
  margin-top: -0.5vmax;

  @media (min-width: 1640px) and (max-width: 1740px) {
    height: 55%;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    height: 55%;
  }
`;
const Icondiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1vmax;
  /* margin-top:-0.4vmax; */
  /* width:19.8vmax; */
  /* margin-left:1vmax; */
`;
const Icondivs = styled.div`
  display: flex;
  /* justify-content:space-between; */
  gap: 1vmax;
  justify-content: space-between;
  /* margin-top:-0.4vmax; */
  /* width:19.8vmax; */
  /* margin-left:1vmax; */
  /* margin:  */
  padding: 2% 2%;
  /* margin: 2% 0% 0 0.5%; */
  /* background:red; */

  /* width:100%; */
`;
const Icon = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  /* padding-top:1vmax; */
`;
const Textdiv = styled.div`
  display: flex;
  margin-left: 0.7vmax;

  margin-top: 1vmax;
  justify-content: space-around;
  width: 22vmax;
`;
const T = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 0.7vmax;
  color: #000000;
`;
const Package = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1vmax;
  color: #145843;

  padding: 1vmax 1vmax;
`;
const Location = styled.div`
  padding: 1vmax 1vmax;
  display: flex;
  gap: 0.4vmax;
  margin-top: -1.2vmax;
`;
const Loactionimg = styled.img`
  height: 1vmax;
  width: 1vmax;
`;
const Port = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 0.7vmax;
  color: #145843;
`;
const Stext = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.6vmax;
  /* padding:1vmax 1vmax 0 3%; */
  padding: 1% 1% 0 3%;
  color: #000000;
  /* margin-top:-1vmax; */
`;
const Star = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vmax 1vmax;
  margin-top: -0.9vmax;
`;
const Stardiv = styled.div`
  display: flex;
  gap: 0.5vmax;
  @media (min-width: 1640px) and (max-width: 1740px) {
    margin-top: 1vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* background:red;margin-top:1vmax; */
    margin-top: 1vmax;
  }
`;
const Starimg = styled.img`
  height: fit-content;
  width: 1vmax;
`;
const Rate = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.2vmax;
  color: #145843;
  @media (min-width: 1640px) and (max-width: 1740px) {
    padding-top: 4%;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    padding-top: 4%;
  }
`;
const Button = styled.button`
  background: #ffffff;
  box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.16);
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9vmax;
  color: #000000;
  height: 2vmax;
  width: 6vmax;
  border: 1px solid #145843;
  margin-left: 8vmax;
  cursor: pointer;
`;
const Maindiv = styled.div`
  display: flex;
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* background-color:red; */
  justify-content: center;
  align-items: center;
  margin: 1% 0 0 0;

  /* margin:0; */
  /* padding:0; */
`;
const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* background-color:pink; */
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
`;
const Div3 = styled.div`
  /* background:pink; */
  width: 9vmax;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Packcard = () => {
  const navigate = useNavigate();

  const clicks = () => {
    navigate("/packages");
  };
  return (
    <>
      <Maindiv>
        <Carddiv>
          <Card>
            <Img src={slide11} />
          </Card>
          <Innerdiv>
            <Icondivs>
              <Div1>
                <Icon src={hotel1} />
                <T>7 Hotels</T>
              </Div1>
              <Div1>
                <Icon src={cab1} />
                <T>3 Cabs</T>
              </Div1>
              <Div1>
                <Icon src={ferri1} />
                <T>5 Ferries</T>
              </Div1>

              <Div5>
                <Icon src={water1} />
                <T>8 Activity</T>
              </Div5>
            </Icondivs>
            <Package>Package Name</Package>
            <Location>
              <Loactionimg src={location} />
              <Port>Port Blair</Port>
            </Location>
            <Stext>
              Enim nibh interdum amet mi aliquet mauris quam. Ullamcorper
              imperdiet felis, duis ornare. Nec, faucibus cras nascetur cursus
              sit. Viverra a, augue quam lacus at tincidunt purus.
            </Stext>
            <Star>
              <Stardiv>
                <Starimg src={star} />
                <Starimg src={star} />
                <Starimg src={star} />
              </Stardiv>
              <Rate>$349.00</Rate>
            </Star>
            <Button className="button">BOOK NOW</Button>
          </Innerdiv>
        </Carddiv>
        <Carddiv>
          <Card>
            <Img src={slide11} />
          </Card>
          <Innerdiv>
            <Icondivs>
              <Div1>
                <Icon src={hotel1} />
                <T>7 Hotels</T>
              </Div1>
              <Div3>
                <Icon src={cab1} />
                <T>3 Cabs</T>
              </Div3>
              <Div1>
                <Icon src={ferri1} />
                <T>5 Ferries</T>
              </Div1>

              <Div5>
                <Icon src={water1} />
                <T>8 Activity</T>
              </Div5>
            </Icondivs>

            <Package>Package Name</Package>
            <Location>
              <Loactionimg src={location} />
              <Port>Port Blair</Port>
            </Location>
            <Stext>
              Enim nibh interdum amet mi aliquet mauris quam. Ullamcorper
              imperdiet felis, duis ornare. Nec, faucibus cras nascetur cursus
              sit. Viverra a, augue quam lacus at tincidunt purus.
            </Stext>
            <Star>
              <Stardiv>
                <Starimg src={star} />
                <Starimg src={star} />
                <Starimg src={star} />
              </Stardiv>
              <Rate>$349.00</Rate>
            </Star>
            <Button onClick={clicks} className="button">
              BOOK NOW
            </Button>
          </Innerdiv>
        </Carddiv>
      </Maindiv>
    </>
  );
};

export default Packcard;
