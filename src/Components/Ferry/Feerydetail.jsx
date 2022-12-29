import React from "react";
import styled from "styled-components";
import logo11 from "../../assets/logo11.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4one.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ball from "../../assets/ball.png";

const Maindiv = styled.div`
  height: 20vmax;
  width: 95%;
  background: #ffffff;
  box-shadow: 10px 10px 33px rgba(0, 0, 0, 0.1);
  margin-top: 4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 120px;
    width: 95%;
  }
`;
const P = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  color: #145843;
  font-size: 1.6vmax;
  padding-top: 2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    text-align: center;
    font-size: 10px;
  }
`;
const Imagediv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2vmax;

  @media (min-width: 335px) and (max-width: 421px) {
    justify-content: space-around;
    margin-left: 15px;
  }
`;
const Img1 = styled.img`
  height: 8vmax;
  width: 8vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 30px;
    width: 30px;
  }
`;
const Img2 = styled.img`
  height: 8vmax;
  width: 8vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 30px;
    width: 30px;
  }
`;
const Img3 = styled.img`
  height: 8vmax;
  width: 8vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    height: 30px;
    width: 30px;
  }
`;
const Img4 = styled.img`
  @media (min-width: 335px) and (max-width: 421px) {
    height: 20px;
    width: 100px;
  }
`;
const Textdiv = styled.div`
  display: flex;

  justify-content: space-evenly;
  padding-top: 1vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 50px;
    width: 300px;
    justify-content: space-around;
  }
`;
const Nautika = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  margin-left: -7.5vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Iit = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Green = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  margin-left: -2vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Makruz = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Greens = styled.p`
  margin-top: 2vmax;
  width: 95%;
  height: 4vmax;
  background: linear-gradient(90deg, #2ebe8b 0%, #11a576 49.48%, #49ce9b 100%);
  display: flex;
  justify-content: space-evenly;
`;
const Operator = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  color: #ffffff;
  padding-top: 1vmax;

  width: 25%;
  text-align: center;
`;
const Timing = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  color: #ffffff;
  padding-top: 1vmax;

  width: 25%;
`;
const Book = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vmax;
  color: #ffffff;
  padding-top: 1vmax;

  width: 25%;
`;
const Light = styled.div`
  margin-top: 2vmax;
  width: 95%;
  height: 4vmax;
  text-align: center;
  background-color: #e0fff5;
`;
const Blair = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #145843;
  padding-top: 1vmax;
`;

const Tablediv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 2vmax;

  width: 96%;
  @media (min-width: 335px) and (max-width: 421px) {
    width: 100%;
    padding: 10px;
  }
`;
const Tabfirst = styled.div`
  text-align: center;
  width: 20%;

  @media (min-width: 335px) and (max-width: 421px) {
  }
`;
const T1 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #000000;
  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Nautika1 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #000000;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const Makruz1 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #000000;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const IIT = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #000000;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
    margin-left: -15px;
  }
`;
const T8 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #000000;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const T9 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #000000;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const T10 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #000000;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
  }
`;
const T11 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vmax;
  color: #000000;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 10px;
    margin-left: -20px;
  }
`;
const Question = styled.p`
  text-align: center;
  margin-top: 2vmax;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4vmax;
  color: #145843;
`;
const Accordiandiv = styled.div`
  margin-top: 2vmax;
  width: 95%;
`;
const Ball = styled.div`
  display: flex;
  gap: 1vmax;
  margin-left: 1vmax;
`;
const Img11 = styled.img`
  height: 1vmax;
  width: 1vmax;
  padding-top: 0.5vmax;
`;
const Viewless = styled.p`
  text-align: center;
  margin-left: 87vmax;
  margin-top: 2vmax;
  color: #3f8fe4;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4vmax;
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 20px;
  }
`;
const Stylepara = styled.div`
  @media (min-width: 335px) and (max-width: 421px) {
    display: none;
  }
`;
const Phonediv = styled.div`
  @media (min-width: 335px) and (max-width: 421px) {
    margin-left: 7px;
  }
`;

const Feerydetail = () => {
  return (
    <>
      <Phonediv>
        <center>
          <Maindiv>
            <P>
              We provide ferry tickets for all hi-speed ferry companies in
              Andaman
            </P>
            <Imagediv>
              <Img1 src={logo11} />
              <Img2 src={logo2} />
              <Img3 src={logo3} />
              <Img4 src={logo4} />
            </Imagediv>
            <Textdiv>
              <Nautika>Nautika</Nautika>
              <Iit>ITT Majestic</Iit>
              <Green>Green Ocean</Green>
              <Makruz> Makruzz</Makruz>
            </Textdiv>
          </Maindiv>
        </center>
        <center>
          <Greens>
            <Operator>Operator</Operator>
            <Timing>Timings</Timing>
            <Book>Open Booking Window</Book>
          </Greens>
        </center>
        <center>
          <Light>
            <Blair>Port Blair to Havelock</Blair>
          </Light>
        </center>
        <center>
          <Tablediv>
            <Tabfirst>
              <T1>Green Ocean</T1>
              <Nautika1>Nautika</Nautika1>
              <Makruz1>Makruzz</Makruz1>
              <IIT>ITT Majestic</IIT>
            </Tabfirst>

            <Tabfirst>
              <T1>07:00 AM to 09:15 AM</T1>
              <T1>07.30 AM to 09:00 AM</T1>
              <T1>08:00 AM to 09:30 AM</T1>
              <T1>08:30 AM to 10:00 AM</T1>
            </Tabfirst>

            <Tabfirst>
              <T8>30th April 2023</T8>
              <T9>30th June 2023</T9>
              <T10>31st March 2023</T10>
              <T11>31st December 2022</T11>
            </Tabfirst>
          </Tablediv>
        </center>
        <center>
          <Light>
            <Blair>Port Blair to Havelock</Blair>
          </Light>
        </center>
        <center>
          <Tablediv>
            <Tabfirst>
              <T1>Green Ocean</T1>
              <Nautika1>Nautika</Nautika1>
              <Makruz1>Makruzz</Makruz1>
              <IIT>ITT Majestic</IIT>
            </Tabfirst>

            <Tabfirst>
              <T1>07:00 AM to 09:15 AM</T1>
              <T1>07.30 AM to 09:00 AM</T1>
              <T1>08:00 AM to 09:30 AM</T1>
              <T1>08:30 AM to 10:00 AM</T1>
            </Tabfirst>

            <Tabfirst>
              <T8>30th April 2023</T8>
              <T9>30th June 2023</T9>
              <T10>31st March 2023</T10>
              <T11>31st December 2022</T11>
            </Tabfirst>
          </Tablediv>
        </center>
        <center>
          <Light>
            <Blair>Port Blair to Havelock</Blair>
          </Light>
        </center>
        <center>
          <Tablediv>
            <Tabfirst>
              <T1>Green Ocean</T1>
              <Nautika1>Nautika</Nautika1>
              <Makruz1>Makruzz</Makruz1>
              <IIT>ITT Majestic</IIT>
            </Tabfirst>

            <Tabfirst>
              <T1>07:00 AM to 09:15 AM</T1>
              <T1>07.30 AM to 09:00 AM</T1>
              <T1>08:00 AM to 09:30 AM</T1>
              <T1>08:30 AM to 10:00 AM</T1>
            </Tabfirst>

            <Tabfirst>
              <T8>30th April 2023</T8>
              <T9>30th June 2023</T9>
              <T10>31st March 2023</T10>
              <T11>31st December 2022</T11>
            </Tabfirst>
          </Tablediv>
        </center>
        <center>
          <Light>
            <Blair>Port Blair to Havelock</Blair>
          </Light>
        </center>
        <center>
          <Tablediv>
            <Tabfirst>
              <T1>Green Ocean</T1>
              <Nautika1>Nautika</Nautika1>
              <Makruz1>Makruzz</Makruz1>
              <IIT>ITT Majestic</IIT>
            </Tabfirst>

            <Tabfirst>
              <T1>07:00 AM to 09:15 AM</T1>
              <T1>07.30 AM to 09:00 AM</T1>
              <T1>08:00 AM to 09:30 AM</T1>
              <T1>08:30 AM to 10:00 AM</T1>
            </Tabfirst>

            <Tabfirst>
              <T8>30th April 2023</T8>
              <T9>30th June 2023</T9>
              <T10>31st March 2023</T10>
              <T11>31st December 2022</T11>
            </Tabfirst>
          </Tablediv>
        </center>
        <center>
          <Light>
            <Blair>Port Blair to Havelock</Blair>
          </Light>
        </center>
        <center>
          <Tablediv>
            <Tabfirst>
              <T1>Green Ocean</T1>
              <Nautika1>Nautika</Nautika1>
              <Makruz1>Makruzz</Makruz1>
              <IIT>ITT Majestic</IIT>
            </Tabfirst>

            <Tabfirst>
              <T1>07:00 AM to 09:15 AM</T1>
              <T1>07.30 AM to 09:00 AM</T1>
              <T1>08:00 AM to 09:30 AM</T1>
              <T1>08:30 AM to 10:00 AM</T1>
            </Tabfirst>

            <Tabfirst>
              <T8>30th April 2023</T8>
              <T9>30th June 2023</T9>
              <T10>31st March 2023</T10>
              <T11>31st December 2022</T11>
            </Tabfirst>
          </Tablediv>
        </center>
        <Question>Frequenty Asked Questions</Question>
        <center>
          <Accordiandiv>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Ball>
                  <Img11 src={ball} />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1.4vmax",
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    How to book a ferry from Port Blair?
                  </Typography>
                </Ball>
              </AccordionSummary>
              <AccordionDetails>
                <Stylepara>
                  <Typography
                    sx={{
                      color: "#595959",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "0.9vmax",
                      width: "90vmax",
                    }}
                  >
                    Tempus massa faucibus morbi lobortis netus nec quam. Sed
                    egestas sit vitae turpis id pellentesque pretium molestie
                    sed. Dignissim mattis aliquam interdum mattis fermentum
                    lacinia adipiscing pharetra nulla. Eget elit nullam praesent
                    amet, sed. Dui nulla felis eget scelerisque duis. Nisl eget
                    aenean leo ac. Nulla viverra vulputate condimentum nunc
                    nisl, mattis purus ut. Sem volutpat sollicitudin faucibus
                    enim justo, fringilla arcu, a. Arcu tempor, nec consequat in
                    sit tincidunt non nunc morbi. Porta non accumsan, egestas
                    erat nascetur et sed fermentum. Tincidunt eget purus nunc ut
                    nisl. Ac amet imperdiet mi massa blandit in ullamcorper est
                    orci. Arcu hac odio molestie a elementum ac enim. Vestibulum
                    est arcu ultrices vel. Dui auctor duis amet nunc, nisi, erat
                    ultricies.
                  </Typography>
                </Stylepara>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Ball>
                  <Img11 src={ball} />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1.4vmax",
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    What is the distance between Port Blair airport and the
                    jetty? How do I get there?
                  </Typography>
                </Ball>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Ball>
                  <Img11 src={ball} />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1.4vmax",
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    {" "}
                    Do you need to buy a ticket for an infant?
                  </Typography>
                </Ball>
              </AccordionSummary>
            </Accordion>
          </Accordiandiv>
        </center>
        <Viewless>View Less</Viewless>
      </Phonediv>
    </>
  );
};

export default Feerydetail;
