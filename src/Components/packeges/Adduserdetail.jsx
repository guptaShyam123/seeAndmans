import React from "react";
import styled from "styled-components";
import profile from "../../assets/profile.png";
import Select from "react-select";
import dot from "../../assets/whitedot.svg";
import line from "../../assets/line3.svg";
import "./adduser.css";
import star from "../../assets/star.png";
import question from "../../assets/question.svg";
import doc from "../../assets/Doc.png";
import veg from "../../assets/veg.svg";
import Footer from "../Home/Footer";


const students = [
  { value: "Alex", label: "Alex" },
  { value: "Deven", label: "Deven" },
  { value: "Vinicious", label: "Vinicious" },
];

const Profile = styled.img`
  width: 100%;
  object-fit: cover;
  background-size: cover;
`;
const Maindiv = styled.div`
  padding: 0 2%;
  width: 60%;
  margin-top: -10vmax;
`;
const Inner1div = styled.div`
  background: #056c73;
  height: 9vmax;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 10.6vmax;
  }
`;
const Romantic = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 29px;
  color: #ffffff;
  margin-left: 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 22px;
  }
`;
const Inner2div = styled.div`
  margin-left: 1.1vmax;
  gap: 1vmax;
  display: flex;
  margin-top: 0.2vmax;
`;
const First = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Second = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Third = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Fourth = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Dot = styled.img``;
const Inner3div = styled.div`
  margin-top: 0.3vmax;
  display: flex;
  margin-left: 1vmax;
`;

const Dates = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  font-family: Poppins;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Inner4div = styled.div`
  margin-top: 0.3vmax;
  display: flex;
  margin-left: 1vmax;
`;
const Transport = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  font-family: Poppins;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Whitesbigdiv = styled.div`
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
  height: 96%;
`;
const Traveller = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 31px;
  color: #000000;
  padding-top: 1vmax;
  margin-left: 1vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 24px;
  }
`;
const Twoad = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #787878;
  margin-left: 1.1vmax;
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Room1div = styled.div`
  display: flex;
  margin-left: 1vmax;
  padding-top: 1vmax;
`;
const Room1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 21px;
  }
`;
const Hr = styled.img`
  padding-left: 2vmax;
  width: 88%;

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 1.5px;
    margin: 1.7% 0 0 0;
    width: 52.2vmax;
  }
`;
const Adult1div = styled.div`
  margin-left: 1vmax;
  padding-top: 1vmax;
  display: flex;
  gap: 5vmax;
`;
const Adult1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 21px;
  }
`;
const Selects = styled(Select)`
  width: 30vmax;
  color: #808080;
  font-family: Poppins;
  font-size: 13px;

  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);

  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 11px;
  }
`;
const Selects1 = styled(Select)`
  width: 30vmax;
  color: #808080;
  font-family: Poppins;
  font-size: 13px;
  margin-left: -0.4vmax;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 11px;
  }
`;
const Contact = styled.div`
  padding-top: 1vmax;
  margin-left: 1vmax;
`;
const Detail = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 21px;
  }
`;
const Emaildiv = styled.div`
  display: flex;
  margin-left: 1vmax;
  padding-top: 0.6vmax;
`;
const Email = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;

  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Input1 = styled.input`
  width: 22.5vmax;
  height: 2vmax;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-family: Poppins;
  padding-left: 1vmax;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
  margin-left: 1vmax;
  margin-top: 0.7vmax;
  border: 1px solid #808080;
  :placeholder {
    color: #808080;
  }
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 11px;
    width: 15vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:11px;
    width:15vmax; */
    ::placeholder {
      font-size: 22px;
    }
  }
`;
const Mobilecodediv = styled.div`
  display: flex;
  padding-top: 0.9vmax;
  margin-left: 1vmax;
  gap: 20vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    gap: 11vmax;
  }
`;
const Mobilecode = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Mobilenumber = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Firstmobile = styled.div`
  display: flex;
`;
const Secondmobile = styled.div`
  display: flex;
`;
const Inputdiv = styled.div`
  padding-top: 0.2vmax;
  margin-left: 1vmax;
  display: flex;
  gap: 4vmax;
`;

const Input2 = styled.input`
  width: 22.5vmax;
  height: 2vmax;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-family: Poppins;
  padding-left: 1vmax;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);

  margin-top: 0.7vmax;
  border: 1px solid #808080;
  :placeholder {
    color: #808080;
  }
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 11px;
    width: 15vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:11px;
    width:15vmax; */
    ::placeholder {
      font-size: 22px;
    }
  }
`;
const Input22 = styled.input`
  width: 24vmax;
  height: 2vmax;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-family: Poppins;
  padding-left: 1vmax;
  background: #ffffff;
  margin: 0 0 0 1%;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);

  margin-top: 0.7vmax;
  border: 1px solid #808080;
  :placeholder {
    color: #808080;
  }
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 11px;
    width: 15vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:11px;
    width:15vmax; */
    ::placeholder {
      font-size: 22px;
    }
  }
`;
const Input3 = styled.input`
  width: 24vmax;
  height: 2vmax;
  outline: none;
  font-style: normal;
  font-weight: 500;
  /* font-size: 14px; */
  font-family: Poppins;
  padding-left: 1vmax;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
  margin-left: 1vmax;
  margin-top: 0.7vmax;
  border: 1px solid #808080;
  ::placeholder {
    color: #808080;
    /* font-size:16px; */
  }
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 11px;
    width: 15vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:11px;
    width:15vmax; */
    ::placeholder {
      font-size: 22px;
    }
  }
`;
const Gst = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: #000000;
  margin-left: 1vmax;
  padding-top: 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 24px;
  }
`;
const Statediv = styled.div`
  display: flex;
  padding-top: 0.9vmax;
  margin-left: 1vmax;
  gap: 26vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    gap: 18vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    gap: 25.5vmax;
  }
`;
const City = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Gststdiv = styled.div`
  display: flex;
`;
const Gststate = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Inputstatediv = styled.div`
  margin-left: 1vmax;
  padding-top: 0.2vmax;
  display: flex;
  gap: 5.3vmax;
`;
const Cityinput = styled.input`
  width: 22.5vmax;
  height: 2vmax;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-family: Poppins;
  padding-left: 1vmax;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);

  margin-top: 0.7vmax;
  border: 1px solid #808080;

  color: #808080;
  ::placeholder {
    color: #808080;
    font-size: 16px;
  }

  @media (min-width: 93px) and (max-width: 1024px) {
    width: 15vmax;
    ::placeholder {
      font-size: 11px;
    }
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:11px;
    width:15vmax; */
    ::placeholder {
      font-size: 22px;
    }
  }
`;
const Selectslist = styled(Select)`
  color: #808080;
  font-family: Poppins;
  font-size: 13px;
  margin-left: -0.4vmax;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
  width: 25.4vmax;
  border: 0px;

  margin-top: 0.6vmax;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 11px;
  }
`;
const Address = styled.p`
  margin-left: 1vmax;
  padding-top: 1vmax;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Special = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  margin-top: 1vmax;
  padding-left: 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 21px;
  }
`;
const Request = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  margin-top: 1vmax;
  padding-left: 1vmax;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Requestinput = styled.input`
  margin-top: 0.5vmax;
  padding-left: 1vmax;
  height: 2vmax;
  margin-left: 1vmax;
  width: 53vmax;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-family: Poppins;
  padding-left: 1vmax;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);

  margin-top: 0.7vmax;
  border: 1px solid #808080;
  ::placeholder {
    color: #808080;
    font-size: 12px;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    ::placeholder {
      color: #808080;
      font-size: 12px;
    }
    width: 18vmax;
    height: 2.5vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    /* font-size:11px;
    width:15vmax; */
    ::placeholder {
      font-size: 22px;
    }
  }
`;
const Package = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  color: #000000;
  margin-left: 1vmax;
  margin-top: 1.3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 21px;
  }
`;
const Hotel4 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  margin-top: 1vmax;
  padding-left: 1vmax;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const Premiumdiv = styled.div`
  margin-top: 1vmax;
  margin-left: 1vmax;
  border: 1px solid #808080;
  width: 54vmax;
  gap: 50vmax;
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 19vmax;
  }
`;
const Divium1 = styled.div`
  display: flex;
  gap: 1vmax;
  /* width:52vmax;
   */
  width: 100%;
  /* background: black; */

  justify-content: space-around;
  padding: 0 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 2.8vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 2.5vmax;
    width: 52vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 2.5vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 2vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
  }
`;
const Manor1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
  }
  /* padding-left:1.2vmax; */
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 15px;
  }
`;
const Premiumroom1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  padding-top: 0.3vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    font-weight: 600;
    padding: 0 0 0 6%;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 12px;
    font-weight: 600;
    padding: 0 0 0 6%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    padding: 1% 0 0 8%;
  }
`;
const Date1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
  padding-top: 0.3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    font-weight: 600;
  }
`;
const Divium2 = styled.div`
  display: flex;
  /* gap:1vmax; */
  width: 100%;
  justify-content: space-around;
  /* background-color: blue; */

  margin-top: -0.4vmax;
  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 2vmax;
    height: 2vmax;
  }
`;
const Airport = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  padding-top: 0.3vmax;
  /* padding-left:1.2vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 10px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 11px;
    font-weight: 600;
  }
`;
const Breakfast = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #3362cc;
  padding-top: 0.3vmax;
  /* padding-left:2vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    font-weight: 600;
    margin: 0 0 0 -2%;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 12px;
    padding: 0 0 0 7%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    padding: 0 0 0 5%;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 1% 0 0 7%;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0.7% 0 0 10%;
  }
`;
const Stardiv = styled.div`
  display: flex;
  gap: 0.5vmax;
  padding-top: 0.3vmax;
  /* padding-left:5vmax; */
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 0 0 0 3.4%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    margin: 0 0 0 2%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 0.2vmax;
    margin: 0 0 0 -2%;
  }
`;
const Star = styled.img`
  height: fit-content;
  /* width:1vmax; */
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 0.8vmax;
    width: 0.8vmax;
  }
`;
const Div1 = styled.div`
  background-color: green;
  /* justify-content: center; */
  align-items: center;
  /* text-align: justify; */
  padding: 1% 2% 0 2%;
`;
const Div2 = styled.div`
  padding-top: 1vmax;
  background-color: red;
`;
const Div3 = styled.div`
  padding-top: 1vmax;
  background-color: red;
`;
const Div4 = styled.div`
  padding-top: 1vmax;
  background-color: red;
`;
const Transfer1 = styled.p`
  padding-top: 1vmax;
  margin-left: 1vmax;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;
const Privatediv = styled.div`
  margin-top: 1vmax;
  margin-left: 1vmax;
  border: 1px solid #808080;
  display: flex;
  gap: 12.6vmax;
  width: 54vmax;
  height: 4vmax;
  background: #ffffff;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
    /* background:red; */
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
  /* @media (min-width:1280px ) and (max-width:1366px){
  height:4vmax;
  width:92%;
} */
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 4vmax;
    /* background:red; */
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    height: 4vmax;
    /* background:red; */
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    height: 4vmax;
    /* background:red; */
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
`;
const Privatetransfer = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #000000;
  padding-top: 1.3vmax;
  padding-left: 1.3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    font-weight: 600;
    width: 10vmx;
    /* background:pink; */
    padding-left: 0;
    text-align: center;
    padding-top: 0;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 14px;
    font-weight: 600;
    width: 10vmax;
    /* background:pink; */
    padding-left: 0;
    text-align: center;
    padding-top: 0;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 14px;
    font-weight: 600;
    width: 10vmax;
    /* background:pink; */
    padding-left: 0;
    text-align: center;
    padding-top: 0;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
    font-weight: 600;
    width: 10vmax;
    /* background:pink; */
    padding-left: 0;
    text-align: center;
    padding-top: 0;
  }
`;
const Ac = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  padding-top: 1.4vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    font-weight: 600;
    width: 14vmax;
    margin: 0 0 0 -8%;
    /* background:pink; */
    padding-left: 0;
    padding-top: 0;
    text-align: center;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 13px;
    font-weight: 600;
    width: 14vmax;
    margin: 0 0 0 -8%;
    /* background:pink; */
    padding-left: 0;
    padding-top: 0;
    text-align: center;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 13px;
    font-weight: 600;
    width: 14vmax;
    margin: 0 0 0 -8%;
    /* background:pink; */
    padding-left: 0;
    padding-top: 0;
    text-align: center;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
    font-weight: 600;
    width: 14vmax;
    margin: 0 0 0 -8%;
    /* background:pink; */
    padding-left: 0;
    padding-top: 0;
    text-align: center;
  }

  @media (min-width: 1367px) and (max-width: 1440px) {
    margin: 0 0 0 -3.7%;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: 0 0 0 -5%;
  }
`;
const Dates2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
  padding-top: 1.4vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    font-weight: 600;
    /* background:pink; */
    padding-top: 0;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 13px;
    font-weight: 600;
    /* background:pink; */
    padding-top: 0;
  }
  @media (min-width: 1286px) and (max-width: 1366px) {
    font-size: 13px;
    font-weight: 600;
    /* background:pink; */
    padding-top: 0;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 3% 0 0 9%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 18px;
    font-weight: 600;
    /* background:pink; */
    padding-top: 0;
  }
`;
const Activites = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  color: #000000;
  padding-left: 1.2vmax;
  padding-top: 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 16px;
    font-weight: 600;
  }
`;

const Cancellation = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding-top: 1vmax;
  padding-left: 1vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
  }
`;
const Fourthborderdiv = styled.div`
  margin-top: 0.5vmax;
  margin-left: 1vmax;
  border: 1px solid #808080;
  width: 54vmax;
  padding: 1% 0 2% 0;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 24vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 23vmax;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 23vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 23vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 23vmax;
  }
`;
const Buttondiv = styled.div`
  margin-top: 1vmax;
  display: flex;
  justify-content: space-around;
`;
const Button1 = styled.button`
  background: rgba(92, 203, 160, 0.6);

  height: 3vmax;
  width: 12vmax;
  font-size: 20px;
  font-family: Poppins;
  border: none;
  color: #000000;
  font-weight: 600;
  border-radius: 35px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Button2 = styled.button`
  background: rgba(92, 203, 160, 0.2);

  height: 3vmax;
  width: 12vmax;
  font-size: 20px;
  font-family: Poppins;
  border: none;
  color: #000000;
  font-weight: 600;
  border-radius: 35px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Secondcolordiv = styled.div`
  padding-top: 1vmax;
  display: flex;
  justify-content: space-around;
`;
const Firstbox = styled.div`
  background: #f1f1f1;
  border-radius: 5px;
  width: 14vmax;
  height: 12.5vmax;
  text-align: center;
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 13vmax;
    width: 14.7vmax;
  }
`;
const Tera = styled.p`
  color: #0085ff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  text-decoration: underline;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2% 0 0 0;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 3% 0 0 0;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 2% 0 0 0;
  }
`;
const Tera1 = styled.p`
  color: #0085ff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2% 0 0 0;
  }
  text-decoration: underline;
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 2% 0 0 0;
  }
`;
const Tera2 = styled.p`
  color: #850000;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2% 0 0 0;
  }
  text-decoration: underline;
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 3% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 2% 0 0 0;
  }
`;
const Tera3 = styled.p`
  color: #850000;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  text-decoration: underline;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
    padding: 2% 0 0 0;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Doolar45 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  margin-top: 2vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Secondboxdiv = styled.div`
  background: #f1f1f1;
  border-radius: 5px;
  width: 14vmax;
  height: 12.5vmax;
  text-align: center;
  @media (min-width: 1367px) and (max-width: 1440px) {
    height: 13vmax;
    width: 14.6vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
  }
`;
const Cancelcharge = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  padding-top: 0.7vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 14px;
  }
`;

const Cancelcharge1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  width: 10vmax;
  margin-left: 1.8vmax;
  padding-top: 0.5vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
    font-weight: 600;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 14px;
  }
`;
const Questionsdiv = styled.div`
  display: flex;
  gap: 1vmax;
  margin-top: 1vmax;
  justify-content: space-around;
  padding-left: 3vmax;
`;
const Question = styled.img`
  height: 1vmax;
  width: 1vmax;

  @media (min-width: 93px) and (max-width: 1024px) {
    padding: 0.7% 0 0 0;
  }
`;
const Answer = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  color: #a90000;
  @media (min-width: 93px) and (max-width: 1024px) {
    font-size: 11px;
    font-weight: 600;
    padding: 0 2% 0 2%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 13px;
    font-weight: 600;
    padding: 0 2% 0 2%;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 14px;
    font-weight: 600;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 15px;
    font-weight: 600;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 15px;
    font-weight: 600;
  }
`;
const Secondmaindiv = styled.div`
  width: 34%;
`;
const Thirdmaindiv = styled.div`
  display: flex;
`;
const Innerblue = styled.div`
  background: #056c73;
  padding-left: 2vmax;
  margin-top: -10vmax;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  height: 9vmax;
`;
const Grandtotal = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 29px;
  color: #ffffff;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 24px;
  }
`;
const Secondtotal = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  color: #ffffff;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    /* margin-left: 3%; */
    /* color:yellow; */
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 20px;
  }
`;
const Taxes = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 20px;
  }
`;
const Innerwhite = styled.div`
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);

  @media (min-width: 993px) and (max-width: 1024px) {
    height: 18vmax;
  }

  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 20vmax;
  }
`;
const Basiccostdiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5% 5%;
  padding-left: 2.4vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:red; */
    justify-content: space-between;
    display: flex;
  }
`;
const Firstcost = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 19px;
    /* color:yellow; */
  }
`;
const Secondcost = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    margin-right: -1vmax;
    /* color:yellow; */
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    font-size: 14px;
    margin-right: -0.5vmax;
    /* color:yellow; */
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    /* color:yellow; */
    margin-right: -0.5vmax;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 19px;
    /* color:yellow; */
    /* margin-right:-0.5vmax; */
  }
`;
const Hr1 = styled.hr`
  width: 100%;
  background-color: black;
  height: 1px;
  border: none;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 0.3px;
    margin: 1% 0 0 0;
  }
`;
const Offerdiv = styled.div`
  display: flex;
  gap: 17.2vmax;
  padding-top: 1vmax;

  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 19vmax;
  }
`;
const Firstofferdiv = styled.div`
  display: flex;
  gap: 0.4vmax;
  padding-left: 2.5vmax;
`;
const Doc = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding-top: 0.5vmax;
  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: -3% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: -3% 0 0 0;
  }
`;
const Grandoffer = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #0085ff;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 22px;
    /* color:yellow; */
  }
`;
const Fifty = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #0085ff;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    margin: 0 0 0 -3%;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    margin: 0 0 0 -1%;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0 0 0 1%;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 19px;
    /* color:yellow; */
  }
`;
const Fivepercentdiv = styled.div`
  display: flex;
  padding-top: 2vmax;
  gap: 20vmax;
  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 22vmax;
  }
`;
const Five = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  padding-left: 2.4vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Zero = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0 0 0 2.5%;
  }
`;
const Sixperdiv = styled.div`
  display: flex;
  gap: 18.6vmax;
  padding-top: 1.5vmax;
  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 21vmax;
  }
`;
const Total1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  padding-left: 2.3vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
`;
const Zero1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }

  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0 0 0 2.5%;
  }
`;
const Hr2 = styled.hr`
  width: 100%;
  background-color: black;
  height: 1px;
  border: none;
  margin-top: 1.5vmax;
`;
const Nextinnerwhite = styled.div`
  margin-top: 1vmax;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
`;
const Coupanoffer = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #000000;
  text-align: center;
  padding-top: 0.7vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 20px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 24px;
  }
`;
const Hr4 = styled.hr`
  border: none;
  background-color: #9f9f9f;
  width: 100%;
  height: 1px;
  margin-top: 1vmax;
`;
const Hr5 = styled.hr`
  border: none;
  background-color: #9f9f9f;
  width: 100%;
  height: 1px;
  margin-top: 1vmax;
`;
const Vegdiv = styled.div`
  display: flex;
  margin-top: 2vmax;
  gap: 18vmax;
`;
const Firstveg = styled.div`
  display: flex;
  gap: 0.6vmax;
  padding-left: 1.5vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    /* background-color:red; */
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
  }
`;
const Veg = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding-top: 0.4vmax;
  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: 0.1% 0 0 0;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    /* margin: -3% 0 0 0; */
  }
`;
const Getsgo = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #0a8607;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 22px;
    /* color:yellow; */
  }
`;
const Rates = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #0a8607;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 14px;
    /* margin-right:10px; */
    /* background:red; */
    margin-left: -1vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 17px;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    padding: 0 0 0 3%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    padding: 0 0 0 6%;
  }
`;
const Congrates = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  padding-top: 1vmax;
  text-align: center;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 11px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 14px;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    margin: -2% 0 0 -13.6%;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    margin: 1% 0% 0 -20%;
    font-size: 17px;
  }
`;
const Bt7 = styled.button`
  margin: 1% 0 0 0;
  height: 2vmax;
  width: 8vmax;
  font-size: 16px;
  font-family: Poppins;
  color: white;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  cursor: pointer;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 2.5vmax;
    width: 8vmax;
    font-size: 13px;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    height: 2.5vmax;
    width: 8vmax;
  }
`;
const Boxmodel = styled.div`
  border: 1px solid #e7e7e7;
  width: 54vmax;
  margin: 2% 2% 0 2%;
  display: flex;
  justify-content: space-around;
  padding: 2% 0 2% 0;
`;
const Firstmmt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4vmax;
  /* background:red; */
  width: 31%;
`;

const Secondmmt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4vmax;
`;
const Thirdmmt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4vmax;
`;
const Tour = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
`;
const Durationhour = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Suitaibles = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;
const Datetime = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 12px;
  }
  @media (min-width: 1840px) and (max-width: 1945px) {
    font-size: 18px;
  }
`;

const Mainhoteldes = styled.div``;
const Firsthotel = styled.div``;
const Secondhotel = styled.div``;
const Thirdhotel = styled.div``;
const Fourthhotel = styled.div``;
const Adduserdetail = () => {
  const [adult, setAdult] = React.useState();
  const [adult1, setAdult1] = React.useState();
  const [email, setEmail] = React.useState();
  const [mobile, setMobile] = React.useState();
  const [city, setCity] = React.useState();
  const [address, setAddress] = React.useState();
  const style = {
    control: (base) => ({
      ...base,
      border: "1px solid #808080",
      // This line disable the blue border
      boxShadow: "none",
      textDecoration: "none",
    }),
  };

  const style1 = {
    control: (base) => ({
      ...base,

      minHeight: "30px",
      // This line disable the blue border
      boxShadow: "none",
      textDecoration: "none",
      border: "none",
    }),
  };

  const Postdatas = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "https://travel-andman.herokuapp.com/api/user/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  return (
    <>
      <Profile src={profile} />
      <Thirdmaindiv>
        <Maindiv>
          <Inner1div>
            <Romantic>Romantic Seaside Holiday in Andaman</Romantic>
            <Inner2div>
              <First>1N Port Blair</First>
              <Dot src={dot} />
              <Second>2N Havelock</Second>
              <Dot src={dot} />
              <Third>1N Niel Island</Third>
              <Dot src={dot} />
              <Fourth>1N Port Blair</Fourth>
            </Inner2div>
            <Inner3div>
              <Dates>
                Dates: 5 November 2022 - 10 November 2022 / From Chennai
              </Dates>
            </Inner3div>
            <Inner4div>
              <Transport>Inclusion: Hotel/ Cab/ Ferries/ Activities</Transport>
            </Inner4div>
          </Inner1div>
          <Whitesbigdiv>
            <Traveller>Traveller Information</Traveller>
            <Twoad>Two Adults</Twoad>
            <Room1div>
              <Room1>Room1</Room1>
              <Hr src={line} />
            </Room1div>
            <form onSubmit={Postdatas}>
              <Adult1div>
                <Adult1>Adult-1</Adult1>
                <Input3 type="text" placeholder="Adult" required />
              </Adult1div>
              <Adult1div>
                <Adult1>Adult-2</Adult1>
                <Input22 type="text" placeholder="Adult" required />
              </Adult1div>
              <Contact>
                <Detail>Please enter contact details</Detail>
              </Contact>
              <Emaildiv>
                <Email>Email</Email>
                <span style={{ color: "#ff0000" }}>*</span>
              </Emaildiv>
              <Input1 type="email" placeholder="Enter email here" required />
              <Mobilecodediv>
                <Firstmobile>
                  <Mobilecode>Mobile Code</Mobilecode>
                  <span className="star1" style={{ color: "#ff0000" }}>
                    *
                  </span>
                </Firstmobile>
                <Secondmobile>
                  <Mobilenumber>Mobile</Mobilenumber>
                  <span className="star2" style={{ color: "#ff0000" }}>
                    *
                  </span>
                </Secondmobile>
              </Mobilecodediv>
              <Inputdiv>
                <Input2 type="text" placeholder="Select code" required />
                <Input3
                  type="text"
                  placeholder="Enter mobile number"
                  required
                />
              </Inputdiv>
              <Gst>Please enter GST detail</Gst>
              <Statediv>
                <City>City</City>
                <Gststdiv>
                  <Gststate>GST state</Gststate>
                  <span className="star2" style={{ color: "#ff0000" }}>
                    *
                  </span>
                </Gststdiv>
              </Statediv>
              <Inputstatediv>
                <Cityinput type="text" placeholder="Enter city" required />
                <Selectslist
                  className="select"
                  placeholder="Enter name to find or select from list "
                  style={style1}
                  options={students}
                />
              </Inputstatediv>
              <Address>Address</Address>
              <Special>Special Request</Special>
              <Request>Special Request</Request>
              <Requestinput
                type="text"
                placeholder="Enter Special Request"
                required
              />
              <Package>Package Inclusion</Package>
              <center>
                <Bt7>Submit</Bt7>
              </center>
            </form>
            <Hotel4>Hotel(4)</Hotel4>
            <Mainhoteldes>
              <Firsthotel></Firsthotel>
              <Secondhotel></Secondhotel>
              <Thirdhotel></Thirdhotel>
              <Fourthhotel></Fourthhotel>
            </Mainhoteldes>
            <Transfer1>Transfer</Transfer1>
            <Privatediv>
              <Privatetransfer>Private Transfer</Privatetransfer>
              <Ac>Vehicle Type: Sedan-AC</Ac>
              <Dates2>05-11-22, Sat</Dates2>
            </Privatediv>
            <Activites>Activites(14)</Activites>
            <Boxmodel>
              <Firstmmt>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
                <Tour>MMT Tour ManagerAssistance</Tour>
              </Firstmmt>
              <Secondmmt>
                <Durationhour>Duration: 2 hours</Durationhour>
                <Suitaibles>
                  Suitable for: Adult, Child, Infant, Teens, Sinior
                </Suitaibles>
                <Durationhour>Duration: 2 hours</Durationhour>
                <Suitaibles>
                  Suitable for: Adult, Child, Infant, Teens, Sinior
                </Suitaibles>
                <Durationhour>Duration: 2 hours</Durationhour>
                <Suitaibles>
                  Suitable for: Adult, Child, Infant, Teens, Sinior
                </Suitaibles>
                <Durationhour>Duration: 2 hours</Durationhour>
                <Suitaibles>
                  Suitable for: Adult, Child, Infant, Teens, Sinior
                </Suitaibles>
                <Durationhour>Duration: 2 hours</Durationhour>
                <Suitaibles>
                  Suitable for: Adult, Child, Infant, Teens, Sinior
                </Suitaibles>
                <Durationhour>Duration: 2 hours</Durationhour>
                <Suitaibles>
                  Suitable for: Adult, Child, Infant, Teens, Sinior
                </Suitaibles>
                <Durationhour>Duration: 2 hours</Durationhour>
                <Suitaibles>
                  Suitable for: Adult, Child, Infant, Teens, Sinior
                </Suitaibles>
                <Durationhour>Duration: 2 hours</Durationhour>
                <Suitaibles>
                  Suitable for: Adult, Child, Infant, Teens, Sinior
                </Suitaibles>
              </Secondmmt>
              <Thirdmmt>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
                <Datetime>05-11-22, Sat</Datetime>
              </Thirdmmt>
            </Boxmodel>

            <Cancellation>Cancellation & Date Change</Cancellation>
            <Fourthborderdiv>
              <Buttondiv>
                <Button1>Cancellation</Button1>
                <Button2>Data Change</Button2>
              </Buttondiv>
              <Secondcolordiv>
                <Firstbox>
                  <Tera>Till</Tera>
                  <Tera1>13 Oct</Tera1>
                  <Doolar45>$45</Doolar45>
                  <Cancelcharge>Cancellation Charges</Cancelcharge>
                </Firstbox>
                <Secondboxdiv>
                  <Tera2>Till</Tera2>
                  <Tera3>13 Oct</Tera3>
                  <Doolar45>Not Refundable</Doolar45>
                  <Cancelcharge1>Cancellation is not allowd</Cancelcharge1>
                </Secondboxdiv>
              </Secondcolordiv>
              <Questionsdiv>
                <Question src={question} />
                <Answer>
                  These are the non-refundable amounts as per the current
                  components attached. In the case of component
                  change/modifications. The policy will change accordingly.
                </Answer>
              </Questionsdiv>
            </Fourthborderdiv>
          </Whitesbigdiv>
        </Maindiv>
        <Secondmaindiv>
          <Innerblue>
            <Grandtotal>Grand Total</Grandtotal>
            <Secondtotal>$250</Secondtotal>
            <Taxes>(Inclusive of all taxes)</Taxes>
          </Innerblue>
          <Innerwhite>
            <Basiccostdiv>
              <Firstcost>Total Basic Cost</Firstcost>
              <Secondcost>$250</Secondcost>
            </Basiccostdiv>
            <Hr1></Hr1>
            <Offerdiv>
              <Firstofferdiv>
                <Doc src={doc} />
                <Grandoffer>GRANDOFFER</Grandoffer>
              </Firstofferdiv>
              <Fifty>$50</Fifty>
            </Offerdiv>
            <Fivepercentdiv>
              <Five>Gst(5.0%)</Five>
              <Zero>$000</Zero>
            </Fivepercentdiv>
            <Hr2></Hr2>
            <Sixperdiv>
              <Total1>Grand Total</Total1>
              <Zero1>$000</Zero1>
            </Sixperdiv>
          </Innerwhite>
          <Nextinnerwhite>
            <Coupanoffer>Offers</Coupanoffer>
            <Hr4></Hr4>
            <Vegdiv>
              <Firstveg>
                <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
            <Hr5></Hr5>
            <Vegdiv>
              <Firstveg>
              <input type="radio" />
                <Getsgo>GETSETGO</Getsgo>
              </Firstveg>
              <Rates>-₹1089</Rates>
            </Vegdiv>
            <Congrates>
              Congratulations! You have saved ₹1091 with GETSETGO.{" "}
            </Congrates>
            <Hr5></Hr5>
          </Nextinnerwhite>
        </Secondmaindiv>
      </Thirdmaindiv>
      <Footer style={{ marginTop: "3vmax" }} />
    </>
  );
};

export default Adduserdetail;
