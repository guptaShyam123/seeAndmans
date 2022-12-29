import React from "react";
import styles from "./package1.module.scss";
import { useNavigate } from "react-router-dom";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/grayline.png";
import close from "../../assets/close.png";
import manshopping from "../../assets/mansshopping.png";
import { useLocation, Link } from "react-router-dom";
const Package2 = (props) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [days1, setDays1] = React.useState({
    day: "3-4 Days",
  });

  const [days2, setDays2] = React.useState({
    day: "6-8 Days",
  });
  const [days3, setDays3] = React.useState({
    day: "9-11 Days",
  });
  const [days4, setDays4] = React.useState({
    day: "12-15 Days",
  });

  return (
    <>
      <div className={styles.mainContainer}>
        <span className={styles.planning}>Planning Your Trip To</span>
        <div className={styles.iconTextwrapper}>
          <p className={styles.andman}>Andman</p>

          <img src={close} alt="" />
        </div>

        <div className={styles.lineContainer}>
          <img src={greenline} alt="line" />
          <img src={greenline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
        </div>
        <center className={styles.when}>
          <span>What’s the duration of your holiday?</span>
        </center>

        <div style={{ cursor: "pointer" }} className={styles.shoppingContainer}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/package3"
            state={{ days1: days1 }}
          >
            <div className={styles.shoppingCard}>
              <img src={manshopping} alt="man" />
              <p>3-4 Days</p>
            </div>
          </Link>
          <Link
            to="/package3"
            style={{ textDecoration: "none" }}
            state={{ days2: days2 }}
          >
            <div className={styles.shoppingCard}>
              <img src={manshopping} alt="man" />
              <p>6-8 Days</p>
            </div>
          </Link>
          <Link
            to="/package3"
            style={{ textDecoration: "none" }}
            state={{ days3: days3 }}
          >
            <div className={styles.shoppingCard}>
              <img src={manshopping} alt="man" />
              <p>9-11 Days</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/package3"
            state={{ days4: days4 }}
          >
            <div className={styles.shoppingCard}>
              <img src={manshopping} alt="man" />
              <p>12-15 Days</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Package2;
