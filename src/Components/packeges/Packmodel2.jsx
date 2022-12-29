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
`;
const Travel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.2vmax;
  color: #000000;
  padding: 4vmax 4vmax;
  width: 23vmax;
  margin-left: 1vmax;
`;
const Departing = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  color: #000000;
  margin-top: -2vmax;
  margin-left: 5vmax; ;
`;
const Select = styled.select`
  border: 1px solid #000000;
  width: 19vmax;
  height: 2vmax;
  margin-top: 1vmax;
  margin-left: 5vmax;
  padding-left: 1vmax;
  border-radius: 5px;
  font-size: 0.9vmax;
  color: #8c8c8c;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  outline: none;
`;
const Dates = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  color: #000000;

  margin-left: 5vmax;
  margin-top: 2vmax; ;
`;
const DatePickers = styled(DatePicker)`
  width: 17.5vmax;
  height: 1.8vmax;
  margin-top: 1vmax;
  margin-left: 5vmax;
  padding-left: 1vmax;
  border-radius: 5px;
  font-size: 0.9vmax;
  color: #8c8c8c;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  outline: none;
`;
const Travelling = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.1vmax;
  color: #000000;

  margin-left: 5vmax;
  margin-top: 2vmax; ;
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
const Buttondiv = styled.div`
  margin-top: 1vmax;
  display: flex;
  gap: 1vmax;
  margin-left: 5vmax;
`;
const Solo = styled.button`
  font-size: 1vmax;
  color: #000000;
  font-weight: 600;
  font-family: Poppins;
  height: 2vmax;
  width: 4vmax;
  border: 1px solid #000000;
  background: #fff0df;
`;
const Family = styled.button`
  font-size: 1vmax;
  color: #000000;
  font-weight: 600;
  font-family: Poppins;
  height: 2vmax;
  width: 4vmax;
  border: 1px solid #000000;
  background: #fff0df;
`;
const Friend = styled.button`
  font-size: 1vmax;
  color: #000000;
  font-weight: 600;
  font-family: Poppins;
  height: 2vmax;
  width: 4vmax;
  border: 1px solid #000000;
  background: #fff0df;
`;
const Couple = styled.button`
  font-size: 1vmax;
  color: #000000;
  font-weight: 600;
  font-family: Poppins;
  height: 2vmax;
  width: 4vmax;
  border: 1px solid #000000;
  background: #fff0df;
`;
const Getcost = styled.button`
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
  border-radius: 35px;
  color: #ffffff;
  font-weight: 600;
  height: 2vmax;
  width: 8vmax;
  margin-top: 3vmax;
  margin-left: 11vmax;
  border: none;
`;

const Packmodel2 = () => {
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
                  <Travel>What's Your Andman Travel Plan</Travel>

                  <Departing>Departing From ?</Departing>
                  <Select name="cars" id="cars">
                    <option value="volvo">Audi</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Select location</option>
                  </Select>
                  <Dates>Departure Date</Dates>
                  <DatePickers
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <Travelling>Travelling as</Travelling>
                  <Buttondiv>
                    <Solo>Solo</Solo>
                    <Family>Family</Family>
                    <Friend>Friend</Friend>
                    <Couple>Couple</Couple>
                  </Buttondiv>

                  <Getcost>Get Cost</Getcost>
                </Secondiv>
              </Modeldiv>
            </Box>
          </Modal>
        </div>
      </center>
    </>
  );
};

export default Packmodel2;
