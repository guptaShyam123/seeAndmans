import React from "react";
import styled from "styled-components";
import login from "../../assets/login.png";
import seaandman from "../../assets/seaandman.png";
import lock from "../../assets/Lock.png";
import User from "../../assets/User.png";
import phones from "../../assets/Phone.png";
import mail from "../../assets/Mail.png";
import img from "../../assets/12.png";
import "./Input.css";

import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {baseURL} from "../Apibaseurl"

const Maindiv = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  @media (min-width: 335px) and (max-width: 421px) {
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    position: fixed;
  }
`;
const Img = styled.img`
  object-fit: fill;
  padding-left: 3vmax;
  margin-left: -3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    height: auto;
  }
  @media (min-width: 1281px) and (max-width: 1367px) {
    height: 57.8vmax;
    object-fit: fill;
  }
`;
const Grid = styled.div`
  display: inline-block;

  padding-left: 20vmax;
  text-align: center;
  /* padding-left:10vmax; */
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  height: 10vmax;
  width: 10vmax;
  padding-top: 3vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 4vmax;
    height: 14vmax;
    width: 13vmax;
    padding-left: 12.2vmax;
  }
`;
const Button = styled.div`
  display: flex;
  margin-top: 4vmax;
  align-items: center;
  justify-content: center;
  /* padding-left:7vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 15vmax;
  }
`;
const Fbut = styled.button`
  color: white;
  font-size: 1.3vmax;
  height: 2.7vmax;
  width: 10vmax;
  border: 4px solid #145843;
  border-radius: 40px;
  font-weight: 500;
  font-family: Poppins;
  margin-right: 8vmax;
  position: absolute;
  color: white;
  background-color: #145843;
  cursor: pointer;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-top: -10vmax;
    height: 4vmax;
    width: 13vmax;
    font-size: 1.6vmax;
    font-weight: 700;
  }
`;
const Sbut = styled.button`
  cursor: pointer;
  height: 2.7vmax;
  width: 10vmax;
  font-size: 1.3vmax;

  border: 4px solid #145843;
  border-radius: 40px;
  font-weight: 500;
  font-family: Poppins;
  margin-left: 8vmax;
  color: #145843;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-top: -10vmax;
    height: 4vmax;
    width: 13vmax;
    margin-left: 11vmax;
    font-size: 1.6vmax;
    font-weight: 700;
  }
`;
const Input = styled.div`
  display: flex;
  margin-top: 3vmax;
  /* padding-left:5vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: -5vmax;
  }
`;
const Input1 = styled.input`
  width: 19vmax;
  height: 2.5vmax;
  border: 1px solid #145843;
  color: rgba(102, 102, 102, 1);
  font-size: 1.1vmax;
  border-radius: 40px;
  padding-left: 5.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 35vmax;
    height: 5vmax;
    font-size: 2.5vmax;
    padding-left: 7vmax;
  }
`;
const Icon = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  position: absolute;
  padding-left: 1vmax;
  padding-top: 0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Secindput = styled.div`
  display: flex;
  margin-top: 1vmax;
  /* padding-left:5vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 12vmax;
    margin-left: -5vmax;
  }
`;
const Icon2 = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  position: absolute;
  padding-left: 1vmax;
  padding-top: 0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Input2 = styled.input`
  width: 19vmax;
  height: 2.5vmax;
  border: 1px solid #145843;
  color: rgba(102, 102, 102, 1);
  font-size: 1.1vmax;
  border-radius: 40px;
  padding-left: 5.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 35vmax;
    height: 5vmax;
    font-size: 2.5vmax;
    padding-left: 7vmax;
  }
`;
const Radios = styled.input`
  font-size: 1.7vmax;
`;
const Labels = styled.label`
  color: rgba(102, 102, 102, 1);
  font-size: 1.1vmax;
  font-family: Poppins;
`;
const Flex = styled.div`
  display: flex;
  margin-top: -13vmax;
  padding-left: 5.5vmax;
`;
const Buttton = styled.button`
  height: 2.9vmax;
  width: 10vmax;
  color: #ffffff;
  font-size: 1.1vmax;
  font-family: Poppins;
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  border: none;
  margin-top: 2vmax;
  cursor: pointer;
  /* margin-left:13vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    margin-top: 6vmax;
    height: 6vmax;
    width: 27vmax;
    font-size: 2vmax;
    font-weight: 700;
    margin-left: 5vmax;
    margin-top: 3vmax;
  }
`;
const InputF = styled.div`
  display: flex;
  margin-top: 1vmax;
  /* padding-left:5vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 8vmax;
    margin-left: -5vmax;
  }
`;
const IconF = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  position: absolute;
  padding-left: 1vmax;
  padding-top: 0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const Input1F = styled.input`
  width: 19vmax;
  height: 2.5vmax;
  border: 1px solid #145843;
  color: rgba(102, 102, 102, 1);
  font-size: 1.1vmax;
  border-radius: 40px;
  padding-left: 5.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 35vmax;
    height: 5vmax;
    font-size: 2.5vmax;
    padding-left: 7vmax;
  }
`;
const InputF1 = styled.div`
  display: flex;
  margin-top: 1vmax;
  /* padding-left:5vmax; */
  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 10vmax;
    margin-left: -5vmax;
  }
`;
const IconF1 = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  position: absolute;
  padding-left: 1vmax;
  padding-top: 0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 4vmax;
    width: 4vmax;
  }
`;
const InputF2 = styled.input`
  width: 19vmax;
  height: 2.5vmax;
  border: 1px solid #145843;
  color: rgba(102, 102, 102, 1);
  font-size: 1.1vmax;
  border-radius: 40px;
  padding-left: 5.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 35vmax;
    height: 5vmax;
    font-size: 2.5vmax;
    padding-left: 7vmax;
  }
`;
const Imgs = styled.img`
  display: none;
  @media (min-width: 335px) and (max-width: 421px) {
    display: block;
    width: 130%;
    height: 22vmax;
  }
`;
const Largediv = styled.div`
  @media (min-width: 335px) and (max-width: 421px) {
  }
`;
const Signin = () => {
  const [userName, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const postdatas = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
      `${baseURL}/api/user/signup`,
        {
          userName,
          phone,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      if (data.user) {
        navigate("/login");
      }
    } catch (error) {
      alert(error.message);
    }

    e.preventDefault();
  };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { isSubmitting, errors },
  // } = useForm();

  return (
    <>
      <Largediv>
        <Imgs src={img} />
        <Maindiv className="maindiv">
          <Img src={login} />
          <Grid>
            <Logo src={seaandman} />
            <Button>
              <Link to="/login">
                <Fbut style={{ position: "absolute", marginTop: "-1.3vmax" }}>
                  Login
                </Fbut>
              </Link>
              <Link to="/signup">
                <Sbut>Sign up</Sbut>
              </Link>
            </Button>
            <form onSubmit={postdatas}>
              <Input>
                <Icon src={User} />
                <Input1
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"
                  required
                />
              </Input>
              <InputF>
                <IconF src={phones} />
                <Input1F
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  required
                />
              </InputF>
              <InputF1>
                <IconF1 src={mail} />
                <InputF2
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  required
                />
              </InputF1>
              <Secindput>
                <Icon2 src={lock} />
                <Input2
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Secindput>

              <Buttton type="submit">Sign Up</Buttton>
            </form>
          </Grid>
        </Maindiv>
      </Largediv>
    </>
  );
};

export default Signin;
