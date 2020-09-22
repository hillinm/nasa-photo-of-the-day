import React from "react";

const SideContainer = (props) => {
    return (
        <div className="sideContainer">
            <h1>Picture of the Day</h1>
            <h2>{props.date}</h2>
            <p>{props.explanation}</p>
        </div>
    );
};
export default SideContainer;