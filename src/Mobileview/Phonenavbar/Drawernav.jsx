import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaHotel } from "react-icons/fa";
import Styled from "styled-components";
import { AiFillCar } from "react-icons/ai";
import { RiShip2Fill } from "react-icons/ri";
import { AiFillCodepenCircle } from "react-icons/ai";
import { BiWater } from "react-icons/bi";
import { RiLoginBoxLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo44.png";
import { FaUserAlt } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import { background } from "@chakra-ui/react";

const Img = styled(FaHotel)`
  height: 40px;
  width: 25px;
`;
const Img1 = styled(AiFillCar)`
  height: 40px;
  width: 25px;
`;
const Img2 = styled(RiShip2Fill)`
  height: 40px;
  width: 25px;
`;
const Img3 = styled(AiFillCodepenCircle)`
  height: 40px;
  width: 25px;
`;
const Img4 = styled(BiWater)`
  height: 40px;
  width: 25px;
`;
const Img5 = styled(RiLoginBoxLine)`
  height: 40px;
  width: 25px;
`;
const Img6 = styled(BiLogInCircle)`
  height: 40px;
  width: 25px;
`;
const Data = styled(List)`
  /* background: red; */
  /* heoght:30px; */
  display: flex;
  /* background:green; */
  /* height:fit-content; */
`;
const Data1 = styled(List)`
  display: flex;
  align-items: center;
  gap: 30px;
  /* font-size:20px; */

  /* justify-content:space-between; */
  /* background: #648880; */
  /* background:red; */
  height: fit-content;
  width: 100%;
  padding: 0 5%;
  /* flex-direction: column; */
`;

const drawerWidth = 180;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Drawernav = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();
  const click = () => {
    navigate("/hotels");
    handleDrawerClose();
  };

  const click1 = () => {
    navigate("/cablist");
    handleDrawerClose();
  };

  const click2 = () => {
    navigate("/ferrylist");
    handleDrawerClose();
  };
  const click3 = () => {
    navigate("/packages");
    handleDrawerClose();
  };

  const click4 = () => {
    navigate("/wateractivity");
    handleDrawerClose();
  };
  const click5 = () => {
    navigate("/login");
    handleDrawerClose();
  };
  const click6 = () => {
    navigate("/signup");
    handleDrawerClose();
  };

  const home = () => {
    navigate("/");
  };

  const handle = () => {
    localStorage.clear();

    navigate("/login");
  };

  const profile = () => {
    navigate("/profile");
  };
  const styles = {
    show: {
      backgroundColor: scrollY < 250 ? "transparent" : "red",
      transitionTimingFunction: "ease-in",
      transition: "0.15s",
    },
  };

  const users = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Box sx={styles.show}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            background: " rgba(0,0,0,0.0)",

            zIndex: "2",
            position: "-webkit-sticky",
            top: "0",
          }}
        >
          <Toolbar>
            <IconButton
              style={{ color: "white" }}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, color: "white", ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <img
              onClick={home}
              src={logo1}
              style={{
                height: "70px",
                width: "60px",
                display: "flex",
                marginLeft: "100px",
              }}
            />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Data onClick={click}>
            <Data1>
              <Img />
              <Typography
                sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
              >
                Hotel
              </Typography>
            </Data1>
          </Data>
          <Data>
            <Data1 onClick={click1}>
              <Img1 />
              <Typography
                sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
              >
                Cabs
              </Typography>
            </Data1>
          </Data>
          <Data onClick={click2}>
            <Data1>
              <Img2 />
              <Typography
                sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
              >
                Ferries
              </Typography>
            </Data1>
          </Data>

          <Data onClick={click3}>
            <Data1>
              <Img3 />
              <Typography
                sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
              >
                Packages
              </Typography>
            </Data1>
          </Data>

          <Data onClick={click4}>
            <Data1>
              <Img4 />
              <Typography
                sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
              >
                Activities
              </Typography>
            </Data1>
          </Data>

          {users ? (
            <Data1 onClick={profile}>
              <FaUserAlt style={{ height: "40px", width: "25px" }} />

              <Typography
                sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
              >
                Profile
              </Typography>
            </Data1>
          ) : null}

          {users ? null : (
            <Data onClick={click5}>
              <Data1>
                <Img5 />

                <Typography
                  sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
                >
                  Login
                </Typography>
              </Data1>
            </Data>
          )}

          {users ? (
            <Data onClick={click5}>
              <Data1 onClick={handle}>
                <Img5 />

                <Typography
                  sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
                >
                  Logout
                </Typography>
              </Data1>
            </Data>
          ) : null}

          {users ? null : (
            <Data onClick={click6}>
              <Data1>
                <Img6 />
                <Typography
                  sx={{ color: "black", fontSize: "20px", fontWeight: "700" }}
                >
                  Signup
                </Typography>
              </Data1>
            </Data>
          )}

          <Divider />
        </Drawer>
      </Box>
    </>
  );
};

export default Drawernav;
