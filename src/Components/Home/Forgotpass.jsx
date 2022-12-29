import React from "react";
import slide5 from "../../assets/group.svg";
import styled from "styled-components";
import mail from "../../assets/Mail.png";

const Maindiv = styled.div`
  background: url(${slide5});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  justify-content: center;
  align-items: center;
  height: 48.5vmax;
  display: flex;
  position: fixed;

  @media (min-width: 335px) and (max-width: 421px) {
    height: 810px;
    width: 100%;
    overflow: hidden;
  }
`;
const Innerdiv = styled.div`
  height: 19vmax;
  width: 30vmax;
  background: #ffffff;
  box-shadow: 10px 10px 34px rgba(0, 85, 159, 0.25);
  border-radius: 15px;
  position: absolute;
  margin:0 auto;
  padding-top: 2.5vmax;
  justify-content:center;
  align-items: center;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 270px;
    width: 400px;
    margin-top: 30px;
  }
`;
const Password = styled.p`
  font-size: 1.3em;
  font-family: Poppins;
  font-weight: 700;
  padding-top: 1.2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 21px;
    font-family: Poppins;
    padding-top: 1px;
  }
`;
const Stext = styled.p`
  font-size: 0.7vmax;
  padding-top: 0.5em;
  font-family: Poppins;
  font-weight: 500;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 12px;
  }
`;
const Inner1div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2em;
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 30px;
  }
`;
const Icon = styled.img`
  margin-left: -20vmax;
  position: absolute;
  height: 1.9vmax;
  width: 2vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    position: absolute;
    height: 20px;
    width: 20px;
    margin-left: -220px;
  }
`;
const Input = styled.input`
  ::placeholder {
    color: #7a7a7a;
    font-weight: bold;
  }
  padding-left: 6vmax;
  font-size: 0.8vmax;
  font-family: Poppins;
  font-weight: 400;
  height: 2.5vmax;
  width: 18vmax;
  border-radius: 10px;
  border: 1px solid #9d9d9d;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 45px;
    width: 200px;
    font-size: 17px;
    padding-left: 60px;
  }
`;
const Button = styled.button`
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  height: 2.5vmax;
  width: 13vmax;
  font-size: 1.3vmax;
  color: #ffffff;
  border: none;
  margin-top: 2vmax;
  font-family: Poppins;
font-weight: 600;
cursor: pointer;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 45px;
    width: 180px;
    font-size: 18px;
    margin-top: 20px;
    font-family: Poppins;
  }
`;
const Forgotpass = () => {
  return (
    <>
      <center>
        <Maindiv>
          <Innerdiv>
            <Password>Forgot Your Password</Password>
            <Stext>
              No Worries! Enter your email and we will send you a reset link
            </Stext>
            <Inner1div>
              <Icon src={mail} />
              <Input placeholder="Enter your Email Id" />
            </Inner1div>
            <Button>Send Request</Button>
          </Innerdiv>
        </Maindiv>
      </center>
    </>
  );
};

export default Forgotpass;
