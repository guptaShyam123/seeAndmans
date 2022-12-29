import React from "react";
import fish from "../../assets/dinner1.png";
import styled from "styled-components";
import mobile from "../../assets/suba1.png";
import { MdLocationPin } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import fish1 from "../../assets/dinner2.png";
import activity from "../../assets/activityphonebanner.jpeg";
// import { useSwiper } from "swiper/react";
import "swiper/css";
import kaya from "../../assets/phonekaya.avif";
import { useNavigate , Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {MdFilterList} from "react-icons/md"
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {baseURL} from "../../Components/Apibaseurl"

const Imagediv = styled.img`
  width: 100vw;
  background-position: center;
  object-fit: cover;
`;

const Top = styled.p`
  color: #145843;
  font-size: 22px;
  margin-top: 30px;
  font-family: Poppins;
  font-weight: 700;
  text-align: center; ;
`;
const Textdivs = styled.div`
  display: flex;
  flex-direction: column;
  /* background:red; */
  padding: 0 4%;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;
const Stexts = styled.p`
  font-size: 15px;
  color: #000000;
  font-weight: 500;
  text-align: justify;
`;
const Scuba = styled.p`
  font-size: 22px;
  margin-top: 30px;
  font-family: Poppins;
  font-weight: 700;
  text-align: center;
  color: #145843;
`;
const Maindiv = styled.div`
  /* background:red; */
  /* padding:0 20px; */
  
  /* background-sc */
  /* overflow: hid; */
  /* height:fit-content; */
  /* margin-top: 1px; */
  width: 100vw;
  /* margin-bottom: 100px; */
`;
const Maindivs = styled.div`
  /* background:red; */
  /* padding:0 20px; */
display:flex;
flex-direction:column;
/* gap:10px; */
align-items:center;

  /* background-sc */
  /* overflow: hid; */
  /* height:fit-content; */
  /* margin-top: 1px; */
  width: 100vw;
  /* margin-bottom: 100px; */
`;
const Card = styled.div`
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  /* height:150px; */
  /* height:00px; */

  background-color: #ffffff;
  margin-left: 20px;
  /* align-items: center; */
  /* display: flex; */
  /* height:fit-content; */
  width: 220px;
  /* height:fit-content; */
  /* padding: 10px px; */
  /* height:200px; */
  /* flex-direction: column; */
  /* width:fit-content; */
  margin-top: 40px;
  margin-bottom: 50px;
  border-radius: 20px;
  /* height:20vh; */
  /* box-sizing: border-box; */
  /* border-radius: 5px; */
  /* overflow-x: hidden; */
`;
const Cards = styled.div`
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  /* height:150px; */
  /* height:00px; */

  background-color: #ffffff;
  /* margin-left: 20px; */
  /* align-items: center; */
  /* display: flex; */
  /* height:fit-content; */
  width: 70vw;
  height:70vw;
  /* height:fit-content; */
  /* padding: 10px px; */
  /* height:200px; */
  /* flex-direction: column; */
  /* width:fit-content; */
  margin-top: 40px;
  margin-bottom: 50px;
  /* border-radius: 20px; */
  /* height:20vh; */
  /* box-sizing: border-box; */
  /* border-radius: 5px; */
  /* overflow-x: hidden; */
`;

const Mobile = styled.img`
  /* height:; */

  height: 23vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  /* object-fit: cover; */
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
const Whitediv = styled.div`
  /* background: red; */

  /* border-radius: 5px; */
  width: 91.8%;

  display: flex;
  flex-direction: column;
  /* flex-direction: column; */
  /* align-items: center; */
  /* background:pink; */
  /* height:20px; */
  /* width:300px; */
  padding: 3px 4px;
  gap: 2px;
  /* height:120px; */
  /* text-align:center; */
`;
const Power = styled.p`
  font-size: 12px;
  color: black;
  font-weight: 600;
  font-family: Poppins;
  padding-left: 10px;
  text-align: left;
`;
const Book = styled.p`
  font-size: 12px;
  color: black;
  font-weight: 500;
  font-family: Poppins;
  text-align: left;

  /* width:90%; */
  margin-left: 10px;
  /* padding-left:10px; */
`;
const Booknow = styled.p`
  color: black;
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding-left: 10px;

  /* margin-right: 12px;; */
`;
const Booknow1 = styled.p`
  color: black;
  text-align: right;
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  padding-left: 5px;

  /* margin-right: 12px;; */
`;
const Locationdiv = styled.div`
  padding: 1% 2%;
  display: flex;
  align-items: center;
  gap:10px;
`;
const Loc = styled(MdLocationPin)``;
const Location = styled.p`
  font-size: 17px;
  color: #145843;
  font-weight: 600;
  font-family: Poppins;
`;
const Dinner = styled.p`
  font-size: 22px;
  margin-top: 30px;
  font-family: Poppins;
  font-weight: 700;
  text-align: center;
  color: #145843;
`;
const Kaya = styled.p`
  font-size: 22px;
  margin-top: 30px;
  font-family: Poppins;
  font-weight: 700;
  text-align: center;
  color: #145843;
`;
const Glass = styled.p`
  font-size: 22px;
  margin-top: 30px;
  font-family: Poppins;
  font-weight: 700;
  text-align: center;
  color: #145843;
`;

const Newfilter = styled.div`
/* background:red; */
align-items : flex-start;
justify-content: flex-start;
display:flex;
padding: 7% 3%;
gap:10px;

`
const Text = styled.p`
    color:black;
    font-size:19px;
    font-weight:600;
     font-family:Poppins;
     /* background:red; */
     width:100px;
`

const Checkboxdiv = styled.div`
  display:flex;
  gap:20px;
  /* background-color:red; */
  margin-top:10px;

`
const Input = styled.input`
  
`
const Place = styled.p`
 font-size:18px;
 color:gray;
 font-weight:700;
 font-family:Poppins;
`
const Images = styled(MdFilterList)`

  /* color:blac; */
  height:30px;
  width:30px;

`


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Mobileactivitylist = () => {

  const navigate = useNavigate()

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/get/activity`
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);


  const click = ()=>{
    navigate("/waterbook")
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state , setState ] = React.useState([
    {
      id:2,
      img:fish,
      name:"scuba Diving",
      loc:"Port Balr"

    },
    {
      id:2,
      img:fish,
      name:"scuba Diving",
      loc:"Port Balr"

    },
    {
      id:3,
      img:fish,
      name:"scuba Diving",
      loc:"Port Balr"

    },
    {
      id:4,
      img:fish,
      name:"scuba Diving",
      loc:"Port Balr"

    },
  ])


  const [data , setData] = React.useState([
    {
      id:1,
      img:mobile,
      type:"Scuba Typing",
      loc:"Port Blair"
       
    },
    
    {
      id:1,
      img:mobile,
      type:"Scuba Typing",
      loc:"Port Blair"
       
    },
    {
      id:1,
      img:mobile,
      type:"Scuba Typing",
      loc:"Port Blair"
       
    },
    {
      id:1,
      img:mobile,
      type:"Scuba Typing",
      loc:"Port Blair"
       
    },
    {
      id:1,
      img:mobile,
      type:"Scuba Typing",
      loc:"Port Blair"
       
    },
    {
      id:1,
      img:mobile,
      type:"Scuba Typing",
      loc:"Port Blair"
       
    },
    {
      id:1,
      img:mobile,
      type:"Scuba Typing",
      loc:"Port Blair"
       
    },

  ])
     
  const [loading, setLoading] = React.useState(true);


  setTimeout(() => {
    setLoading(false);
  }, 3000);
  
  const open2 = true;

  return (
    <>
      <Imagediv src={activity} />

      <Textdivs>
        <Top>TOP LIST OF ACTIVITY</Top>

        <Stexts>
          Massa risus ornare nunc phasellus dui. Dui tempus quis viverra risus.
          Pretium ut amet, quis porta dolor. Aliquam euismod pellentesque a,
          risus ut. Vestibulum tellus et accumsan, aliquam proin non. Risus non
          in rutrum nisi, duis tristique sed adipiscing in. Tincidunt placerat
          morbi lacus nibh fames. Porttitor sit elit at nulla donec malesuada
          consectetur faucibus integer.

        </Stexts>

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
        <span style={{fontWeight:"700" , fontSize:"17px"}}>Budget Per Person($0 - $2500)</span>
          <Box sx={{ width: 300 }}>
          <Slider sx={{ color: "#28B810" }} />
        </Box>
  
        <span style={{fontWeight:"700" , fontSize:"17px"}}>Duration(in - 30N)</span>
          <Box sx={{ width: 300 }}>
          <Slider sx={{ color: "#28B810" }} />
        </Box>
            <DialogContentText sx={{fontSize:"18px" , fontWeight:"600"}} id="alert-dialog-slide-description">
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
         <Maindivs>
{
  datas?.activity?.map((i)=>{
    return(
      <>
      <Link style={{textDecoration:"none"}} to={`/waterbook/${i._id}`}><Cards>
              <Mobile src={i.image?.url} />
              <Whitediv>
                <Booknow1>{i.activityType}</Booknow1>
                <Locationdiv>
                  
                  <Location style={{color:"black"}}>Staring just at ${i.price}</Location>
                </Locationdiv>
              </Whitediv>
            </Cards>
            </Link>
      </>
    )
  })
}
        
            </Maindivs>
         </>
      )}


      </Textdivs>
      <Scuba>SCUBA DIVING</Scuba>

      <Maindiv>
        <Swiper
          spaceBetween={120}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >

        {
          datas?.activity?.map((i)=>{
            return (
              <>
              <SwiperSlide className="next">
         
              <Link style={{textDecoration:"none"}} to={`/waterbook/${i._id}`}> <Card onClick={click}>
                  <Mobile src={i.image2?.url} />
                  <Whitediv>
                    <Booknow>{i.activityType}</Booknow>
                    <Locationdiv>
                      <Loc  style={{color:"black"}}/>
                      <Location style={{color:"black"}}>{i.location}</Location>
                    </Locationdiv>
                  </Whitediv>
                </Card>
                </Link>
              </SwiperSlide>
              </>
            )
          })
        }
        
         
        </Swiper>
      </Maindiv>
      <Dinner>DINNER CRUISE</Dinner>
      <Maindiv>
        <Swiper
          spaceBetween={120}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >

        {
          datas?.activity?.map((i)=>{
             return (
              <>
              <SwiperSlide className="next">
              <Link style={{textDecoration:"none"}} to={`/waterbook/${i._id}`}> <Card>
                <Mobile src={i.image3?.url} />
                <Whitediv>
                  <Booknow>{i.activityType}</Booknow>
                  <Locationdiv>
                    <Loc style={{color:"black"}} />
                    <Location style={{color:"black"}}>{i?.location}</Location>
                  </Locationdiv>
                </Whitediv>
              </Card>
              </Link>
            </SwiperSlide>
              </>
             )
          })
        }
         
         
        </Swiper>
      </Maindiv>
      <Glass>GLASS BOTTOM BOAT</Glass>

      <Maindiv>
        <Swiper
          spaceBetween={120}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {
          datas?.activity?.map((i)=>{
             return (
              <>
              <SwiperSlide className="next">
              <Link style={{textDecoration:"none"}} to={`/waterbook/${i._id}`}> <Card>
                <Mobile src={i.image4?.url} />
                <Whitediv>
                  <Booknow>{i.activityType}</Booknow>
                  <Locationdiv>
                    <Loc  style={{color:"black"}}/>
                    <Location style={{color:"black"}}>{i?.location}</Location>
                  </Locationdiv>
                </Whitediv>
              </Card>
              </Link>
            </SwiperSlide>
              </>
             )
          })
        }
         
        
        </Swiper>
      </Maindiv>
      <Kaya>KAYA KING</Kaya>
      <Maindiv>
        <Swiper
          spaceBetween={120}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
        {
          datas?.activity?.map((i)=>{
             return (
              <>
              <SwiperSlide className="next">
              <Link style={{textDecoration:"none"}} to={`/waterbook/${i._id}`}> <Card>
                <Mobile src={i.image6?.url} />
                <Whitediv>
                  <Booknow>{i.activityType}</Booknow>
                  <Locationdiv>
                    <Loc style={{color:"black"}} />
                    <Location >{i?.location}</Location>
                  </Locationdiv>
                </Whitediv>
              </Card>
              </Link>
            </SwiperSlide>
              </>
             )
          })
        }
         
        </Swiper>
      </Maindiv>
    </>
  );
};

export default Mobileactivitylist;
