import React from "react";
import '../../App.css'
class BanCarts extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <div id='bancarts'>
                <img className="bancartimgs" src={this.props.src} link={this.props.link}></img>
                <div id="bantextdiv">
                <div id="banh1div">
                <h2 className="banh1" style={{marginBottom:'20px'}}>{this.props.place}</h2>
                <h2 className="banh1">duration</h2>
                </div>
                <div>
                <p style={{marginBottom:'25px',marginTop:'5px'}}>{this.props.rupee}</p>
                <p >{this.props.hr}hours</p>
                </div>
                </div>
                <h3  id="bancart">{this.props.p}</h3>
            </div>
            </>
        )
    }
}
export default BanCarts