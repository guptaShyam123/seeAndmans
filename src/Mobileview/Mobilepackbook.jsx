import React from 'react'
import styled from "styled-components"
import plus from "../assets/plus.svg";
import detail2 from "../assets/detail2.svg";
import detail3 from "../assets/detail3.svg";
import detail4 from "../assets/detail4.svg";
import detail5 from "../assets/detail5.svg";
import comfort from "../assets/comfort.png";
import lux from "../assets/luxury.jpeg"
import star from "../assets/star.png"
import {FiEdit2} from "react-icons/fi"
import {useNavigate , useParams , Link} from "react-router-dom"
import { MdLocationPin } from "react-icons/md";
import {baseURL} from "../Components/Apibaseurl"

const Imgs = styled.img`
width:100vw;
height:30vh;
/* background-position:center; */
object-fit:cover;
`

const Plan = styled.p`
 font-size:16px;
 color:#145843;
 font-weight: 600;

`
const Maindiv11 = styled.div`
     display:flex;
     /* align-items  : center; */
     margin-top:10px;
     justify-content : space-evenly;
     padding: 0 2%;

`
const Plus = styled.img`
 height:10px;
`

const First11 = styled.div`
 display:flex;
 flex-direction: column;
 align-items: center;
 gap:5px;
`
const Detail = styled.img`
  height:20px;
  width:30px;
`
const Newdiv = styled.div`
margin-top:30px;
align-items:center;
justify-content:center;
display:flex;
flex-direction:column;
`
const Card = styled.div`
 box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  /* height:150px; */
  /* height:00px; */
  display: flex;
  flex-direction: column;
  background-color: #ffffff; 
  
`
const Img = styled.img`
  /* height:30%; */
  width:70vw;
 
`
const Whitediv = styled.div`
 box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
 width:100%;
 
`
const Namediv = styled.div`
  justify-content:space-between;
  padding: 2% 2%;
  display:flex;
  align-items:center;
`

const Name = styled.p`
  font-size:19px;
   color:#000000;
   font-weight:600;
   font-family: Poppins;


`
const Stardiv = styled.div`
  display:flex;
  gap:4px;


`
const Star = styled.img`
  height:15px;
  width:15px;
`
const Roomdiv = styled.div`
  display:flex;
  flex-direction: column;
  gap:4px;
  padding: 0 2%;
`
const Room = styled.p`
 font-size:17px;
 font-weight:700;
 color:#000000;
 font-family:Poppins;
`
const Delux = styled.p`
 font-size:18px;
 font-weight:400;
 color:#000000;
 font-family:Poppins;
`

const Refnd = styled.p`
  font-size:13px;
  color:#000000;
  font-family:Poppins;
  font-weight:500;
  
  `

  const Ul = styled.ul`
      padding-left:4%;
  `
  const Li = styled.li`
       color:black;
       font-size:12px;
       font-weight:700;
  `
  const Change = styled.button`
    color:white;
    font-weight:700;
    font-size:17px;
    font-weight:700;
    margin-bottom: 20px;
    margin-top:30px;
    background-color:#145843;
    border:none;
    outline:none;
    padding: 2% 3%;
    /* width:28vw; */
  `

 const Formdiv = styled.div`
  margin-top:30px;
  align-items:center;
  display:flex;
  flex-direction   : column;
  /* justify-content:center; */
  border:1px solid gray;
  /* background-color:red; */
  width:80vw;
  gap:10px;
  text-align:left;
  padding: 3% 3%;
  box-shadow: 7px 8px 36px rgba(0, 0, 0, 0.16);
  background:#FFFFFF;
 `
 const Firstdiv = styled.div`
     display: flex;
     align-items:center;
    gap:3px;
 `
 const Date = styled.p`
   font-size:15px;
   color:#145843;
   font-family: Poppins;
   font-weight:600;
 `
 const Seconddiv = styled.div`
   /* justify-content:center; */
   /* align-items  : center; */
   display:flex;
   /* gap:10px; */
   /* background-color:red; */
   width:100%;
   margin-top:10px;
   justify-content:space-between;

   /* justify-content:space-around; */
 `
 const Inner = styled.div`
   display:flex;
   flex-direction:column;
   gap:2px;
 `
 const Price = styled.p`
 font-size:15px;
 color:gray;
 font-weight:600;
 font-family:Poppins;
 `
 const Rate = styled.p`
 font-size:16px;
 font-weight:600;
 font-family:Poppins;
 color:#000000;

 `
 const Book = styled.button`
 background-color:#145843;
 color:white;
 /* padding: 2%; */
 width:27vw;
 padding: 2% 0%;;
 font-weight:700;
 font-family: Poppins;
 border:none;
 font-size:17px;
 outline:none;

 `
 const Thirddiv = styled.div`
 margin-top:10px;
 /* align-items:center; */
 display:flex;
 justify-content:space-between;
 /* background-color:red; */
 width:100%;

 `
 const Thirdone = styled.div`
   display:flex;
   flex-direction:column;
   gap:5px;

 `
 const Trip = styled.p`
 font-weight:500;
 color:gray;
 font-family: poppins;
 font-size:16px;
 `
 const Rates = styled.p`
  font-weight:500;
 color:gray;
 font-family: poppins;
 font-size:16px;
 `

const Totaldiv = styled.div`
 margin-top:10px;
 /* align-items:center; */
 display:flex;
 justify-content:space-between;
 /* background-color:red; */
 width:100%;
 
`
const Payble = styled.p`
   font-size:17px;
   color:#000000;
   font-weight:700;
   font-family:Poppins;

`
const Total = styled.p`
 font-size:17px;
   color:#000000;
   font-weight:700;
   font-family:Poppins;
`
const Picky = styled.p`
  font-size:19px;
  font-weight:600;
  color:black;
  font-family:Poppins;
  margin-top:10px;
  /* background:red; */
  text-align:left;
  width:100%;
`

const Taxdiv = styled.div`
  display:flex;
  flex-direction: column;
  gap:5px;
  margin-top:10px;
  /* background:red; */
  width:100%;
`
const Tax = styled.p`
font-size:15px;
color:gray;
font-family:Poppins;
`

const Locationdiv = styled.div`
 display:flex;
 padding: 1% 2%;
 /* justify-content: space-between; */
 align-items: center;

`
const Location = styled.p`
   color:#145843;
   font-size:17px;
   font-weight:600;
   font-family:Poppins;  
`


const Mobilepackbook = () => {

    const navigate = useNavigate()

    const click = ()=>{
              navigate("/packages")
    }

    const {id} = useParams()

  const [datas, setdatas] = React.useState();

  const getdata = async () => {
    const res = await fetch(
      `${baseURL}/api/user/package/${id}`
    );
    const data = await res.json();
    console.log(data);

    setdatas(data);
  };

  React.useEffect(() => {
    getdata();
  }, []);

  const hotel = datas?.allHotels[0]
console.log("data is " ,hotel)
  return (
<>
<Imgs src={comfort} />
<Maindiv11>

  <First11>
    <Detail src={detail2} />
    <Plan>Plan</Plan>

  </First11>
  <Plus src={plus} />
  <First11>
    <Detail src={detail3} />
    <Plan>Plan</Plan>
  </First11>
  <Plus src={plus} />
  <First11>
    <Detail src={detail4} />
    <Plan>Plan</Plan>
  </First11>
  <Plus src={plus} />
  <First11>
    <Detail src={detail5} />
    <Plan>Plan</Plan>
  </First11>



</Maindiv11>

  <Newdiv>
  <Card>
    <Img src={hotel?.image?.url} /> 
    <Whitediv>
    <Namediv>
    <Name>{hotel?.location} </Name>
    <Stardiv>
     <Star src={star} />
     <Star src={star} />
     <Star src={star} />
    </Stardiv>
    
    </Namediv>
    <Locationdiv>
    <MdLocationPin />
    <Location>{hotel?.name}</Location>
    </Locationdiv>
    <Roomdiv>
    <Room>Room Details</Room>
    <Delux>Delux Beach Bungalow</Delux>
    <Ul>
    <Li>
      Refundable , Wif , Air Conditiona
      </Li>

    <Li>Full Board , Accomodates , 2Adults</Li> 
    <Li>Area 431Sqft</Li>
  
    </Ul>
    </Roomdiv>
    <center><Change onClick={click}>Change Hotel</Change></center>
    </Whitediv>  
  </Card>
  </Newdiv>
<center>
  <Formdiv>
    <Firstdiv>
    <FiEdit2 />
    <Date>Nov 19 . 2 adults . 1 room</Date>
    </Firstdiv>
    <Seconddiv>
       <Inner>
         <Price>Price for 2 Persons</Price>
         <Rate>${hotel?.price}</Rate>
       </Inner>
       <Link style={{textDecoration:"none"}} to={`/packageform/${id}`}> <Book> Book Now </Book> </Link>
    </Seconddiv>
    <Thirddiv>
    <Thirdone>
    <Trip>Trip Cost</Trip>
    <Rates>Tcs</Rates>
    </Thirdone>
    <Thirdone>
    <Trip>${hotel?.price}</Trip>
    <Rates>$2000</Rates>
    </Thirdone>

    </Thirddiv>
    <Totaldiv>
    <Payble>Payable Amount</Payble>
    <Total>${hotel?.price + 2000}</Total>
    </Totaldiv>
    <Picky>Pickyourtrail Advantage</Picky>
    <Taxdiv>
    <Tax>All Inclusive real-time pricing</Tax>
    <Tax>Travel Concierge through app</Tax>
    <Tax>Flexible Payment options</Tax>
    </Taxdiv>
  </Formdiv>
  </center>
</>
  )
}

export default Mobilepackbook