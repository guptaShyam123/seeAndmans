import React from "react";
import styles from "./package1.module.scss";
import useSWR from "swr";
import { useNavigate, useLocation, Link } from "react-router-dom";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/grayline.png";
import close from "../../assets/close.png";
import adventure from "../../assets/adventure.png";
import artist from "../../assets/artist.png";

const Package3 = (props) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://travel-andman.herokuapp.com/api/user/get/cabs",
    fetcher
  );

  // const z = data?.cabs.find(i => i.carSize )
  // console.log("my x is" , z)

  const navigate = useNavigate();
  const location = useLocation();

  const days1 = location?.state?.days1;
  const days2 = location?.state?.days2;
  const days3 = location?.state?.days3;
  const days4 = location?.state?.days4;

  console.log("mera", days2);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const click = () => {
    navigate("/package4");
  };

  const [type, setType] = React.useState({
    type: "Adventure & Outdoor",
  });

  const [type1, setType1] = React.useState({
    type: "Art & Culture",
  });
  const [type2, setType2] = React.useState({
    type: "Art & Culture",
  });
  const [type3, setType3] = React.useState({
    type: "Art & Culture",
  });

  const [type4, setType4] = React.useState({
    type: "Art & Culture",
  });

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log("m", data);
  return (
    <>
      <div className={styles.mainContainer}>
        <span className={styles.planning}>Planning Your Trip To</span>
        <div className={styles.iconTextwrapper}>
          <p className={styles.andman}>Andman</p>
          <div
            style={{
              marginLeft: "-4vw",
              display: "flex",
              flexDirection: "column",
              padding: "2%",
            }}
          >
            <h4
              style={{
                // padding: "4% 4%",
                //  width:"100%",
                padding: "1% 1%",
                textAlign: "center",
                background: "#FFFFFF",
                boxShadow: "10px 11px 25px rgba(0, 0, 0, 0.1)",
                position: "absolute",
              }}
            ></h4>
          </div>

          <img src={close} alt="" />
        </div>

        <div className={styles.lineContainer}>
          <img src={greenline} alt="line" />
          <img src={greenline} alt="line" />
          <img src={greenline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
        </div>
        <center className={styles.when}>
          <span>What do you like to see and do?</span>
        </center>

        <div className={styles.travelContainer}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/package4"
            state={{ days1: days1 }}
          >
            {" "}
            <div
              style={{ cursor: "pointer", textDecoration: "none" }}
              className={styles.travelCard}
            >
              <img src={adventure} alt="" />
              <p>Adventure & Outdoor</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/package4"
            state={{ days2: days2 }}
          >
            {" "}
            <div style={{ cursor: "pointer" }} className={styles.travelCard}>
              <img src={adventure} alt="" />
              <p>Art & Culture</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/package4"
            state={{ type2: type2 }}
          >
            <div style={{ cursor: "pointer" }} className={styles.travelCard}>
              <img src={adventure} alt="" />
              <p>Art & Culture</p>
            </div>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/package4"
            state={{ type3: type3 }}
          >
            {" "}
            <div style={{ cursor: "pointer" }} className={styles.travelCard}>
              <img src={adventure} alt="" />
              <p>Art & Culture </p>
            </div>
          </Link>
          <Link
            to="/package4"
            state={{ type4: type4 }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <div style={{ cursor: "pointer" }} className={styles.travelCard}>
              <img src={adventure} alt="" />
              <p>Art & Culture</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Package3;
