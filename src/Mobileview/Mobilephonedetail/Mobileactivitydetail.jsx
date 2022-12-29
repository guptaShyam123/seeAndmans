import React from "react";
import banner from "../../assets/activitybanner.avif";
import useSWR from "swr";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./mobileCabBookForm.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../Components/Apibaseurl";
import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Img = styled.img`
  width: 100vw;
  background-position: center;
`;
const Maindiv = styled.div`
  /* background:red; */
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  padding: 2% 4%;
  align-items: center;
`;
const Name = styled.p`
  font-size: 18px;
  color: #000000;
  font-weight: 700;
  text-align: center;
  /* background-color:red; */
  width: 30vw;
`;
const Lorem = styled.p`
  font-size: 15px;
  font-family: Poppins;
  color: #000000;
  font-weight: 500;
  text-align: justify;

  width: 70vw;
`;
const Calenderdiv = styled.div`
  /* margin:2% 2% 0 2%; */
  align-items: center;
`;
const Calendars = styled(Calendar)`
  width: 70vw;
  background: #ffffff;
  font-size: 20px;
  color: black;
`;
const Price = styled.p`
  color: #145843;
  font-size: 19px;
  font-weight: 700;
`;
const Mobileactivitydetail = () => {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const [value, onChange] = React.useState(new Date());

  const [travels, setTravel] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const navigate = useNavigate();
  const clickss = () => {
    navigate("/login");
  };
  const { id } = useParams();
  const [datas, setdatas] = React.useState([]);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${baseURL}/api/user/activity/${id}`, fetcher);

  console.log(data);

  // const amount = 1;
  const API = axios.create({ baseURL: `${baseURL}` });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  const amount = data?.activity?.price;

  const postdatas = async (e) => {
    const key = "rzp_live_aZqAKdQLWLFwpJ";

    const { data } = await API.post(
      `${baseURL}/api/user/book/activity/${id}`,
      {
        travels,
        name,
        email,
        mobile,
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
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  const users = JSON.parse(localStorage.getItem("user"));
  const open2 = true;

  return (
    <>
      <Img src={banner} />
      <Maindiv>
        <img style={{ width: "80vw" }} src={data?.activity?.image?.url} />
        <Name>{data?.activity?.activityType}</Name>
        <Price>${data?.activity?.price}</Price>
        <Lorem>{data?.activity?.description}</Lorem>
        <Calenderdiv>
          <Calendars onChange={onChange} value={value} />
        </Calenderdiv>
      </Maindiv>

      <center className={styles.heading}>Trip Details</center>
      <div className={styles.cabbookform}>
        <form onSubmit={handleSubmit(postdatas)}>
          <div className={styles.formwrapper}>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Number Of Travellers</label>
              <input
                required
                value={travels}
                onChange={(e) => setTravel(e.target.value)}
                type="text"
                placeholder="Number Of Travellers"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder="Enter Name"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </div>

            <div className={styles.addresswrapper}>
              <label htmlFor="">Phone </label>
              <input
                required
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Phone"
              />
            </div>

            <div className={styles.savebtnDiv}>
              {users ? (
                <button className={styles.paynow} type="submit">
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

export default Mobileactivitydetail;
