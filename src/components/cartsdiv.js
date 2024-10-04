import React, { useEffect, useState } from "react";
import Carts from "./Carts";
import { Link } from "react-router-dom";
import axios from "axios";

function Cartsdiv(){
  let [api,setapi]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/data').then(x=>setapi(x.data));
  },[])
  
  
  
  
    return(
        <>
         <div className='div2'>
          
    {api.map((x,y)=>{
      return(
        <>
        
        <Link key={x.id} style={{textDecoration:"none"}} to={x.id}>
        <Carts k={x.id} src={x.image} h1={x.city} h3={x.description}/>
        </Link>
        </>
      )
    })}
    </div>  
        </>
    )
    
}
export default Cartsdiv;