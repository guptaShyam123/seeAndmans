import React from 'react'
import styled from "styled-components"
import { MdLocationPin } from "react-icons/md";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react"
import mobile from "../../assets/mobileferry1.avif"
import mobile1 from "../../assets/mobileferry2.avif"
import mobiles from "../../assets/phoneimage2.jpeg"
import hotel1 from '../../assets/hotelStar.svg'
import cab1 from '../../assets/cab.png'
import ferri1 from '../../assets/CruiseShip1.svg'
import water1 from '../../assets/water.png'
import cruise1 from '../../assets/whitecruise.png'
import styles from "../mobilesearchoption.module.scss";
import { MdLocationOn } from "react-icons/md";
import calender from "../../assets/calender.png";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import DialogContent from '@mui/material/DialogContent';
import { useNavigate } from 'react-router-dom';

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
  justify-content:space-around;


`
const Firstdiv = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Icons = styled.img`
height:30px;
`
const Img = styled.div`
 width:106vw;
/* width:1200px; */
background: url(${mobiles});
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
   /* margin-bottom: 50px; */
`

const Trnd = styled.p`
text-align:center;
  font-size:22px;
  color:#145843;
  font-weight: 700;
  margin-top:20px;
`
const Maindiv = styled.div`
  /* background:red; */
  /* padding:0 20px; */
/* background: ; */
background-color: hsla(2,3%,96%,.6);
  /* background-sc */
  /* overflow: hid; */
  /* height:fit-content; */
  /* margin-top: 1px; */
  width: 106vw;
  margin-top: 20px;;
  /* margin-bottom: 100px; */
`;
const Card = styled.div`
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  /* height:150px; */
  /* height:00px; */
/* height:20vh;; */
  background-color: #ffffff;
  margin-left: 20px;
  /* align-items: center; */
  /* display: flex; */
  /* height:fit-content; */
  width: 220px;
  /* height:fit-content; */
  /* padding: 10px px; */
  /* height:200px; */
  /* flex-direction: column; */
  /* width:fit-content; */
  margin-top: 40px;
  margin-bottom: 50px;
  border-radius: 20px;
  /* height:20vh; */
  /* box-sizing: border-box; */
  border-radius: 5px;
  /* overflow-x: hidden; */
`;

const Mobile = styled.img`
  /* height:; */

  height: 20vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  /* object-fit: cover; */
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
const Whitediv = styled.div`
  /* background: red; */

  /* border-radius: 5px; */
  width: 100%;

  display: flex;
  flex-direction: column;
  /* flex-direction: column; */
  /* align-items: center; */
  /* background:pink; */
  /* height:20px; */
  /* width:300px; */
  padding: 3px 4px;
  gap: 2px;
  /* height:120px; */
  /* text-align:center; */
`;
const Power = styled.p`
  font-size: 12px;
  color: black;
  font-weight: 600;
  font-family: Poppins;
  padding-left: 10px;
  text-align: left;
`;
const Book = styled.p`
  font-size: 12px;
  color: black;
  font-weight: 500;
  font-family: Poppins;
  text-align: left;

  /* width:90%; */
  margin-left: 10px;
  /* padding-left:10px; */
`;
const Booknow = styled.p`
  color: black;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding-left: 10px;

  /* margin-right: 12px;; */
`;
const Locationdiv = styled.div`
  padding: 1% 2%;
  display: flex;
  align-items: center;
  gap:2px;
  margin-bottom: 10px;;
`;
const Loc = styled(MdLocationPin)``;
const Location = styled.p`
  font-size: 17px;
  color: #145843;
  font-weight: 600;
  font-family: Poppins;
`;
const Maindropss = styled.div`
  /* position: absolute; */
  background-color: rgba(47,191,140,1);
  /* right: 1px; */
  /* bottom: 10px; */

  /* margin-top:28vh; */
  width:100%;
  height:28vh;
  padding:  30px 20px;
  border-radius: 5px;
`;
const Childdiv = styled.div`
display:flex;
justify-content: space-between;
align-items : center;
color: white;
/* width: 15vw; */

`;

const Ch1 = styled.div`
  font-size:18px;
  font-weight:600;
`
const Ch2 = styled.div`
  display:flex; 
`
const Chbtn1 = styled.button`
 height:30px;
  width:30px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 2px;
  cursor: pointer;
`
const   Chinput = styled.input`
  height:30px;
  width: 30px;
  padding:0;
  margin: 0 5px;
  outline: none;
  border  : none;
  text-align: center;
  background-color: white;
  border-radius: 2px;
  /* z-index: 10; */

`
const Inputdivs = styled.div`
display:flex;
`
const Chbtn2 = styled.button`
 height:30px;
  width:30px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 2px;

`

const AdDiv = styled.div`
display:flex;
justify-content: space-between;
align-items : center;
color: white;
/* width: 15vw; */
`;

const Rdiv = styled.div`
display:flex;
justify-content: space-between;
align-items : center;
color: white;
/* width: 15vw; */
`;

const Apply = styled.button`
background-color: rgba(20,88,67,1);
color: white;
border: none;
outline: none;
font-size:17px;
align-items : center;
justify-content : center;
display: flex;
border-radius: 5px;
padding: 5px 20px;
margin-top: 20px;
`;

const Search = styled.button`
  color:white;
  font-size:18px;
  font-weight:700;
  padding:2% 7%;
  margin-top:20px;
  outline :none;
  border: none;
  background: #145843;
  border-radius: 30px;
  /* margin-bottom:50px; */
`

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Mobileferryhome = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [show , setShow] = React.useState(false)
  const [stateinput ,setStateinput] = React.useState("")
  const [stateinput1 , setStateinput1] = React.useState(0)
  const [stateinput2 , setStateinput2] = React.useState(0)
const  [ stateinput3 , setStateinput3] = React.useState(0)

const apply = ()=>{
  setOpen(!open);
}

const minus = ()=>{
    if(stateinput1  <= 1) return 
   
       
    setStateinput1(stateinput1 - 1)

   
  }
  const minus1 = ()=>{
    if(stateinput2  <= 1) return 
   
    setStateinput2(stateinput2 -1)
  }
  const minus2 = ()=>{
    if(stateinput3 <= 1) return 
   
    setStateinput3(stateinput3 - 1)
  }
  
  const plus =  ()=>{
    
    setStateinput1(stateinput1 + 1) 
  }
  const plus1 =  ()=>{
    setStateinput2(stateinput2 + 1)
  }
  const plus2 =  ()=>{
    setStateinput3(stateinput3 + 1)
  }

const navigate = useNavigate()

const inputclick = ()=>{
   setShow(!show);
}
const clickks = ()=>{
  navigate("/ferrylist")
}
const click = ()=>{
  navigate("/")
}
const click1 = ()=>{
    navigate("/cabs")
}
const click2 = ()=>{
  
}
const click3 = ()=>{
  navigate("/packagehome")
}
const click4 = ()=>{
  navigate("/water")
}
const clickk = ()=>{
  navigate("/ferrylist")
}
  return (
    <>
    <Img >
    
    <center>
    <Bannerdiv>
    <Firstdiv onClick={click}>
    <Icons src={hotel1} />
   
    </Firstdiv>
    <Firstdiv onClick={click1}>
    <Icons src={cab1} />
   
    </Firstdiv>
    <Firstdiv onClick={click2}>
    <Icons  src={ferri1} />
   
    </Firstdiv>
    <Firstdiv onClick={click3}>
    <Icons src={cruise1} />
  
    </Firstdiv>
    <Firstdiv onClick={click4}>
    <Icons src={water1} />
    
    </Firstdiv>
    </Bannerdiv>
    </center> 
  
    <center>
      <div className={styles.mainwrapper}>
      <div className={styles.locationwrapper}>
        <MdLocationOn className={styles.locationIcon} />
        <select name="" id="" className={styles.select}>
          <option value="">From To</option>
          <option value="">Havelock</option>
          <option value="">Swaraj Dweep</option>
          <option value="">Cellular Jail</option>
          <option value="">Chidiya Tapu</option>
        </select>
      </div>
      <div className={styles.locationwrapper}>
        <MdLocationOn className={styles.locationIcon} />
        <select name="" id="" className={styles.select}>
          <option value="">Location</option>
          <option value="">Havelock</option>
          <option value="">Swaraj Dweep</option>
          <option value="">Cellular Jail</option>
          <option value="">Chidiya Tapu</option>
        </select>
      </div>
      <div className={styles.locationwrapper}>

          <img src={calender} style={{height:"15px" , width:"15px"}} />
        <input type="date" defaultValue="2022-11-15" id="" className={styles.select} />
          

      </div>

      
    </div>
    </center>
    <center>
    <Search onClick={clickks}>Search</Search>
    </center>
    </Img>   
    <Trnd>TRENDING PORTS</Trnd>
    <Maindiv>
    <Swiper
      spaceBetween={120}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="next">
        <Card onClick={clickk}>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Dubai</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
      <Card onClick={clickk}>
          <Mobile src={mobile} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
      <Card onClick={clickk}>
          <Mobile src={mobile} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Neil</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
      <Card onClick={clickk}>
          <Mobile src={mobile} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Bartang</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
      <Card onClick={clickk}>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide className="next">
      <Card onClick={clickk}>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card onClick={clickk}>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card onClick={clickk}>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card>
          <Mobile src={mobile1} />
          <Whitediv>
          
            <Locationdiv>
              <Loc />
              <Location>Port Blair</Location>
            </Locationdiv>
          </Whitediv>
        </Card>
      </SwiperSlide>
    </Swiper>
  </Maindiv>
    </>
  )
}

export default Mobileferryhome