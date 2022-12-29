import React from 'react'
import styled from "styled-components"
import mobile from "../assets/luxury.jpeg"
import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { useNavigate , Link } from 'react-router-dom';
import {baseURL} from "../Components/Apibaseurl"

const Offer = styled.p`
   color:#145843;
   font-weight: 700;
   font-size: 25px;
   margin-top:80px;
   text-align:center;
`
const Maindiv = styled.div`
 /* background:red; */
 /* padding:0 20px; */
 
 /* background-sc */
/* overflow: hid; */
 /* height:fit-content; */
 margin-top:10px;
  /* margin-bottom: 100px; */
  /* width:fit-content; */
  width:106vw;
`
const Card = styled.div`
box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
   /* height:150px; */
   /* height:00px; */

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
   margin-bottom:40px;
   /* box-sizing: border-box; */
   border-radius:5px;
   /* overflow-x: hidden; */
   border-radius: 20px;
`

const Mobile = styled.img`
  /* height:; */
   border-top-right-radius:5px;
   border-top-left-radius: 5px;
    height:100%;
  width:100%;
  /* object-fit: cover; */
  /* border-radius: 5px; */
  /* border-radius: 20px;; */
`
const Whitediv = styled.div`
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

  color:green;
  text-align: right;;
  font-size:12px;
  font-weight: 700;
  margin-right: 12px;;
`
const Mobileslider1 = () => {
const navigate = useNavigate()

  

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
    try {
      const res = await fetch(
        `${baseURL}/api/user/search/hotel`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data?.hotels);
     

      setdatas(data);
    } catch (error) {
      console.log(error);
    }
    
  };

  React.useEffect(() => {
    getdata();
  }, []);

 
  return (
   <>
     <Offer>HOTELS</Offer>
    
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
        datas?.hotels?.map((i)=>{
          return(
            <>
            <SwiperSlide className="next">
            <Link style={{textDecoration:"none"}} to={`/hotelselection/${i._id}`}><Card>
            <div style={{width:"100%" ,height:"167px"}}>
            <Mobile  src={i.image?.url } />
            </div>
            <Whitediv>
            <Power>Powe Packed deals on Hotels</Power>
            <Book>Book hotels and more @ upto {i.offers} off</Book>
            <Booknow >Book now</Booknow>
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

export default Mobileslider1

 