import React from "react";
import styled from "styled-components";
import logo1 from "../assets/logo1.png";
import imgs from '../assets/w5.webp' 


const Navbardiv = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
  /* padding: 2px 0; */
  height: 22px;
  padding: 2% 2%;
  justify-content:space-around;
`;
const Firstdiv = styled.div`
  /* background:blue; */
  /* height:fit-content; */
`;
const Seconddiv = styled.div`
  /* background-color: pink; */
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Thirdiv = styled.div`
/* background: blue; */
align-items:center;
display:flex;
gap:10px;
`;
const Image = styled.img`
  height: 30px;
  /* margin:0;
  padding:0; */
  margin-top:2px;

  /* width:25px; */
`;
const Home = styled.p`
  font-size: 10px;
  color: black;
  font-weight: 600;
`;
const Login = styled.button`
     color:white;
     font-weight: 600;;
     font-size:12px;
         width:45px;
     /* padding:1px 1px; */
     background:green;
     border-radius: 20px;

`
const Signup = styled.button`
 color:white;
     font-weight: 600;;
     font-size:12px;
     /* padding:3px 3px; */
     background:green;
     border-radius: 20px;
     width:45px;

`
const Nextdiv = styled.div`
 margin-top:3px;
 /* background:green; */
 /* text-align:center; */
    justify-content:space-around;
    align-items: center;
    display:flex;
    /* flex-direction:column; */
  /* height:fit-content; */
    gap:1px;
  /* background-color:red; */
  padding: 2% 2%;

`
const Hotel = styled.img`
 /* height:70px; */
 width:100px;
 object-fit:cover;
`
const White = styled.div`
 background-color:green;
 /* width:90px; */
 width:98px;
 height:20px;
 margin:0;
 padding:0;
 display:flex;
 align-items:center;
 justify-content:space-around;
 padding:0 1%;
 gap:2px;

`
const Para = styled.p`
  font-size:7px;
  font-weight:600;
  
  color:black;


`
const Carddiv = styled.div`
/* background-color:gray; */
display:flex;
flex-direction:column;
background-color:pink;
width:fit-content;

/* justify-content:space-around; */
`
const mobile = () => {
  return (
    <>
    
  
      <Nextdiv>
      <Carddiv>
        <Hotel src={imgs} />
        <White>
        <Para>Hotels</Para>
        <Para>Home</Para>
        <Para>Home</Para>
        <Para>Home</Para> 
        </White>
        </Carddiv>
        
      </Nextdiv>
    </>
  );
};

export default mobile;
