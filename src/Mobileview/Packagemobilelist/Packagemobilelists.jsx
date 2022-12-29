import React from "react";
import hotel1 from "../../assets/hotelsvg.svg";
import cab1 from "../../assets/cabsvg.svg";
import ferri1 from "../../assets/ferrysvg.svg";
import star from "../../assets/star.png";
import water1 from "../../assets/watersvg.svg";
import hotel from "../../assets/phonepackage.jpeg";
import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
import banner from "../../assets/packagebanner.jpeg";
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
import {Link, useNavigate} from "react-router-dom"
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {baseURL} from "../../Components/Apibaseurl"

const Images = styled(MdFilterList)`
  /* color:blac; */
  height: 30px;
  width: 30px;
`;

const Buttons = styled.button`
  background: #145843;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
  border-radius: 30px;
  padding: 2% 2%;
  outline: none;
  border: none;

  /* right:0; */
  /* left:0; */
  /* margin-right: 0; */
`;
const Divs = styled.div`
  margin-top: 30px;
  align-items: right;
  justify-content: right;
  display: flex;
  margin-right: 20px;
`;
const Our = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: 21px;
  color: #000000;
  font-weight: 700;
`;
const Maindiv = styled.div`
  margin-top: 30px;
  padding: 0 7%;
  display: flex;
  flex-direction: column;
  gap: 10vh;
  /* background:red; */
  margin-bottom: 20px;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  background-position: center;
  object-fit: cover;
`;
const Whitediv = styled.div`
  width: 100%;
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  /* height:150px; */
  /* height:00px; */
  /* display:flex; */
  /* height: 36vh; */
  background-color: #ffffff;
`;
const Divs1 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 2px;
  flex-direction: column;
  /* background-color:red; */
`;
const Hotel = styled.p`
  color: black;
  font-size: 17px;
  font-weight: 600;
  font-family: Poppins;
`;
const Hoimg = styled.img``;
const Textdiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2% 3%;
`;
const Package = styled.p`
  font-size: 17px;
  color: #145843;
  font-weight: 600;
  font-family: Poppins;
  padding: 1% 3%;
`;
const Locationdiv = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  padding: 1% 2%;
`;
const Loc = styled(MdLocationPin)`
color:black;
`;
const Location = styled.p`
  font-size: 15px;
  color: #145843;
  font-weight: 500;
  font-family: Poppins;
`;
const Lorem = styled.p`
  font-size: 12px;
  color: #000000;
  font-weight: 500;
  padding: 1% 2%;
  text-align: justify;
  font-family: Poppins;
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
  font-size: 18px;
  padding: 1% 2%;
  background-color: #145843;
  margin-bottom: 20px; ;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
const Imagediv = styled.img`
  width: 100vw;
  background-position: center;
`;
const Newfilter = styled.div`
  /* background:red; */
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  padding: 7% 7%;
  gap: 10px;
`;
const Text = styled.p`
  color: black;
  font-size: 19px;
  font-weight: 600;
`;

const Checkboxdiv = styled.div`
  display: flex;
  gap: 20px;
  /* background-color:red; */
  margin-top: 10px;
`;
const Input = styled.input``;
const Place = styled.p`
  font-size: 18px;
  color: gray;
  font-weight: 700;
  font-family: Poppins;
`;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Packagemobilelists = () => {
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/get/packages`
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);
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

  const navigate = useNavigate()
  const click1 = ()=>{
    navigate("/custom")
  }

  const [loading, setLoading] = React.useState(true);


  setTimeout(() => {
    setLoading(false);
  }, 3000);
  
  const open2 = true;
  return (
    <>
      <Imagediv src={banner} />
      <Divs>
        <Buttons onClick={click1}>Customaize Package</Buttons>
      </Divs>
      <Our>OUR PACKAGES</Our>

      <div>
        <Newfilter>
          <Text>Use Filter</Text>
          <Images variant="outlined" onClick={handleClickOpen} />
        </Newfilter>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <span style={{ fontWeight: "700", fontSize: "17px" }}>
              Budget Per Person($0 - $2500)
            </span>
            <Box sx={{ width: 300 }}>
              <Slider sx={{ color: "#28B810" }} />
            </Box>

            <span style={{ fontWeight: "700", fontSize: "17px" }}>
              Duration(in - 30N)
            </span>
            <Box sx={{ width: 300 }}>
              <Slider sx={{ color: "#28B810" }} />
            </Box>
            <DialogContentText
              sx={{ fontSize: "18px", fontWeight: "600" }}
              id="alert-dialog-slide-description"
            >
              Place:
            </DialogContentText>
            <Checkboxdiv>
              <Input type="checkbox" />
              <Place>Hvelock</Place>
            </Checkboxdiv>
            <Checkboxdiv>
              <Input type="checkbox" />
              <Place>Chidiya Tapu</Place>
            </Checkboxdiv>
            <Checkboxdiv>
              <Input type="checkbox" />
              <Place>Ross Island</Place>
            </Checkboxdiv>
            <Checkboxdiv>
              <Input type="checkbox" />
              <Place>Port Blair</Place>
            </Checkboxdiv>
            <Checkboxdiv>
              <Input type="checkbox" />
              <Place>Swaraj Dweep</Place>
            </Checkboxdiv>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Apply</Button>
          </DialogActions>
        </Dialog>
      </div>

      {loading ? (
        <Backdrop
          open={open2}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
       <>
       <Maindiv>
        {datas?.allpackages?.map((i) => {
          return (
            <>
              <Link style={{textDecoration:"none"}} to={`/packagedetails1/${i._id}`}><Card>
                <Img src={i.image?.url} />
                <Whitediv>
                  <Textdiv>
                    <Divs1>
                      <Hotel>Hotel</Hotel>
                      <Hoimg src={hotel1} />
                    </Divs1>
                    <Divs1>
                      <Hotel>Cab</Hotel>
                      <Hoimg src={cab1} />
                    </Divs1>
                    <Divs1>
                      <Hotel>Ferry</Hotel>
                      <Hoimg src={ferri1} />
                    </Divs1>
                    <Divs1>
                      <Hotel>Activity</Hotel>
                      <Hoimg src={water1} />
                    </Divs1>
                  </Textdiv>
                  <Package>{i.name}</Package>
                  <Locationdiv>
                    <Loc />
                    <Location>{i.location}</Location>
                  </Locationdiv>
                  <Lorem>
                    Enim nibh interdum amet mi aliquet mauris quam. Ullamcorper
                    imperdiet felis duis ornare. Nec, faucibus cras nascetur
                    cursus sit. Viverra a augue quam lacus at tincidunt purus.
                  </Lorem>
                  <Stardiv>
                    <Star1>
                      <Starimg src={star} />
                      <Starimg src={star} />
                      <Starimg src={star} />
                    </Star1>
                    <Rup>${i.price}</Rup>
                  </Stardiv>
                  <Buttonsdiv>
                    <Book>Book Now</Book>
                  </Buttonsdiv>
                </Whitediv>
              </Card>
              </Link>
              <hr style={{ border: "0.1px solid black", height: "0px" }}></hr>
            </>
          );
        })}
      </Maindiv>
       </>
      )}
      
    </>
  );
};

export default Packagemobilelists;
