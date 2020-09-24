import React from "react";
import styled from "styled-components";

const PicTitle = styled.div `
    position: absolute;
    width: auto;
    left: 100px;
    height: 35px;
    top: 3px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 56px;
    text-shadow: 0px 0px 5px yellow;

    color: white;
`;

const Top = (props) => {
    return (
        <PicTitle>{props.title}</PicTitle>
    );
};
export default Top;