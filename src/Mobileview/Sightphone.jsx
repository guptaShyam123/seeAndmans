import React from 'react'
import styled from "styled-components"
import mobile from "../assets/goa.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
import "swiper/css";
import {useNavigate , Link} from "react-router-dom"
import { Autoplay } from "swiper";
import {baseURL} from "../Components/Apibaseurl"
const Offer = styled.p`
   color:#145843;
   font-weight: 700;
   font-size: 25px;
   margin-top:30px;
   text-align:center;
`
const Maindiv = styled.div`
 /* background:red; */
 /* padding:0 20px; */
 
 /* background-sc */
/* overflow: hid; */
 /* height:fit-content; */
 margin-top:10px;
 width:106vw;
  /* margin-bottom: 100px; */

`
const Card = styled.div`
box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
   /* height:150px; */
   /* height:00px; */
   /* border-radius: 20px; */
   background-color:#ffffff;
   margin-left: 20px;
/* align-items: center; */
   /* display: flex; */
   /* height:fit-content; */
   width:210px;
   /* height:fit-content; */
   /* padding: 10px px; */
   /* height:200px; */
   /* flex-direction: column; */
   /* width:fit-content; */
   margin-top: 40px;;
   margin-bottom:50px;
   /* box-sizing: border-box; */
   /* border-radius:5px; */
   /* overflow-x: hidden; */
`

const Mobile = styled.img`
  /* height:; */
  
    height:100%;
  width:100%;
  background-size: cover;
  /* object-fit: cover; */
  border-top-right-radius:5px;
   border-top-left-radius: 5px;
`
const Whitediv = styled.div`
/* background: red; */

/* border-radius: 5px; */
width:91.80%;

display: flex;
/* flex-direction: column; */
/* align-items: center; */
/* background:pink; */
/* height:20px; */
/* width:300px; */
padding:10px 4px;
gap:10px;
/* height:120px; */
/* text-align:center; */

`
const Power = styled.p`
  font-size:12px;
  color:black;
  font-weight: 600;
  font-family: Poppins;
  padding-left: 10px;;
  text-align: left;

`
const Book = styled.p`
font-size:12px;
  color:black;
  font-weight: 500;
  font-family: Poppins;
  text-align:left;;

  /* width:90%; */
  margin-left:10px;
  /* padding-left:10px; */
`
const Booknow = styled.p`
  color:black;
  text-align: right;;
  font-size:14px;
  font-weight: 700;
  text-align:left;
  padding-left:10px;

  /* margin-right: 12px;; */
`

const Sightphone = () => {

  const [data , setDate] =React.useState([
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
    {
      id:1,
      img:mobile ,
      ppower:"Powe Packed deals on Hotels",
      book:"Kaya king"
    },
  ])
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/get/sights`
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };
  React.useEffect(() => {
    getdata();
  }, []);

  const navigate = useNavigate();
  
  return (
  <>
  <Offer>SIGHTSEEING</Offer>
    
  <Maindiv>
  <Swiper 
  modules={[Autoplay]} 
  autoplay={{ delay: 1000}} 
  spaceBetween={80}
  slidesPerView={2}
  onSlideChange={() => console.log("slide change")}
  onSwiper={(swiper) => console.log(swiper)}
>
{
  datas?.sights?.map((i)=>{
    return(
      <>
      <SwiperSlide className="next">
  <Link style={{textDecoration:"none"}} to={`/sightbook/${i._id}`} >
  <Card >
  <div style={{height:"200px"}}>
  <Mobile src={i.image?.url } />
  </div>
  <Whitediv>
 
  <Booknow>{i.location}</Booknow>
  </Whitediv>
  </Card>
  </Link>
  </SwiperSlide>
      </>
    )
  })
}
  
 
 
</Swiper>
</Maindiv>
  </>
  )
}

export default Sightphone