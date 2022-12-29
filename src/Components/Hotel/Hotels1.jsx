import React from "react";
import styled from "styled-components";
import star from "../../assets/star.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import img1 from "../../assets/G2.png";
import img2 from "../../assets/G1.png";
import img3 from "../../assets/slide10.png";
import img4 from "../../assets/slide11.png";
import doc from "../../assets/doc1.svg";
import line from "../../assets/line1.png";
import { hoteldata } from "./hoteldata";
import { display } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import "./hotel.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { baseURL } from "../../Components/Apibaseurl";

const Maindiv = styled.div`
  display: flex;
  height: auto;
  padding: 0 2vw;
  margin-top: 2vmax;
  justify-content: space-between;
  @media (min-width: 335px) and (max-width: 421px) {
    justify-items: flex-start;
  }
`;
const Checkdiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 42vmax;
  width: 24vw;
  overflow-y: scroll;
  /* background-color: red; */
  /* margin-top:2vmax; */
  top: 10vh;
  position: sticky;
  /* left: 0; */

  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    position: sticky;
  }
`;
const Firstdiv = styled.div`
  display: flex;
  margin-top: 2vmax;
  width: 1vmax;
`;
const Div1 = styled.div`
  display: flex;
  margin-left: 1vmax;

  width: 0.5vmax;
`;
const Div2 = styled.div`
  display: flex;
  margin-left: 1vmax;

  width: 0.5vmax;
`;
const Div3 = styled.div`
  display: flex;
  margin-left: 1vmax;

  width: 0.5vmax;
`;

const P = styled.p`
  font-size: 1vmax;
  font-weight: 700;
  font-family: Poppins;
  font-style: normal;
  margin-top: -0.2vmax;
`;

const Star = styled.img`
  height: 1vmax;
  width: 1vmax;
`;
const Input = styled.input`
  color: black;
  height: 1.1vmax;
  width: 1.1vmax;
  margin-left: 2vmax;
`;
const Sort = styled.p`
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 2vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Checkdiv1 = styled.div`
  display: flex;
  gap: 1vmax;

  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input2 = styled.input`
  font-size: 1.2vmax;
  height: 1.2vmax;
  width: 1vmax;
  color: black;
`;
const Popular = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv2 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input3 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Prize = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
  @media (min-width: 1024px) and (max-width: 1279px) {
    font-size: 0.8vmax;
  }
`;

const Checkdiv3 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input4 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Prizes = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Checkdiv4 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input5 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Duration = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Checkdiv5 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input6 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Duration1 = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Themes = styled.p`
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 3vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Checkdiv6 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input7 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Pil = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv7 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input8 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Honeymoon = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv8 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input9 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Lesuire = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv9 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input10 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Luxury = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv10 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input11 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Beach = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv11 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input12 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Adventure = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Scroll = styled.div`
  overflow-y: scroll;
  position: relative;
  height: 10vmax;
  width: 14vmax;
  color: black;
  overflow: auto;
  margin-top: 1vmax;
  @media (min-width: 1024px) and (max-width: 1280px) {
    width: 15vmax;
    height: 13vmax;
    overflow: auto;
    overflow-y: scroll;
  }
`;
const Place = styled.p`
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 3vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;

const Checkdiv12 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input13 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Gangtok = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv13 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input14 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Shri = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv14 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input15 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Port = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv15 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input16 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Munnar = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;

const Checkdiv16 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
`;
const Input17 = styled.input`
  font-size: 1vmax;
  color: black;
  font-weight: bold;
  height: 1.2vmax;
  width: 1vmax;
`;
const Darj = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Show = styled.p`
  color: #0088a6;
  font-size: 0.9vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.9vmax;
  padding-left: 9vmax;
  cursor: pointer;
`;
const Show1 = styled.p`
  color: #0088a6;
  font-size: 0.9vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  margin-top: 0.9vmax;
  padding-left: 9vmax;
  cursor: pointer;
`;
const Holiday = styled.p`
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 3vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Breaks = styled.p`
  font-size: 0.9vmax;
  font-weight: 600;
  font-family: Poppins;
  color: black;
`;
const Colordiv = styled.div`
  background: #ffffff;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 18.6vmax;
  width: 67vmax;

  /* margin-left: 2vw; */
  display: flex;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 510px;
    margin-left: 3px;
    height: 220px;
  }
  @media (min-width: 993px) and (max-width: 1025px) {
    width: 68vmax;
  }
`;
const Hotelca = styled.p`
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 2vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Duration12 = styled.p`
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 2vmax;
  padding-left: 1.7vmax;
  font-style: normal;
`;
const Budget = styled.p`
  font-size: 1vmax;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 1vmax;
  padding-left: 1.7vmax;
  font-style: normal;
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 0.8vmax;
  }
`;
const Innerdiv = styled.div``;
const Img = styled.img`
  height: 14.6vmax;
  width: 17vmax;
  object-fit: cover;
  border-top-left-radius: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 120px;
    width: 120px;
  }
`;
const Nested = styled.div`
  display: flex;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-top: -2px;
  }
`;
const Image1 = styled.img`
  height: 4vmax;
  width: 5vmax;
  object-fit: cover;
  border-bottom-left-radius: 1vmax;

  padding: 0;
  margin-top: -0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 40px;
    width: 40px;
  }
`;
const Image2 = styled.img`
  height: 4vmax;
  width: 6vmax;
  object-fit: cover;

  padding: 0;
  margin-top: -0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 40px;
    width: 40px;
  }
`;
const Image3 = styled.img`
  height: 4vmax;
  width: 6vmax;
  object-fit: cover;

  padding: 0;
  margin-top: -0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 40px;
    width: 40px;
  }
`;
const Secondiv = styled.div`
  display: grid;
  padding-left: 2vmax;
  margin-top: 1vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 170px;
  }
`;
const Guest = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9vmax;
  color: #000000;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Spa = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  color: #006ce0;
  font-size: 1.2vmax;
  width: 20vmax;
  margin-top: -1.8vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 13px;
    padding-top: 10px;
    margin-top: -25px;
  }
`;
const Tapu = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9vmax;
  color: #000000;
  margin-top: -1.5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
    padding-top: 20px;
    margin-top: -31px;
  }
`;
const Jungle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.7vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
    margin-top: 8px;
  }
`;
const Service = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.7vmax;
  margin-top: -1.6vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Ac = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.7vmax;
  margin-top: -2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;

const Doctor = styled.div`
  display: flex;
  gap: 1vmax;
  margin-left: -1vmax;
  margin-top: -1.5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: -120px;
  }
`;
const Doc1 = styled.div`
  display: flex;
  gap: 1vmax;
`;
const Doc2 = styled.div`
  display: flex;
  gap: 1vmax;
  padding-left: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: -2vmax;
  }
`;
const Docimg = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
`;
const Call = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 1vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 0.9vmax;
  }
`;

const Sani = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
  @media (min-width: 993px) and (max-width: 1025px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 1vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 0.9vmax;
  }
`;
const Line = styled.img`
  height: 18.6vmax;
  margin-left: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 220px;
  }
`;
const Third = styled.div`
  display: grid;
  width: 30%;
  justify-items: end;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 20px;
    width: 33%;
    justify-items: end;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-left: 5vmax;
    width: 24%;
    justify-items: end;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    margin-left: 5vmax;
    width: 25%;
    justify-items: end;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin-left: 7vmax;
    width: 25%;
    justify-items: end;
  }
`;
const Free = styled.div`
  background-color: #bdffbc;
  width: 15vmax;
  height: 1.5vmax;
  border-radius: 30px;
  text-align: center;
  margin-top: 1vmax;
  justify-self: end;
  border: 1px solid #0a8607;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 140px;
    height: 20px;
    margin-left: -12px;
  }
`;
const Cancel = styled.p`
  color: #0a8607;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 0.9vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
    padding-top: 1px;
  }
`;
const Rate = styled.div`
  background-color: #ffecec;
  border: 1px solid #850000;
  border-radius: 30px;
  text-align: center;
  width: 12vmax;
  height: 1.5vmax;
  margin-left: 3vmax;
  margin-top: 5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 100px;
    height: 20px;
    margin-left: 21px;
  }
`;
const Usual = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.9vmax;
  color: red;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 8px;
    padding-top: 3px;
  }
`;
const Amount = styled.div`
  display: flex;
  gap: 1vmax;
  margin-left: 9vmax;
  margin-top: -1.5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 55px;
  }
`;

const First = styled.p`
  color: #8d8d8d;
  font-family: "Poppins";
  font-size: 0.9vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Seconds = styled.p`
  color: #000000;
  font-family: Poppins;
  font-weight: 800;
  font-size: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 12px;
  }
`;
const Taxes = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vmax;
  color: #000000;
  margin-left: 7vmax;
  margin-top: -2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;
const Breakfasts = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  color: #0a8607;
  font-size: 0.9vmax;
  margin-left: 5vmax;
  margin-top: -2.5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 9px;
    margin-left: 12px;
  }
`;
const Griddata = styled.div`
  display: grid;

  gap: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding: 30px;
    justify-content: center;
    align-items: center;
  }
`;
const Line1 = styled.img`
  height: auto;
  /* margin-top:3vmax; */
  /* margin-left:1vmax; */
  width: 0.1px;
  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 106vmax;
  }
`;
const Activities = styled.p`
  text-align: center;
  font-size: 1;
`;

function valuetext(value) {
  return `${value}°C`;
}
const Hotels1 = () => {
  // const [fil ,setFil] = React.useState()
  const open2 = true;

  const [loading, setLoading] = React.useState(true);
  const [up, setUp] = React.useState([]);
  const [datas, setdatas] = React.useState([]);

  const [state, setState] = React.useState(datas);
  console.log("update is", state);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const getdata = async () => {
    try {
      const res = await fetch(`${baseURL}/api/user/search/hotel`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      console.log(data?.hotels);

      setdatas(data);
    } catch (error) {
      console.log(error);
    }
  };
 
      //  setTimeout(datas , 3000)
  
     
  React.useEffect(() => {
    setTimeout(() => getdata() ,  100);
    
  }, []);

  const change = (x) => {

    const val = datas?.hotels?.filter((cur) => cur.price < x);

    setState(val);

    console.log("my val is ", val);
  };

  const portblair = () => {
    // console.log(x)
    // const y = datas?.hotels
    // const result = datas?.find(datas => {
    //   return datas?.location === "Port Blair"

    // });
    const result = datas?.hotels?.filter((value) => {
      return value.location === "Andman";
    });
    console.log(result);

    return <></>;
  };

  // console.log(result)
  const navigate = useNavigate();

  const Handleclick = (path) => {
    navigate(path);
  };
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);

  const click = () => {
    setShow(!show);
  };
  const clicks = () => {
    setShow1(!show1);
  };

  return (
    <>
      {loading ? (
        <Backdrop
          open={open2}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Maindiv>
          <Checkdiv>
            <Budget>Budget Per Person:($0-$25000) </Budget>
            <Box sx={{ width: 300, marginLeft: "2vmax", paddingTop: "1vmax" }}>
              <Slider sx={{ color: "#28B810" }} />
            </Box>

            <Sort>Suggested for you</Sort>
            <Checkdiv1>
              <Input2 type="checkbox" />
              <Popular>Top Rated</Popular>
            </Checkdiv1>
            <Checkdiv2>
              <Input3 type="checkbox" />
              <Prize> Best in Segment </Prize>
            </Checkdiv2>
            <Checkdiv3>
              <Input4 type="checkbox" />
              <Prizes>Value for money</Prizes>
            </Checkdiv3>
            <Checkdiv4>
              <Input5 type="checkbox" />
              <Duration> Luxury Properties</Duration>
            </Checkdiv4>
            <Checkdiv5>
              <Input6 type="checkbox" />
              <Duration1> Home Away from home</Duration1>
            </Checkdiv5>

            <Checkdiv5>
              <Input6 type="checkbox" />
              <Duration1>Free Breakfast</Duration1>
            </Checkdiv5>
            <Checkdiv5>
              <Input6 type="checkbox" />
              <Duration1>Swimming Pool</Duration1>
            </Checkdiv5>

            <Scroll>
              x`1`
              <Checkdiv6>
                <Input7 type="checkbox" />
                <Pil>Pilgrimage</Pil>
              </Checkdiv6>
              <Checkdiv7>
                <Input8 type="checkbox" />
                <Honeymoon>Honeymoon</Honeymoon>
              </Checkdiv7>
              <Checkdiv8>
                <Input9 type="checkbox" />
                <Lesuire>Lesuire</Lesuire>
              </Checkdiv8>
              <Checkdiv9>
                <Input10 type="checkbox" />
                <Luxury>Luxury</Luxury>
              </Checkdiv9>
              <Checkdiv10>
                <Input11 type="checkbox" />
                <Beach>Beach</Beach>
              </Checkdiv10>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
              <Checkdiv11>
                <Input12 type="checkbox" />
                <Adventure>Adventure</Adventure>
              </Checkdiv11>
            </Scroll>
            <Place>Price:</Place>
            <Checkdiv12>
              <Input13  onChange={() => change("1500")} type="checkbox" value={state}   />
              <Gangtok>₹ 0 - ₹ 1500</Gangtok>
            </Checkdiv12>
            <Checkdiv13>
              <Input14 type="checkbox" />
              <Gangtok>₹ 1500 - ₹ 3000</Gangtok>
            </Checkdiv13>
            <Checkdiv14>
              <Input15 onClick={portblair} type="checkbox" />
              <Gangtok>₹ 3000 - ₹ 6500</Gangtok>
            </Checkdiv14>
            <Checkdiv15>
              <Input16 type="checkbox" />
              <Gangtok>₹ 6500 - ₹ 9000</Gangtok>
            </Checkdiv15>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Gangtok>₹ 9000 - ₹ 12500</Gangtok>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Gangtok>₹ 12500 - ₹ 15000</Gangtok>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Gangtok>₹ 15000 - ₹ 30500</Gangtok>
            </Checkdiv16>
            <Show className={show ? "active" : "disable"} onClick={click}>
              Show More
            </Show>
            {show && (
              <>
                <Checkdiv15>
                  <Input16 type="checkbox" />
                  <Munnar>₹ 30500 - ₹ 45500</Munnar>
                </Checkdiv15>
                <Checkdiv16>
                  <Input17 type="checkbox" />
                  <Munnar>₹ 30500 - ₹ 45500</Munnar>
                </Checkdiv16>
              </>
            )}
            <Show className={show ? "disable" : "active"} onClick={click}>
              Show Less
            </Show>
            <Holiday>Property Type</Holiday>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Hotels</Breaks>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>villa</Breaks>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Resort</Breaks>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Bed & Breakfast</Breaks>
            </Checkdiv16>
            <Checkdiv16>
              <Input17 type="checkbox" />
              <Breaks>Homes</Breaks>
            </Checkdiv16>
            <Show1 className={show1 ? "active" : "disable"} onClick={clicks}>
              Show More
            </Show1>
            {show1 && (
              <>
                <Checkdiv15>
                  <Input16 type="checkbox" />
                  <Munnar>Ac</Munnar>
                </Checkdiv15>
                <Checkdiv16>
                  <Input17 type="checkbox" />
                  <Darj>Darjilling</Darj>
                </Checkdiv16>
              </>
            )}
            <Show1 className={show1 ? "disable" : "active"} onClick={clicks}>
              Show Less
            </Show1>
          </Checkdiv>
          <Line1 src={line} />
          <Griddata style={{ cursor: "pointer" }}>
            {datas?.hotels?.map((i) => {
              return (
                <>
                  <Colordiv
                    onClick={() => Handleclick(`/hotelselection/${i._id}`)}
                  >
                    <Innerdiv>
                      <Img src={i.image?.url} />
                      <Nested>
                        <Image1 src={i.image2?.url} />
                        <Image2 src={i.image3?.url} />
                        <Image3 src={i.image4?.url} />
                      </Nested>
                    </Innerdiv>
                    <Secondiv>
                      <Guest>{i.name}</Guest>
                      <Spa>{i.name}</Spa>
                      <Tapu>{i.location}</Tapu>
                      <Jungle>Jungle views with free Breakfast</Jungle>
                      <Service>Good Service Quality</Service>
                      <Ac>Good Service Quality</Ac>
                      <Doctor>
                        <Doc1></Doc1>
                        <Docimg src={doc} />
                        <Call>Doctor On Call</Call>
                        <Doc2>
                          <Docimg src={doc} />
                          <Sani>Sanitizers Installed</Sani>
                        </Doc2>
                      </Doctor>
                    </Secondiv>
                    <Line src={line} />
                    <Third>
                      <Free>
                        <Cancel>Free cancelltion till 22 sept.</Cancel>
                      </Free>
                      <Rate>
                        <Usual>41% cheaper than usual</Usual>
                      </Rate>
                      <Amount>
                        <First> $726 </First>
                        <Seconds>${i.price}</Seconds>
                      </Amount>
                      <Taxes>$210 Taxes & Fees</Taxes>
                      <Breakfasts>INCL OF FREE BREAKFAST </Breakfasts>
                    </Third>
                  </Colordiv>
                </>
              );
            })}
          </Griddata>
        </Maindiv>
      )}
    </>
  );
};

export default Hotels1;
