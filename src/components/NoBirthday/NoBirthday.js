import React from "react";
import './NoBirthday.css';
import NavBar from "../NavBar/NavBar";
const NoBirthday=({heading})=>{
    return(
        <div className="body-container">
        <NavBar/>
<div className="container">
        <div className="Heading">
            <h1>Birthdays {heading.substring(0,10)}</h1>
        </div>
        <div className="main-body1">
           <h2 >No Birthdays {heading}</h2>
        </div>
    </div>

    </div>
    
    )
}
export default NoBirthday;