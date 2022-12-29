import React from 'react'
import go from '../../assets/letsgo.png'
import styled from 'styled-components'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { MdArrowDropDown } from "react-icons/md";
import './Dropdown.css'
import Hotels1 from './Hotels1'
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import Footer from '../Home/Footer'
import BannerInput from '../cab/BannerInput';

const Image = styled.div`
width: 100%;  

 @media (min-width:335px) and (max-width:421px){
    width: 140%;
       

 }
`
const Img = styled.img`
   width: 100%;
   height: 37vmax;
   
 @media (min-width:335px) and (max-width:421px){
    width: 140%;
    

 }
`
const DestinationWrapper = styled.div`
  width: 100%;
  background-color: #145843;
  display: flex;
  justify-content:space-around;
  height: 6.5vmax;
  
  
  @media (min-width:335px) and (max-width:421px){
    width: 140vw;
    display: grid;
    height: 90vh;
  }
 
`;

const GreenWrapper = styled.div`
  position: absolute;
  margin-top: -2vmax;
  width: 100%;
`;

// different sections->
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 5vmax;
  margin-top: 1vmax;
  margin-left: 5vmax;
  margin-right: 5vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 15vh;
    gap: 30px;
    text-align: center;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 15vh;
    gap: 30px;
    text-align: center;
    margin-top: 6vh;
  }
`;
const FormText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: normal;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1.3rem;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 2rem;
  }
`;

const FormContent = styled.div`
  background: rgba(13, 162, 116, 0.8);
  width: 14vmax;
  height: 2vmax;
  color: white;
  border-radius: 5px;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 90vw;
    height: 20vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 90vw;
    height: 20vh;
  }
`;
const FormContentText = styled.p`
  margin-left: 12px;
  margin-top: 5px;
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1.5rem;
    margin-left: -3px;
    margin-top: 6px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 2rem;
    margin-left: -3px;
    margin-top: 15px;
  }
`;
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const From = styled.p`
 color: white;
 font-size: 1.2rem;
  font-weight: normal;
     margin-top:1vmax;

`
const Select1 = styled.div`
  
  width:16vmax;
   display:grid;


`
const Select3 = styled.div`
  
  width:16vmax;
   display:grid;

`

const DatePickers = styled(DatePicker)`
 
 ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 1);
    
  }
 font-family: Poppins;
   background-color:rgba(47, 191, 140, 1);
  color: rgba(255, 255, 255, 1);
    
 margin-top:0.2vmax;
   font-size:1vmax;
  
   height:2.4vmax;
   border-radius: 5px;
font-style: normal;
font-weight: 400;
border:none;
outline:none;
width:14vmax;
padding-left:2vmax;
@media(min-width:335px) and (max-width:421px){
  width:14vmax;
  height:4vmax;
  padding-left:5vmax;
  font-size:2vmax;
}
`
const Section2 = styled.div`
 display:grid; 
`
const DatePickers1 = styled(DatePicker)`
 
 ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 1);
    
  }
 font-family: Poppins;
   background-color:rgba(47, 191, 140, 1);
  color: rgba(255, 255, 255, 1);
    
 margin-top:0.2vmax;
   font-size:1vmax;
  
   height:2.4vmax;
   border-radius: 5px;
font-style: normal;
font-weight: 400;
border:none;
outline:none;
width:14vmax;
padding-left:2vmax;
@media(min-width:335px) and (max-width:421px){
  width:14vmax;
  height:4vmax;
  padding-left:5vmax;
  font-size:2vmax;
}
`
const Section3 = styled.div`
 display:grid; 
`
const Flexdiv = styled.div`
   display:flex;
   margin-top:8vmax;
   margin-left:80vmax;
    gap:1vmax;
    @media (min-width:335px) and (max-width:421px){
    margin-left:370px;
    }

`
const Inputdiv = styled.div`
 display:flex;
 gap:1vmax;

`
const Input1 = styled.input`
  
`
const Packages = styled.p`
 color:#000000;
 font-size:1.5vmax;
 font-weight:700;
 font-family:700;
 font-family:Poppins;   
`
const Hotelsmain = styled.p`
text-align:center;
margin-top:3vmax;
font-family:Poppins;
font-size:2vmax;
font-weight:600;
color:#145843;
@media (min-width:335px) and (max-width:421px){
 text-align:center;
 margin-left:120px;
 font-size:17px;
}
`
const Upper = () => {

 const[select,setSelect] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  
  const customStyles = {
    menu: (base) => ({
      ...base,
      background: "#023950",
      background:'rgba(13, 170, 119)',
    
           
           
     
    }),
    
  }
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
   
    <Img src={go} />
     <BannerInput />
  
   
 <Hotelsmain>Hotels</Hotelsmain>
 <Hotels1 />
 <Footer />
    </>
  )
}

export default Upper