import React from "react";
import styled from "styled-components";
import { ImUser } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";


import Checkbox from "@mui/material/Checkbox";
 import logo1 from "../../assets/logo1.png"
 import mobile from "../../assets/mobilelogin.jpeg"
 import { useNavigate } from "react-router-dom";
 import {baseURL} from "../../Components/Apibaseurl"
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  /* background:red; */
`;

const Input1 = styled.input`
  /* width: 250px; */
  height: 50px;
  width:80%;
  /* text-align: right; */
  border:none;
  border-radius: 20px;
  outline: none;
  
  /* position: relative; */
  /* position: absolute; */
  /* border-radius: 20px; */
  font-size: 20px;
  text-align: left;
  /* background:blue; */
 
  ::-webkit-input-placeholder {
    color: black;
    text-align:left;
    /* padding-right:40px; */
    /* padding-left:-50px; */
  }
  /* text-align: center; */
  /* border: 1px solid #145843; */
  /* padding-left:40px; */
  /* position: absolute;; */
`;
const IconInputWrapper = styled.div`
  display: flex;
  justify-content:space-around;
  padding: 0 3% 0 0;
  /* background:pink; */
  align-items: center;
  /* background:blue; */
  border-radius: 20px;
    /* gap:20px; */
  border:1px solid black;
  width: 270px;
;
  
`;
const Icon = styled(ImUser)`
  position: absolute;
  margin-left: 12px;
  /* margin-top: 9px; */
  width: 30px;
  height: 36px;
`;
const Icon2 = styled(FaLock)`
   margin-left: 12px;
  /* color:red; */
  /* background:red; */
  /* border:1px solid red; */
  
  /* margin-top: 10px; */
  width: 30px;
  height: 28px;
`;

const Icon3 = styled(FaPhoneAlt)`
  position: absolute;
  margin-left: 12px;
  /* margin-top: 10px; */
  width: 30px;
  height: 24px;
`;

const Icon4 = styled(MdEmail)`
  /* position: absolute; */
  margin-left: 12px;
  /* color:red; */
  /* background:red; */
  /* border:1px solid red; */
  
  /* margin-top: 10px; */
  width: 30px;
  height: 28px;
`;

const Button = styled.button`
  height: 50px;
  /* width: 100%; */
  width:150px;
  color:white;
  font-weight:700;
  font-size:20px;
  border-radius: 35px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
`;
const ButtonWrapper = styled.div`
  display: flex;
  /* width: 290px; */
  /* height: 60px; */
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  width:fit-content;
  /* margin-left: 20px; */
  /* margin-top: 20px; */
  background:red;
`;

const LoginButton = styled.button`
  width: 145px;
  height: 40px;
  border-radius: 40px;
  position: relative;
  margin-right: -30px;
  background-color: white;
  color: #145843;
  font-size:18px;
  color:white;

  font-weight:700;
  background-color: #145843;
  border: 2px solid #145843; ;
`;
const SignupButton = styled.button`
  width: 145px;
  height: 40px;
  color: white;
  font-size:18px;
  font-weight:700;
  border-radius: 40px;
    color:black;
`;
const CheckBoxWrapper = styled.div`
  display: flex;
`;
const PasswordText = styled.p`
  margin-top: 12px;
`;
const Logo = styled.img`
  /* height: 110px;
  width: 110px; */
  margin-top:20px;
  /* height:20vh; */

`;

const LoginHeader = styled.img`
    background : url(${mobile});
    height:40vh;
    width:100vw;
    background-position:center;
`;

const Mobilelogin = () => {

 

 

  const navigate= useNavigate()

  const click = ()=>{
    navigate("/signup")
  }

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try {
      const  {data}  = await axios.post(
        `${baseURL}/api/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.user) {
        navigate("/");
      }
      console.log(data);
       localStorage.setItem("user", JSON.stringify(data.user));
    } catch (error) {
      //  alert(error.message)
      if (error.response.data.error) {
        alert(error.response.data.error);
      } else {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <>
      <LoginHeader />
      <center>
        <Logo src={logo1} />
      </center>
      <center>
        <ButtonWrapper className="btn-wrapper">
          <LoginButton>Login</LoginButton>
          <SignupButton onClick={click}>Signup</SignupButton>
        </ButtonWrapper>
      </center>

      <form onSubmit={handleSubmit} >
      <FormWrapper  className="form-wrapper">
       
       
        <IconInputWrapper>
          <Icon4 className="icon" />
          
            <Input1
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
            className="myinput"
            placeholder="Email"
           required

          />
        
        </IconInputWrapper>
        <IconInputWrapper>
          <Icon2 />
          <Input1
          onChange={(e) => setPassword(e.target.value)}
          type="password"
            className="myinput"
            placeholder="Password"
           
            required
          />
          
        </IconInputWrapper>
        <Button type="submit">Login</Button>
       
      </FormWrapper>
      </form>
    </>
  );
};

export default Mobilelogin;