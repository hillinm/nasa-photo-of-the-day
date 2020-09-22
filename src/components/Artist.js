import React from "react";

const Artist = (props) => {
    return (
        <div className="artist">
            <h2>Artist: {props.copyright}</h2>
        </div>
    );
};
export default Artist;