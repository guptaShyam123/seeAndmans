import React , {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
const Scrool = () => {
  
  const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo(0, 0);

        return ()=>{
         null
        }
    } , [pathname])
    
  return (
 <>
 
 </>
  )
}

export default Scrool
