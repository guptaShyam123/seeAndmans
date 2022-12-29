import React from "react";
import useSWR from "swr";

import styles from "./mobileCabBookForm.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../Components/Apibaseurl";
import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Packbookform = () => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const navigate = useNavigate();

  const clickss = () => {
    navigate("/login");
  };

  const { id } = useParams();

  const [adult1, setAdult1] = React.useState("");
  const [adult2, setAdult2] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [city, setCity] = React.useState("");
  const [address, setAddress] = React.useState("");

  const API = axios.create({ baseURL: `${baseURL}` });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${baseURL}/api/user/package/${id}`, fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data);

  const amount = data?.mypackage?.price;

  console.log(amount);

  const key = "rzp_live_aZqAKdQLWLFwpJ";

  const postdata = async (e) => {
    // e.preventDefault();
    const { data } = await API.post(
      `${baseURL}/api/user/book/package/${id}`,
      {
        adult1,
        adult2,
        email,
        mobile,
        city,
        address,
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data);

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

    console.log("my data is ", data);
  };

  const users = JSON.parse(localStorage.getItem("user"));

  const open2 = true;
  return (
    <>
      <center className={styles.heading}>Traveller Information</center>
      <center className={styles.heading1}>Trip Details</center>
      <div className={styles.cabbookform}>
        <form onSubmit={handleSubmit(postdata)}>
          <div className={styles.formwrapper}>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Adult-1</label>
              <input
                required
                type="text"
                onChange={(e) => setAdult1(e.target.value)}
                placeholder="Enter Name"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Adult-2</label>
              <input
                required
                type="text"
                onChange={(e) => setAdult2(e.target.value)}
                placeholder="Enter Name"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Email</label>
              <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>

            <div className={styles.addresswrapper}>
              <label htmlFor="">Mobile</label>
              <input
                required
                type="text"
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Contact No."
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">City</label>
              <input
                required
                type="text"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Address</label>
              <input
                required
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
              />
            </div>
            <div className={styles.savebtnDiv}>
              {users ? (
                <button
                  disabled={isSubmitting}
                  className={styles.paynow}
                  type="submit"
                >
                  Book Now
                </button>
              ) : (
                <button onClick={clickss} className={styles.paynow}>
                  Login Now
                </button>
              )}
              {isSubmitting && (
                <span style={{ fontWeight: "bold", marginLeft: "1vmax" }}>
                  <Backdrop
                    open={open2}
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                  >
                    <CircularProgress color="inherit" />
                    <div
                      style={{
                        textAlign: "center",
                        display: "flex",
                        marginTop: "100px",
                        fontFamily: "Poppins",
                        color: "white",
                        fontWeight: "500",
                      }}
                    >
                      please don't go back or refresh
                    </div>
                  </Backdrop>
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Packbookform;
