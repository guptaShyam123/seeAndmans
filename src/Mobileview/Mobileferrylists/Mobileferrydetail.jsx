import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useSWR from "swr";
import styled from "styled-components";
import { baseURL } from "../../Components/Apibaseurl";
import img from "../../assets/ferrybanner.jpeg";

const Banner = styled.img`
  width: 100vw;
  background-position: center;
`;

const Img = styled.img`
  width: 50%;
  /* padding: 2% 0%; */
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
  padding: 2% 0%;
`;

const Maindiv = styled.div`
  /* background-color: red; */
  /* height:20px; */
  display: flex;
  flex-direction: column;
  /* margin-top:30px; */
  /* background-color:red; */
  margin: 5% 2%;
  gap: 16px;
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
  /* align-items:left; */
`;
const Dollar = styled.p`
  color: red;
  font-weight: 700;
  font-size: 19px;
  /* text-align: right; */
`;
const Tx = styled.p`
  color: black;
  font-weight: 600;
  font-size: 15px;
  /* text-align: right; */
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
const Lorem = styled.p`
  font-size: 15px;
  color: black;
  font-weight: 500;
  width: 40vw;
`;
const Buttondiv = styled.div`
  align-items: right;
  display: flex;
  justify-content: right;
  margin-top: 10px;
`;

const Mobileferrydetail = () => {
  const { id } = useParams();

  console.log("my id is", id);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${baseURL}/api/user/ferry/${id}`, fetcher);

  console.log(data);

  const navigate = useNavigate();
  const book = () => {
    navigate("/bookferry");
  };

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <>
      <Banner src={img} />

      <Maindiv>
        <Link style={{ textDecoration: "none" }} to={`/bookferry/${id}`}>
          <Card onClick={book}>
            <Img src={data?.ferry?.image?.url} />
            <Lidiv>
              <Ul>
                <Li>{data?.ferry?.name}</Li>

                <Li>{data?.ferry?.location}</Li>

                <Div>
                  <Lorem>{data?.ferry?.desc}</Lorem>
                  <Dollar>${data?.ferry?.price}</Dollar>
                  <Tx>{data?.ferry?.seatType}</Tx>
                  <Tx>All Tax Include</Tx>
                </Div>
              </Ul>
            </Lidiv>
          </Card>
        </Link>
      </Maindiv>
    </>
  );
};

export default Mobileferrydetail;
