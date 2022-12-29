import React from "react";
import styled from "styled-components";
import hotel from "../../assets/mobilehotelimag1.avif";
import star from "../../assets/star.png";
import { MdLocationPin } from "react-icons/md";
import banner from "../../assets/mobilehotelbanner.jpeg";
import { useNavigate, Link } from "react-router-dom";
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
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import useSWR from "swr";
import { baseURL } from "../../Components/Apibaseurl";

const Images = styled(MdFilterList)`
  /* color:blac; */
  height: 30px;
  width: 30px;
`;

const Maindiv = styled.div`
  margin-top: 20px;
  /* background:red; */
  height: fit-content;
  display: flex;
  padding: 2% 2%;
  flex-direction: column;
  gap: 30px;
`;
const Card = styled.div`
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  /* height:30px; */
  display: flex;
  border-radius: 10px;
  /* width:70vw; */
  /* width:fit-content; */
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  /* align-items:center; */
  /* background-color:red; */
  height: 220px;
  padding: 2% 0;
  /* width:100%; */
`;
const Image = styled.img`
  height: 100;
  width: 50%;
  border-radius: 10px;
`;
const Hoteldes = styled.div`
  /* background-color:pink; */
  width: 250px;
  text-align: justify;
  align-items: justify;
  /* height:100%; */
  /* background:pink; */

  display: flex;
  /* text-align: center;;
    align-items: center; */
  padding: 2% 2%;
  /* gap:12px; */
  justify-content: space-around;
  flex-direction: column;
`;
const Name = styled.p`
  /* width:fit-content; */
  font-size: 16px;
  font-weight: 700;
  color: black;
  font-family: Poppins;
`;
const Stardiv = styled.div`
  display: flex;
  gap: 1px;

  /* align-items: right; */
  /* background:red; */
  /* justify-content: right; */
`;
const Star = styled.img`
  height: fit-content;
  width: fit-content;
`;
const Locationdiv = styled.div`
  display: flex;
  gap: 1px;
  align-items: center;
  /* background:red; */
  /* justify-content: right; */
`;
const Locationsrc = styled(MdLocationPin)`
  /* height: fit-content;
  width: fit-content; */
  color: black;
`;
const Locationname = styled.p`
  color: green;
  font-size: 17px;
  font-family: Poppins;
  font-weight: 500;
`;
const Desc = styled.p`
  color: #145843;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
`;
const Price = styled.p`
  color: green;
  font-size: 15px;
  font-weight: 700;
  font-family: Poppins;
`;
const Taxes = styled.p`
  color: #145843;
  font-size: 16px;
  font-weight: 500;

  /* display: flex; */
  text-align: justify;
  font-family: Poppins;
`;
const Filterdiv = styled.div`
  /* background-color: red; */
  height: 30px;
  text-align: center;
  margin-top: 30px;
  font-size: 21px;
  color: #000000;
  font-weight: 700;
`;
const Imagediv = styled.img`
  width: 100vw;
  height: 60vh;
  /* object-fit: cover; */
  background-position: center;
`;
const Newfilter = styled.div`
  /* background:red; */
  align-items: flex-start;
  justify-content: flex-start;
  display: flex;
  padding: 7% 3%;
  gap: 10px;
`;
const Text = styled.p`
  color: black;
  font-size: 19px;
  font-weight: 600;
  font-family: Poppins;
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
const MobileHotelList = () => {
  const navigate = useNavigate();

  const [state, useState] = React.useState([
    {
      id: 1,
      img: hotel,
      text: "ROYAL PALACE",
      port: "PORT BLAIR",
      luxury: "Luxury hotel",
      rup: "$500",
      tax: "Taxes & charges",
    },
    {
      id: 1,
      img: hotel,
      text: "ROYAL PALACE",
      port: "PORT BLAIR",
      luxury: "Luxury hotel",
      rup: "$500",
      tax: "Taxes & charges",
    },
    {
      id: 1,
      img: hotel,
      text: "ROYAL PALACE",
      port: "PORT BLAIR",
      luxury: "Luxury hotel",
      rup: "$500",
      tax: "Taxes & charges",
    },
    {
      id: 1,
      img: hotel,
      text: "ROYAL PALACE",
      port: "PORT BLAIR",
      luxury: "Luxury hotel",
      rup: "$500",
      tax: "Taxes & charges",
    },
    {
      id: 1,
      img: hotel,
      text: "ROYAL PALACE",
      port: "PORT BLAIR",
      luxury: "Luxury hotel",
      rup: "$500",
      tax: "Taxes & charges",
    },
  ]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [datas, setdatas] = React.useState([]);
  const [update, setUpdate] = React.useState([]);

  const getdata = async () => {
    try {
      const res = await fetch(`${baseURL}/api/user/search/hotel`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      console.log(data?.hotels);

      const x = data?.hotels?.filter(
        (value) => value.location === "Port Blair"
      );
      console.log("valu is ", x);

      setUpdate(x);

      setdatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const click = () => {
    setUpdate(x);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const open2 = true;

  return (
    <>
      <Imagediv src={banner} />
      <Filterdiv>POPULAR HOTELS LIST</Filterdiv>

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
              <Input value={update} onClick={click} type="checkbox" />
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
            {datas?.hotels?.map((i) => {
              return (
                <>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/hotelselection/${i._id}`}
                  >
                    {" "}
                    <Card>
                      <Image src={i.image?.url} />
                      <Hoteldes>
                        <Name>{i.name}</Name>
                        <Stardiv>
                          <Star src={star} />
                          <Star src={star} />
                          <Star src={star} />
                        </Stardiv>
                        <Locationdiv>
                          <Locationsrc />
                          <Locationname>{i.location}</Locationname>
                        </Locationdiv>
                        <Desc>Luxury hotel</Desc>
                        <Price>{i.price}</Price>
                        <Taxes>Tax & Charges</Taxes>
                      </Hoteldes>
                    </Card>
                  </Link>
                </>
              );
            })}
          </Maindiv>
        </>
      )}
    </>
  );
};

export default MobileHotelList;
