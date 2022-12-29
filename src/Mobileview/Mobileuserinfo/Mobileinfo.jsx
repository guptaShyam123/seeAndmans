import React from 'react'
import paras from "../../assets/paras.png";
import styles from "./mobileCabBookForm.module.scss";
import { useNavigate } from 'react-router-dom';

const Mobileinfo = () => {

  const navigate = useNavigate()
  const click = ()=>{
    navigate("/checkbooking")
  }


  const users =  JSON.parse(localStorage.getItem("user"))

  return (
   <>
   <center><button onClick={click} style={{marginTop:"100px" , color:"white" , backgroundColor:"#145843" , padding:"1.3% "  ,border:"none" , outline:"none", fontSize:"17px"}}>See my Booking</button></center>
   <center className={styles.heading}>User Info</center>
   <center>
     <img src={paras} alt="" />
   </center>
   <center>
     <p className={styles.username}>Kane Williomson</p>
   </center>
   <center>
     <p className={styles.usercity}>Salt Lake City</p>
   </center>
   <div className={styles.cabbookform}>
     <form action="">
       <div className={styles.formwrapper}>
         <div className={styles.addresswrapper}>
           <label htmlFor="">Email</label>
           <input
             required
             type="email"
             placeholder="Email"
             defaultValue={users?.email}
            
           />
         </div>
         <div className={styles.addresswrapper}>
           <label htmlFor="">Phone Number</label>
           <input
             required
             type="text"
             placeholder="Enter Name"
             defaultValue="Sam"
           />
         </div>
         <div className={styles.addresswrapper}>
           <label htmlFor="">User Id</label>
           <input
             required
             type="text"
             placeholder="Enter Email"
             defaultValue={users.userId}
           />
         </div>

         <div className={styles.addresswrapper}>
           <label htmlFor="">Password</label>
           <input
             required
             type="password"
             placeholder="Enter Password"
             defaultValue={users.password}
           />
         </div>
         <div className={styles.addresswrapper}>
           <label htmlFor="">Postal Code</label>
           <input
             required
             type="text"
             placeholder="Code"
             defaultValue="305023"
           />
         </div>
         <div className={styles.savebtnDiv}>
           <button className={styles.paynow} type="submit">
             Save Changes
           </button>
         </div>
       </div>
     </form>
   </div>
   </>

  )
}

export default Mobileinfo