import React from "react";
import hotel from "../../assets/mobileboat.avif";
import star from "../../assets/star.png";
import styled from "styled-components";
import { MdLocationPin } from "react-icons/md";
import img from "../../assets/ferrybanner.jpeg";
import { useNavigate , Link } from "react-router-dom";
import {baseURL} from "../../Components/Apibaseurl"

const Banner = styled.img`
  width: 100vw;
  background-position: center;
`;

const Maindiv = styled.div`
  margin-top: 40px;
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
  /* flex-direction: row; */
  padding: 3% 0;
  gap: 20px;
  justify-content: space-around;
  /* align-items:center; */
  /* background-color:red; */
  height: 220px;
  /* height:fit-content; */
  /* margin-bottom: 20px;; */
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
  font-weight: 700; ;
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

const Mobileferrylist = () => {
  

  const [datas, setDatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/get/ferry`);
    const data = await res.json();
    console.log("my data is " ,data);

    setDatas(data);
  };
  React.useEffect(() => {
    getdata();
  }, []);
  // const navigate = useNavigate();
  const book = () => {
    navigate("/bookferry");
  };

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
  return (
    <>
      <Banner src={img} />
      <Filterdiv>POPULAR FERRIES</Filterdiv>

      <Maindiv>
        {datas?.ferry?.map((i) => {
          return (
            <>
           <Link style={{textDecoration:"none" , color:"inherit"}} to={`/ferrydetail/${i._id}`}>  <Card >
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
                  <Desc>{i.seatType}</Desc>
                  <Price>${i.price}</Price>
                  <Taxes>Tax & charges</Taxes>
                </Hoteldes>
              </Card>
              </Link> 
            </>
          );
        })}
      </Maindiv>
    </>
  );
};

export default Mobileferrylist;
