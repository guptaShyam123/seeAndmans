import React from 'react'
import styled from 'styled-components'
import img  from '../../assets/blue.png'
import img1 from '../../assets/tour1.jpeg'

const Maindiv = styled.div`
background:url(${img});
background-repeat: no-repeat;
height:40em;
background-size: cover;
justify-content: center;
align-items: center;
text-align: center;
justify-content: center;
align-items: center;
display: flex;
gap:2em;
`
const   Img = styled.img`
      height: 15vmax;
      width: 12vmax;
      padding-top:10px;
    
`
const  P = styled.p`
  font-size:1.3em;
  font-family: Poppins;
  color:green;
  text-align: center;

`


 
const Logins2 = () => {
  const [name , setName ] = React.useState('')
  const x = [
    {Name:"shyam"},
    {lname:"ram"}
  ]
  const found = x.find(({ Name }) => Name === "ram");
  console.log(found)

  const click = ()=>{
         console.log(name)
  }
  return (
   <>
   <Maindiv>
   
   <Img src={img1} />
   <Img src={img1} />
    <Img src={img1} />
    <Img src={img1} />
    <Img src={img1} />
    <Img src={img1} />
    
   
   </Maindiv>
   <P>My Name Is Shyam Gupta And My Fathers name is rammohan gupta and my mothers name is nirmala gupta</P>
     <input  value={name} onChange={(e)=>{setName(e.target.value)}}  type="text" />
     <button onClick={click}>clickm me</button>
   </>
  )
}

export default Logins2