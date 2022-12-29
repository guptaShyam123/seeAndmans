import React, { useEffect } from "react";
import styled from "styled-components";
import logo1 from "../assets/logo1.png";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import "./Headers";
import { FaUserAlt } from "react-icons/fa";
import Footer from "./Home/Footer";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./contact.module.scss";
import { MdCall } from "react-icons/md";
import useWindowScroll from "beautiful-react-hooks/useWindowScroll";

const Navbar = styled.div`
  /* background: #ffffff; */
  /* box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.1); */
  /* height: 4.4vmax; */
  width: 100%;
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  z-index: 1;

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
const Innerdiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;
const Img = styled.img`
  height: 3.6vmax;
  width: 3.6vmax;
  padding-top: 0.5vmax;
  padding-left: 3vmax;
`;
const Authdiv = styled.div`
  display: flex;
  padding-left: 5vmax;
  gap: 1vmax;
  padding-top: 1vmax;
  margin-right: 5vmax;
`;
const Login = styled.button`
  height: 2.1vmax;
  width: 10vmax;
  background-color: rgba(20, 88, 67, 1);
  color: #ffffff;
  font-size: 1vmax;
  border: none;
  border-radius: 20px;
  font-family: Poppins;
  font-weight: 700;
`;
const Signip = styled.button`
  height: 2.1vmax;
  width: 10vmax;
  background-color: rgba(20, 88, 67, 1);
  color: #ffffff;
  font-size: 1vmax;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  font-family: Poppins;
  size: 1.5vmax;
`;
const Textdiv = styled.div`
  gap: 2.6vmax;
  display: flex;
  padding-top: 0.9vmax;
  padding-left: 16vmax;
`;
const Stext = styled.p`
  font-family: Poppins;
  font-size: 1.4vmax;
  font-weight: 800;
  color: #145843;
`;
const Image = styled(FaUserAlt)`
  margin: 3% 0 0 0;
`;
const Contactdiv = styled.div`
  /* background-color: #145843; */
  height: 10vh;
  width: 40vw;
  align-items: center;
  margin: 0;
`;

const Div1 = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 3% 2%;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  width: 100%;
  /* height:100%; */
`;
const P1 = styled.p`
  color: black;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
`;
const Headers = () => {
  const [scrollY, setScrollY] = React.useState(window.scrollY);
  const onWindowScroll = useWindowScroll();
  onWindowScroll((event) => {
    setScrollY(window.scrollY);
  });
  console.log(scrollY);
  const navigate = useNavigate();

  const click = () => {
    navigate("/profile");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const users = JSON.parse(localStorage.getItem("user"));

  const handle = () => {
    if (users) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  // const location = useLocation();

  // const x = location.pathname === "/"

  const styles1 = {
    show: {
      background: scrollY < 250 ? "transparent" : "white",
      transitionTimingFunction: "ease-in",
      transition: "0.15s",
    },
  };
  return (
    <>
      <Navbar style={styles1.show}>
        <Innerdiv>
          <Link to="/">
            <Img src={logo1} />
          </Link>

          {scrollY > 250 ? (
            <Textdiv>
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                <Stext>Hotels</Stext>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="myactive"
                to="/cabs"
              >
                <Stext>Cabs</Stext>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/ferry">
                <Stext>Ferries</Stext>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/cruise">
                <Stext>Packages</Stext>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/water">
                <Stext> Activities</Stext>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/sightseeing">
                <Stext> Sightseeing</Stext>
              </Link>
            </Textdiv>
          ) : null}

          <Authdiv>
            <Image style={{ cursor: "pointer" }} onClick={handle} />

            <Login onClick={handleClickOpen} style={{ cursor: "pointer" }}>
              Contact us
            </Login>

            <div className={styles.mainwrapper}>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title" className={styles.title}>
                  {"Contact Us"}
                </DialogTitle>
                <DialogContent className={styles.main}>
                  <div className={styles.content}>
                    <form className={styles.form}>
                      <input
                        type="text"
                        placeholder="Name"
                        className={styles.input}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Mobile"
                        className={styles.input}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Expected arrival date"
                        className={styles.input}
                        required
                      />
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Enter Your Query"
                        required
                        className={styles.textarea}
                      />
                      <div className={styles.btn}>
                        <button>Contact</button>
                      </div>
                    </form>
                  </div>
                  <Contactdiv>
                    <DialogTitle
                      id="alert-dialog-title"
                      className={styles.title}
                    >
                      {"Call Us"}
                    </DialogTitle>
                    <Div1>
                      <MdCall />
                      <P1>9988998877</P1>
                    </Div1>
                  </Contactdiv>
                </DialogContent>
              </Dialog>
            </div>
          </Authdiv>
        </Innerdiv>
      </Navbar>
    </>
  );
};

export default Headers;
