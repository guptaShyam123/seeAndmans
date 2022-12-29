import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: red;
  display: flex;
  height: 3vmax;
  justify-content: space-between;
  padding: 1% 2% 0% 2%;
`;
const Div1 = styled.div`
  width: 10%;
  height: 3vmax;
  justify-content: space-around;
  align-items: center;
  /* background:blue; */
  /* height:10vmax; */
  /* display:inline-block; */
  /* left:34px; */
  /* position:absolute; */
  /* top:20px; */
  /* width:50%; */
  /* background-color:pink; */
  display: flex;
  /* flex-direction: column; */
  /* justify-content:flex-start; */
  /* align-items:flex-start; */
  /* text-align:left;  */
  & p {
    font-size: 20px;
    font-family: Poppins;
    /* text-align:center; */
    /* padding: 0; */
    /* margin :0; */
    /* text-align  : center; */
    /* padding-top: 10%; */
    /* text-align:center; */
    margin-top: -12px;
  }
  & img {
    /* background-color:pink; */
    height: 100%;
    object-fit: cover;
    margin-bottom: 10px;
    /* width:100%; */
  }
  /* width:30%; */
`;
const Div2 = styled.div`
  /* display:block; */
  /* margin: 12px  auto; */
  /* width:50%; */
  /* text-align: center; */
  /* padding:0; */
  /* margin:0; */
  /* display:flex; */
  /* background:blue; */
  & p {
    font-size: 20px;
    font-family: Poppins;
  }
`;
const Div3 = styled.div`
  /* display:inline-block; */
  /* position:absolute; */
  /* right:34px; */
  /* top:20px; */
  /* width:20%;/ */
  & p {
    font-size: 20px;
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 2vmax;
  & li {
    font-size: 20px;
    font-family: Poppins;
  }
`;
const Li = styled.li`
  list-style: none;
`;

const practise = () => {
  return (
    <>
      <Container>
        <Div1 className="First">
          <img src="https://th.bing.com/th/id/OIP.U0eJqMMa4V_0H3n3A6TZkwHaEV?pid=ImgDet&w=5492&h=3212&rs=1" />
          <p>first</p>
        </Div1>
        <Div2 className="Second">
          <Ul>
            <Li>hello</Li>
            <Li>home</Li>
            <Li>about</Li>
            <Li>contact</Li>
          </Ul>
        </Div2>
        <Div3 className="Third">
          <p>shyam</p>
        </Div3>
      </Container>
    </>
  );
};

export default practise;
