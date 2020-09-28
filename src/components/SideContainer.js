import React from "react";
import "../styles.css";



const SideContainer = (props) => {
    return (
        <div>
            <div className="sideContainer">
            <h1>Picture of the Day</h1>
            <h2>{props.date}</h2>
            <p>{props.explanation}</p>
            </div>
        </div>
    );

};
export default SideContainer;