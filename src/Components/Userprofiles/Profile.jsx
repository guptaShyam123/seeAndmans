import React from "react";
import styled from "styled-components";
import user from "../../assets/userprofile.svg";
import love from "../../assets/love.svg";
import setting from "../../assets/setting.svg";
import notification from "../../assets/notification.svg";
import paras from "../../assets/paras.png";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";

const Maindiv = styled.div`
  display: flex;
  gap: 2vmax;
  margin: 3% 0 0 0;
`;

const Div1 = styled.div`
  margin: 3% 2% 0 3%;
  gap: 2vmax;

  height: 21vmax;
  width: 16vmax;
  display: flex;
  flex-direction: column;

  @media (min-width: 1279px) and (max-width: 1366px) {
    height: 27vmax;
    /* background: red; */
    justify-content: center;
  }
`;
const Profiles = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  color: #000000;
`;

const Firstprofile = styled.div`
  margin: 3% 0 0 0;
  display: flex;
  gap: 1vmax;

  width: 10vmax;
  height: 2vmax;
  justify-content: space-between;
  @media (min-width: 1279px) and (max-width: 1366px) {
    height: 20vmax;
    width: 11vmax;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 20vmax;
    width: 13vmax;
  }
`;
const User = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  padding: 2% 0 0 0;
  @media (min-width: 1279px) and (max-width: 1366px) {
    margin: 1% 0 0 0;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    margin: 5% 0 0 0;
  }
`;

const Info = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #000000;
  @media (min-width: 1279px) and (max-width: 1366px) {
  }
`;
const Secondprofile = styled.div`
  margin: 3% 0 0 0;
  display: flex;
  gap: 1vmax;

  width: 10vmax;
  height: 2vmax;
  justify-content: space-between;
  @media (min-width: 1279px) and (max-width: 1366px) {
    margin: 0 0 0 3%;
  }
`;
const Love = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  padding: 2% 0 0 0;
  @media (min-width: 1279px) and (max-width: 1366px) {
    margin: 1% 0 0 0;
  }
`;
const Favorites = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #9f9f9f;
`;
const Thirdprofile = styled.div`
  margin: 3% 0 0 0;
  display: flex;
  gap: 1.7vmax;

  width: 10vmax;
  height: 2vmax;
  @media (min-width: 1279px) and (max-width: 1366px) {
    margin: 0 0 0 3%;
  }
`;
const Setting = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  padding: 2% 0 0 0;
  @media (min-width: 1279px) and (max-width: 1366px) {
    margin: 1% 0 0 0;
  }
`;
const Settings = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #9f9f9f;
`;
const Fourthprofile = styled.div`
  margin: 3% 0 0 0;
  display: flex;
  gap: 1vmax;

  width: 12vmax;
  height: 2vmax;
  justify-content: space-between;

  @media (min-width: 1279px) and (max-width: 1366px) {
    margin: 0 0 0 3%;
  }
`;
const Fourth = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  padding: 2% 0 0 0;
  @media (min-width: 1279px) and (max-width: 1366px) {
    margin: 1% 0 0 0;
  }
`;

const Notification = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #9f9f9f;
`;
const Div2 = styled.div`
  margin: 3% 0 0 3%;
`;
const Firstprofiles = styled.div`
  display: flex;

  width: 18vmax;
  justify-content: space-between;
  @media (min-width: 993px) and (max-width: 1024px) {
    width: 25vmax;
  }
  @media (min-width: 1279px) and (max-width: 1366px) {
    width: 20vmax;
  }
`;
const Paras = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  @media (min-width: 1279px) and (max-width: 1366px) {
    margin: 1% 0 0 0;
  }
`;
const Name = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #000000;
  padding: 1% 0 0 0;
`;
const Name2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #9b9b9b;
`;
const Namediv = styled.div``;
const Emaildiv = styled.div`
  margin: 10% 0 0 0;
  display: flex;

  width: 40vmax;
  justify-content: space-between;
`;
const Email = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  color: #000000;
`;
const Input = styled.input`
  height: 2vmax;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 0 0 0 2%;
  width: 16vmax;

  outline: none;
`;
const Emaildiv1 = styled.div`
  display: flex;
  margin: 8% 0 0 0;
  width: 40vmax;
  justify-content: space-between;
`;
const Emaildiv2 = styled.div`
  display: flex;
  margin: 8% 0 0 0;
  width: 40vmax;
  justify-content: space-between;
`;
const Emaildiv3 = styled.div`
  display: flex;
  margin: 8% 0 0 0;
  width: 40vmax;
  justify-content: space-between;
`;
const Emaildiv4 = styled.div`
  display: flex;
  margin: 8% 0 0 0;
  width: 40vmax;
  justify-content: space-between;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  margin: 7% 0 0 0;

  font-size: 18px;
  font-weight: 600;
  height: 2.5vmax;

  width: 10vmax;
  border: none;
  color: #ffffff;
  font-family: Poppins;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-size: 13px;
  }
  @media (min-width: 1279px) and (max-width: 1366px) {
    height: 3vmax;
  }
`;
const Profile = (props) => {
  const [email, setEmail] = React.useState("");

  const [data, setData] = React.useState({
    color: "black",
    backgroundColor: "red",
  });

  console.log(email);

  const checkcolor = () => {
    if (data.color == "blue") {
      setData({
        color: "green",
        backgroundColor: "black",
      });
    }
  };

  const users = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const clicks = () => {
    if (users) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <>
      <Maindiv>
        <Div1>
          <Profiles>User Profile</Profiles>
          <Firstprofile>
            <User onClick={clicks} src={user} />
            <Info>User Info</Info>
          </Firstprofile>
        </Div1>
        <Div2>
          <Firstprofiles>
            <Paras src={paras} />
            <Namediv>
              <Name>{users.username}</Name>
              <Name2>Salt Lake City</Name2>
            </Namediv>
          </Firstprofiles>
          <Emaildiv>
            <Email>User Id</Email>

            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter User Id"
              required
              defaultValue={users.userId}
            />
          </Emaildiv>
          <Emaildiv1>
            <Email>Email Address</Email>
            <Input
              type="text"
              placeholder="Enter Your Email Address"
              required
              defaultValue={users?.email}
            />
          </Emaildiv1>

          <Emaildiv2>
            <Email>Password</Email>
            <Input
              defaultValue={users.password}
              type="password"
              placeholder="Enter Your Password"
              required
            />
          </Emaildiv2>

          <Emaildiv3>
            <Email>Postal Code</Email>
            <Input type="text" placeholder="302020" required />
          </Emaildiv3>

          <Emaildiv4>
            <Email>Phone Number</Email>
            <Input type="text" placeholder="9988776655" required />
          </Emaildiv4>
        </Div2>
      </Maindiv>
      <center>
        <Button>Edit Details</Button>
      </center>

      <Footer />
    </>
  );
};

export default Profile;
