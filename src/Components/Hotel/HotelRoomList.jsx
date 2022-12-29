import React from "react";

import bed from "../../assets/bed.png";
import Couple from "../../assets/joint.png";
import roomsize from "../../assets/roomsize.png";
import kingsizebed from "../../assets/kingsizebed.png";
import windowimg from "../../assets/window.png";
import checkmark from "../../assets/mark.png";
import line30 from "../../assets/line30.png";
import line31 from "../../assets/line31.png";
import styles from "./HotelList.module.scss";
import line36 from "../../assets/line36.png";
import useSWR from "swr";
import {baseURL} from "../../Components/Apibaseurl"


import { useNavigate, useParams } from "react-router-dom";

const HotelRoomList = ({prices}) => {
  const { id } = useParams();

  console.log("price is" , prices)

  const navigate = useNavigate();

  const Handleclick = (path) => {
    navigate(path);
  };

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `${baseURL}/api/user/hotel/${id}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data);

  const x = data?.hotel?.roomType
  console.log(x)
  return (
    <>
      <section className={styles.hotelListMainWrapper}>
        <div className={styles.mainGreenbgDiv}>
          <p>Room Type</p>
          <p>Room Ooption</p>
          <p>Room Option</p>
          <p>Price</p>
        </div>

        <div className={styles.main}>
          <div className={styles.wrappermain}>
            <div className={styles.container}>
              <div className={styles.detailCard1}>
                <p className={styles.roomTitle}>Superion Room</p>
                <img src={data?.hotel?.image2?.url} className={styles.bedimg} />`
              </div>

              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.child1}>
                <p className={styles.textdark}>{x}</p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.inclusionDiv}>
                <div className={styles.inclusionChild1}>
                  <img src={checkmark} alt="check" />
                  <p>
                    Book now & avail happy hours from 1100 hrs to 1800 hrs and
                    10% discount on food and 20% discount on Buffet
                  </p>
                </div>
                <div className={styles.inclusionChild1}>
                  <img src={checkmark} alt="check" />
                  <p>Late Check out up-to 2 hours (subject to availability)</p>
                </div>
              </div>
              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.priceDiv}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>$250</p>
                <p>+$25 taxes & fees</p>
                <button
                  onClick={() => Handleclick(`/hotelpayment/${id}`)}
                  className={styles.selectButton}
                >
                  Select Room
                </button>
              </div>
            </div>
            <img src={line31} alt="" style={{ height: "1px" }} />
          </div>
          <div className={styles.wrappermain}>
            <div className={styles.container}>
              <div className={styles.detailCard1}>
                <div className={styles.accomodations}>
                  <img src={Couple} alt="couples" />
                  <p>Accomodates 3 Adults</p>
                </div>
                <div className={styles.roomSize}>
                  <img src={roomsize} alt="roomsize" />
                  <p>280 sq ft.</p>
                </div>
                <div className={styles.kingSizedBed}>
                  <img src={kingsizebed} />
                  <p>King Size Bed</p>
                </div>
                <div className={styles.cityView}>
                  <img src={windowimg} alt="windowimg" />
                  <p>City View</p>
                </div>
                <div className={styles.viewMore}>
                  <p>View More Details</p>
                </div>
              </div>

              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.child1} style={{ marginTop: "2vmax" }}>
                <p className={styles.textdark}>{x}</p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
              <img src={line36} alt="" className={styles.line36} />
              <div
                className={styles.inclusionDiv}
                style={{ marginTop: "2vmax" }}
              >
                <div className={styles.inclusionChild1}>
                  <img src={checkmark} alt="check" />
                  <p>
                    Book now & avail happy hours from 1100 hrs to 1800 hrs and
                    10% discount on food and 20% discount on Buffet
                  </p>
                </div>
                <div className={styles.inclusionChild1}>
                  <img src={checkmark} alt="check" />
                  <p>Late Check out up-to 2 hours (subject to availability)</p>
                </div>
              </div>
              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.priceDiv} style={{ marginTop: "2vmax" }}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>${prices}</p>
                <p>+$25 taxes & fees</p>
                <button
                  onClick={() => Handleclick(`/hotelpayment/${id}`)}
                  className={styles.selectButton}
                >
                  Select Room
                </button>
              </div>
            </div>
            <img src={line31} alt="" style={{ height: "1px" }} />
          </div>
          <div className={styles.wrappermain}>
            <div className={styles.container}>
              <div className={styles.detailCard1}>
                <p className={styles.roomTitle}>Superion Room</p>
                <img src={data?.hotel?.image3?.url} className={styles.bedimg} />
              </div>

              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.child1}>
                <p className={styles.textdark}>{x}</p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.inclusionDiv}>
                <div className={styles.inclusionChild1}>
                  <img src={checkmark} alt="check" />
                  <p>
                    Book now & avail happy hours from 1100 hrs to 1800 hrs and
                    10% discount on food and 20% discount on Buffet
                  </p>
                </div>
                <div className={styles.inclusionChild1}>
                  <img src={checkmark} alt="check" />
                  <p>Late Check out up-to 2 hours (subject to availability)</p>
                </div>
              </div>
              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.priceDiv}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>${prices}</p>
                <p>+$25 taxes & fees</p>
                <button
                  onClick={() => Handleclick(`/hotelpayment/${id}`)}
                  className={styles.selectButton}
                >
                  Select Room
                </button>
              </div>
            </div>

            <img src={line31} alt="" style={{ height: "1px" }} />
          </div>
          <div className={styles.wrappermain}>
            <div className={styles.container}>
              <div className={styles.detailCard1}>
                <div className={styles.accomodations}>
                  <img src={Couple} alt="couples" />
                  <p>Accomodates 3 Adults</p>
                </div>
                <div className={styles.roomSize}>
                  <img src={roomsize} alt="roomsize" />
                  <p>280 sq ft.</p>
                </div>
                <div className={styles.kingSizedBed}>
                  <img src={kingsizebed} />
                  <p>King Size Bed</p>
                </div>
                <div className={styles.cityView}>
                  <img src={windowimg} alt="windowimg" />
                  <p>City View</p>
                </div>
                <div className={styles.viewMore}>
                  <p>View More Details</p>
                </div>
              </div>

              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.child1} style={{ marginTop: "2vmax" }}>
                <p className={styles.textdark}>Large room</p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
              <img src={line36} alt="" className={styles.line36} />
              <div
                className={styles.inclusionDiv}
                style={{ marginTop: "2vmax" }}
              >
                <div className={styles.inclusionChild1}>
                  <img src={checkmark} alt="check" />
                  <p>
                    Book now & avail happy hours from 1100 hrs to 1800 hrs and
                    10% discount on food and 20% discount on Buffet
                  </p>
                </div>
                <div className={styles.inclusionChild1}>
                  <img src={checkmark} alt="check" />
                  <p>Late Check out up-to 2 hours (subject to availability)</p>
                </div>
              </div>
              <img src={line36} alt="" className={styles.line36} />
              <div className={styles.priceDiv} style={{ marginTop: "2vmax" }}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>$250</p>
                <p>+$25 taxes & fees</p>
                <button
                  onClick={() => Handleclick(`/hotelpayment/${id}`)}
                  className={styles.selectButton}
                >
                  Select Room
                </button>
              </div>
            </div>
            <img src={line31} alt="" style={{ height: "1px" }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelRoomList;
