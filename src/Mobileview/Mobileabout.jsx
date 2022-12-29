import React from 'react'
import styled from "styled-components"
import img1 from "../assets/41.png";
import img2 from "../assets/42.png";
import img3 from "../assets/43.png";
import img4 from "../assets/44.png";
import sea from "../assets/21.png";
import mobile from "../assets/goa.jpeg"
import nav from "../assets/navb.png";
import clear from "../assets/clear.png";
import img12 from "../assets/41.png";
import ele from "../assets/ele.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
import "swiper/css";


const Text = styled.p`
      text-align: center;
  color: #7a7a7a;
  font-style: normal;
  font-weight: 600;
  /* background:red; */
  width:70vw;
  /* width:fit-content; */
  font-family: Poppins;
  font-size:17px;
`
const Stext = styled.p`
text-align: center;
  color: #145843;
  font-style: normal;
  font-weight: 700;
  font-family: Poppins;
  font-size:18px;
  width:90vw;
`
const Newtext = styled.p`
font-weight: 400;
  font-family: Poppins;
  font-style: normal;
  text-align: center;
  font-size:14px;
  text-align:justify ;
  width:80vw;
`
const Textdiv = styled.div`
  margin-top:100px;
  display:flex;
  flex-direction:column;
  gap:8px;
  /* background-color:red; */
  /* width:90vw; */
  align-items:center;
  justify-content:center;
`
const Imagediv = styled.div`
margin-top:30px;
background-color:#ffffff;
  /* background-color:red; */
  /* height:20px; */
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  /* box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16); */
  width:106vw;
/* width:90vw; */
gap:7px;
`
const Test = styled.img`
    border-radius:10px;
    
width:44%;
background-position:center ;

/* height:100%; */
height:23vh;
`
const Why = styled.p`
 font-weight: 700;
  font-family: Poppins;
  color:#000000;
  font-weight:700;
  margin-top:30px;
  font-size:21px;
  text-align:center;

`
const Flexdiv = styled.div`
margin-top:30px;
/* background-color:red; */
align-items:center;
justify-content:center;
display:flex;
flex-direction:column;
/* width:120vw; */
padding: 0 2%;
width:100vw;
gap:10px;

`
const Sea = styled.img`
  height:40vh;
  /* width:70vw; */
  border-radius: 10px;
  /* width:80vw; */
`
const Lorem = styled.p`
  font-size:14px;
  color: #7a7a7a;
   font-weight: 500;
   font-family: Poppins;
    width:81vw;
    text-align: justify;


`
const Our = styled.p`
margin-top:30px;
text-align: center;
font-size:21px;
font-weight: 700;
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

   background-color:#ffffff;
   margin-left: 20px;
/* align-items: center; */
   /* display: flex; */
   /* height:fit-content; */
   width:215px;
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
  
    height:20vh;
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


const Mobileabout = () => {
  return (
    <>
    <Textdiv>
    <Text>Duis semper tincidunt quis</Text>
    <Stext>WELCOME TO SEEANDAMANS TOUR</Stext>
   
  </Textdiv>
  <Imagediv>
  <Test src={img1} />
    <Test src={img2} />
    <Test src={img3} />
    <Test src={img4} />
  </Imagediv>
   <Our>OUR SERVICES</Our>

   <Maindiv>
  <Swiper  
  spaceBetween={80}
  slidesPerView={2}
  onSlideChange={() => console.log("slide change")}
  onSwiper={(swiper) => console.log(swiper)}
>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={slide1 } />
  <Whitediv>
 
  <Booknow>Kaya king</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={slide2 } />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={slide3 } />
  <Whitediv>
  
  <Booknow>King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={slide4 } />
  <Whitediv>
 
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={slide1 } />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide className="next">
  <Card>
  <Mobile src={slide2 } />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={slide3} />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={slide4 } />
  <Whitediv>
 
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={mobile } />
  <Whitediv>
 
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={mobile } />
  <Whitediv>

  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={mobile } />
  <Whitediv>
 
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
  <Mobile src={mobile } />
  <Whitediv>
  
  <Booknow>Kaya King</Booknow>
  </Whitediv>
  </Card>
  </SwiperSlide>
 
</Swiper>
</Maindiv>
<Our>GALLARY</Our>

<Imagediv>
<Test src={nav} />
  <Test src={clear} />
  <Test src={img12} />
  <Test src={ele} />
</Imagediv>
    </>
  )
}

export default Mobileabout