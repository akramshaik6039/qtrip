import React from "react";
import BanCarts from "./BanCarts";
class Goacarts extends  React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <BanCarts src={this.props.src} link={this.props.link} duration={this.props.duration}
            place={this.props.place}
            rupee={this.props.rupee}
            p={this.props.p}
            hr={this.props.hr}
            />
            </>
        )
    }
}
export default Goacarts;
