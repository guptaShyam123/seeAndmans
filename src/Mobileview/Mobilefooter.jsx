import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/logo44.png";
import styled from "styled-components";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AiOutlinePlus} from  "react-icons/ai"



const Maindiv = styled.div`
  margin-top: 40px;
  /* z-index:-1; */
  /* padding-left: 4%; ; */
  /* display:flex;
  flex-direction: column; */
  gap:4px;
  background:lightgray;
  /* margin-bottom:10px; */
  /* background-color: gray; */
  /* margin-right:20px; */
  /* margin-left:20px; */
  padding-right:10px;
  padding-top: 10px;;
`;
const Img = styled.img`
  height: 100px;
  margin-left:10px;
`;

const Text = styled.p`
    font-size:13px;
    color:black;
    font-family:Poppins;
    font-weight:500;
    padding-left:2%;

`
const Build = styled.p`
font-size:13px;
    color:black;
    font-family:Poppins;
    font-weight:500;
    padding-left:2%;
    padding-top:2%;
`
const Accor = styled.div`
 margin-top:3%;
 display:flex;
 flex-direction:column;
 gap:6px;
 

`
export const Mobilefooter = () => {
const navigate = useNavigate()


  const click1 = ()=>{
  navigate("/")
  }
  const click2 = ()=>{
    navigate("/aboutus")
  }
  const click3 = ()=>{
    navigate("/testimonial")
  }
  const click4 = ()=>{
    navigate("/blogs")
  }
  const click5 = ()=>{
  navigate("/wedding")
  }
  return (
    <>
      <Maindiv>
        <Img src={logo1} />
        <Text>
          We're a small crew of locals and Andman-lovers helping you make the
          most of your trip to the Andamans
        </Text>
        <Build>You can build your holiday from the ground-up</Build>
        <Accor sx={{background:"none"}}>
      <Accordion sx={{background:"none" , border:"none" , boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<AiOutlinePlus  sx={{color:"black" ,height:"30px"}}/>}
         
          id="panel1a-header"
          sx={{backgroundColor:"none" , border:"none"}}
        >
          <Typography sx={{background:"none" , border:"none" , color:"black" , fontWeight:"700" , fontFamily:"Poppins"}}>SEEANDAMANS.COM</Typography>
        </AccordionSummary>
      
   
        
        <AccordionDetails sx={{color:"gray" , fontWeight:"700" }}>
          <Typography onclick={click1} sx={{fontSize:"20px" , fontWeight:"600"}}>
           Home
          </Typography>
          <Typography onClick={click2} sx={{fontSize:"20px" , fontWeight:"600"}}>
          About us
         </Typography>
         <Typography  onClick={click3} sx={{fontSize:"20px" , fontWeight:"600"}}>
         Testimonails
        </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{background:"none" , border:"none" , boxShadow:"none"}}>
        <AccordionSummary
          expandIcon={<AiOutlinePlus  sx={{color:"gray" ,height:"30px"}}/>}
         
          id="panel1a-header"
          sx={{backgroundColor:"none" , border:"none"}}
        >
          <Typography sx={{background:"none" , border:"none" , color:"black" , fontWeight:"700" , fontFamily:"Poppins"}}>FOR TRAVELLERS</Typography>
        </AccordionSummary>
       
   
      
        <AccordionDetails  sx={{color:"gray" , fontWeight:"700" }}>
        <Typography onClick={click4} sx={{fontSize:"20px" , fontWeight:"600"}}>
           Blog
          </Typography>
          <Typography onClick={click5} sx={{fontSize:"20px" , fontWeight:"600"}}>
          Wedding
         </Typography>
         <Typography sx={{fontSize:"20px" , fontWeight:"600"}}>
          Privacy Policy
         </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion sx={{background:"none" , border:"none" , boxShadow:"none"}}>
      <AccordionSummary
        expandIcon={<AiOutlinePlus  sx={{color:"black" ,height:"30px"}}/>}
       
        id="panel1a-header"
        sx={{backgroundColor:"none" , border:"none"}}
      >
        <Typography sx={{background:"none" , border:"none" , color:"black" , fontWeight:"700" , fontFamily:"Poppins"}}>Contact Us</Typography>
      </AccordionSummary>
     
 
    
      <AccordionDetails  sx={{color:"gray" , fontWeight:"700" }}>
      <Typography sx={{fontSize:"20px" , fontWeight:"600"}}>
         Contact SeeAndamans
        </Typography>
        <Typography sx={{fontSize:"20px" , fontWeight:"700" , color:"black"}}>
        Address
       </Typography>
       <Typography sx={{fontSize:"20px" , fontWeight:"600"}}>
       7716 Kerluke Burgs, 1856 Tilman Parkway
       </Typography>
      </AccordionDetails>
    </Accordion>
    
    <Accordion sx={{background:"none" , border:"none" , boxShadow:"none"}}>
    <AccordionSummary
      expandIcon={<AiOutlinePlus  sx={{color:"black" ,height:"30px"}}/>}
     
      id="panel1a-header"
      sx={{backgroundColor:"none" , border:"none"}}
    >
      <Typography sx={{background:"none" , border:"none" , color:"black" , fontWeight:"700" , fontFamily:"Poppins"}}>CopyRight</Typography>
    </AccordionSummary>
   

  
    <AccordionDetails  sx={{color:"gray" , fontWeight:"700" }}>
    <Typography sx={{fontSize:"20px" , fontWeight:"600"}}>
    ANDAMAN TOURISM AND HOSPITALITIES Pvt. Ltd. CIN No: U63000AN2022PTC005623
      </Typography>
   
    </AccordionDetails>
  </Accordion>
    </Accor>
        </Maindiv>
    </>
  );
};

export default Mobilefooter;
