import React from "react";
import styled from "styled-components";
import detail1 from "../../assets/detail1.svg";
import plus from "../../assets/plus.svg";
import detail2 from "../../assets/detail2.svg";
import detail3 from "../../assets/detail3.svg";
import detail4 from "../../assets/detail4.svg";
import detail5 from "../../assets/detail5.svg";
import comfort from "../../assets/comfort.png";
import car from "../../assets/ferrygroup.svg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { MdFilterList } from "react-icons/md";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import hotel1 from "../../assets/hotelsvg.svg";
import cab1 from "../../assets/cabsvg.svg";
import ferri1 from "../../assets/ferrysvg.svg";
import star from "../../assets/star.png";
import water1 from "../../assets/watersvg.svg";
import hotel from "../../assets/phonepackage.jpeg";
import { MdLocationPin } from "react-icons/md";
import { useParams, Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../Components/Apibaseurl";

const Imgs = styled.img`
  width: 100%;
  height: 40vh;
  /* background-position:center; */
  object-fit: cover;
`;
const Detail = styled.img`
  height: 20px;
  width: 30px;
`;
const Firstdiv = styled.div`
  display: grid;
  margin-top: 2vmax;
  margin-left: 2vmax;
`;
const First11 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const Detailfirstdiv = styled.div`
  /* background: red; */
  display: flex;
  gap: 1vmax;
  margin: 4vh 0;
  justify-content: center;
  align-items: center;
  /* flex-direction:columns; */
  /* align-items: center; */
  /* justify-content:center; */
  @media (min-width: 1640px) and (max-width: 1740px) {
    width: 45vmax;
  }
  @media (min-width: 1840px) and (max-width: 1940px) {
    /* background:blue; */
    width: 48vmax;
  }
`;

const Plus = styled.img`
  height: 10px;
`;
const Plan = styled.p`
  font-size: 16px;
  color: #145843;
  font-weight: 600;
`;
const Maindiv11 = styled.div`
  display: flex;
  /* align-items  : center; */
  margin-top: 10px;
  /* background:red; */
  justify-content: space-evenly;
  padding: 0 3%;
  width: 100%;
  gap: 4px;
  align-items: center;
`;

const Firstgreen = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background: #5ccba0;
  align-items: center;
  padding: 2% 4%;
  width: 90vw;
`;
const Firstgreen1 = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top:20px; */
  background: #5ccba0;
  align-items: center;
  padding: 2% 4%;
  width: 90vw;
`;
const Port = styled.p`
  font-size: 13px;
  color: #000000;
  font-weight: 700;
`;
const View = styled.p`
  font-size: 13px;
  color: #000000;
  font-weight: 700;
`;

const Secondgreen = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  padding: 2% 2%;
  /* margin-top:20px; */
  /* background: #5CCBA0; */
  /* width:100vw; */
  margin-left: 10px;
  margin-right: 10px;
  width: 90vw;
  background: rgba(92, 203, 160, 0.6);
  /* border-radius: 10px; */
`;
const Day1 = styled.p`
  color: #000000;
  font-size: 13px;
  font-weight: 700;
  /* border-top-right-radius: 2px solid #000000; */
`;
const Morningdiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: left;
  /* background:red; */
`;
const Morning = styled.p`
  font-size: 13px;
  color: #000000;
  font-weight: 700;
`;
const Lorem = styled.p`
  font-size: 10px;
  color: #000000;
  width: 50vw;
  font-weight: 500;
  text-align: justify;
`;
const Eveningdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Evening = styled.p`
  font-size: 13px;
  color: #000000;
  font-weight: 700;
`;
const Add = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #0085ff;
  text-decoration: underline;
`;

const Day2 = styled.p`
  color: #000000;
  font-size: 13px;
  font-weight: 700;
  /* background:red; */
`;
const Fulldaydiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  text-align: left;
  /* background-color:red; */
  /* margin-left:6px; */
  /* padding-left:3%; */
  /* background:red; */
  /* align-items:flex-start; */
  /* margin-left:0; */
`;
const Fullday = styled.p`
  font-size: 13px;
  color: #000000;
  font-weight: 700;
  /* background:red; */
  /* text-align:right; */
`;

const Thirdgreen = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  /* padding: 0 2%; */
  /* margin-top:20px; */
  width: 90vw;
  /* align-items: flex-start; */
  /* justify-content: flex-start; */
  padding: 2% 4%;
  gap: 5px;
  text-align: left;
  background: rgba(92, 203, 160, 0.6);
  /* background:blue; */
`;
const Divs2 = styled.div`
  /* background:red; */
`;
const Greensdiv = styled.div`
  margin-bottom: 20px; ;
`;
const Maindiv = styled.div`
  margin-top: 30px;
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  /* margin-left:10px; */
  /* align-items: center; */
  /* justify-content: center; */

  /* background:red; */
  margin-bottom: 20px;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  /* border-radius:8px; */
  /* border-radius: 20px;; */
  background-position: center;
  object-fit: cover;
  /* border-radius:8px; */
`;
const Whitediv = styled.div`
  width: 100%;
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  /* height:150px; */
  /* height:00px; */
  /* display:flex; */
  /* height: 36vh; */
  /* border-radius:8px; */
  background-color: #ffffff;
`;
const Divs12 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 2px;
  flex-direction: column;
  /* background-color:red; */
`;
const Hotel = styled.p`
  color: black;
  font-size: 13px;
  font-weight: 600;
  font-family: Poppins;
`;
const Hoimg = styled.img`
  height: 20px;
`;
const Textdiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 3%;
`;
const Package = styled.p`
  font-size: 15px;
  color: #145843;
  font-weight: 600;
  text-align: left;
  font-family: Poppins;
  padding: 1% 3%;
`;
const Locationdiv = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  padding: 1% 2%;
`;
const Loc = styled(MdLocationPin)``;
const Location = styled.p`
  font-size: 13px;
  color: #145843;
  font-weight: 700;
  font-family: Poppins;
`;
const Lorem1 = styled.p`
  font-size: 10px;
  color: #000000;
  font-weight: 500;
  padding: 1% 2%;
  text-align: justify;
`;
const Stardiv = styled.div`
  align-items: center;
  padding: 1% 2%;
  display: flex;
  justify-content: space-between;
`;
const Star1 = styled.div`
  display: flex;
  gap: 2px;
`;
const Starimg = styled.img``;
const Rup = styled.p`
  font-size: 17px;
  color: #000000;
  font-weight: 700;
  font-family: Poppins;
`;
const Buttonsdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const Book = styled.button`
  color: #ffffff;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 13px;
  padding: 10% 13%;
  background-color: #145843;
  margin-bottom: 20px; ;
`;
const Card = styled.div`
  display: flex;
  /* background:red; */
  /* margin-left:50px; */
  /* width:60vw; */
  /* padding: 0 3%; */
  flex-direction: column;
  border-radius: 20px;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Packagedetail = () => {
  const { id } = useParams();

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/package/${id}`);
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  let y = datas?.allActivities?.filter((value) =>
    value.activityType.toLowerCase().includes()
  );
  console.log(y);
  const my = datas?.allCabs?.map((value) => value);
  console.log("my is ", my);

  const [state, setState] = React.useState([
    {
      img: hotel,
      pack: "Package Name",
      loc: "Port Blair",
      lorem:
        "Enim nibh interdum amet mi aliquet mauris quam. Ullamcorper imperdiet felis duis ornare. Nec, faucibus cras nascetur cursus sit. Viverra a augue quam lacus at tincidunt purus.",
      rup: "$320",
    },
    {
      img: hotel,
      pack: "Package Name",
      loc: "Port Blair",
      lorem:
        "Enim nibh interdum amet mi aliquet mauris quam. Ullamcorper imperdiet felis duis ornare. Nec, faucibus cras nascetur cursus sit. Viverra a augue quam lacus at tincidunt purus.",
      rup: "$320",
    },
    {
      img: hotel,
      pack: "Package Name",
      loc: "Port Blair",
      lorem:
        "Enim nibh interdum amet mi aliquet mauris quam. Ullamcorper imperdiet felis duis ornare. Nec, faucibus cras nascetur cursus sit. Viverra a augue quam lacus at tincidunt purus.",
      rup: "$320",
    },
    {
      img: hotel,
      pack: "Package Name",
      loc: "Port Blair",
      lorem:
        "Enim nibh interdum amet mi aliquet mauris quam. Ullamcorper imperdiet felis duis ornare. Nec, faucibus cras nascetur cursus sit. Viverra a augue quam lacus at tincidunt purus.",
      rup: "$320",
    },
    {
      img: hotel,
      pack: "Package Name",
      loc: "Port Blair",
      lorem:
        "Enim nibh interdum amet mi aliquet mauris quam. Ullamcorper imperdiet felis duis ornare. Nec, faucibus cras nascetur cursus sit. Viverra a augue quam lacus at tincidunt purus.",
      rup: "$320",
    },
  ]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const navigate = useNavigate();
  const click1 = () => {
    navigate("/hotels");
  };
  const click2 = () => {
    navigate("/cablist");
  };
  const click3 = () => {
    navigate("/ferrylist");
  };
  const click4 = () => {
    navigate("/wateractivity");
  };
  

  return (
    <>
      <Imgs src={comfort} />
      <Maindiv11>
        <First11 onClick={handleClickOpen}>
          <Detail src={detail2} />
          <Plan>Plan</Plan>
        </First11>

        <Plus src={plus} />
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogActions style={{ padding: "2% 6%" }}>
              <center>
                <Maindiv>
                  {datas?.allHotels?.map((i) => {
                    return (
                      <>
                        <Card>
                          <Img src={i.image?.url} />
                          <Whitediv>
                            <Textdiv>
                              <Divs12>
                                <Hotel>Hotel</Hotel>
                                <Hoimg src={hotel1} />
                              </Divs12>
                              <Divs12>
                                <Hotel>Cab</Hotel>
                                <Hoimg src={cab1} />
                              </Divs12>
                              <Divs12>
                                <Hotel>Ferry</Hotel>
                                <Hoimg src={ferri1} />
                              </Divs12>
                              <Divs12>
                                <Hotel>Activity</Hotel>
                                <Hoimg src={water1} />
                              </Divs12>
                            </Textdiv>
                            <Package>{i.name}</Package>
                            <Locationdiv>
                              <Loc />
                              <Location>{i.location}</Location>
                            </Locationdiv>
                            <Lorem1>
                              Enim nibh interdum amet mi aliquet mauris quam.
                              Ullamcorper imperdiet felis duis ornare. Nec,
                              faucibus cras nascetur cursus sit. Viverra a augue
                              quam lacus at tincidunt purus.
                            </Lorem1>
                            <Stardiv>
                              <Star1>
                                <Starimg src={star} />
                                <Starimg src={star} />
                                <Starimg src={star} />
                              </Star1>
                              <Rup>${i.price}</Rup>
                            </Stardiv>
                            <Buttonsdiv>
                              <Link
                                style={{ textDecoration: "none" }}
                                to={`/packagebook/${id}`}
                              >
                                <Book>Change</Book>
                              </Link>
                            </Buttonsdiv>
                          </Whitediv>
                        </Card>
                        <hr
                          style={{ border: "0.1px solid black", height: "0px" }}
                        ></hr>
                      </>
                    );
                  })}
                </Maindiv>
              </center>
            </DialogActions>
            <Button onClick={handleClose}>Apply</Button>
          </Dialog>
        </div>

        <First11 onClick={handleClickOpen1}>
          <Detail src={detail3} />
          <Plan>Cab</Plan>
        </First11>

        <Plus src={plus} />

        <div>
          <Dialog
            open={open1}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose1}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogActions style={{ padding: "2% 6%" }}>
              <center>
                <Maindiv>
                  {datas?.allCabs?.map((i) => {
                    return (
                      <>
                        <Card>
                          <Img src={i.image?.url} />
                          <Whitediv>
                            <Textdiv></Textdiv>
                            <Package>{i.cabModal}</Package>

                            <Lorem1>
                              Enim nibh interdum amet mi aliquet mauris quam.
                              Ullamcorper imperdiet felis duis ornare. Nec,
                              faucibus cras nascetur cursus sit. Viverra a augue
                              quam lacus at tincidunt purus.
                            </Lorem1>
                            <Stardiv>
                              <Star1>
                                <Starimg src={star} />
                                <Starimg src={star} />
                                <Starimg src={star} />
                              </Star1>
                              <Rup>${i.price}</Rup>
                            </Stardiv>
                            <Buttonsdiv>
                              <Link
                                style={{ textDecoration: "none" }}
                                to={`/packagebook/${id}`}
                              >
                                <Book>Change</Book>
                              </Link>
                            </Buttonsdiv>
                          </Whitediv>
                        </Card>
                        <hr
                          style={{ border: "0.1px solid black", height: "0px" }}
                        ></hr>
                      </>
                    );
                  })}
                </Maindiv>
              </center>
            </DialogActions>
            <Button onClick={handleClose}>Apply</Button>
          </Dialog>
        </div>

        <First11 onClick={click3}>
          <Detail src={detail4} />
          <Plan>Ferry</Plan>
        </First11>
        <Plus src={plus} />
        <First11 onClick={handleClickOpen2}>
          <Detail src={detail5} />
          <Plan>Activities</Plan>
        </First11>
        <div>
          <Dialog
            open={open2}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose2}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogActions style={{ padding: "2% 6%" }}>
              <center>
                <Maindiv>
                  {datas?.allActivities?.map((i) => {
                    return (
                      <>
                        <Card>
                          <Img src={i.image?.url} />
                          <Whitediv>
                            <Textdiv></Textdiv>
                            <Package>{i.activityType}</Package>

                            <Lorem1>
                              Enim nibh interdum amet mi aliquet mauris quam.
                              Ullamcorper imperdiet felis duis ornare. Nec,
                              faucibus cras nascetur cursus sit. Viverra a augue
                              quam lacus at tincidunt purus.
                            </Lorem1>
                            <Stardiv>
                              <Star1>
                                <Starimg src={star} />
                                <Starimg src={star} />
                                <Starimg src={star} />
                              </Star1>
                            </Stardiv>
                            <Buttonsdiv>
                              <Link
                                style={{ textDecoration: "none" }}
                                to={`/packagebook/${id}`}
                              >
                                <Book>Change</Book>
                              </Link>
                            </Buttonsdiv>
                          </Whitediv>
                        </Card>
                        <hr
                          style={{ border: "0.1px solid black", height: "0px" }}
                        ></hr>
                      </>
                    );
                  })}
                </Maindiv>
              </center>
            </DialogActions>
            <Button onClick={handleClose}>Apply</Button>
          </Dialog>
        </div>
      </Maindiv11>
      <Greensdiv>
        <Divs2>
          <center>
            <Firstgreen>
              <Port>Port Blair</Port>
              <View onClick={clickme}>View Guide</View>
            </Firstgreen>
          </center>
          <center>
            <Secondgreen>
              <Day1>Day-1</Day1>
              <Morningdiv>
                <Morning>Morning to Noon</Morning>
                <Lorem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam, numquam? Eveniet
                </Lorem>
              </Morningdiv>
              <Eveningdiv>
                <Evening>Evening</Evening>
                <Add onClick={handleClickOpen}>Add Activity</Add>
                <div>
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogActions style={{ padding: "2% 6%" }}>
                      <center>
                        <Maindiv>
                          {datas?.allHotels?.map((i) => {
                            return (
                              <>
                                <Card>
                                  <Img src={i.image?.url} />
                                  <Whitediv>
                                    <Textdiv>
                                      <Divs12>
                                        <Hotel>Hotel</Hotel>
                                        <Hoimg src={hotel1} />
                                      </Divs12>
                                      <Divs12>
                                        <Hotel>Cab</Hotel>
                                        <Hoimg src={cab1} />
                                      </Divs12>
                                      <Divs12>
                                        <Hotel>Ferry</Hotel>
                                        <Hoimg src={ferri1} />
                                      </Divs12>
                                      <Divs12>
                                        <Hotel>Activity</Hotel>
                                        <Hoimg src={water1} />
                                      </Divs12>
                                    </Textdiv>
                                    <Package>{i.name}</Package>
                                    <Locationdiv>
                                      <Loc />
                                      <Location>{i.location}</Location>
                                    </Locationdiv>
                                    <Lorem1>
                                      Enim nibh interdum amet mi aliquet mauris
                                      quam. Ullamcorper imperdiet felis duis
                                      ornare. Nec, faucibus cras nascetur cursus
                                      sit. Viverra a augue quam lacus at
                                      tincidunt purus.
                                    </Lorem1>
                                    <Stardiv>
                                      <Star1>
                                        <Starimg src={star} />
                                        <Starimg src={star} />
                                        <Starimg src={star} />
                                      </Star1>
                                      <Rup>${i.price}</Rup>
                                    </Stardiv>
                                    <Buttonsdiv>
                                      <Link
                                        style={{ textDecoration: "none" }}
                                        to={`/packagebook/${id}`}
                                      >
                                        <Book>Change</Book>
                                      </Link>
                                    </Buttonsdiv>
                                  </Whitediv>
                                </Card>
                                <hr
                                  style={{
                                    border: "0.1px solid black",
                                    height: "0px",
                                  }}
                                ></hr>
                              </>
                            );
                          })}
                        </Maindiv>
                      </center>
                    </DialogActions>
                    <Button onClick={handleClose}>Apply</Button>
                  </Dialog>
                </div>
              </Eveningdiv>
            </Secondgreen>
          </center>
          <hr style={{ width: "fit-content" }} />
          <center>
            <Thirdgreen>
              <Day2>Day-2</Day2>
              <Fulldaydiv>
                <Fullday>Fullday</Fullday>
                <Lorem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam, numquam? Eveniet
                </Lorem>
              </Fulldaydiv>
            </Thirdgreen>
          </center>

          <center>
            <img src={car} style={{ height: "100px" }} />
          </center>
        </Divs2>

        <Divs2>
          <center>
            <Firstgreen1>
              <Port>Port Blair</Port>
              <View>View Guide</View>
            </Firstgreen1>
          </center>
          <center>
            <Secondgreen>
              <Day1>Day-1</Day1>
              <Morningdiv>
                <Morning>Morning to Noon</Morning>
                <Lorem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam, numquam? Eveniet
                </Lorem>
              </Morningdiv>
              <Eveningdiv>
                <Evening>Evening</Evening>
                <Add onClick={handleClickOpen}>Add Activity</Add>
              </Eveningdiv>
            </Secondgreen>
          </center>
          <hr style={{ width: "fit-content" }} />
          <center>
            <Thirdgreen>
              <Day2>Day-2</Day2>
              <Fulldaydiv>
                <Fullday>Fullday</Fullday>
                <Lorem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam, numquam? Eveniet
                </Lorem>
              </Fulldaydiv>
            </Thirdgreen>
          </center>

          <center>
            <img src={car} style={{ height: "100px" }} />
          </center>
        </Divs2>

        <Divs2>
          <center>
            <Firstgreen1>
              <Port>Port Blair</Port>
              <View>View Guide</View>
            </Firstgreen1>
          </center>
          <center>
            <Secondgreen>
              <Day1>Day-1</Day1>
              <Morningdiv>
                <Morning>Morning to Noon</Morning>
                <Lorem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam, numquam? Eveniet
                </Lorem>
              </Morningdiv>
              <Eveningdiv>
                <Evening>Evening</Evening>
                <Add onClick={handleClickOpen}>Add Activity</Add>
              </Eveningdiv>
            </Secondgreen>
          </center>
          <hr style={{ width: "fit-content" }} />
          <center>
            <Thirdgreen>
              <Day2>Day-2</Day2>
              <Fulldaydiv>
                <Fullday>Fullday</Fullday>
                <Lorem>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laboriosam, numquam? Eveniet
                </Lorem>
              </Fulldaydiv>
            </Thirdgreen>
          </center>
        </Divs2>
      </Greensdiv>
    </>
  );
};

export default Packagedetail;
