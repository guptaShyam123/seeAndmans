import React from 'react'
import web from "../../assets/couplemobile.jpg";
import styled from "styled-components";
import couple from "../../assets/couple.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
import "swiper/css";
import girl from "../../assets/lovebird.png";



const Mobileweds = styled.img`
     width:107.8vw;
    
     height:40vh;
     background-position: center; 
     object-fit: cover;
`
const Couplediv = styled.div`
 /* background-color:red; */
 height:fit-content;
 padding: 2% 4%;
 display:flex;
 flex-direction:column;
 align-items:center;
  margin-top:30px;
  width:100vw;
  /* justify-content:space-around; */
  gap:20px;

`
const Couple = styled.img`
   /* height:100%; */
   width:80vw;
`
const Stext = styled.p`
      font-size:15px;
      color:#000000;
      text-align:justify;
      width:78vw;
      font-weight:500;
    font-family: Poppins;
`
const Offer = styled.p`
   color:#000000;
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
 width:108vw;
  /* margin-bottom: 100px; */

`
const Card = styled.div`
box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
   /* height:150px; */
   /* height:00px; */

   background-color:#ffffff;
   margin-left: 40px;
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
   border-radius:5px;
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

const Mobilewed = () => {
  return (
    <>
   <Mobileweds src={web} />
    <center>
    <Couplediv>
    <Couple src={couple} />
    <Stext>
    Amet aliquet neque, semper turpis pellentesque id. Suspendisse sit
    convallis purus donec viverra suspendisse. Elit proin eget at
    fermentum lectus habitant sed. Cras ac id ullamcorper dictum
    ultrices. In enim tincidunt proin vel in venenatis platea. Orci
    purus sit quis feugiat eleifend aenean massa interdum ut. Morbi
    tempor amet, venenatis sollicitudin. Diam, velit aliquam ac sit
    purus congue nullam.
    
    
  </Stext>
    </Couplediv>
    </center>
    
    <Offer>PLACE FOR WEDDING</Offer>
    
  <Maindiv>
  <Swiper  
  spaceBetween={80}
  slidesPerView={2}
  onSlideChange={() => console.log("slide change")}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={girl } />
  <Whitediv>
 
  <Booknow>Kaya king</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={girl } />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={girl } />
  <Whitediv>
  
  <Booknow>King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={girl } />
  <Whitediv>
 
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={girl} />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={girl } />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={girl } />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={girl } />
  <Whitediv>
 
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={girl } />
  <Whitediv>
 
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={girl } />
  <Whitediv>

  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={girl} />
  <Whitediv>
 
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={girl } />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
 
</Swiper>
</Maindiv>
    </>
  )
}

export default Mobilewed