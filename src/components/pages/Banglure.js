import React from "react";
import Nav from "../Nav";
import Cartsdiv from "../Carts";
import Fotter from "../Fotter";
import BanNav2 from "./bannav2";
import BanCarts from "./BanCarts";
import BanCartsData from "./BanCartsData";
import '../../App.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
class Bangluru  extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {api2:[]}
        
        
    }
    componentDidMount(){
        axios.get('http://localhost:4001/data').then(x=>{
            this.setState({api2:x.data})
            
        })
    }
    
   
    render() {
        console.log(this.state.api2);
        return(
            <>
               <Nav/>
                <BanNav2/>
                <div className="mainbandiv">
                {
                    this.state.api2.map((x)=>{
                        return(
                            <Link style={{textDecoration:'none'}} to={x.id}><BanCarts src={x.image} place={x.name}  rupee={x.costPerHead}
                            hr={x.duration} p={x.category}/></Link>
                        )
                    })
                }
                </div>
               <Fotter/>

            </>
        )
    }
}

export default Bangluru;
