import React from "react"
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap/'

function StudentCard(props) {
    return (
        <Row>
            <Col style={{alignSelf: "center"}} xs={2}>
                <Card.Img border="1px" class="rounded-circle" src={props.pic} height="90px" width="90px" style={{borderColor: "lightgrey"}}/>
            </Col>
            <Col md={10}>
                <Card.Body style={{marginLeft: "20px"}}>
                    <Card.Title style={{fontSize: '28px', fontWeight: "bold"}}>
                        {`${props.firstName.toUpperCase()} ${props.lastName.toUpperCase()}`}
                    </Card.Title>
                    <Card.Text style={{marginLeft: "15px", color: "grey", fontFamily: 'Raleway', fontSize: "12px"}}>
                        {`Email: ${props.email}`}
                        <br />
                        {`Company: ${props.company}`}
                        <br />
                        {`Skill: ${props.skill}`}
                        <br />
                        {`Average: ${props.average}`}
                    </Card.Text>
                </Card.Body>
            </Col>
        </Row>
    )
}

export default StudentCard;