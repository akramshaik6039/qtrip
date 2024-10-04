import React from "react";
import Nav from "../Nav";
import Fotter from "../Fotter";
import Bancourosel from "./Bancourosel";

class Baninner extends  React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <Nav/>
            <Bancourosel/>
            <Fotter/>
            </>
        )
    }
}
export default Baninner;
