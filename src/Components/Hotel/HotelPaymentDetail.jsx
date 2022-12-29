import React from "react";
import useSWR from "swr";
import axios from "axios";
import styles from "./hotelPaymentDetail.module.scss";
import hotelpic from "../../assets/hotelpic.png";
import { BsStarFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Couple from "../../assets/joint.png";
import checkmark from "../../assets/mark.png";
import { background } from "@chakra-ui/react";
import Footer from "../Home/Footer";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
// import Logins from '../../Components/Home/Logins'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../Apibaseurl";

const HotelPaymentDetail = () => {
  const { id } = useParams();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/api/user/hotel/${id}`,
    fetcher
  );

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  const API = axios.create({ baseURL: `${baseURL}` });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

  const x = data?.hotel?.price;
  const discount = 150;
  const Totalprice = x - discount;
  const tax = 350;
  console.log("my price is ", Totalprice + tax);
  const amount = Totalprice + tax;
  const key = "rzp_live_aZqAKdQLWLFwpJ";

  const postdatas = async (e) => {
    e.preventDefault();

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

  const navigate = useNavigate();
  const click = () => {
    navigate("/login");
  };

  const clickss = () => {
    navigate("/login");
  };

  const users = JSON.parse(localStorage.getItem("user"));

  
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data);
  return (
    <>
      {/* this page has been devided into two section  section one will be flex-3 and section two will be flex1 */}
      <section className={styles.mainContainer}>
        {/* section left here */}
        <section className={styles.leftMainSection}>
          <div className={styles.leftMainDiv1}>
            <p className={styles.infoText}>Hotel Info</p>
            <hr />
            <div className={styles.hotelInfo}>
              <img src={data?.hotel?.image3?.url} alt="hotel" />
              <div className={styles.infoDetail}>
                <div className={styles.starDiv}>
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                </div>
                <p className={styles.hotelName}>{data?.hotel?.name}</p>
                <div className={styles.locationDiv}>
                  <MdLocationOn className={styles.pinIcon} />
                  <p>{data?.hotel?.location}</p>
                </div>
                <p>129 Verified Ratings</p>
              </div>
            </div>
            <div className={styles.checkinCheckoutDiv}>
              <div className={styles.checkinDiv}>
                <p>Check In</p>
                <p>Mon, 12 Sep 2022</p>
                <p>12:00 PM</p>
              </div>
              <div className={styles.checkOutdiv}>
                <p>Check In</p>
                <p>Mon, 12 Sep 2022</p>
                <p>12:00 PM</p>
              </div>
              <div className={styles.guestDiv}>
                <p>Guests</p>
                <p>2 Guests 1 Room</p>
                <p>1 Night</p>
              </div>
            </div>
            <div className={styles.adultDetailDiv}>
              <div className={styles.adultDetailChild1}>
                <p className={styles.roomText}>1 Room for 2 Adults</p>
                <p className={styles.greenSmallText}>
                  Great Choice! You are saving ₹4963 with your booking
                </p>
                <p className={styles.superiorText}>Superior Room</p>
                <div className={styles.adultIconTextWrapper}>
                  <img src={Couple} alt="couple" />
                  <p>2 Adults</p>
                </div>
                <p>Rooms only | Non Refundable</p>
                <p className={styles.cancelText}>
                  View Booking & Cancellation Policy
                </p>
              </div>
              <div className={styles.adultDetailChild2}>
                <div className={styles.checkOne}>
                  <img src={checkmark} alt="check" />
                  <p>
                    Book now & avail happy hours from 1100 hrs to 1800 hrs and
                    10% discount on food and 20% discount on Buffet
                  </p>
                </div>
                <div className={styles.checkTwo}>
                  <img src={checkmark} alt="check" />
                  <p>Late Check out up-to 2 hours (subject to availability)</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={postdatas}>
            <div className={styles.leftMainDiv2}>
              <p className={styles.guestHeading}>Guest Details</p>
              <hr />
              <div className={styles.formDetailWrapper1}>
                <div className={styles.titleDiv}>
                  <p>Title</p>
                  <select className={styles.selectTitle}>
                    <option>Mr</option>
                    <option>Mrs</option>
                  </select>
                </div>

                <div className={styles.firstNameDiv}>
                  <p>First Name</p>
                  <input
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                  />
                </div>
                <div className={styles.firstNameDiv}>
                  <p>Last Name</p>
                  <input
                    required
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className={styles.formDetailWrapper2}>
                <div className={styles.emailWrapper}>
                  <div className={styles.emailTextWrapper}>
                    <p>Email Address</p>
                    <span className={styles.smallText}>
                      (Your booking voucher will be sent to this email address)
                    </span>
                  </div>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className={styles.mobileNumberWrapper}>
                  <p>Mobile Number</p>
                  <input
                    type="text"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <hr />
              <div className={styles.gstChekboxDiv}>
                <p>Enter GST Details (optional)</p>
                {users ? (
                  <button className={styles.paynow} type="submit">
                    Book Now
                  </button>
                ) : (
                  <button onClick={clickss} className={styles.paynow}>
                    Login Now
                  </button>
                )}
              </div>
            </div>
          </form>
          <div className={styles.leftMainDiv3}>
            <p className={styles.secureText}>Secure Your Stay</p>
            <p className={styles.insuranceText}>
              Insurance will be sent to the registered Email ID, within 48 hours
              of booking
            </p>
            <hr />
            <p className={styles.worryFree}>Worry-Free Hotel Stay!</p>
            <div className={styles.listItem}>
              <ul>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
              </ul>
              <div className={styles.addButtonDiv}>
                <div className={styles.wrapperButton}>
                  <p className={styles.gstValue}>₹29 per person</p>

                  <div className={styles.divs}>
                    <p className={styles.non}>Non Refundable | Includes GST</p>
                  </div>
                  <button className={styles.addbtn}>ADD</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section right here */}
        <section className={styles.rightMainSection}>
          <div className={styles.rightMainDiv1}>
            <p className={styles.priceSummaryText}>Price Summary</p>

            <hr
              style={{
                margin: "3% 0 0 0 ",
                height: "0.1px",
                width: "auto",
                background: "#9F9F9F",
              }}
            />
            <div className={styles.roomCharge}>
              <p>Room Charges (1 room x 1 night)</p>
              <p>${data?.hotel?.price}</p>
            </div>
            <div className={styles.discount}>
              <p>Total Discount</p>
              <p>$150</p>
            </div>
            <div className={styles.coupon}>
              <img src={checkmark} alt="text" />
              <p>GETSETGO applied</p>
            </div>
            <hr
              style={{
                margin: "5% 0 0 0 ",
                height: "0.1px",
                width: "auto",
                background: "#9F9F9F",
              }}
            />
            <div className={styles.afterDiscount}>
              <p>Price After Discounts</p>
              <p>$350</p>
            </div>
            <div className={styles.taxfee}>
              <p>Taxes & Fees</p>
              <p>$350</p>
            </div>
            <hr
              style={{
                margin: "5% 0 0 0 ",
                height: "0.2px",
                width: "auto",
                background: "#9F9F9F",
              }}
            />
            <div className={styles.payableNow}>
              <p>Payable Now</p>
              <p>${amount}</p>
            </div>
            {!users && (
              <button onClick={click} className={styles.logiBtnHere}>
                Login now & get at a lower price
              </button>
            )}
          </div>
          <div className={styles.rightMainDiv2}>
            <p className={styles.offerText}>Offers</p>
            <hr style={{ height: "0.1px", marginTop: "-5%" }} />
            <div className={styles.couponTextWraper}>
              <div className={styles.radios}>
                <input type="radio" />
                <p>GETSETGO</p>
              </div>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>

            <hr style={{ marginTop: "2%" }} />
            <div className={styles.couponTextWraper}>
              <div className={styles.radios}>
                <input type="radio" />
                <p>GETSETGO</p>
              </div>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr style={{ marginTop: "2%" }} />

            <div className={styles.couponTextWraper}>
              <div className={styles.radios}>
                <input type="radio" />
                <p>GETSETGO</p>
              </div>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr style={{ marginTop: "2%" }} />

            <div className={styles.couponTextWraper}>
              <div className={styles.radios}>
                <input type="radio" />
                <p>GETSETGO</p>
              </div>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr style={{ marginTop: "2%" }} />

            <div className={styles.couponTextWraper}>
              <div className={styles.radios}>
                <input type="radio" />
                <p>GETSETGO</p>
              </div>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr style={{ marginTop: "2%" }} />
            <div className={styles.couponTextWraper}>
              <div className={styles.radios}>
                <input type="radio" />
                <p>GETSETGO</p>
              </div>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr style={{ marginTop: "2%" }} />
            <div className={styles.couponTextWraper}>
              <div className={styles.radios}>
                <input type="radio" />
                <p>GETSETGO</p>
              </div>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr style={{ marginTop: "2%" }} />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default HotelPaymentDetail;
