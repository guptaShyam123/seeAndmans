import React from "react";
import styles from "./package1.module.scss";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/grayline.png";
import close from "../../assets/close.png";
import sun from "../../assets/Sun.png";
import { useNavigate, Link } from "react-router-dom";

const Package1 = () => {
  const [data, setData] = React.useState({
    deg: " 24 / 29 Degree",
  });

  const [data1, setData1] = React.useState({
    deg: " 24 / 30 Degree",
  });

  const [data2, setData2] = React.useState({
    deg: " 24 / 30 Degree",
  });
  const [data3, setData3] = React.useState({
    deg: " 24 / 29 Degree",
  });
  const [data4, setData4] = React.useState({
    deg: " 23 / 29 Degree",
  });
  const [data5, setData5] = React.useState({
    deg: " 23 / 30 Degree",
  });
  const [data6, setData6] = React.useState({
    deg: " 23 / 32 Degree",
  });
  const [data7, setData7] = React.useState({
    deg: " 25 / 33 Degree",
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
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
        </div>
        <center className={styles.when}>
          <span>When are you travelling to Port Blair</span>
        </center>

        <div style={{ cursor: "pointer" }} className={styles.monthCOntainer}>
          <Link to="/package2">
            <div className={styles.monthCard}>
              <p>Sept</p>
              <button>Second Best</button>
              <div className={styles.weatherText}>
                <img src={sun} alt="sun" />
                <span>24 / 29 Degree</span>
              </div>
            </div>
          </Link>

          <Link to="/package2">
            {" "}
            <div className={styles.monthCard}>
              <p>Oct</p>
              <button>Second Best</button>
              <div className={styles.weatherText}>
                <img src={sun} alt="sun" />
                <span>24 / 30 Degree</span>
              </div>
            </div>
          </Link>
          <Link to="/package2">
            {" "}
            <div className={styles.monthCard}>
              <p>Nov</p>
              <button>Second Best</button>
              <div className={styles.weatherText}>
                <img src={sun} alt="sun" />
                <span>24 / 30 Degree</span>
              </div>
            </div>
          </Link>

          <Link to="/package2">
            {" "}
            <div
              className={styles.monthCard}
              onClick={() => handleNavigate("/package2")}
            >
              <p>Dec</p>
              <button>Second Best</button>
              <div className={styles.weatherText}>
                <img src={sun} alt="sun" />
                <span>24 / 29 Degree</span>
              </div>
            </div>
          </Link>
          <Link
            to="/package2"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <div
              className={styles.monthCard}
              onClick={() => handleNavigate("/package2")}
            >
              <p>Jan</p>
              <button>Second Best</button>
              <div className={styles.weatherText}>
                <img src={sun} alt="sun" />
                <span>23 / 29 Degree</span>
              </div>
            </div>
          </Link>
          <Link
            to="/package2"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <div
              className={styles.monthCard}
              onClick={() => handleNavigate("/package2")}
            >
              <p>Feb</p>
              <button>Second Best</button>
              <div className={styles.weatherText}>
                <img src={sun} alt="sun" />
                <span>23 / 30 Degree</span>
              </div>
            </div>
          </Link>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Mar</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 32 Degree</span>
            </div>
          </div>

          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/package2"
          >
            {" "}
            <div
              className={styles.monthCard}
              onClick={() => handleNavigate("/package2")}
            >
              <p>Apr</p>
              <button>Second Best</button>
              <div className={styles.weatherText}>
                <img src={sun} alt="sun" />
                <span>25 / 33 Degree</span>
              </div>
            </div>
          </Link>

          <div className={styles.textwrapper}>
            Issue of online vouchers are restricted for departure within the
            next 9 months. If you are planning for a later date, contact us
          </div>
        </div>
      </div>
    </>
  );
};

export default Package1;
