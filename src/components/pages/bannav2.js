import React from "react";

class BanNav2 extends React.Component{
    render(){
        return(
            <>
             <div id='nav2'>
                <h1 className="nav2text" style={{paddingTop:"100px"}}>Explore all adventures</h1>
                <h2 className="nav2text">Here's a list of places that you can explore in city</h2>
                <div>
                    <ul id='nav2ul' >
                        <li className="navlist" ><p style={{padding:'5px'}}>Filter:</p></li>
                        <li className="navlist"><p className="nav2innertext">Filter by Duration (Hours)</p><span className="clear">clear</span></li>
                        <li className="navlist"><p className="nav2innertext">Add Category</p><p className="clear">clear</p></li>
                        <li className="navlist"><input className="navlist" type="serch" placeholder="serch adventure" style={{border:'solid 1px rgb(196, 195, 195)',fontSize:"15    px",padding:'5px',borderRadius:"3px"}}></input>
                        <p className="clear">clear</p></li>
                    </ul>
                </div>
               </div>
            </>
        )
    }
}
export default BanNav2