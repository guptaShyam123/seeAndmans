import React from "react";
import useSWR from "swr";
import "./HotelSelection.scss";
import bedroom from "../../assets/bedroom.png";
import hotel1 from "../../assets/hotel111.png";
import hotel2 from "../../assets/hotel112.png";
import Couple from "../../assets/joint.png";
import green from "../../assets/green_circle.png";
import Line from "../../assets/line.png";
import { BsArrowRight } from "react-icons/bs";
import { IoIosBed } from "react-icons/io";
import HotelRoomList from "./HotelRoomList";
import styled from "styled-components";
import banner from "../../assets/rectangle7.png";
import Footer from "../Home/Footer";
import { useParams } from "react-router-dom";
import HotelPaymentDetail from "./HotelPaymentDetail";
import Scroll from "react-scroll";
import {baseURL} from "../../Components/Apibaseurl"

const Divs = styled.div`
  width: 100%;
  height: 35vmax;
  justify-content: center;
  display: flex;
  margin-top:10px;
  /* image-rendering: pixelated; */
  

 
`;
const Banner = styled.img`
  width: 100%;

  
  height: 100%;
  /* transform: scale(0.8);  */
  object-fit: cover;
  /* z-index: -5; */
/* z-index:10; */
/* overflow: hidden; */

 
  /* filter: blur(5px); */
  /* background-size: cover; */
  
`;

const HotelSelection = () => {
  // const ref = React.useRef()

  

  let scroll = Scroll.animateScroll;

  const scrollToBottom = () => {
    if (window.innerHeight <= 768) {
      scroll.scrollTo(800, {
        smooth: true,
      });
    } else if (window.innerHeight <= 1080) {
      scroll.scrollTo(1000, {
        smooth: true,
      });
    }
  };

  const [show, setShow] = React.useState(false);

  const { id } = useParams();
  console.log(id);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/api/user/hotel/${id}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data);
  const prices = ((data?.hotel?.price)/3).toFixed(2)
  console.log("price is" , prices)
  return (
    <>
      <Divs>
        <Banner src={data?.hotel?.image3?.url} />
      </Divs>
      <div className="hotel-selection-main-container">
        <section className="hotel-detail-section">
          <div className="hotelimage">
            <div className="big">
              <img src={data?.hotel?.image2?.url} />
            </div>
            <div className="image-grid">
              <img src={data?.hotel?.image4?.url} />`
              <img src={data?.hotel?.image4?.url} />
            </div>
          </div>
          <div className="hotel-room-detail">
            <div className="hotel-room-detail-child">
              <div className="hoteldes">
                <div className="price-detail-div">
                  <p className="price-detail-text">Price Starts At</p>
                  <p className="price-detail-text">Per Night</p>
                  <p className="price-detail-text">$365</p>
                  <p className="price-detail-text-red">${data?.hotel?.price}</p>
                  <p className="price-detail-text">+$25 taxes & fees</p>
                </div>
                <div className="adult-count">
                  <div className="coupel-image-text">
                    <img src={Couple} />
                    <p>For 2 adults</p>
                  </div>
                  <div className="coupel-image-text">
                    <img src={Couple} />
                    <p>For 2 adults</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-option">
              <button onClick={scrollToBottom} className="view-option-button">
                View 5 More Options
              </button>
            </div>
            <div className="checkout-detail-div">
              <div className="breakfast-free">Free Breakfast Available</div>
              <div className="checkout-checkin">
                <div className="checkin">
                  <p>check in</p>
                  <p> 12pm</p>
                </div>
                <div className="checkin">
                  <p>check out</p>
                  <p> 12pm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section finished */}
        {/* centered about text */}
        <center className="about-hotel">{data?.hotel?.name}</center>
        <center>
          <div className="about-para">
            {data?.hotel?.description}
          </div>
        </center>
        <section className="middle-section"></section>
      </div>
      <HotelRoomList prices={prices} />

      <Footer />
    </>
  );
};

export default HotelSelection;
