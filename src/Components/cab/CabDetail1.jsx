import React from "react";
import useSWR from "swr";
import styles from "./cabDetail.module.scss";
import tick from "../../assets/Doc.png";
import driver from "../../assets/driver.png";
import taxi from "../../assets/Taxi.png";
import spray from "../../assets/Spray.png";
import Footer from "../Home/Footer";
import { useParams , useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import {baseURL} from "../../Components/Apibaseurl"

const CabDetail1 = () => {
  const [genders, setGender] = React.useState("");

  const { id } = useParams();

  const navigate = useNavigate()
  const clickss = ()=>{
    navigate("/login")
  }

  const [pickupAddress, setPickupAddress] = React.useState("");
  const [ropoffAddress, setEmail2] = React.useState("");
  const [travellerName, setEmail3] = React.useState("");
  const [email, setEmail4] = React.useState("");
  const [gender, setEmail5] = React.useState("");
  const [phone, setEmail6] = React.useState("");

  const API = axios.create({ baseURL: "https://travel-andman.herokuapp.com/" });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/api/user/cab/${id}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data);
  const amount = data?.cab?.price;
  console.log("amount", amount);

  const postdatas = async (e) => {
    const key = "rzp_live_aZqAKdQLWLFwpJ";

    e.preventDefault();
    const { data } = await API.post(
      `${baseURL}/api/user/book/cab/${id}`,
      {
        pickupAddress,
        
        
        ropoffAddress,
        travellerName,
        email,
        phone,
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: "INR",
      description: "Acme Corp",
      image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      order_id: data.order.id,
      callback_url: "http://localhost:5000/api/paymentverification",
      prefill: {
        email: "gaurav.kumar@example.com",
        contact: +919900000000,
      },
      config: {
        display: {
          blocks: {
            hdfc: {
              //name for HDFC block
              name: "Pay using HDFC Bank",
              instruments: [
                {
                  method: "upi",
                },
                {
                  method: "card",
                },
                {
                  method: "card",
                  issuers: ["HDFC"],
                },
                {
                  method: "netbanking",
                  banks: ["HDFC"],
                },
              ],
            },
            other: {
              //  name for other block
              name: "Other Payment modes",
              instruments: [
                {
                  method: "card",
                  issuers: ["ICIC"],
                },
                {
                  method: "netbanking",
                },
              ],
            },
          },
          hide: [
            {
              method: "upi",
            },
          ],
          sequence: ["block.hdfc", "block.other"],
          preferences: {
            show_default_blocks: false, // Should Checkout show its default blocks?
          },
        },
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      modal: {
        ondismiss: function () {
          if (confirm("Are you sure, you want to close the form?")) {
            txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
          } else {
            txt = "You pressed Cancel!";
            console.log("Complete the Payment");
          }
        },
      },
    };

    var rzp1 = new window.Razorpay(options);

    rzp1.open();
    console.log(data);

    // alert("booking successful")
  };

  console.log(id, "id in cab page");
  const clickme = ()=>{
    navigate("/login")
  }

  const users = JSON.parse(localStorage.getItem("user"))?.token;

  return (
    <>
      <center>
        <div className={styles.detailCardWrapper}>
          <div className={styles.imageDiv}>
            <img src={data?.cab?.image?.url} alt="cab" />
          </div>
          <div className={styles.cabDetailDiv}>
            <p className={styles.cabNameText}>{data?.cab?.cabModal}</p>
            <p className={styles.cabTitleText}>SUV . AC . 5 Seats</p>
            <p className={styles.cabSize}>{data?.cab?.carSize}</p>
            <div className={styles.cabDescDiv}>
              <p className={styles.cabDesc}>
                {data?.cab?.desc}
              </p>
            </div>
            <div className={styles.sanitizedDiv}>
              <img src={tick} />
              <p>Sanitizers Installed</p>
            </div>
          </div>
          <div className={styles.bookNowDiv}>
            <div className={styles.cancellation}>
              Free cancelltion till1 hour of departure
            </div>
            <div className={styles.cheaperDiv}>{data?.cab?.offers}% cheaper than usual</div>
            <div className={styles.priceDiv}>
              <p className={styles.smallPrice}>$726</p>
              <p className={styles.bigPrice}>${data?.cab?.price}</p>
            </div>
          </div>
        </div>
      </center>
      <div className={styles.secondaryDiv}>
        <div className={styles.secondaryOne}>
          <div className={styles.div1}>
            <p className={styles.driverText}>Driver & Cab details</p>
            <p className={styles.detailText}>
              Cab and driver details will be shared up to 30 mins prior to
              departure.
            </p>
          </div>

          <div className={styles.div2}>
            <p className={styles.text1}>Book Hygenic Cabs</p>

            <div className={styles.mainmask}>
              <div className={styles.mask1}>
                <img src={driver} />
                <p>Drivers with Mask</p>
              </div>
              <div className={styles.mask2}>
                <img src={taxi} />
                <p>Sanitized Cabs</p>
              </div>
              <div className={styles.mask3}>
                <img src={spray} />
                <p>Hand Sanitizers</p>
              </div>
            </div>
          </div>

          <div className={styles.signup}>
          {
            users ? "" :  <p onClick={clickme} > Login Now</p>
          }
           
            <span>View your traveller infotrmation & unlock deals</span>
          </div>

          <form onSubmit={postdatas} className={styles.form}>
            <p className={styles.hygenic}>Trip details</p>
            <div className={styles.pickupDiv}>
              <p className={styles.pickupTextBold}>Pick-up Address</p>
              <p className={styles.pickupsmalTxt}>
                (Optional - This will help you avoid any extra charges after the
                trip)
              </p>
            </div>
            <input
              onChange={(e) => setPickupAddress(e.target.value)}
              type="text"
              className={styles.addressInput}
              placeholder="Enter Pick up address"
              required
            />
            <div className={styles.pickupDiv}>
              <p className={styles.pickupTextBold}>Drop-off Address</p>
              <p className={styles.pickupsmalTxt}>
                (Optional - This will help you avoid any extra charges after the
                trip)
              </p>
            </div>
            <input
              onChange={(e) => setEmail2(e.target.value)}
              type="text"
              className={styles.addressInput}
              placeholder="Enter Drpo-off  address"
              required
            />
            <p className={styles.confirmText}>Confirm Traveller information</p>
            <div className={styles.inputsWrapper}>
              <div className={styles.nameInputDiv}>
                <p>Name</p>
                <input
                  onChange={(e) => setEmail3(e.target.value)}
                  type="text"
                  placeholder="Enter Your Full Name"
                  required
                />
              </div>
              <div className={styles.genderInputDiv}>
                <p>Gender</p>
                <div className={styles.checkBoxWrapper}>
                  <div className={styles.maleWrapper}>
                    <input
                      type="radio"
                      required
                      label="Male"
                      name="gender"
                      checked={genders === "Male"}
                      value="Male"
                      onChange={() => setGender("Male")}
                    />
                    <p>Male</p>
                  </div>
                  <div className={styles.femaleWrapper}>
                    <input
                      type="radio"
                      required
                      label="Female"
                      name="gender"
                      checked={genders === "Female"}
                      value="Female"
                      onChange={() => setGender("Female")}
                    />
                    <p>Female</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.emailNumberWrapper}>
              <div className={styles.emailWrapper}>
                <p>Email id</p>
                <input
                  value={email}
                  onChange={(e) => setEmail4(e.target.value)}
                  type="email"
                  placeholder="Enter Email id"
                  required
                />
              </div>
              <div className={styles.contactWrapper}>
                <p>Contact</p>
                <div className={styles.selectInput}>
                  <input style={{width:"40px"}}
                    onChange={(e) => setEmail5(e.target.value)}
                    type="text"
                    required
                    placeholder="91+"
                 />
                   
                  <input
                    onChange={(e) => setEmail6(e.target.value)}
                    placeholder="Enter Contact no"
                  />
                </div>
              </div>
            </div>
            
            {
              users? <button  className={styles.open} type="submit">
             
              Book Now
              </button> : <button onClick={clickss}  className={styles.open} >
             Login Now
              </button> 
            }
          </form>

          <div className={styles.catgoryWrapper}>
            <p className={styles.readBefore}>Read before you book!</p>

         
          </div>
        </div>
        <div className={styles.secondaryTwo}>
          <div className={styles.priceSummaryWrapper}>
            <p className={styles.priceSummary}>Price Summary</p>
            <hr />
           
            <hr />
            <div className={styles.paymentNow}>
              <p>Make Full Payment Now</p>
              <p>$45</p>
            </div>
            <hr style={{ marginTop: "2vmax" }} />
           
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
};

export default CabDetail1;
