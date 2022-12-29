import React from 'react'
import man4 from "../../assets/man4.png";
import styled from "styled-components";
import star from "../../assets/star.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.png";
import test4 from "../../assets/test4.png";
import test5 from "../../assets/test5.png";
import man1 from "../../assets/mans1.png";
import man2 from "../../assets/mans2.png";
import man3 from "../../assets/mans3.png";
import man44 from "../../assets/mans4.png";
import man5 from "../../assets/mans5.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import { useSwiper } from "swiper/react";
import "swiper/css";

const Maindivs = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  /* margin-left:26px; */
  width:70vw;
  /* background-color:red; */
  /* background-color:#ffffff; */
  margin-top:130px;
  /* padding: 0 10%; */
  gap:5px;
  /* width:100vw; */
  /* background-color:red; */
  /* align-items: center; */

  /* align-items: center; */
`
const Man = styled.img`
  /* height:28vh; */
  width:100%;
`
const Griddiv = styled.div`
  display: flex;;
  flex-direction: column;
  gap:2px;
  /* background:pink; */
  width:100%;
  height:fit-content;
  align-items: left;

`
const Ron = styled.p`
  color:#000000;
  font-size:24px;
  font-weight:700;
  font-family:Poppins;
  text-align:left;
`
const Consult = styled.p`
 color:#000000;
 text-align:left;
  font-size:18px;
  font-weight:500;
  font-family:Poppins;
`
const Stardiv = styled.div`
 display:flex;
 gap:2px;

`
const Star = styled.img`
 height:fit-content;
 width:fit-content;;
 color:#000000;
 font-size:2px;
`
const Stext = styled.p`
 text-align: justify;;
 color:#000000;
 /* width:80%; */
 font-size:15px;
 /* width:60vw; */
`
const Carddiv = styled.div`
  margin-top:30px;
  background-color:#ffffff;
  /* background-color:red; */
  /* height:20px; */
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  /* box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16); */
  width:100vw;
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
const More = styled.p`
margin-top:30px;
text-align: center;
font-size:21px;
font-weight: 700;;
color:#000000;
/* background:red; */
`
const Maindiv = styled.div`
 /* background:red; */
 /* padding:0 20px; */
 
 /* background-sc */
/* overflow: hid; */
 /* height:fit-content; */
 margin-top:10px;
 width:110vw;
  /* margin-bottom: 100px; */

`
const Card = styled.div`
/* box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16); */
   /* height:150px; */
   /* height:00px; */
   margin-right:50px;
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


const Mobilmonial = () => {
  return (
    <>
  <center>
    <Maindivs>
    <Man src={man4} />
    <Griddiv>
    <Ron>RON BERNIER</Ron>
    <Consult>(Consult)</Consult>
    <Stardiv>
      <Star src={star} />
      <Star src={star} />
      <Star src={star} />
    </Stardiv>
    <Stext> Consectetur eu dignissim sit aliquam sit leo orci, odio fermentum.
    Id est at eu auctor lacus, quis iaculis sapien. Ac vel pretium
    turpis fermentum suspendisse aliquam tempus porttitor tempor.
    Ullamcorper ridiculus sodales convallis pharetra sed bibendum.
    Pretium tellus consectetur dolor tortor lacus morbi. Mattis nullam
    ridiculus nec sit dictum enim praesent. 
   </Stext>
    </Griddiv>
    </Maindivs>
    </center>
    <Carddiv>
    <Test src={test2} />
    <Test src={test3} />
    <Test src={test4} />
    <Test src={test5} />
    </Carddiv>
    <More>MORE CUSTOMER REVIEWS</More>

    <Maindiv>
    <Swiper  
    spaceBetween={80}
    slidesPerView={2}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide className="next">
    <Card>
    <Mobile src={man1 } />
    
    </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
    <Card>
    <Mobile src={man2 } />
   
    </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
    <Card>
    <Mobile src={man3 } />
    
    </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
    <Card>
    <Mobile src={man44 } />
    
    </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
    <Card>
    <Mobile src={man5 } />
   
    </Card>
    </SwiperSlide>
    <SwiperSlide className="next">
    <Card>
    <Mobile src={man1 } />
    
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card>
    <Mobile src={man2 } />
    
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card>
    <Mobile src={man3 } />
    
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card>
    <Mobile src={man44 } />
    
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card>
    <Mobile src={man5 } />
   
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card>
    <Mobile src={man1 } />
    
    </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card>
    <Mobile src={man44 } />
   
    </Card>
    </SwiperSlide>
   
  </Swiper>
  </Maindiv>

    </>
  )
}

export default Mobilmonial