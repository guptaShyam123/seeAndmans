import React from 'react'
import {hotel} from './hotel'
import styled from 'styled-components'
import slide3 from '../../../assets/slide3.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './hotel.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Test from '../../../Components/Test'
import {useNavigate} from 'react-router-dom'

const Maindiv = styled.div`

padding-top:4vmax;
filter:saturate();
transform: .5s;;
`
const Img = styled.img`
    aspect-ratio: 3;
      height:15vmax;
      width:18vmax;
object-fit: cover;
`
const Innerdiv = styled.div`
background: #FFFFFF;
box-shadow: 7px 8px 16px rgba(0, 0, 0, 0.21);
height:12vmax;
width:18vmax;
margin-top:-10px;


`
const P1 = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 1.2vmax;
color: #000000;
padding-left:0.5vmax;
padding-top:1vmax;
`
const P2 = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 400;
font-size: 1.1vmax;
color: #000000;
padding-left:0.5vmax;
padding-top:0.4vmax
`

const Book = styled.p`
    font-family: Poppins;
    font-size:1vmax;
    padding-left:14vmax;
    color:#145843;
    font-weight:bolder;
    padding-top:0.7vmax;
    font-weight:bold;

`
const Bigdiv = styled.div`
@media (min-width:1024px) and (max-width:1279px){
  width:103%;
  
}
`

const settings = {
  
  
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    centerMode: true,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
  
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
const Hotels = () => {

  const navigate = useNavigate()
  const click = ()=>{
          navigate("/hotels")
  }
  return (
    <>
  <Bigdiv>
  
  <Slider style={{width:'100%'   }} {...settings}>
       
     {
        hotel.map((i)=>{
            return(
                <>
                <Maindiv  >
                <Img src={i.img} />
                <Innerdiv>
                 <P1>{i.text}</P1>
                 <P2>{i.text1}</P2>
                 <Book onClick={click}>BOOK</Book>
                </Innerdiv>
                </Maindiv>
                </>
            )
        })
     }
     </Slider>
  </Bigdiv>
    </>
  )
}

export default Hotels