import React from "react";
import styled from "styled-components";

const ArtistName = styled.div`
    position: absolute;
    width: auto;
    height: 42px;
    top: 80%;
    left: 35%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    text-shadow: 0px 0px 5px yellow;

    color: white;
`;

const Artist = (props) => {
    return (
        <ArtistName>Artist: {props.copyright}</ArtistName>
    );
};
export default Artist;