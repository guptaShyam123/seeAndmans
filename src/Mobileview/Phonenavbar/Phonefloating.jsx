import React from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import icon from "../../assets/packageicon.png";
import Modal from "@mui/material/Modal";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/grayline.png";
import close from "../../assets/close.png";
import sun from "../../assets/Sun.png";
import manshopping from "../../assets/mansshopping.png";
import adventure from "../../assets/adventure.png";
import Scroll from "react-scroll";
import styles from ".././Customizepackage/package1.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const Div = styled.div`
  /* margin-top:10vw; */
  top: 0.3%;
  left: 80%;
  /* Negative half of height. */
  /* margin-left: 650px; */
  /* background:red; */
  /* width:40%; */
  /* height:40%; */
  /* position:absolute; */
  /* align-items:center; */
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  gap: 0;
  height: 70px;
  align-items: center;
  justify-content: center;
  /* width:30px; */
  /* height:30%; */
  /* background:red; */
  @media (min-width: 993px) and (max-width: 1024px) {
    left: 93%;
  }
  @media (min-width: 1025px) and (max-width: 1285px) {
    left: 94.5%;
  }
  @media (min-width: 1286px) and (max-width: 1367px) {
    left: 95%;
  }
  /* justify-content:flex-end; */

  /* z-index:1 */
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  outline: "none",
  border: "none",
  bgcolor: "background.paper",
  bgcolor: "background.paper",
  border: "2px solid #000",
  //  height:500,
  outline: "none",
  border: "none",
  height: "80vh",
  // marginBottom:"10px",
  padding: "2% 0",
  // zIndex:"100"
  //   height: "100vh",

  // width:"600"
  // p: 4,
};

const Phonefloating = () => {
  let scro = Scroll.animateScroll;

  const click = () => {
    scro.scrollTo(first?.current?.offsetTop, {
      smooth: true,
    });
  };

  const click1 = () => {
    scro.scrollTo(second?.current?.offsetTop, {
      smooth: true,
    });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const first = React.useRef();
  const second = React.useRef();

  const navigate = useNavigate();
  const list = () => {
    navigate("/custom");
    handleClose();
  };

  const clickme = () => {
    navigate("/custom2");
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box style={{ overflowY: "scroll" }} sx={style}>
            <div className={styles.mainContainer} onClick={click}>
              <span className={styles.planning}>Planning Your Trip To</span>
              <div className={styles.iconTextwrapper}>
                <p className={styles.andman}>Andman</p>
                {/* <img src={close} alt="" /> */}
              </div>

              <div className={styles.lineContainer}>
                <img src={greenline} alt="line" />
              </div>
              <center className={styles.when}>
                <span>When are you travelling to Port Blair</span>
              </center>

              <div onClick={clickme} className={styles.monthCOntainer}>
                <div className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>
                <div className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>
                <div className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>
                <div className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>
                <div className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>
                <div className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>
                <div className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>
                <div className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>
                <div className={styles.textwrapper}>
                  Issue of online vouchers are restricted for departure within
                  the next 9 months. If you are planning for a later date,
                  contact us
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <Div>
        <img
          src={icon}
          style={{ height: "50px", width: "50px" }}
          onClick={handleOpen}
        />
        <p
          style={{
            color: "white",
            fontWeight: "600",
            fontStyle: "italic",
            fontFamily: "cursive",
            fontSize: "11px",
          }}
        >
          plan my trip
        </p>
      </Div>
    </>
  );
};

export default Phonefloating;
