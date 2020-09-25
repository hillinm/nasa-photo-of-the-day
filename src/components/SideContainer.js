import React from "react";
import { Card, CardText, CardHeader, CardBody, Col } from "reactstrap";


const SideContainer = (props) => {
    return (
        <Col>
            <Card body inverse style={
                { backgroundColor: '#333', 
                background: 'rgba(0, 0, 0, 0.8)', 
                borderColor: 'yellow', 
                boxShadow: 'yellow 0px 0px 10px',
                width: '600px',
                left: '65%',
                marginTop: '10%',
                color: 'white',
                padding: '20px',
                }}>
                <CardHeader>Picture of the Day</CardHeader>
                <CardBody>
                    <CardText>
                        {props.date}
                    </CardText>
                    <CardText>
                        {props.explanation}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );

};
export default SideContainer;