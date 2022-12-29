import React from "react";
import styled from "styled-components";
import login from "../../assets/login.png";
import seaandman from "../../assets/seaandman.png";
import lock from "../../assets/Lock.png";
import User from "../../assets/User.png";
import img from "../../assets/12.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import {baseURL} from "../Apibaseurl"
const Maindiv = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
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
    height: 57.9vmax;
  }
`;
const Grid = styled.div`
  display: grid;
  padding-left: 10vmax;
  justify-content: center;
  align-items: center;
  padding-left: 20vmax;
  margin-top: -4vmax;
  height: 50vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    height: 50vmax;
  }
`;
const Logo = styled.img`
  height: 10vmax;
  width: 10vmax;
  padding-top: 7vmax;
  padding-left: 7vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 120px;
    width: 120px;
    margin-left: -50px;
    margin-top: -60px;
  }
`;
const Button = styled.div`
  display: flex;
  padding-top: -4vmax;
  margin-left: 2.4vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 70px;
    margin-left: -66px;
  }
`;
const Fbut = styled.button`
  background-color: white;
  color: #145843;

  font-size: 1.3vmax;
  height: 2.7vmax;
  width: 10vmax;
  border: 4px solid #145843;
  border-radius: 40px;
  font-weight: 500;
  font-family: Poppins;
  margin-left: 1vmax;
  position: absolute;
  margin-top: -5vmax;
  cursor: pointer;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 35px;
    width: 130px;
    font-size: 17px;
    font-weight: 700;
  }
`;
const Sbut = styled.button`
  height: 2.7vmax;
  width: 10vmax;
  font-size: 1.3vmax;
  color: white;
  border: 4px solid #145843;
  border-radius: 40px;
  font-weight: 500;
  font-family: Poppins;
  margin-left: 9vmax;
  background-color: #145843;
  margin-top: -5vmax;
  cursor: pointer;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 35px;
    width: 130px;
    font-size: 17px;
    font-weight: 700;
    margin-left: 110px;
  }
`;
const Input = styled.div`
  display: flex;
  margin-top: -5vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 100px;
    margin-left: -60px;
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
    height: 50px;
    width: 210px;
    border-radius: 40px;
    font-size: 20px;
  }
`;
const Icon = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  position: absolute;
  padding-left: 2vmax;
  padding-top: 0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 40px;
    width: 30px;
  }
`;
const Secindput = styled.div`
  display: flex;
  margin-top: -7vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    padding-top: 100px;
  }
`;
const Icon2 = styled.img`
  height: 1.8vmax;
  width: 1.8vmax;
  position: absolute;
  padding-left: 2vmax;
  padding-top: 0.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
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
    height: 50px;
    width: 210px;
    border-radius: 40px;
    font-size: 20px;
  }
`;
const Radios = styled.input`
  font-size: 1.7vmax;
  @media (min-width: 335px) and (max-width: 421px) {
  }
`;
const Labels = styled.label`
  color: rgba(102, 102, 102, 1);
  font-size: 1.1vmax;
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
  }
`;
const Flex = styled.div`
  display: flex;
  padding-top: 5vmax;

  @media (min-width: 335px) and (max-width: 421px) {
  }
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
  margin-top: 1vmax;
  margin-left: 8vmax;
  font-weight: 700;
  letter-spacing: 0.1vmax;
  cursor: pointer;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-top: 100px;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    margin-top: 1vmax;
  }
`;
const Image = styled.img`
  display: none;
  @media (min-width: 335px) and (max-width: 421px) {
    display: block;

    width: 100%;
  }
`;
const Logins = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const click = () => {};
  const postdatas = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
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
      <Image src={img} />
      <Maindiv className="main">
        <Img src={login} />
        <Grid>
          <Logo src={seaandman} />
          <Button className="buttons">
            <Link to="">
              {" "}
              <Fbut>Login</Fbut>
            </Link>
            <Link to="/signup">
              {" "}
              <Sbut style={{ position: "absolute" }}>Sign up</Sbut>
            </Link>
          </Button>

          <form onSubmit={postdatas} className="form-div">
            <Input>
              <Icon className="icons" src={lock} />

              <Input2
                {...register("email", {
                  required: true,
                })}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                value={password}
              />
            </Input>
            <Secindput>
              <Icon2 className="icons" src={User} />
              <Input1
                {...register("password", {
                  required: true,
                })}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Email"
                value={email}
              />
            </Secindput>

            <Flex>
               
              <Link style={{textDecoration:"none"}} to="/Forgotpass">
                {" "}
                <Labels
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                   
                  }}
                >
                  Forgot Password?
                </Labels>
              </Link>
            </Flex>
            <Buttton type="submit">Login</Buttton>
          </form>
        </Grid>
      </Maindiv>
    </>
  );
};

export default Logins;
