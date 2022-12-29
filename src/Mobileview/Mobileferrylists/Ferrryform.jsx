import React from "react";
import styles from "../Mobilebooking/mobileHotelBookingForm.module.scss";
import useSWR from "swr";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../Components/Apibaseurl";
import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


const Ferrryform = () => {

  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

 

  const [firstName, setFirstName] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [phone, setMobile] = React.useState("");

  const { id } = useParams();
  console.log(" my id is " ,id);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${baseURL}/api/user/ferry/${id}`, fetcher);
  console.log(data);
  let amount = data?.ferry?.price;
  console.log(amount);

  const key = "rzp_live_aZqAKdQLWLFwpJ";

  const API = axios.create({ baseURL: `${baseURL}` });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

 
  const postdatas = async (e) => {
    // e.preventDefault();

    let { data } = await API.post(
      `${baseURL}/api/user/book/ferry/${id}`,
      {
        firstName,

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

    console.log("my data is ", data);
  };
  const users = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  const clickss = () => {
    navigate("/login");
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  const open2 = true;
  return (
    <>
      <center className={styles.heading}>Ferry Detail</center>
      <div className={styles.hotelbookform}>
        <form onSubmit={handleSubmit(postdatas)}>
          <div className={styles.formwrapper}>
            <div className={styles.namewrapper}>
              <label htmlFor="">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Frist Name"
                required
                value={firstName}
              />
            </div>

            <div className={styles.namewrapper}>
              <label htmlFor="">Nationality</label>
              <input type="text" placeholder="Jaipur" required />
            </div>

            <div className={styles.namewrapper}>
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                value={email}
                required
              />
            </div>

            <div className={styles.namewrapper}>
              <label htmlFor="">Mobile Number</label>
              <input
                onChange={(e) => setMobile(e.target.value)}
                type="Mobile"
                placeholder="Mobile number"
                value={phone}
                required
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

export default Ferrryform;
