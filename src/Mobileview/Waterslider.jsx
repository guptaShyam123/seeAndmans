import React from 'react'
import styled from "styled-components"
import mobile from "../assets/waterphoone.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from 'react-router-dom';
// import { useSwiper } from "swiper/react";
import "swiper/css";
import {baseURL} from "../Components/Apibaseurl"

const Offer = styled.p`
    color:#145843;
   font-weight: 700;
   font-size: 25px;
   margin-top:30px;
   text-align:center;
`
const Maindivs1 = styled.div`
 /* background:red; */
 /* padding:0 20px; */
 
 /* background-color:red; */
/* overflow: hid; */
 /* height:fit-content; */
 margin-top:10px;
 width:106vw;
 /* padding: 30px 0; */
  /* margin-bottom: 100px; */

`
const Cards1 = styled.div`
box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
   /* height:150px; */
   /* height:00px; */
   border-radius: 20px;
   background-color:#ffffff;
   margin-left: 20px;
/* align-items: center; */
   /* display: flex; */
   /* height:fit-content; */
   width:210px;
   /* height:100px; */
   /* height:400px; */

   /* height:fit-content; */
   /* padding: 10px px; */
   /* height:200px; */
   /* flex-direction: column; */
   /* width:fit-content; */
   margin-top: 40px;;
   margin-bottom:40px;
   /* box-sizing: border-box; */
   /* border-radius:5px; */
   /* overflow-x: hidden; */
`

const Mobiles1 = styled.img`
  /* height:; */

    height:100%;
  width:100%;
  background-size: cover;
  border-top-right-radius:5px;
   border-top-left-radius: 5px;
  object-fit: cover;
  /* border-radius: 5px; */
`
const Whitedivs1 = styled.div`
/* background: red; */

/* border-radius: 5px; */
width:91.80%;

display: flex;
flex-direction: column;
/* align-items: center; */
/* background:pink; */
/* height:20px; */
/* width:300px; */
padding:10px 4px;
gap:10px;
/* height:120px; */
/* text-align:center; */

`
const Powers1 = styled.p`
  font-size:12px;
  color:black;
  font-weight: 600;
  font-family: Poppins;
  padding-left: 10px;;
  text-align: left;

`
const Books1 = styled.p`
font-size:12px;
  color:black;
  font-weight: 500;
  font-family: Poppins;
  text-align:left;;

  /* width:90%; */
  margin-left:10px;
  /* padding-left:10px; */
`
const Booknows1 = styled.p`
  color:green;
  text-align: right;;
  font-size:12px;
  font-weight: 700;
  margin-right: 12px;;
`

const Waterslider = () => {

  const [data , setDate] =React.useState([
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Book hotels and more @ upto 20% off"
    },
  ])
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/get/activity`
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  const navigate = useNavigate()

  const click = ()=>{
    navigate("/wateractivity")
  }

  React.useEffect(() => {
    getdata();
  }, []);
  return (
   <>
   <Offer>ACTIVITIES</Offer>
    
   <Maindivs1>
   <Swiper  
   spaceBetween={80}
   slidesPerView={2}
   onSlideChange={() => console.log("slide change")}
   onSwiper={(swiper) => console.log(swiper)}
 >
 
 {
  datas?.activity?.map((i)=>{
    return (
      <>
      <SwiperSlide className="next">

   <Cards1>
   <div style={{width:"100%" ,height:"167px"}}>
   <Mobiles1 onClick={click} src={i.image?.url } />
   </div>
   <Whitedivs1>
   <Powers1>Powe Packed deals on Hotels</Powers1>
   <Books1>Book hotels and more @ upto {i.offers} off</Books1>
   <Booknows1 onClick={click}>Book now</Booknows1>
   </Whitedivs1>
   </Cards1>
   </SwiperSlide>
      </>
    )
  })
 }
   
   
 </Swiper>
 </Maindivs1>
   </>
  )
}

export default Waterslider