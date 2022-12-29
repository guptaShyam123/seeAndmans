import React from "react";
import useSWR from "swr";
import styled from "styled-components";
import img from "../../assets/detailhotel1.avif";
import frame from "../../assets/detailhotel.avif";
import { useParams, Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../Components/Apibaseurl";

const Image = styled.img`
  width: 100vw;
  background-position: center;
`;
const Select = styled.p`
  font-size: 22px;
  color: #145843;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;

const Img = styled.img`
  width: 50%;
  padding: 2% 0%;
  object-fit: cover;
  border-radius: 20px;
`;
const Card = styled.div`
  /* background-color: pink;; */
  display: flex;
  /* background: white; */
  gap: 20px;
  justify-content: space-around;
  /* align-items: center; */
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.27);
  border-radius: 10px;
`;

const Maindiv = styled.div`
  /* background-color: red; */
  /* height:20px; */
  display: flex;
  flex-direction: column;
  /* margin-top:30px; */
  /* background-color:red; */
  margin: 5% 2%;
  gap: 10px;
  height: fit-content;

  /* padding: 2% 2%;; */
`;
const Ul = styled.ul`
  /* gap:10px; */
`;
const Li = styled.li`
  color: black;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: 1px;
  /* gap:10px; */
`;
const Lidiv = styled.div`
  display: flex;
  flex-direction: column;
  /* background:red; */
  padding: 1% 0;
  /* height:30px; */
  /* align-items: center; */
  /* gap:10px; */
  /* align-items : center; */
`;

const Div = styled.div`
  /* height:10px; */
  /* background-color:blue; */
  /* text-align: left; */
  align-items: left;
`;
const Dollar = styled.p`
  color: red;
  font-weight: 700;
  font-size: 19px;
  text-align: right;
`;
const Tx = styled.p`
  color: black;
  font-weight: 600;
  font-size: 15px;
  text-align: right;
`;

const Button = styled.button`
  background-color: #145843;
  color: white;
  border: none;
  outline: none;
  padding: 4% 0;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  width: 100px;
  /* align-items:right; */
  margin-bottom: 10px;
`;
const Buttondiv = styled.div`
  align-items: right;
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;
const Des = styled.p`
  color: #145843;
  font-size: 19px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;
const Lorem = styled.p`
  font-size: 12px;
  color: black;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;

const Hoteldetail = () => {
  const { id } = useParams();
  console.log(id);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${baseURL}/api/user/hotel/${id}`, fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  console.log(data);
  const prices = (data?.hotel?.price / 3).toFixed(2);
  console.log("price is", prices);

  const users = JSON.parse(localStorage.getItem("user"))?.token;

  return (
    <>
      <Image src={img} />
      <Des>About {data?.hotel?.name}</Des>
      <Lorem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Lorem>
      <Select>Select Rooms</Select>
      <Maindiv>
        <Link style={{ textDecoration: "none" }} to={`/hotelpayment/${id}`}>
          {" "}
          <Card>
            <Img src={data?.hotel?.image2?.url} />
            <Lidiv>
              <Ul>
                <Li>Free Breakfast</Li>

                <Li>Non Refundable</Li>

                <Li>Ac Rooms</Li>

                <Div>
                  <Dollar>${data?.hotel?.price}</Dollar>
                  <Tx>All Tax Include</Tx>
                </Div>
              </Ul>
              <Buttondiv>
                <Button>Select Room</Button>
              </Buttondiv>
            </Lidiv>
          </Card>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/hotelpayment/${id}`}>
          {" "}
          <Card>
            <Img src={data?.hotel?.image2?.url} />
            <Lidiv>
              <Ul>
                <Li>Free Breakfast</Li>

                <Li>Non Refundable</Li>

                <Li>Ac Rooms</Li>

                <Div>
                  <Dollar>${data?.hotel?.price}</Dollar>
                  <Tx>All Tax Include</Tx>
                </Div>
              </Ul>
              <Buttondiv>
                <Link to={`/hotelpayment/${id}`}>
                  {" "}
                  <Button>Select Room</Button>
                </Link>
              </Buttondiv>
            </Lidiv>
          </Card>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/hotelpayment/${id}`}>
          {" "}
          <Card>
            <Img src={data?.hotel?.image2?.url} />
            <Lidiv>
              <Ul>
                <Li>Free Breakfast</Li>

                <Li>Non Refundable</Li>

                <Li>Ac Rooms</Li>

                <Div>
                  <Dollar>${data?.hotel?.price}</Dollar>
                  <Tx>All Tax Include</Tx>
                </Div>
              </Ul>
              <Buttondiv>
                <Link to={`/hotelpayment/${id}`}>
                  {" "}
                  <Button>Select Room</Button>
                </Link>
              </Buttondiv>
            </Lidiv>
          </Card>
        </Link>
      </Maindiv>
    </>
  );
};

export default Hoteldetail;
