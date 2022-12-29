import React from 'react'
import styled from "styled-components"
import home from "../assets/homecard.png";
import { useNavigate } from "react-router-dom";
import home1 from "../assets/homecard1.png";
import home2 from "../assets/homecard2.png";
import home3 from "../assets/homecard3.png";
import home4 from "../assets/homecard4.png";
import home5 from "../assets/homecard5.png";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";


const Maindiv = styled.div`
/* background:red; */
/* padding: 0% 5%; */
margin-top:10px;
/* align-items: center; */
/* justify-content: center; */
width:106vw;
`

const Card = styled.div`
 background-color: #ffffff;
 box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  display:flex;
  gap:20px;
  margin-left: 20px;
  margin-top: 40px;;
   margin-bottom:40px;
  width:370px;
`
const Img = styled.img`
  width:150px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`
const P = styled.p`
font-family: "Poppins";
font-weight:600;
font-size:15px;

`
const Innerdiv = styled.div`
  display:flex;
  /* background:pink; */
  width:190px;
  /* background: #ffffff; */
  flex-direction: column;
  gap:5px;
  /* align-items:center; */
  text-align:left;
  justify-content:space-evenly;
`

const Explore = styled.p`
 font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  color: #0085ff;
  font-size:15px;
  text-decoration: underline;
`
const Thing = styled.p`

color:#145843;
   font-weight: 700;
   font-size: 25px;
   margin-top:30px;
   text-align:center;
   
`
const Thingsdowhile = () => {

    const navigate = useNavigate();

  const click = () => {
    navigate("/blogs");
  };

     const [data , setdata] = React.useState([
        {
            id:1,
            img :home,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
        {
            id:2,
            img :home1,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
        {
            id:3,
            img :home2,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
        {
            id:4,
            img :home3,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
        {
            id:5,
            img :home4,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
        {
            id:6,
            img :home4,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
        {
            id:7,
            img :home4,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
        {
            id:8,
            img :home4,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
        {
            id:9,
            img :home4,
            text: "5 Trails to go Trekking in Andaman in 2022",
        },
     ])
  return (
    <>
    <Thing>THINGS DO TO WHILE YOU ARE HERE</Thing>
    <Maindiv>
    <Swiper  
    spaceBetween={80}
    slidesPerView={1}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
       {
        data.map((i)=>{
            return (
                <>
                <SwiperSlide className="next">
                 <Card    onClick={click}>
                   <Img src={i.img} />
                   <Innerdiv>
                   <P>{i.text}</P>
                   <hr style={{height:"0.0px" , border:"0.1px solid black"}}></hr>
                   <Explore>Explore</Explore>
                   </Innerdiv>
                 
                 </Card>
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

export default Thingsdowhile