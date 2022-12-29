import React from "react";
import axios from "axios";
import styled from "styled-components";
import star from "../../assets/star.png";
import { MdLocationPin } from "react-icons/md";
import banner from "../../assets/hotelbanner.avif";
import styles from "./mobileHotelBookingForm.module.scss";
import book from "../../assets/hotelbook.jpeg";
import useSWR from "swr";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../Components/Apibaseurl";
import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Image = styled.img`
  width: 100vw;
  height: 60vh;
  background-position: center;
`;
const Select = styled.p`
  font-size: 22px;
  color: #145843;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;

const Img = styled.img`
  width: 40%;
  padding: 2% 0%;
  height: 30vh;
  object-fit: cover;
  border-radius: 20px;
`;
const Card = styled.div`
  /* background-color: pink;; */
  display: flex;
  /* background: white; */
  gap: 20px;
  padding: 0 2%;
  /* height:30vh; */

  justify-content: space-around;
  align-items: center;
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.27);
  border-radius: 10px;
`;

const Maindiv = styled.div`
  /* background-color: red; */
  /* height:20px; */
  display: flex;
  flex-direction: column;
  /* margin-top:30px; */
  /* background-color:red; */
  margin: 5% 2%;
  gap: 10px;
  height: fit-content;

  /* padding: 2% 2%;; */
`;
const Ul = styled.ul`
  /* gap:10px; */
`;
const Li = styled.li`
  color: black;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: 1px;
  /* gap:10px; */
`;
const Lidiv = styled.div`
  display: flex;
  flex-direction: column;
  /* background:red; */

  padding: 2% 0;
  /* height:30px; */
  /* align-items: center; */
  /* gap:10px; */
  /* align-items : center; */
`;

const Div = styled.div`
  /* height:10px; */
  /* background-color:blue; */
  /* text-align: left; */
  align-items: left;
`;
const Dollar = styled.p`
  color: red;
  font-weight: 700;
  font-size: 19px;
  font-family: Poppins;
  /* text-align: right; */
`;
const Tx = styled.p`
  color: black;
  font-weight: 600;
  font-size: 15px;
  text-align: right;
`;

const Button = styled.button`
  background-color: #145843;
  color: white;
  border: none;
  outline: none;
  padding: 4% 0;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  width: 100px;

  /* align-items:right; */
  margin-bottom: 10px;
`;
const Buttondiv = styled.div`
  align-items: right;
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Star = styled.div`
  display: flex;
`;
const St = styled.img`
  height: fit-content;
  width: fit-content;
`;
const Location = styled.div`
  display: flex;
  align-items: center;
`;
const Loc = styled(MdLocationPin)`
  /* height:fit-content;
width:fit-content; */
`;
const Lname = styled.p`
  font-size: 17px;
  color: #000000;
  font-weight: 500;
  font-family: Poppins;
`;
const Des = styled.p`
  font-size: 12px;
  color: black;
  font-weight: 500;
  text-align: justify;
  font-family: Poppins;
`;
const Am = styled.p`
  font-size: 18px;
  color: #145843;
  font-weight: 500;
  font-family: Poppins;
`;
const Checkdiv = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  background-color: #ffffff;
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  padding: 2% 2%;
  width: 90vw;
`;
const First = styled.div`
  display: flex;
  /* align-items : center; */
  flex-direction: column;
  gap: 3px;
  text-align: left;
`;

const P = styled.p`
  font-size: 15px;
  color: black;
  font-weight: 600;
  font-family: Poppins;
  text-align: left;
`;
const Hotelbookingpage = () => {
  // const maxlength = 250;
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  const { id } = useParams();
  console.log(id);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${baseURL}/api/user/hotel/${id}`, fetcher);

  console.log(data);
  const prices = (data?.hotel?.price / 3).toFixed(2);
  console.log("price is", prices);
  const des = data?.hotel?.description?.length;
  const y = 800;
  const total = des - y;
  console.log("my des is ", total);
  const API = axios.create({ baseURL: `${baseURL}` });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

  const key = "rzp_live_aZqAKdQLWLFwpJ";
  const amount = data?.hotel?.price;

  const postdatas = async (e) => {
    let { data } = await API.post(
      `${baseURL}/api/user/book/hotel/${id}`,
      {
        firstName,
        lastName,
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
      <Image src={book} />
      <Maindiv>
        <Card>
          <Img src={data?.hotel?.image2?.url} />
          <Lidiv>
            <Ul>
              <Star>
                <St src={star} />
                <St src={star} />
                <St src={star} />
              </Star>
              <Div>
                <Dollar>{data?.hotel?.name}</Dollar>
                <Location>
                  <Loc />
                  <Lname>{data?.hotel?.location}</Lname>
                </Location>
                <Am>${data?.hotel?.price}</Am>

                <Des> {data?.hotel?.description.substring(0, 250)}... </Des>
              </Div>
            </Ul>
            <Buttondiv></Buttondiv>
          </Lidiv>
        </Card>
      </Maindiv>

      <center>
        <Checkdiv>
          <First>
            <P>Check In</P>
            <P>Date</P>
            <P>Time</P>
          </First>
          <First>
            <P>Check Out</P>
            <P>Mon</P>
            <P>Time</P>
          </First>

          <First>
            <P>Guest</P>
            <P>2 Guest 1 Room</P>
            <P>1 Night</P>
          </First>
        </Checkdiv>
      </center>

      <center className={styles.heading}>Guest Details</center>
      <div className={styles.hotelbookform}>
        <form onSubmit={handleSubmit(postdatas)}>
          <div className={styles.formwrapper}>
            <div className={styles.genderwrapper}>
              <div className={styles.namewrapper}>
                <label htmlFor="">Phone</label>
                <input
                  type="phone"
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className={styles.namewrapper}>
              <label htmlFor="">First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Frist Name"
                required
              />
            </div>
            <div className={styles.namewrapper}>
              <label htmlFor="">Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <div className={styles.namewrapper}>
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
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

export default Hotelbookingpage;
