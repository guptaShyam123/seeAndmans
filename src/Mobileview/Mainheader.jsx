import React from "react";
import mobile from "../assets/phoneimage2.jpeg";
import styled from "styled-components";
import icon from "../assets/side.svg";
import logo1 from "../assets/logo1.png";
import hotel1 from "../assets/hotelstar.png";
import cab1 from "../assets/cab.png";
import ferri1 from "../assets/ferries.png";
import cruise1 from "../assets/whitecruise.png";
import water1 from "../assets/water.png";
import Mobileslider1 from "./Mobileslider1";
import Cabslider from "./Cabslider";
import Packageslider from "./Packageslider";
import Waterslider from "./Waterslider";
import Sightphone from "./Sightphone";
import Andmancard from "./Andmancard";
import Mobilefooter from "./Mobilefooter";
import Mobilecabhome from "../Mobileview/Homepage/Mobilecabhome";
import styles from "./mobilesearchoption.module.scss";
import { MdLocationOn } from "react-icons/md";
import { DateRangePicker } from "rsuite";
import calender from "../assets/calender.png";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import DialogContent from "@mui/material/DialogContent";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Thingsdowhile from "./Thingsdowhile"

const Imgdiv = styled.div`
  width: 106vw;
  /* width:1200px; */
  background: url(${mobile});
  background-size: cover;
  /* background-position: center; */
  /* width:100vw; */
  /* background: center / cover no-repeat url(${mobile}); */
  object-fit: cover;
  /* background-position: center; */
  /* height:60vh; */
  padding: 130px 10px;
  /* background:red; */
  /* width:fit-content; */
  /* height:300px; */
`;
const Icon = styled.img`
  height: fit-content;
  width: fit-content;
  margin-top: 30px;
  margin-left: 30px;

  /* background:red; */
`;
const Inputdiv = styled.div`
  background-color: white;
  display: flex;
  margin-left: 30px;
  align-items: center;
  margin-top: 3px;
  background: #ffffff;
  height: 25px;
  width: 300px;
  /* justify-content:space-around; */
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  padding: 10px 14px;
`;
const Logo = styled.img`
  height: 30px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  /* background-color: red; */
  text-align: center;
  ::placeholder {
    color: black;
    font-size: 17px;
    font-weight: 600;
  }
`;
const Bannerdiv = styled.div`
  background: rgba(20, 88, 67, 0.2);
  backdrop-filter: blur(42px);
  /* Note: backdrop-filter has minimal browser support */
  width: 90%;
  border-radius: 7px;
  padding: 12px 1px;
  /* width:4; */
  /* margin-top:100px; */
  /* margin-left: 30px; */
  display: flex;
  align-items: center;
  margin-left:-20px;
  z-index:2;
    
  justify-content: space-around;
`;
const Firstdiv = styled.div`
  display: flex;
  flex-direction: column;
  padding:0;
  align-items: center;
  justify-content: center;
  width:10%;
  height:50px;
  /* justify-content: space-between; */
  
`;
const Icons = styled.img`
  height: 30px;
  /* padding:0; */
`;
const Hotels = styled.p`
  font-size: 14px;
  color: white;
  font-family: Poppins;

  font-weight: 700;
`;

const Maindropss = styled.div`
  /* position: absolute; */
  background-color: rgba(47, 191, 140, 1);
  /* right: 1px; */
  /* bottom: 10px; */

  /* margin-top:28vh; */
  width: 70vw;
  height: 35vh;
  padding: 30px 20px;
  border-radius: 5px;
`;
const Childdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  /* width: 15vw; */
`;

const Ch1 = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Ch2 = styled.div`
  display: flex;
`;
const Chbtn1 = styled.button`
  height: 30px;
  width: 30px;
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
  height: 30px;
  width: 30px;
  padding: 0;
  margin: 0 5px;
  outline: none;
  border: none;
  text-align: center;
  background-color: white;
  border-radius: 2px;
  /* z-index: 10; */
`;
const Inputdivs = styled.div`
  display: flex;
`;
const Chbtn2 = styled.button`
  height: 30px;
  width: 30px;
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
  /* width: 15vw; */
`;

const Rdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  /* width: 15vw; */
`;

const Apply = styled.button`
  background-color: rgba(20, 88, 67, 1);
  color: white;
  border: none;
  outline: none;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 5px;
  padding: 5px 20px;
  margin-top: 20px;
`;

const Search = styled.button`
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding: 2% 7%;
  margin-top: 20px;
  outline: none;
  border: none;
  background: #145843;
  border-radius: 30px;
`;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Mainheader = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [show, setShow] = React.useState(false);
  const [stateinput, setStateinput] = React.useState("");
  const [stateinput1, setStateinput1] = React.useState(0);
  const [stateinput2, setStateinput2] = React.useState(0);
  const [stateinput3, setStateinput3] = React.useState(0);

  const apply = () => {
    setOpen(!open);
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

  const navigate = useNavigate();

  const clickks = () => {
    navigate("/hotels");
  };

  const click = () => {
    navigate("/cabs");
  };
  const clicks = () => {
    navigate("/");
  };

  const click1 = () => {
    navigate("/ferry");
  };
  const click2 = () => {
    navigate("/packagehome");
  };

  const click3 = () => {
    navigate("/water");
  };

  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  const open2 = true;

  // const date = new Date()
  // const [date , setDate] = React.useState(new Date())
  var curr = new Date();
  curr.setDate(curr.getDate() + 3);
  var date = curr.toISOString().substring(0,10);

  const ref = React.useRef();
  return (
    <>
      <Imgdiv>
        <center>
          <Bannerdiv>
            <Firstdiv onClick={clicks}>
              <Icons src={hotel1} />
            </Firstdiv>
            <Firstdiv onClick={click}>
              <Icons src={cab1} />
            </Firstdiv>
            <Firstdiv onClick={click1}>
              <Icons src={ferri1} />
            </Firstdiv>
            <Firstdiv onClick={click2}>
              <Icons src={cruise1} />
            </Firstdiv>
            <Firstdiv onClick={click3}>
              <Icons src={water1} />
            </Firstdiv>
          </Bannerdiv>
        </center>
        <center>
          <div className={styles.mainwrapper}>
          <div style={{width:"100%" , textAlign:"left"}}>
          <span style={{color:"white"  , textAlign:"left" , width:"100%" , fontWeight:"700"}}>Location</span>
          <div className={styles.locationwrapper}>
            <MdLocationOn style={{marginRight:"6px"}} className={styles.locationIcon} />
            <select name="" id="" className={styles.select}>
              <option value="">Port Blair</option>
              <option value="">Havelock</option>
              <option value="">Swaraj Dweep</option>
              <option value="">Cellular Jail</option>
              <option value="">Chidiya Tapu</option>
            </select>
          </div>
          </div>
        
            <div style={{width:"100%" , textAlign:"left"}}>
            <span style={{color:"white"  , textAlign:"left" , width:"100%" , fontWeight:"700"}}>Check In</span>
            <div className={styles.locationwrapper}>
              <img src={calender} style={{ height: "15px", width: "15px"  , marginRight:"6px" }} />
            
              <input 
                type="date"
                placeholder="Check In"
                id=""
               defaultValue={date}
                className={styles.select}
                dateFormat="dd/MM/yyyy"
              />
            </div>
            </div>
           
            <div style={{width:"100%" , textAlign:"left"}}>
            <span style={{color:"white"  , textAlign:"left" , width:"100%" , fontWeight:"700"}}>Check Out</span>
            <div className={styles.locationwrapper}>
              <img src={calender} style={{ height: "15px", width: "15px"  , marginRight:"6px"}} />
              <input
              value="2022-02-04"
                type="date"
                defaultValue={date}
                dateFormat="dd/MM/yyyy"
                placeholder="Check in"
                className={styles.select}
              />
            </div>
            </div>
           <div style={{textAlign:"left"}}>
           <span style={{color:"white"  , textAlign:"left" , width:"100%" , fontWeight:"700"}}>Room & Guests</span>
           <div className={styles.locationwrapper}>
           
             <MdLocationOn style={{marginRight:"6px"}} className={styles.locationIcon} />
             <input
               name=""
               id=""
               className={styles.select}
               onClick={handleClickOpen}
               type="text"
               placeholder="  1 Room & 3 Children"
               readonly
               value={`${stateinput3} Rooms & ${
                 stateinput1 + stateinput2
               } Guests`}
             />

             <Dialog
               open={open}
               TransitionComponent={Transition}
               keepMounted
               onClose={handleClose}
               aria-describedby="alert-dialog-slide-description"
             >
               {
                 <DialogContent
                   sx={{ padding: "0" }}
                   style={{ width: "70vw" }}
                 >
                   <Maindropss>
                     <Childdiv>
                       <Ch1>Children</Ch1>
                       <Ch2>
                         <Chbtn1 onClick={minus}>-</Chbtn1>
                         <Inputdivs>
                           <Chinput type="text" value={stateinput1} />
                         </Inputdivs>
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
                         <Inputdivs>
                           <Chinput type="text" value={stateinput2} />
                         </Inputdivs>
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
                         <Inputdivs>
                           <Chinput
                             type="text"
                             value={stateinput3}
                             onChange={(e) => setStateinput3(e.target.value)}
                           />
                         </Inputdivs>
                         <Chbtn2 onClick={plus2}>+</Chbtn2>
                       </Ch2>
                     </Rdiv>
                     <Apply style={{ cursor: "pointer" }} onClick={apply}>
                       Apply
                     </Apply>
                   </Maindropss>
                 </DialogContent>
               }
             </Dialog>
           </div>
           </div>
          
          </div>
        </center>
        <center>
          <Search onClick={clickks}>Search</Search>
        </center>
      </Imgdiv>

      {loading ? (
        <Backdrop
          open={open2}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
          <Mobileslider1 />
          <Cabslider />
          <Packageslider />
          <Waterslider />
          <Sightphone />
          <Thingsdowhile />
          <Andmancard />
        </>
      )}
    </>
  );
};

export default Mainheader;
