import React from "react";
import useSWR from "swr";
import styles from "./package1.module.scss";
import { useNavigate, useLocation, Link } from "react-router-dom";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/grayline.png";
import close from "../../assets/close.png";
import adventure from "../../assets/adventure.png";
import artist from "../../assets/artist.png";
import package1 from "../../assets/package4.svg";
import {baseURL} from "../../Components/Apibaseurl"

const Package4 = () => {
  const location = useLocation();

  const days1 = location?.state?.days1;
  const days2 = location?.state?.days2;

  console.log("mera bhai", days2);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/api/user/random/hotels`,
    fetcher
  );

  console.log(
    "my data is ",
    data?.data.map((value) => value.name)
  );
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (error) return "An error has occurred.";
  if (!data) return <h5>Loading..</h5>
   
  

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
          <img src={greenline} alt="line" />
          <img src={greenline} alt="line" />

          <img src={greyline} alt="line" />
        </div>
        <center className={styles.when}>
          <span>What do you like to see and do?</span>
        </center>

        <div className={styles.travelContainer}>
          {data?.data?.map((i) => {
            return (
              <>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="/customazie"
                  state={{ days1: days1 , days2: days2}}
                >
                  <div
                    style={{ cursor: "pointer" }}
                    className={styles.travelCard}
                  >
                    <img src={i.image?.url} alt="" />
                    <p>{i.name}</p>
                    <p>{i.location}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Package4;
