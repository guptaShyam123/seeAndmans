import React from  'react';
import goa from "../../assets/mobilegoa.jpeg"
import styled from "styled-components"
import icon from "../../assets/searchicon.png";
import stock from "../../assets/istock.jpg"
import {baseURL} from "../../Components/Apibaseurl"
const Blog = styled.img`
/* height:40vh; */
width:100vw;
height:40vh;
background-position: center;

`
const Inputdiv = styled.div`
  /* background: red; */
  box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.1);
  /* height:40px; */
  display: flex;
  width:fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top:-30px;


`
const Icon = styled.img`
 /* padding-left: 10px;; */
 height:30px;
 position:absolute;
 left:0;
 padding-left:50px;

`
const  Input = styled.input`
font-family: "Poppins";
  font-style: normal;
  border-radius: 10px;
  font-weight: 500;
  font-size: 17px;
  padding: 0 0 0 4%;
  outline: none;
  border: none;
  color: #000000;
  height:50px;
  text-align:center;;



  /* background-color:#000000; */
  ::placeholder {
    /* border: 5px solid red; */
    /* padding-top: 20%; */
    color: gray;
    font-weight: 600;
    /* background-color: red; */
  }

`
const Maincarddiv = styled.div`
margin-top:40px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:30px;
/* background: RED; */
`
const Card = styled.div`
  background-repeat:no-repeat;
  width:80vw;
  height:40vh;
  display: flex;
 text-align:center;;
 color:white;
 font-family:Poppins;
 font-weight: 700;;
 font-size:19px;
 align-items:center;

`


const Mobilebloglist = () => {

  const [datas, setdatas] = React.useState([]);

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/get/blogs`
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

    const [state , setState] = React.useState([
        {
          id:1,
          img:stock,
          text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."  
        },
        {
            id:1,
            img:stock,
            text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."  
          },
          {
            id:1,
            img:stock,
            text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."  
          },
          {
            id:1,
            img:stock,
            text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."  
          },
        {
            id:1,
            img:stock,
            text:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."  
          },
    ])
 
  return (
    <>
      <Blog src={goa} />
      <center>
    <Inputdiv>
    <Icon src={icon} />
    <Input type="text" placeholder="Search Here" />
  
    </Inputdiv>
    </center>
    <Maincarddiv>
    {
        datas?.blogs?.map((i)=>{
            return(
                <>
                <Card style={{backgroundImage:`url(${i.image?.url})`}}>
                 {i.text}
                </Card>
                </>
            )
        })
    }
  
    </Maincarddiv>

      </>
      )
};

export default Mobilebloglist;