import React from 'react'
import banner from "../../assets/sightbanner.avif"
import styled from "styled-components"
import { useParams , useNavigate } from 'react-router-dom';
import styles from "./mobileCabBookForm.module.scss";
import useSWR from 'swr'
import axios from "axios"
import {baseURL} from "../../Components/Apibaseurl"

const Img = styled.img`
 width:100vw;
 height:40vh;
  /* background-position:center; */
  object-fit: cover;
`
const Maindiv = styled.div`
 display:flex;
 flex-direction: column;
 gap:5px;
 justify-content:center;
 align-items: center; 
/* background:red; */
 padding: 0 0%;;
 margin-top:20px;
`

const Neil = styled.p`
 color:black;
 font-size:23px;
 font-weight:700;
 /* margin-top:20px; */
 /* text-align :left; */

`
const Neil1 = styled.p`
 color:black;
 font-size:23px;
 font-weight:700;
 /* margin-top:20px; */
 /* text-align :left; */

`
const Abot = styled.p`
  font-size:22px;
  color:black;
  font-weight:600;
  /* text-align: left; */
  /* align-items:left; */
  /* background:red; */

`
const Lorem = styled.p`
 font-size:14px;
 color: black;
 /* text-align: justify; */
 width:70%;
 /* background:red; */
`

const Lorem1 = styled.p`
 font-size:17px;
 color: black;
 width:100%;
 font-weight: 600;
 text-align: center;
 /* text-align: justify; */
 /* width:70%; */
 /* background:red; */
`
const Place = styled.p`
  font-size:22px;
  color:black;
  font-weight:600;

`
const Ul = styled.ul`
/* background:red; */
width:50vw;
align-items: center;
justify-content: center;
padding : 0 4%;
/* margin-left:30px; */
`
const Li = styled.li`
font-size:20px;
color:black;
font-weight:500;
/* text-align:center; */

`
const Important = styled.p`
 font-size:22px;
  color:black;
  font-weight:600;
`
const Sightbooking = () => {

  const {id} = useParams()

  const navigate = useNavigate()
  const clickss = ()=>{
    navigate("/login")
  }

  
  const [numofPeople, setNumofpeople] = React.useState("");
  const [name, setName] = React.useState("");
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

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/api/user/sight/${id}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data);

  const amount = data?.sight?.price

  const key = "rzp_live_aZqAKdQLWLFwpJ";
  const postdata = async (e) => {
    e.preventDefault();

    const { data } = await API.post(
      `${baseURL}/api/user/book/sight/${id}`,
      {
        numofPeople,
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

  const users =  JSON.parse(localStorage.getItem("user"))
  return (
<>

<Img src={banner} />

<Maindiv>
<img  style={{width:"300px" }} src={data?.sight?.image?.url} />
<Neil1>${data?.sight?.price}</Neil1>
<Neil>{data?.sight?.sightseeing}</Neil>
<Abot>{data?.sight?.location}</Abot>

<Place>Place You Will Visit</Place>
<Ul>
<Li>Bharatpur Beach</Li>
<Li>Natural Rock</Li>
<Li>Laxman Park</Li>

</Ul>
<Lorem1>{data?.sight?.desc}</Lorem1>
</Maindiv>


<center className={styles.heading}>Book Your Sight</center>
<div className={styles.cabbookform}>
  <form onSubmit={postdata}>
    <div className={styles.formwrapper}>
      <div className={styles.addresswrapper}>
        <label htmlFor="">Number of People</label>
        <input required onChange={(e) => setNumofpeople(e.target.value)}  type="text" placeholder="2- 20" />
      </div>
      <div className={styles.addresswrapper}>
        <label htmlFor="">Name</label>
        <input required    onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter  Name" />
      </div>
      <div className={styles.addresswrapper}>
        <label htmlFor="">Email</label>
        <input required   onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
      </div>
      <div className={styles.addresswrapper}>
        <label htmlFor="">Mobile</label>
        <input required   onChange={(e) => setMobile(e.target.value)} type="text" placeholder="Enter Mobile" />
      </div>

      <div className={styles.savebtnDiv}>
      {
        users? <button  className={styles.paynow} type="submit">
       
        Book Now
        </button> : <button onClick={clickss}  className={styles.paynow} >
       Login Now
        </button> 
      }
      </div>
    </div>
  </form>
</div>

</>
  )
}

export default Sightbooking