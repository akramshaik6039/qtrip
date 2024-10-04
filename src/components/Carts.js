import React from "react";
import { Link } from "react-router-dom";
class Carts  extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <div key={this.props.id} id='cartdiv'>
                    <img className="div2img" link={this.props.link} src={this.props.src}></img><h1 className="div2text">{this.props.h1}</h1><h3 className="div2text">{this.props.h3}</h3>
                </div>
            </>
        )
    }
    
}
export  default Carts;
