import React from 'react'
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const Checkapi = () => {

  const beta = React.useRef()
    const { data, error } = useSWR(
        "https://travel-andman.herokuapp.com/api/user/get/packages",
        fetcher
      );
    
      if (error) return "An error has occurred.";
      if (!data) return "Loading...";
      console.log(data)

      const click = ()=>{
        console.log(beta.current.value)
      }
  return (

    
    <>
    {
        data?.allpackages?.map((i)=>{
            return (
<>
      <img src={i.image?.url} />
      <p>{i.description}</p>
      <p>{i.price}</p>

</>
            )
        })
    }
    <input ref={beta} type="text" />
    <button onClick={click}>click me</button>
    </>
  )
}

export default Checkapi