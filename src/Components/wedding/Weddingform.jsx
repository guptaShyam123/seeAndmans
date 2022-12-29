import React from "react";
import styled from "styled-components";
import profile from "../../assets/profile.png";
import Select from "react-select";
import Footer from "../Home/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import {baseURL} from "../../Components/Apibaseurl"

const students = [
  { value: "Alex", label: "Alex" },
  { value: "Deven", label: "Deven" },
  { value: "Vinicious", label: "Vinicious" },
];

const Profiles = styled.img`
  width: 100%;
  background-size: cover;
  object-fit: cover;
  height: 20vmax;
`;
const Maindiv = styled.div`
  margin: 3% 2% 0 2%;
  width: 96%;
  margin: -9.2% 2% 0 2%;
  position: relative; ;
`;
const Bluediv = styled.div`
  background: #056c73;
  height: 9vmax;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const Romantic = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  padding: 3% 2% 0 2%;
  color: #ffffff;
`;
const Whitediv = styled.div`
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  height: 69vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 96vmax;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    height: 82vmax;
  }

  @media (min-width: 1290px) and (max-width: 1366px) {
    height: 79vmax;
  }

  @media (min-width: 1641px) and (max-width: 1740px) {
    height: 67vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 63vmax;
  }
`;
const Lorem = styled.p`
  padding: 2% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  text-align: justify;
  @media (min-width: 1280px) and (max-width: 1366px) {
    font-size: 16px;
    text-align: justify;
  }
  @media (min-width: 1367px) and (max-width: 1440px) {
    font-size: 16px;
    text-align: justify;
  }
  @media (min-width: 1640px) and (max-width: 1740px) {
    font-size: 17px;
    text-align: justify;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    font-size: 17px;
    text-align: justify;
  }
`;
const Information = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  color: #000000;
  padding: 2% 2% 0 2%;
  @media (min-width: 993px) and (max-width: 1024px) {
    font-weight: 600;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    font-weight: 600;
  }
`;
const Hr = styled.hr`
  height: 0.1px;
  background: #000000;
  margin: 2% 2% 0 3%;
  width: auto;
`;
const Groomdiv = styled.div`
  margin: 2% 3% 0 3%;
  display: flex;
  gap: 20vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    gap: 21vmax;
  }
`;
const Groom = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: #000000;
`;
const Selects = styled(Select)`
  width: 30vmax;
  color: #808080;
  font-family: Poppins;
  font-size: 13px;

  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
`;
const Bridediv = styled.div`
  margin: 2% 3% 0 3%;
  display: flex;
  gap: 21.5vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    gap: 23.4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    gap: 21.9vmax;
  }
  @media (min-width: 1290px) and (max-width: 1366px) {
    gap: 21.8vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 21.2vmax;
  }
`;
const Bride = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: #000000;
`;
const Selects1 = styled(Select)`
  width: 30vmax;
  color: #808080;
  font-family: Poppins;
  font-size: 13px;

  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
`;
const Contact = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: #000000;
  padding: 2% 3% 0 3%;
`;
const Emaildiv = styled.div`
  margin: 2% 3% 0 3%;
  display: flex;
  gap: 46vmax;
`;
const Email1 = styled.div`
  display: flex;
`;
const Email = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;
const Adressdiv = styled.div`
  display: flex;
`;
const Address = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;
const Inputdiv = styled.div`
  margin: 0.6% 3% 0 3%;
  display: flex;
  gap: 24vmax;
`;
const Input1 = styled.input`
  height: 2vmax;
  width: 24vmax;
  padding: 0 0 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  outline: none;
  border: 0.3px solid #808080;

  :placeholder {
    color: #808080;
  }

  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    height: 3vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 2.9vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    ::placeholder {
      font-size: 17px;
    }
  }
`;
const Input2 = styled.input`
  height: 2vmax;
  width: 24vmax;
  padding: 0 0 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border: 0.3px solid #808080;
  outline: none;
  :placeholder {
    color: #808080;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    height: 3vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 2.9vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    ::placeholder {
      font-size: 17px;
    }
  }
`;
const Mobilediv = styled.div`
  margin: 1.5% 3% 0 3%;
  display: flex;
  gap: 41.4vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
    gap: 39.5vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    gap: 41vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 42.4vmax;
  }
`;
const Codediv = styled.div`
  display: flex;
`;
const Code = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;
const Mobdiv = styled.div`
  display: flex;
`;
const Mobiles = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;
const Inputdiv2 = styled.div`
  display: flex;
  margin: 1% 3% 0 3%;
  gap: 24vmax;

  @media (min-width: 993px) and (max-width: 1024px) {
  }
`;
const Input3 = styled.input`
  height: 2vmax;
  width: 24vmax;
  padding: 0 0 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  outline: none;
  border: 0.3px solid #808080;
  :placeholder {
    color: #808080;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    height: 3vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 2.9vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    ::placeholder {
      font-size: 17px;
    }
  }
`;
const Input4 = styled.input`
  height: 2vmax;
  width: 24vmax;
  padding: 0 0 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border: 0.3px solid #808080;
  outline: none;
  :placeholder {
    color: #808080;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    height: 3vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 2.9vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    ::placeholder {
      font-size: 17px;
    }
  }
`;
const Weddingdetail = styled.p`
  padding: 3% 3% 0 3%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
`;
const Datediv = styled.div`
  margin: 1.3% 3% 0 3%;
  display: flex;
  gap: 42vmax;
  @media (min-width: 993px) and (max-width: 1024px) {
    gap: 39vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    gap: 43vmax;
  }
`;
const Firstdate = styled.div`
  display: flex;
`;
const Arrival = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;
const Seconddate = styled.div`
  display: flex;
`;

const Depture = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
`;
const Select3div = styled.div`
  margin: 1% 3% 0 3%;
  display: flex;
  gap: 24vmax;
`;
const Input5 = styled.input`
  height: 2vmax;
  width: 24vmax;
  padding: 0 0 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border: 0.3px solid #808080;
  outline: none;
  :placeholder {
    color: #808080;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    height: 3vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 2.9vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    ::placeholder {
      font-size: 17px;
    }
  }
`;
const Selects2 = styled(Select)`
  width: 26vmax;
  color: #808080;
  height: 2vmax;
  font-family: Poppins;
  font-size: 13px;
  border: none !important;
  background: #ffffff;
  box-shadow: 6px 4px 30px rgba(0, 0, 0, 0.12);
  @media (min-width: 1840px) and (max-width: 1940px) {
    font-size: 17px;
  }
`;
const Request = styled.p`
  padding: 2% 3% 0 3%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #000000;
`;
const Request1 = styled.p`
  padding: 1% 3% 0 3%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  color: #000000;
`;
const Specialinput = styled.input`
  margin: 1% 3% 0 3%;
  height: 2vmax;
  width: 54vmax;
  padding: 0 0 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border: 0.3px solid #808080;
  outline: none;
  :placeholder {
    color: #808080;
  }
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    height: 3vmax;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    height: 2.9vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    ::placeholder {
      font-size: 17px;
    }
  }
`;
const Div1 = styled.div`
  margin: 3% 2% 0 2%;
  text-align: right;
`;
const Buttons = styled.button`
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  color: #ffffff;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 600;
  border: none;
  height: 2.4vmax;
  width: 10vmax;
  letter-spacing: 1px;
  cursor: pointer;
  @media (min-width: 993px) and (max-width: 1024px) {
    height: 4vmax;
    width: 14vmax;
    font-size: 17px;
  }
  @media (min-width: 1025px) and (max-width: 1289px) {
    height: 4vmax;
    width: 15vmax;
    font-size: 22px;
  }
  @media (min-width: 1290px) and (max-width: 1366px) {
    height: 3vmax;
    font-size: 24px;
    width: 13vmax;
  }
  @media (min-width: 1641px) and (max-width: 1740px) {
    font-size: 24px;
    height: 3vmax;
  }
  @media (min-width: 1841px) and (max-width: 1940px) {
    height: 3vmax;
    font-size: 23px;
  }
`;
const Weddingform = () => {
  const { id } = useParams();

  const [bride, setBride] = React.useState("");
  const [groom, setGroom] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [address, setAddress] = React.useState("");

  const API = axios.create({ baseURL: `${baseURL}` });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

  const postdata = async (e) => {
    e.preventDefault();
    const { data } = await API.post(
      `${baseURL}/api/user/book/wedding/${id}`,
      {
        bride,
        groom,
        email,
        mobile,
        address,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data);
    alert("booking successful");
  };

  const style = {
    control: (base) => ({
      ...base,
      border: "1px solid #808080",
      // This line disable the blue border
      boxShadow: "none",
      textDecoration: "none",
    }),
  };
  const style1 = {
    control: (base) => ({
      ...base,

      // This line disable the blue border
      boxShadow: "none",
      textDecoration: "none",
    }),
  };

  return (
    <>
      <Profiles src={profile} />

      <Maindiv>
        <Bluediv>
          <Romantic>Romantic Seaside Holiday in Andaman</Romantic>
        </Bluediv>
        <Whitediv>
          <Lorem>
            Diam viverra id viverra dictum purus auctor sed at quis. Ac in
            euismod gravida dolor, nec egestas proin nulla morbi. Dictumst
            pharetra enim pharetra vestibulum nunc, tincidunt ac nunc sed. Risus
            non orci suspendisse neque varius arcu pellentesque. Lobortis sapien
            aliquet consectetur ornare at odio rutrum morbi faucibus. Nullam et
            posuere magnis aenean facilisi convallis convallis sit. Vulputate
            quam vulputate nulla enim non nulla adipiscing. Ac in commodo quam
            ut nisi.
          </Lorem>
          <Information>Information</Information>
          <Hr></Hr>
          <form onSubmit={postdata}>
            <Groomdiv>
              <Groom>Groom</Groom>
              <Input1
                onChange={(e) => setBride(e.target.value)}
                type="text"
                placeholder="bride"
              />
            </Groomdiv>
            <Bridediv>
              <Bride>Bride</Bride>
              <Input1
                onChange={(e) => setGroom(e.target.value)}
                type="text"
                placeholder="groom"
              />
            </Bridediv>
            <Contact>Please enter contact details</Contact>
            <Emaildiv>
              <Email1>
                <Email>Email</Email>
                <span style={{ color: "#ff0000" }}>*</span>
              </Email1>
              <Adressdiv>
                <Address>Address</Address>
                <span style={{ color: "#ff0000" }}>*</span>
              </Adressdiv>
            </Emaildiv>
            <Inputdiv>
              <Input1
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Email here"
                required
              />
              <Input2
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Select address "
                required
              />
            </Inputdiv>
            <Mobilediv>
              <Codediv>
                <Code>Mobile Code</Code>
                <span style={{ color: "#ff0000" }}>*</span>
              </Codediv>
              <Mobdiv>
                <Mobiles>Mobile</Mobiles>
                <span style={{ color: "#ff0000" }}>*</span>
              </Mobdiv>
            </Mobilediv>
            <Inputdiv2>
              <Input3 type="text" placeholder="Select code" required />
              <Input4
                type="text"
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter mobile number"
                required
              />
            </Inputdiv2>
            <Weddingdetail>Please enter a weeding details</Weddingdetail>
            <Datediv>
              <Firstdate>
                <Arrival>Arrival Date</Arrival>
                <span style={{ color: "#ff0000" }}>*</span>
              </Firstdate>
              <Seconddate>
                <Depture>Departure date</Depture>
                <span style={{ color: "#ff0000" }}>*</span>
              </Seconddate>
            </Datediv>
            <Select3div>
              <Input5 type="text" placeholder="Enter city" required />
              <Selects2
                placeholder="Enter name to find or select from list "
                styles={style1}
                options={students}
              />
            </Select3div>
            <Request>Special Request</Request>
            <Request1>Special Request</Request1>
            <Specialinput
              type="text"
              placeholder="Enter Special request"
              required
            />
            <Div1>
              <Buttons type="submit">submit</Buttons>
            </Div1>
          </form>
        </Whitediv>
      </Maindiv>

      <Footer />
    </>
  );
};

export default Weddingform;
