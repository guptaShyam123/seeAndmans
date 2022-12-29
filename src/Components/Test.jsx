import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "styled-components";

import Slider3 from "../Components/Home/Slider3";
import Cab from "..//Components/Home/Tabs/Cab";
import Ferries from "..//Components/Home/Tabs/Ferries";
import Cruise from "../Components/Home/Tabs/Cruise";
import Water from "../Components/Home/Tabs/Water";
import Cabs from "./cab/Cabs";
import { useLocation, useNavigate } from "react-router-dom";

const Tabs = styled(Tab)`
  color: white;
  font-weight: 700;
  font-family: Poppins;
  @media (min-width: 335px) and (max-width: 421px) {
 display:none;
  }
`;
const Divs3 = styled.div`
  @media (min-width: 335px) and (max-width: 481px) {
    margin-left: -160px;
    width: 100vmax;
    margin-top: 30px;
  }
`;
const Divs1 = styled.div`
  height: 4vmax;
  margin-top: 2vmax;
  position: relative;
  /* background:red; */
  /* z-index:-20; */
  width: 100%;

  @media (min-width: 320px) and (max-width: 480px) {
   display:none;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 100%;
    font-size: 14px;
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 100%;
  }
`;
const Divs = styled.div`
  @media (min-width: 335px) and (max-width: 421px) {
    width: 85vmax;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) and (max-width: 1366px) {
    width: 98%;
    overflow: hidden;
  }
`;
const P = styled.p`
  font-family: Poppins;
  font-size: 1.6vmax;
  color: #145843;
  font-weight: bold;
  margin-top: 8vmax;
  text-align: center;
  position: relative;

  @media (min-width: 335px) and (max-width: 421px) {
    font-size: 20px;
    margin-left: 40vh;
  }
`;

const Test = () => {
  // const x = ["/", "/cabs", "/ferry", "/cruise", "/water"];

  const [value, setValue] = React.useState("1");

  let location = useLocation();

  var newValue = value;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setValue("1");
    } else if (location.pathname === "/cabs") {
      setValue("2");
    } else if (location.pathname === "/ferry") {
      setValue("3");
    } else if (location.pathname === "/cruise") {
      setValue("4");
    } else if (location.pathname === "/water") {
      setValue("5");
    }
  }, [location.pathname]);

  return (
    <>
      <Divs1>
        <P>OFFERS</P>
        <Box
          centered
          sx={{
            typography: "body1",
            height: {
              xs: "52px",
              sm: "7vmax",
              md: "37vmax",
              lg: "37vmax",
              xl: "36vmax",
            },
            marginTop: { xl: "vmax" },
            width: {
              xs: "77vmax",
              sm: "60vmax",
              md: "99%",
              lg: "98%",
              xl: "99%",
            },
            marginRight: { xs: "50px" },
            marginLeft: { xs: "10px", xl: "7px", md: "1.6vmax" },
            backgroundColor: "transparent",
            position: "relative",
            marginTop: "1vmax",
            background: "#FFFFFF",
            boxShadow: "10px 14px 47px rgba(0, 0, 0, 0.20)",
            color: { lg: "white", md: "white" },
            
          }}
        >
          <TabContext sx={{ color: "green" ,   display:{sm:'none'}  }} value={value}>
            <Divs>
              <Box
                centered
                sx={{
                  position: "absolute",
                  background:
                    "linear-gradient(90deg, #2EBE8B 0%, #11A576 49.48%, #49CE9B 100%)",
                  height: { xl: "4vmax", md: "5vmax", xs: "52px" },
                  width: { xs: "162vw", xl: "100%", lg: "100%", md: "100%" },
                  marginTop: { xl: "vmax"  } 
                }} 
              >
                <TabList
                  textColor="green"
                  TabIndicatorProps={{
                    sx: {
                      backgroundColor: "white",
                      color: "white",
                      marginLeft: {},
                    },
                  }}
                  style={{ color: "none" }}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tabs
                    sx={{
                      color: "white",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      fontSize: { xs: "20px", md: "15px", xl: "20px" },
                      marginLeft: {
                        xs: "30px",
                        xl: "10vmax",
                        lg: "10vmax",
                        md: "8vmax",
                      },
                      marginTop: { xl: "0.5%" },
                      position: { xl: "relative", md: "relative" },
                      zIndex: "1",
                    }}
                    label="Hotel"
                    value="1"
                  />
                  <Tabs
                    sx={{
                      color: "white",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      fontSize: { xs: "20px", md: "15px", xl: "20px" },
                      marginLeft: {
                        xs: "30px",
                        xl: "10vmax",
                        lg: "10vmax",
                        md: "8vmax",
                      },
                      marginTop: { xl: "0.5%" },
                      zIndex: "1",
                    }}
                    label="Cab"
                    value="2"
                  />
                  <Tabs
                    sx={{
                      color: "white",
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      fontSize: { xs: "20px", md: "15px", xl: "20px" },
                      marginLeft: {
                        xs: "30px",
                        xl: "10vmax",
                        lg: "10vmax",
                        md: "8vmax",
                      },
                      marginTop: { xl: "0.5%" },
                      zIndex: "1",
                    }}
                    label="Ferries"
                    value="3"
                  />
                  <Tabs
                    sx={{
                      color: "white",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      fontSize: { xs: "20px", md: "15px", xl: "20px" },
                      marginLeft: {
                        xs: "30px",
                        xl: "10vmax",
                        lg: "10vmax",
                        md: "8vmax",
                      },
                      marginTop: { xl: "0.5%" },
                      zIndex: "1",
                    }}
                    label="Packages"
                    value="4"
                  />
                  <Tabs
                    sx={{
                      color: "white",
                      fontWeight: "700",
                      fontFamily: "Poppins",
                      fontSize: { xs: "20px", md: "15px", xl: "20px" },
                      marginLeft: {
                        xs: "30px",
                        xl: "10vmax",
                        lg: "10vmax",
                        md: "5vmax",
                      },
                      marginTop: { xl: "0.5%" },
                      zIndex: "1",
                    }}
                    label="Activities"
                    value="5"
                  />
                </TabList>
              </Box>
            </Divs>

            <TabPanel sx={{ color: "black" }} value="1">
              <Slider3 />
            </TabPanel>
            <TabPanel sx={{ color: "black" }} value="2">
              <Cab />
            </TabPanel>
            <TabPanel sx={{ color: "black" }} value="3">
              <Ferries />
            </TabPanel>
            <TabPanel sx={{ color: "black" }} value="4">
              <Cruise />
            </TabPanel>
            <TabPanel sx={{ color: "black" }} value="5">
              <Water />
            </TabPanel>
          </TabContext>
        </Box>
      </Divs1>
    </>
  );
};

export default Test;
