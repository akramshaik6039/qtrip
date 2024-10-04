import React from "react";
import Nav from "../Nav";
import BanNav2 from "./bannav2";
import BanCarts from "./BanCarts";
import Fotter from "../Fotter";
import BanCartsData from "./BanCartsData";
import { Link } from "react-router-dom";
import axios from "axios";
import Kol1 from "./Kolkathainner1";
class Kolkatha  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {api4:[]}
    }
    componentDidMount(){
        axios.get('http://localhost:4003/data').then(x=>{
            this.setState({api4:x.data})
        })
    }
    render(){
        console.log(this.state.api4);
        
        return(
            <>
                <Nav/>
                <BanNav2/>
                <div className="mainbandiv">
                {
                    this.state.api4.map((x,index)=>{
                        return(
                            <Link style={{textDecoration:'none'}} to={x.id}><Kol1 src={x.image} place={x.name} duration={x.duration} rupee={x.costPerHead}
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
export  default Kolkatha;

