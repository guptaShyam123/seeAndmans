import React from "react";
import styled from "styled-components";
import nav from "../../assets/nav.png";
import green from "../../assets/green.png";
import andman from "../../assets/newand.png";
import Logo1 from "../../assets/logo1.png";
import { MdDateRange } from "react-icons/md";
import logo1 from "../../assets/logo1.png";
import location from "../../assets/location.png";
import calender from "../../assets/calender.png";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Logins from "./Logins";
import Signin from "./Signin";
import Forgot from "./Forgot";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Footer from "../Home/Footer";
import GreenBan from "./GreenBan";
import Slider4 from "./Slider4";
import Customer from "./Customer";
import DatePicker from "react-datepicker";
import Slider2f1 from "./Slider2f1";
import Aboutbanner from "../About/Aboutbanner";
import Covid from "./Covid";
import Slider5 from "../Home/Slider5";
import Slider6 from "../Home/Slider6";
import { Link, useNavigate } from "react-router-dom";
import Test from "../../Components/Test";
import "./date.css";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import Cab from "../Home/Tabs/Cab";
import Homecard from "./Homecard";
import Testimonialcard from "../Reviews/Testimonialcard";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";
import raja from "../../assets/rajadey.svg";

const Navbar = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.1);
  height: 4.4vmax;
  width: 100%;
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  z-index: 1;

  @media (min-width: 335px) and (max-width: 421px) {
    /* width: 80vmax;
    height: 8vmax; */
    display: none;
  }
`;
const Innerdiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;
const Img = styled.img`
  height: 3.6vmax;
  width: 3.6vmax;
  padding-top: 0.5vmax;
  padding-left: 3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    /* height: 7.7vmax;
    width: 10vmax; */
    display: none;
  }
`;
const Authdiv = styled.div`
  display: flex;
  padding-left: 5vmax;
  gap: 1vmax;
  padding-top: 1vmax;
  margin-right: 5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
    margin-right: 3vmax;
  }
`;
const Login = styled.button`
  height: 2.1vmax;
  width: 10vmax;
  background-color: rgba(20, 88, 67, 1);
  color: #ffffff;
  font-size: 1vmax;
  border: none;
  border-radius: 20px;
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 1vmax;
    width: 9vmax;
    height: 3vmax;
    margin-right: -4vmax;
    font-size: 1.5vmax;
  }
`;
const Signip = styled.button`
  height: 2.1vmax;
  width: 10vmax;
  background-color: rgba(20, 88, 67, 1);
  color: #ffffff;
  font-size: 1vmax;
  border: none;
  border-radius: 20px;
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 1vmax;
    width: 9vmax;
    height: 3vmax;
    margin-left: 4vmax;
    font-size: 1.5vmax;
  }
`;
const Bigimage = styled.div`
  background: url(${andman});
  height: 35vmax;
  width: 100%;
  background-size: cover;
  margin-top: -6vmax;
  padding-top: 4vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 80vmax;

    background-position: center;
    padding-top: 2vmax;
  }
`;
const Greens = styled.div`
  background-color: rgba(20, 88, 67, 1);
  height: 7.9vmax;
  width: 80%;
  backdrop-filter: blur(84px);
  border-radius: 10px;
  margin-top: -3vmax;
  display: flex;
  justify-content: space-between;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 70vmax;
    margin-left: 5vmax;
    height: 10vmax;
  }
`;
const Divselect = styled.div`
  font-family: Poppins;
  background-color: rgba(47, 191, 140, 1);
  color: #ffffff;
  font-size: 1vmax;
  /* padding-left:5%; */
  height: 3vmax;
  width: 100%;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Selectdiv = styled.div`
  display: flex;
  width: 33%;
  padding: 0 2.5% 2%;
  align-items: center;
  justify-content: center;
  /* padding-top: 2vmax;
  padding-left:9vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Selectdivs1 = styled.input`
  display: flex;

  /* padding:  2.5% 2%; */
  /* align-items: center; */
  /* margin-top:2vmax; */
  /* justify-content: center; */
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  background-color: transparent;
  width: 85%;

  ::placeholder {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  /* width:30%; */
  /* padding-top: 2vmax;
  padding-left:9vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Selects = styled.select`
  border: none;
  outline: none;
  background-color: rgba(47, 191, 140, 1);
  width: 80%;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 20px;
  color: white;
  padding-left: 5px;

  @media (min-width: 335px) and (max-width: 421px) {
    width: 16vmax;
    height: 4vmax;
    font-size: 1.9vmax;
    padding-left: 5vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
`;
const Location = styled.img`
  height: 1.5rem;
  width: auto;
  margin-left: 10px;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 1.9vmax;
    width: 2vmax;
    padding-top: 1vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 0.1% 0 0 0;
    height: fit-content;
    width: 1.5vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: 0.4% 0 0 0;
    height: 1vmax;
    width: 1vmax;
  }
`;
const Second = styled.div`
  display: flex;
  width: 33%;
  padding: 0 2.5% 2%;
  align-items: center;
  justify-content: center;
  /* padding-left:1vmax;
  padding-top: 2vmax; */

  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;

const Second1 = styled.div`
  font-family: Poppins;
  background-color: rgba(47, 191, 140, 1);
  color: #ffffff;
  font-size: 1vmax;
  /* padding-left:5%; */
  height: 3vmax;
  width: 100%;
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Calender = styled.img`
  height: 1.5rem;
  width: auto;
  margin-left: 10px;
  @media (min-width: 335px) and (max-width: 421px) {
    padding: 10px;
    margin-top: -0.6vmax;
    height: 1.9vmax;
    width: 2vmax;
    padding-top: 1.4vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: -0.5% 0 0 0;
    height: fit-content;
    width: 1.5vmax;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    margin: -0.3% 0 0 0;
    height: 1vmax;
    width: 1vmax;
  }
`;
const Divdate = styled.div`
  /* background-color:pink; */
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DatePickers = styled(DatePicker)`
  ::placeholder {
    color: white;
    font-weight: 600;
  }
  ::-webkit-input-placeholder {
  }

  border: none;
  outline: none;
  color: white;
  width: 100%;
  height: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  font-weight: bold;
  background-color: transparent;
  font-size: 20px;
  margin: 0;
  z-index: 1;
  padding-left: 5px;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 14vmax;
    height: 4vmax;
    padding-left: 5vmax;
    font-size: 2vmax;
  }

  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
    /* color:red; */
  }
`;
const Icon = styled(IoIosArrowDown)`
  height: 1vmax;
  width: 1vmax;
  color: white;
  padding-top: 0.6vmax;
  margin-left: -1.6vmax;
  position: relative;
`;
const Thirds = styled.div`
  /* padding-left:1.5vmax; */
  /* padding-top:2vmax; */
  width: 33%;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 3vmax;
  }
`;
const Button = styled.div`
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  height: 2.5vmax;
  width: 10vmax;
  color: #ffffff;
  border: none;
  margin-top: -2vmax;
  font-size: 1.2vmax;
  padding-top: 0.7vmax;
  position: relative;
  align-items: center;
  justify-content: center;
  p {
  }
  @media (min-width: 335px) and (max-width: 421px) {
    height: 2.5vmax;
    width: 10vmax;
    margin-left: 31vmax;
    margin-top: -0.6vmax;
    font-size: 1.4vmax;
  }
`;
const Switchs = styled.div`
  background-color: #145843;
  height: 4vmax;
  width: 85%;
  margin-top: 4vmax;
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
const Textdiv = styled.div`
  gap: 2.6vmax;
  display: flex;
  padding-top: 0.9vmax;
  padding-left: 16vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-left: 10vmax;
    padding-top: 2.6vmax;
    gap: 10px;
    display: none;
  }
`;
const Stext = styled.p`
  font-family: Poppins;
  font-size: 1.4vmax;
  font-weight: 700;
  color: #145843;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 1.8vmax;
    font-weight: bolder;
  }
`;
const Maindropss = styled.div`
  position: absolute;
  background-color: rgba(47, 191, 140, 1);
  right: 1px;
  bottom: -130px;
  padding: 5px 20px;
  border-radius: 5px;
`;
const Childdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 15vw;
`;

const Ch1 = styled.div``;
const Ch2 = styled.div`
  display: flex;
`;
const Chbtn1 = styled.button`
  height: 20px;
  width: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 2px;
  cursor: pointer;
`;
const Chinput = styled.input`
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0 5px;
  outline: none;
  border: none;
  text-align: center;
  background-color: white;
  border-radius: 2px;
  /* z-index: 10; */
`;
const Inputdiv = styled.div`
  display: flex;
`;
const Chbtn2 = styled.button`
  height: 20px;
  width: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 2px;
`;

const AdDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 15vw;
`;

const Rdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 15vw;
`;

const Apply = styled.button`
  background-color: rgba(20, 88, 67, 1);
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px 20px;
  margin-top: 20px;
`;
const Banner = () => {
  const [show, setShow] = React.useState(false);
  const [stateinput, setStateinput] = React.useState("");
  const [stateinput1, setStateinput1] = React.useState(0);
  const [stateinput2, setStateinput2] = React.useState(0);
  const [stateinput3, setStateinput3] = React.useState(0);

  const apply = () => {
    setShow(!show);
  };

  const minus = () => {
    if (stateinput1 <= 1) return;

    setStateinput1(stateinput1 - 1);
  };
  const minus1 = () => {
    if (stateinput2 <= 1) return;

    setStateinput2(stateinput2 - 1);
  };
  const minus2 = () => {
    if (stateinput3 <= 1) return;

    setStateinput3(stateinput3 - 1);
  };

  const plus = () => {
    setStateinput1(stateinput1 + 1);
  };
  const plus1 = () => {
    setStateinput2(stateinput2 + 1);
  };
  const plus2 = () => {
    setStateinput3(stateinput3 + 1);
  };

  const inputclick = () => {
    setShow(!show);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

 
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");

  const data = React.useRef(null);
  const data1 = React.useRef(null);

  const clickdate = () => {
    console.log("hello");
    console.log(data.current);
    data.current.onInputClick(false);
    // data.current.input.value = data.current.value;
    // data.current.shouldCloseOnSelect = true;
    // data.current.setIsOpen(false);
    // data.current.shouldCloseOnSelect = false;
  };
  const clickdate1 = () => {
    console.log("hello");
    console.log(data1.current);
    data1.current.onInputClick(false);
    // data.current.input.value = data.current.value;
    // data.current.shouldCloseOnSelect = true;
    // data.current.setIsOpen(false);
    // data.current.shouldCloseOnSelect = false;
  };

  const [datas, setDatas] = React.useState([]);
  const getdata = async () => {
    const res = await fetch(
      "https://travel-andman.herokuapp.com/api/user/get/locations"
    );
    const data = await res.json();
    console.log(data);

    setDatas(data);
  };
  const x = datas?.locations?.map((i) => {
    console.log(i, "i ki value");
  });
  console.log("update is ", x);
  React.useEffect(() => {
    getdata();
  }, []);

  

  const [locations , setLocation] = React.useState("")

  const navigate = useNavigate();
  const click = () => {
   const person = {
     locations ,
     startDate,
     endDate,
   }
   
    console.log("person is" , person )
     localStorage.setItem("person" , JSON.stringify(person))
 
     navigate("/hotels");
    
  }
  

  const closeDate = () => {
    data.current.cancelFocusInput();
  }
  const minDate = moment().toDate();
  return (
    <>
      <Bigimage>
        <GreenBan />
      </Bigimage>

      <center>
        <Greens>
          <Selectdiv>
            <Divselect>
              <Location src={location} />
              <Selects value={locations} onChange={(e) => setLocation(e.target.value)} name="plan" id="plan">
                <option>Location</option>
                <option>Havelock</option>
                <option>Port Blair</option>
                <option>Swaraj Dweep</option>
                <option>Cellular Jail</option>
                <option>Ross Island</option>
                <option>Chidiya Tapu</option>
                <option>Wandor Beach</option>
              </Selects>
            </Divselect>
          </Selectdiv>

          <Second>
            <Divselect onClick={clickdate}>
              <Calender src={calender} />
              <Divdate>
                <DatePickers
                  portalId="root-portal"
                  selected={startDate}
                  shouldCloseOnSelect="false"
                  onChange={(date) => setStartDate(date)}
                  ref={data}
                  placeholderText={"Check In Date"}
                  minDate={minDate}
                  value={startDate}
                  dateFormat="dd/MM/yyyy"
                />
              </Divdate>
              <Icon />
            </Divselect>
          </Second>
          <Second>
            <Divselect onClick={clickdate1}>
              <Calender src={calender} />
              <Divdate>
                <DatePickers
                  portalId="root-portal"
                  selected={endDate}
                  shouldCloseOnSelect="false"
                  onChange={(date) => setEndDate(date)}
                  ref={data1}
                  placeholderText={"Checkout Date"}
                  minDate={minDate}
                  value={startDate}
                  dateFormat="dd/MM/yyyy"
                />
              </Divdate>
              <Icon />
            </Divselect>
          </Second>
          <Second>
            <Second1>
              <img src={raja} />
              <Selectdivs1
                onClick={inputclick}
                type="text"
                placeholder="  1 Room & 3 Children"
                readonly
                value={`${stateinput3} Rooms & ${
                  stateinput1 + stateinput2
                } Guests`}
              />
            </Second1>
          </Second>
          {show && (
            <Maindropss>
              <Childdiv>
                <Ch1>Children</Ch1>
                <Ch2>
                  <Chbtn1 onClick={minus}>-</Chbtn1>
                  <Inputdiv>
                    <Chinput type="text" value={stateinput1} />
                  </Inputdiv>
                  <Chbtn2 onClick={plus}>+</Chbtn2>
                </Ch2>
              </Childdiv>
              <hr
                style={{
                  border: "1px solid rgba(20,88,67,1)",
                  margin: "10px 0",
                  backgroundColor: "rgba(20,88,67,1)",
                }}
              />
              <AdDiv>
                <Ch1>Adult</Ch1>
                <Ch2>
                  <Chbtn1 onClick={minus1}>-</Chbtn1>
                  <Inputdiv>
                    <Chinput type="text" value={stateinput2} />
                  </Inputdiv>
                  <Chbtn2 onClick={plus1}>+</Chbtn2>
                </Ch2>
              </AdDiv>
              <hr
                style={{
                  border: "1px solid rgba(20,88,67,1)",
                  margin: "10px 0",
                  backgroundColor: "rgba(20,88,67,1)",
                }}
              />
              <Rdiv>
                <Ch1>Room</Ch1>
                <Ch2>
                  <Chbtn1 onClick={minus2}>-</Chbtn1>
                  <Inputdiv>
                    <Chinput
                      type="text"
                      value={stateinput3}
                      onChange={(e) => setStateinput3(e.target.value)}
                    />
                  </Inputdiv>
                  <Chbtn2 onClick={plus2}>+</Chbtn2>
                </Ch2>
              </Rdiv>
              <Apply style={{ cursor: "pointer" }} onClick={apply}>
                Apply
              </Apply>
            </Maindropss>
          )}
        </Greens>
      </center>
      <center>
        {" "}
        <Button style={{ cursor: "pointer" }} onClick={click}>
          {" "}
          <p>Search </p>{" "}
        </Button>
      </center>
      <center></center>
      <Test />
      <Slider2f1 />

      <Homecard />
      <Slider5 />
      <Slider4 />
      <Slider6 />
      <Testimonialcard />
      <Covid />
      <Footer />
    </>
  );
};

export default Banner;
