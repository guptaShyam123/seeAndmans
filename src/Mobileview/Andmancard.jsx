import React from "react";
import styled from "styled-components";
import card from "../assets/secondcard.png";
import card1 from "../assets/secondcard1.png";
import card2 from "../assets/secondcard2.png";
import card3 from "../assets/secondcard7.png";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../Components/Apibaseurl";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Top = styled.p`
  color: #145843;
  font-weight: 700;
  font-size: 25px;
  margin-top: 30px;
  text-align: center;
`;
const View = styled.p`
  text-align: right;
  margin-right: 20px;
  font-size: 15px;
  font-weight: 800;
  color: #000000;
  margin-top: 10px;
  /* background:red; */
`;
const Maindiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  padding: 10px 12px;
  align-items: flex-start;
  justify-content: flex-start;
  /* gap:1px 3px 3px 3px; */
  /* margin:10px; */
  /* background-color: red; */
  gap: 5px;
  /* margin-left:10px; */
`;
const Imgdiv = styled.div`
  background-repeat: no-repeat;
  height: 25vh;
  color: white;
  font-weight: 800;
  letter-spacing: 1px;
  font-family: Poppins;
  width: 45vw;
  border-radius: 10px;
  text-align: center;
  display: flex;

  align-items: center;
  justify-content: center;
`;

const Andmancard = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/wateractivity");
  };

  const [data, setData] = React.useState([
    {
      id: 1,
      img: card,
    },
    {
      id: 1,
      img: card1,
    },
    {
      id: 1,
      img: card2,
    },
    {
      id: 1,
      img: card3,
    },
  ]);
  const [datas, setDatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/get/locations`);
    const data = await res.json();
    console.log(data);

    setDatas(data);
  };
  React.useEffect(() => {
    getdata();
  }, []);

  const open2 = true;

  const clickme = () => {
    return (
      <>
    <Backdrop
      open={open2}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    </>
    )
  };
  return (
    <>
      <Top>TOP ANDMAN GUIDES</Top>
      <View onClick={click}>View All</View>
      <center>
        <Maindiv>
          {datas?.locations?.map((i) => {
            return (
              <>
                <Imgdiv
                  onClick={clickme}
                  style={{ backgroundImage: `url(${i.image?.url})` }}
                >
                  <p>{i.name}</p>
                </Imgdiv>
              </>
            );
          })}
        </Maindiv>
      </center>
    </>
  );
};

export default Andmancard;
