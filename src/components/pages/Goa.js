import React from "react";
import Fotter from "../Fotter";
import BanCarts from "./BanCarts";
import { Link } from "react-router-dom";
import BanNav2 from "./bannav2";
import Nav from "../Nav";
import BanCartsData from "./BanCartsData";
import Goacarts from "./Goacarts";
import Goadata from "./Goadata";
import axios from "axios";

class Goa  extends React.Component {
    constructor(props){
        super(props)
        this.state={api3:[]}
    }
    componentDidMount(){
        axios.get('http://localhost:4002/data').then(x=>{
            this.setState({api3:x.data})
        })
    }
    render(){
        console.log(this.state.api3);
        
        return(
            <>
            <Nav/>
            <BanNav2/>
            <div className="mainbandiv">
                {
                    this.state.api3.map((x,)=>{
                        return(
                            <>
                            <Link style={{textDecoration:'none'}} to={x.id}><Goacarts src={x.image} duration={x.duration} place={x.name} hr={x.duration} p={x.category}rupee={x.costPerHead}/></Link>
                            </>
                        )
                    })
                }
            </div>
            <Fotter/>
            </>
        )
    }
}
export default  Goa;
