import React from "react";
import img from "../assets/secondcard5.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { baseURL } from "./Apibaseurl";

const Divss = styled.div`
  display: flex;
  background-repeat: no-repeat;
  height: 20vmax;
  width: 21vmax;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  object-fit: cover;
  /* background:red; */
  cursor: pointer;
  /* background: rgba(0, 0, 0, 0.25); */
  & h1 {
    color: white;
    font-weight: 600;
    font-family: Poppins;
    margin: 0 auto;
    /* text-align: center; */
    text-align: center;
    /* display: flex; */
    /* align-items: center; */
    @media (min-width: 1845px) and (max-width: 1945px) {
      color: white;
      font-weight: 600;
      font-family: Poppins;
      margin: 0;
      padding: 0;
      /* text-align: center; */
      text-align: center;
    }
  }
  @media (min-width: 1845px) and (max-width: 1945px) {
    width: 18vmax;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Maindivss = styled.div`
  /* background-color:black; */
  display: flex;
  justify-content: space-between;
  /* align-items:center; */
  gap: 2vmax;
  /* width:90%; */
  margin-top: 3vmax;
  padding: 2% 2% 2% 2%;
  /* text-align:center; */
  flex-wrap: wrap;
  /* position: fixed;; */
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
const Textdiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* background:red; */
  /* width:50vw; */
  @media (min-width: 1840px) and (max-width: 1945px) {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    /* background:red; */
    width: 100%;
  }
  /* margin:0 ;; */
  /* padding:0; */
  /* padding-left: 11%; */
`;

const Practice = () => {
  const navigate = useNavigate();
  const Handleclick = (path) => {
    navigate(path);
  };
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
  const users = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Maindivss>
        {datas?.locations?.map((i) => {
          return (
            <>
              <Divss
                className="card"
                onClick={() => Handleclick(`/island/${i._id}`)}
                style={{ backgroundImage: `url(${i.image?.url})` }}
              >
                <Textdiv>
                  <h1>{i.name}</h1>
                </Textdiv>
              </Divss>
            </>
          );
        })}
      </Maindivss>
    </>
  );
};

export default Practice;
