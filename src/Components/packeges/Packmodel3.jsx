import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import moon from "../../assets/moon.png";
import cab1 from "../../assets/cabsvg.svg";
import ferri1 from "../../assets/ferrysvg.svg";
import cruise1 from "../../assets/cruisesvg.svg";
import water1 from "../../assets/watersvg.svg";
import hotel1 from "../../assets/hotelsvg.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  height: "71%",
  border: "none",
};

const Moon = styled.img`
  height: 38.7vmax;
  width: 22vmax;
  margin-left: -2.2vmax;
  margin-top: -2.1vmax;
  background-size: cover;
  object-fit: cover;
  border-radius: 5px;
`;
const Modeldiv = styled.div`
  display: flex;
`;
const Secondiv = styled.div`
  background: #fff0df;
  border-radius: 5px;
  width: 29vmax;
  background-size: cover;
  object-fit: cover;
  margin-top: -2.1vmax;
  height: 38.6vmax;

  text-align: center;
`;
const Travel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  color: #000000;
  padding: 4vmax 4vmax;
`;
const Account = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1vmax;
  color: #000000;

  margin-top: -4vmax;
`;

const Moondiv = styled.div`
  background-size: cover;
`;

const Text = styled.p`
  position: relative;
  margin-top: -14vmax;
  margin-left: -0.5vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1vmax;
  color: #000000;
  width: 17.5vmax;
`;
const Icondiv = styled.div`
  position: relative;
  display: flex;
  margin-top: 1vmax;
  gap: 3vmax;
  margin-left: -0.5vmax;
`;

const Hotel = styled.img`
  height: 2vmax;
  width: 2vmax;
`;
const Textdiv = styled.div`
  margin-left: -0.2vmax;
  display: flex;
  gap: 4vmax;
  margin-top: 0.5vmax;
`;
const P1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const P2 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const P3 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const P4 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
  padding-left: 0.3vmax;
`;
const Textdiv1 = styled.div`
  display: flex;
  gap: 2vmax;
  margin-left: -0.6vmax;
`;

const Hotel1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const Transfer1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const Cruise1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const Water1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #ffffff;
`;
const Name = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  margin-top: 1vmax;
  margin-left: -18vmax;
`;
const Input = styled.input`
  border: 1px solid #000000;
  width: 19vmax;
  height: 2vmax;
  margin-top: 0.7vmax;
  margin-left: -1vmax;
  padding-left: 1vmax;
  border-radius: 5px;
  font-size: 0.9vmax;
  color: #8c8c8c;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  outline: none;
`;
const Email = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  margin-top: 1.5vmax;
  margin-left: -18vmax;
`;
const Mobile = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  margin-top: 1.5vmax;
  margin-left: -13vmax;
`;
const Password = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  margin-top: 1.5vmax;
  margin-left: -16vmax;
`;
const Radio = styled.div`
  display: flex;
  gap: 0.5vmax;
  margin-left: 5vmax;
`;
const Radio1 = styled.input`
  margin-top: 0.5vmax;
  margin-left: -1vmax;
`;
const Updates = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1vmax;
  margin-top: 0.5vmax;
`;
const Buttons = styled.button`
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  height: 2.3vmax;
  width: 11vmax;
  border: none;
  margin-top: 1vmax;
  color: #ffffff;
  font-size: 1vmax;
  font-weight: 600;
  cursor: pointer;
`;
const Already = styled.p`
  text-decoration: underline;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vmax;
  color: #03858d;
  margin-top: 0.2vmax;
`;
const Innerdivs = styled.div`
  margin-top: -2vmax;
`;
const Packmodel3 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <>
      <center>
        <div>
          <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Modeldiv>
                <Moondiv>
                  <Moon src={moon} />

                  <Text>
                    We will get the best prices for your Maldives trip from our
                    trusted travel partners.
                  </Text>
                  <Icondiv>
                    <Hotel src={hotel1} />
                    <Hotel src={cab1} />

                    <Hotel src={cruise1} />
                    <Hotel src={water1} />
                  </Icondiv>
                  <Textdiv>
                    <P1>257 </P1>
                    <P2>14 </P2>
                    <P3>5 </P3>
                    <P4>24</P4>
                  </Textdiv>
                  <Textdiv1>
                    <Hotel1>Hotels</Hotel1>
                    <Transfer1>Transfer</Transfer1>
                    <Cruise1>Cruise</Cruise1>
                    <Water1>Water Activity</Water1>
                  </Textdiv1>
                </Moondiv>
                <Secondiv>
                  <Innerdivs>
                    <Travel>Welcome to Seaandman</Travel>
                    <Account>
                      Create an account to save your itineraries.
                    </Account>
                    <Name>Name</Name>
                    <Input placeholder="Enter your name" />
                    <Email>Email</Email>
                    <Input placeholder="Enter your Email address" />
                    <Mobile>Mobile Number</Mobile>
                    <Input placeholder="Enter your Mobile number" />
                    <Password>Password</Password>
                    <Input placeholder="Enter your Password" />
                    <Radio>
                      <Radio1 type="checkbox" />
                      <Updates>Send me my trip updates on Whatsapp</Updates>
                    </Radio>
                    <Buttons>Create my account</Buttons>
                    <Already>Already have an account</Already>
                  </Innerdivs>
                </Secondiv>
              </Modeldiv>
            </Box>
          </Modal>
        </div>
      </center>
    </>
  );
};

export default Packmodel3;
