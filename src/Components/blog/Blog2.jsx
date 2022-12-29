import React from "react";
import aeroplane from "../../assets/aeroplane.png";
import styled from "styled-components";
import icon from "../../assets/searchicon.png";
import frame from "../../assets/frame1.png";
import frame1 from "../../assets/frame2.png";
import frame2 from "../../assets/fram2.png";
import frame3 from "../../assets/fram3.png";
import frame4 from "../../assets/fram4.png";
import frame5 from "../../assets/frame5.png";
import frame6 from "../../assets/fram6.png";
import frame7 from "../../assets/frame7.png";
import frame8 from "../../assets/frame8.png";
import frame9 from "../../assets/fram9.png";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Components/Apibaseurl";

const Img = styled.img`
  background-size: cover;

  width: 100%;
  height: 33vmax;
`;
const Inputdiv = styled.div`
  display: flex;
  width: 32vmax;
  gap: 1vmax;
  margin: -1.7% 0 0 0;
  /* background: #FFFFFF; */
  box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.1);
`;
const Input1 = styled.input`
  height: 3vmax;
  width: 32vmax;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  padding: 0 0 0 4%;
  outline: none;
  border: none;
  color: #000000;

  /* background-color:#000000; */
  ::placeholder {
    /* border: 5px solid red; */
    /* padding-top: 20%; */
    color: black;
    font-weight: 600;
    /* background-color: red; */
  }
`;
const Icon = styled.img`
  height: 1.5vmax;
  width: 1.5vmax;
  position: absolute;
  margin: 0 0 0 29.6%;
  padding: 0.6% 0 0 0;
`;
const Whats = styled.p`
  margin: 3% 2% 0 2%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  color: #000000;
`;
const Imagediv = styled.div`
  margin: 3% 2% 0 2%;
  /* background:red; */
  object-fit: cover;
  gap: 2vmax;
  /* flex-grow:10; */
  align-items: center;
  justify-content: center;
  display: flex;
  /* height:100%; */
  /* position: absolute; */
  /* width: 100%; */
  flex-wrap: wrap;
  justify-content: space-between;
  /* flex:2; */
  /* box-sizing: border-box; */
  /* align-items:center; */
  /* display: -webkit-box;
  display: -moz-box; */
  /* flex-flow: row wrap; */
  /* display: -ms-flexbox; */
  /* display: -moz-flex; */
  /* flex-direction: row; */

  /* float:left; */
  /* flex: 1 1 80px; */
  /* padding: 2% 2% 2% 2%; */
  /* background:red; */

  /* flex-basis: 350px; */
  /* vertical-align: middle; */
`;

const Frame = styled.img`
  width: 100%;
  height: 23vmax;
  /* min-width:0 ; */
  /* padding: 0; */
  object-fit: cover;
  /* position: absolute; */
  /* flex:4; */
  /* box-sizing: border-box; */

  /* float: right; */
`;

const Frame1 = styled.img`
  width: 100%;
  height: 25vmax;

  object-fit: cover;
`;
const Imagediv1 = styled.div`
  margin: 3% 2% 0 2%;
  display: flex;
  gap: 1vmax;
  /* background:red; */
`;
const Frame2 = styled.img`
  height: 25vmax;
  width: 100%;
  object-fit: cover;
  /* flex-grow: 1;
   vertical-align: bottom; */
`;
const Frame3 = styled.img`
  height: 25vmax;
  width: 100%;
  object-fit: cover;
`;
const Frame4 = styled.img`
  height: 25vmax;
  width: 100%;
  object-fit: cover;
`;
const Imagediv2 = styled.div`
  margin: 3% 2% 0 2%;
`;
const Imagediv3 = styled.div`
  margin: 3% 2% 0 2%;
  display: flex;

  gap: 2vmax;
`;
const Frame5 = styled.img`
  height: 25vmax;
  width: 100%;
  object-fit: cover;
`;
const Frame6 = styled.img`
  height: 25vmax;
  width: 100%;
  object-fit: cover;
`;
const Frame7 = styled.img`
  height: 25vmax;
  width: 100%;
  object-fit: cover;
`;
const Div7 = styled.div`
  margin: 3% 2% 0 2%;
`;

const Blog2 = () => {
  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(`${baseURL}/api/user/get/blogs`);
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const navigate = useNavigate();

  const Handleclick = (path) => {
    navigate(path);
  };
  return (
    <>
      <Img src={aeroplane} />
      <center>
        <Inputdiv>
          <Input1 type="text" placeholder="Search here" />
          <Icon src={icon} />
        </Inputdiv>
      </center>
      <Whats>What,s New</Whats>
      <Imagediv style={{ cursor: "pointer" }}>
        {datas?.blogs?.map((i) => {
          return (
            <>
              <div style={{ display: "flex" }}>
                <Frame
                  onClick={() => Handleclick(`/blogdetail/${i._id} `)}
                  src={i.image?.url}
                />
              </div>
            </>
          );
        })}
      </Imagediv>
      <Imagediv1>
        <Frame2 src={frame3} />
        <Frame3 src={frame4} />
        <Frame4 src={frame3} />
      </Imagediv1>
      <Imagediv2></Imagediv2>
      <Imagediv3 src={frame6}>
        <Frame5 src={frame7} />
        <Frame6 src={frame8} />
      </Imagediv3>
      <Div7>
        <Frame7 src={frame9} />
      </Div7>
      <Footer />
    </>
  );
};

export default Blog2;
