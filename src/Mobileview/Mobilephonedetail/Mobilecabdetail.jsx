import React from 'react'
import useSWR from 'swr'
import cab from "../../assets/mobilecabbanner.avif"
import styled from "styled-components"
import frame from "../../assets/cabframe.avif"
import styles from "./mobileCabBookForm.module.scss";
import { useParams , useNavigate } from 'react-router-dom';
import axios from "axios"
import {baseURL} from "../../Components/Apibaseurl"
import {useForm} from "react-hook-form"
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


const Imgge = styled.img`
 width:100vw;

`


const Img = styled.img`
 width:50%;
 /* padding: 2% 0%; */
 object-fit: cover;
 border-radius: 20px;
`
const Card = styled.div`
 /* background-color: pink;; */
   display:flex;
/* background: white; */
   gap:20px;
   justify-content:space-around;
   /* align-items: center; */
   box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.27);
   border-radius: 10px;
   padding:2% 0%;
`

const Maindiv = styled.div`
/* background-color: red; */
/* height:20px; */
display:flex;
flex-direction: column;
/* margin-top:30px; */
/* background-color:red; */
margin:5% 2%;
gap:16px;
height:fit-content;

/* padding: 2% 2%;; */

`
const Ul = styled.ul`
/* gap:10px; */
`
const Li = styled.li`
color:black;
font-size:15px;
font-family:Poppins;
font-weight:500;
letter-spacing: 1px;
/* gap:10px; */


`
const Lidiv = styled.div`
  display:flex;
  flex-direction: column;
  /* background:red; */
  padding: 1% 0;
  /* height:30px; */
  /* align-items: center; */
  /* gap:10px; */
  /* align-items : center; */

`

const Div = styled.div`
  /* height:10px; */
  /* background-color:blue; */
  /* text-align: left; */
  /* align-items:left; */
`
const Dollar = styled.p`
   color:red;
   font-weight: 700;
   font-size:19px;
   /* text-align: right; */

`
const Tx = styled.p`
color:black;
font-weight: 600;
font-size:15px;
/* text-align: right; */
`

const Button = styled.button`
   background-color:#145843;
   color:white;
   border:none;
   outline: none;
   padding: 4% 0;border-radius:10px;
   font-size:13px;
   font-weight:600;
   width:100px;
   /* align-items:right; */
   margin-bottom: 10px;

`
const Lorem = styled.p`
 font-size:10px;
 color:black;
 font-weight: 500;
  width:40vw;
`
const Buttondiv = styled.div`
align-items:right;
display: flex;
justify-content:right;
margin-top:10px;
`

const Mobilecabdetail = () => {

  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const  [genders , setGender] = React.useState("")

  const {id} = useParams()

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

  const API = axios.create({ baseURL:`${baseURL}` });

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

  const postdatas = async (e) => {
    const key = "rzp_live_aZqAKdQLWLFwpJ";

    // e.preventDefault();
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
  const users =  JSON.parse(localStorage.getItem("user"))

  const open2 = true;

  return (
   <>
   <Imgge src={cab} />

   <Maindiv>
   <Card>
   <Img src={data?.cab?.image?.url} />
   <Lidiv>
   <Ul>
  
   
  
   <Li>{data?.cab?.cabModal}</Li>
   
   <Li>{data?.cab?.carSize}</Li>
   
  
   
     <Div>
     <Lorem>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat error inventore, minima tempora eveniet quisquam esse tenetur similique, iste illo odit optio accusamus ipsa numquam velit laudantium excepturi reprehenderit neque?</Lorem>
      <Dollar>${data?.cab?.price}</Dollar>
      <Tx>All Tax Include</Tx>
     </Div>   
   
   </Ul>
   
   </Lidiv>

   </Card>
   

   </Maindiv>

   <center className={styles.heading}>Trip Details</center>
   <div className={styles.cabbookform}>
     <form onSubmit={handleSubmit(postdatas)}>
       <div className={styles.formwrapper}>
         <div className={styles.addresswrapper}>
           <label htmlFor="">Pick-Up Address</label>
           <input required type="text"   onChange={(e) => setPickupAddress(e.target.value)} placeholder="Enter Pick Up address" />
         </div>
         <div className={styles.addresswrapper}>
           <label  htmlFor="">Drop-off Address</label>
           <input
           onChange={(e) => setEmail2(e.target.value)}
             required
             type="text"
             placeholder="Enter Drop-off address"
           />
         </div>
         <div className={styles.addresswrapper}>
           <label htmlFor="">Trveller Name</label>
           <input  onChange={(e) => setEmail3(e.target.value)}  required type="text" placeholder="Enter Full Name" />
         </div>
         <div className={styles.genderwrapper}>
           <label htmlFor="">Gender</label>
           <div className={styles.radiowrapper}>
             <div className={styles.malewrapper}>
               <span>Male</span>
               <input required             type="radio"
               value="Female"
               name="gender"
               checked={genders === "Male"}
               onChange={() => setGender("Male")}
     />
             </div>
             <div className={styles.malewrapper}>
               <span>Female</span>
               <input required   type="radio"
               value="Female"
               name="gender"
               checked={genders === "Female"}
               onChange={() => setGender("Female")}/>
             </div>
           </div>
         </div>
         <div className={styles.addresswrapper}>
           <label htmlFor="">Email id</label>
           <input  value={email} onChange={(e) => setEmail4(e.target.value)} required type="email" placeholder="Enter Email" />
         </div>
         <div className={styles.addresswrapper}>
           <label htmlFor="">Contact Number</label>
           <input   onChange={(e) => setEmail6(e.target.value)} required type="text" placeholder="Enter Contact No." />
         </div>
         <div className={styles.savebtnDiv}>
         {
          users? <button  className={styles.paynow} type="submit">
         
          Book Now
          </button> : <button onClick={clickss}  className={styles.paynow} >
         Login Now
          </button> 
        }
        {isSubmitting && (
          <span style={{ fontWeight: "bold", marginLeft: "1vmax" }}>
        
          <Backdrop
          open={open2}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
          <div style={{textAlign:"center" , display:"flex" , marginTop:"100px", fontFamily:"Poppins" ,color:"white" , fontWeight:"500"}}>
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
  )
}

export default Mobilecabdetail