import React from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";

import icon from "../assets/packageicon.png";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../Components/Customizepackage/package1.module.scss";
import greenline from "../assets/greenline.png";
import greyline from "../assets/grayline.png";
import close from "../assets/close.png";
import sun from "../assets/Sun.png";

const Div = styled.div`
  /* margin-top:10vw; */
  top: 70%;
  left: 95.5%;
  /* Negative half of height. */
  /* margin-left: 650px; */
  /* background:red; */
  /* width:40%; */
  /* height:40%; */
  /* position:absolute; */
  /* align-items:center; */
  display: flex;
  position: fixed;
  z-index: 2;

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
  //  width: 400,
  outline: "none",
  border: "none",
  bgcolor: "background.paper",

  //  height:500,
  height: "110vh",

  // width:"600"
  // p: 4,
};
const Floatingbutton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(data?.hotels?.filter)
  // const x = data?.allpackages?.map( i => i.activities.find(l => l.label == "Parasayling"))
  // console.log("my x is" , x)

  const navigate = useNavigate();

  const clickme = () => {
    navigate("/package2");

    handleClose();
  };

  const click1 = () => {
    navigate("/package2");

    handleClose();
  };
  const click2 = () => {
    navigate("/package2");

    handleClose();
  };

  const click3 = () => {
    navigate("/package2");

    handleClose();
  };
  const click4 = () => {
    navigate("/package2");

    handleClose();
  };
  const click5 = () => {
    navigate("/package2");

    handleClose();
  };
  const click6 = () => {
    navigate("/package2");

    handleClose();
  };
  const click7 = () => {
    navigate("/package2");

    handleClose();
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
            <div className={styles.mainContainer}>
              <span className={styles.planning}>Planning Your Trip To</span>
              <div className={styles.iconTextwrapper}>
                <p className={styles.andman}>Andman</p>
                <img src={close} alt="" />
              </div>

              <div className={styles.lineContainer}>
                <img src={greenline} alt="line" />
                <img src={greyline} alt="line" />
                <img src={greyline} alt="line" />
                <img src={greyline} alt="line" />
                <img src={greyline} alt="line" />
              </div>
              <center className={styles.when}>
                <span>When are you travelling to Port Blair</span>
              </center>

              <div
                style={{ cursor: "pointer" }}
                className={styles.monthCOntainer}
              >
                <div onClick={clickme} className={styles.monthCard}>
                  <p>Sept</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>24 / 29 Degree</span>
                  </div>
                </div>{" "}
                <div onClick={click1} className={styles.monthCard}>
                  <p>Oct</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>24 / 30 Degree</span>
                  </div>
                </div>{" "}
                <div onClick={click2} className={styles.monthCard}>
                  <p>Nov</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>24 / 30 Degree</span>
                  </div>
                </div>{" "}
                <div onClick={click3} className={styles.monthCard}>
                  <p>Dec</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>24 / 29 Degree</span>
                  </div>
                </div>{" "}
                <div className={styles.monthCard} onClick={click4}>
                  <p>Jan</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 29 Degree</span>
                  </div>
                </div>{" "}
                <div className={styles.monthCard} onClick={click5}>
                  <p>Feb</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 30 Degree</span>
                  </div>
                </div>
                <div className={styles.monthCard} onClick={click6}>
                  <p>Mar</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>23 / 32 Degree</span>
                  </div>
                </div>{" "}
                <div className={styles.monthCard} onClick={click7}>
                  <p>Apr</p>
                  <button>Second Best</button>
                  <div className={styles.weatherText}>
                    <img src={sun} alt="sun" />
                    <span>25 / 33 Degree</span>
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
        <Box sx={{}}>
          <Fab
            onClick={handleOpen}
            styke={{ cursor: "pointer" }}
            color="primary"
            aria-label="add"
          >
            <img src={icon} />
          </Fab>
        </Box>
      </Div>
    </>
  );
};

export default Floatingbutton;
