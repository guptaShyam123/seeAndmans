import React from 'react'
import styles from "./package1.module.scss";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/grayline.png";
import close from "../../assets/close.png";
import sun from "../../assets/Sun.png";
import manshopping from "../../assets/mansshopping.png";
import adventure from "../../assets/adventure.png";
import artist from "../../assets/artist.png";
import Scroll from "react-scroll";
import { useNavigate } from 'react-router-dom';

const Mobilecustome2 = () => {
    const nav = useNavigate()
    const clickme = ()=>{
        nav("/custom3")
    }
  return (
    <>
    <div className={styles.mainContainer}>
<span  className={styles.planning}>Planning Your Trip To</span>
<div  className={styles.iconTextwrapper}>
  <p className={styles.andman}>Andman</p>
  {/* <img src={close} alt="" /> */}
</div>

<div className={styles.lineContainer}>
  <img src={greenline} alt="line" />
  <img src={greenline} alt="line" />

</div>
<center className={styles.when}>
  <span>What’s the duration of your holiday?</span>
</center>

<div onClick={clickme}  className={styles.shoppingContainer}>
  <div className={styles.shoppingCard}>
    <img src={manshopping} alt="man" />
    <p>3-4 Days</p>
  </div>
  <div className={styles.shoppingCard}>
    <img src={manshopping} alt="man" />
    <p>6-8 Days</p>
  </div>
  <div className={styles.shoppingCard}>
    <img src={manshopping} alt="man" />
    <p>9-11 Days</p>
  </div>
  <div className={styles.shoppingCard}>
    <img src={manshopping} alt="man" />
    <p>12-15 Days</p>
  </div>
</div>
</div>
    </>
  )
}

export default Mobilecustome2