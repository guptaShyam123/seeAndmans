import React from "react";
import useSWR from "swr";
import { baseURL } from "../Components/Apibaseurl";
import axios from "axios";

const Bookingpage = () => {
  const API = axios.create({ baseURL: `${baseURL}` });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.Authorization = ` ${
        JSON.parse(localStorage.getItem("user")).token
      }`;
    }
    return req;
  });

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const { data } = await API.get(`${baseURL}/api/user/profile`);

    console.log(data);

    setdatas(data);
  };

  const x = datas?.user?.bookedHotel?.map((x) => x.amount);
  console.log(x);

  React.useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <p
        style={{
          marginTop: "100px",
          fontSize: "20px",
          color: "#145843",
          fontWeight: "600",
          paddingLeft: "20px",
        }}
      >
        Hotel Booking:
      </p>
      <center>
        <div
          style={{
            textAlign: "left",
            padding: "10% 5%",
            gap: "10px",
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "7px 8px 36px rgba(0, 0, 0, 0.16)",
            background: "whit",
            width: "90%",
          }}
        >
          {datas?.user?.bookedHotel.map((i) => {
            return (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Name:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i?.hotel?.name}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Amount:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i.amount}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Booked at:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i.bookedAt}
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    status:
                  </p>
                  {<p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i?.approved === false}
                  </p> ? (
                    <p
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      not accepted yet
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      Accepted
                    </p>
                  )}
                </div>
                <img
                  style={{ borderRadius: "5px" }}
                  src={i.hotel?.image?.url}
                />
              </>
            );
          })}
        </div>
      </center>
      <p
        style={{
          marginTop: "100px",
          fontSize: "20px",
          color: "#145843",
          fontWeight: "600",
          paddingLeft: "20px",
        }}
      >
        Cab Booking:
      </p>
      <center>
        <div
          style={{
            textAlign: "left",
            padding: "10% 5%",
            gap: "10px",
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "7px 8px 36px rgba(0, 0, 0, 0.16)",
            background: "whit",
            width: "90%",
          }}
        >
          {datas?.user?.bookedCab.map((i) => {
            return (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Name:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i?.hotel?.name}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Amount:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i.amount}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Booked at:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i.bookedAt}
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    status:
                  </p>
                  {<p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i?.approved === false}{" "}
                  </p> ? (
                    <p
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      not accepted yet
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      Accpted
                    </p>
                  )}
                </div>
                <img style={{ borderRadius: "5px" }} src={i.cab?.image?.url} />
              </>
            );
          })}
        </div>
      </center>
      <p
        style={{
          marginTop: "100px",
          fontSize: "20px",
          color: "#145843",
          fontWeight: "600",
          paddingLeft: "20px",
        }}
      >
        Activities Booking:
      </p>
      <center>
        <div
          style={{
            textAlign: "left",
            padding: "10% 5%",
            gap: "10px",
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "7px 8px 36px rgba(0, 0, 0, 0.16)",
            background: "whit",
            width: "90%",
          }}
        >
          {datas?.user?.bookedActivity.map((i) => {
            return (
              <>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Name:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i?.hotel?.name}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Amount:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i.amount}
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Booked at:
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i.bookedAt}
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    status:
                  </p>
                  {<p
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    {i?.approved === false}{" "}
                  </p> ? (
                    <p
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      not accepted yet
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      Accpted
                    </p>
                  )}
                </div>
                <img
                  style={{ borderRadius: "5px" }}
                  src={i.activity?.image?.url}
                />
              </>
            );
          })}
        </div>
      </center>
    </>
  );
};

export default Bookingpage;
