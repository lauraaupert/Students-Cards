import React from "react"
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import StudentCard from "../StudentCard"
import "./index.css";
import AddTag from "../AddTag/index.js";

function StudentAccordion(props) {

    return (
        <Accordion key={props.student.firstName}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <StudentCard 
                        key={props.student.id + props.student.firstName}
                        firstName={props.student.firstName} 
                        lastName ={props.student.lastName}
                        pic={props.student.pic}
                        email={props.student.email}
                        company={props.student.company}
                        average={`${props.student.average}%`}
                        skill={props.student.skill}
                    />
                </Accordion.Header>
                <Accordion.Body>
                    {props.student.grades.map(function(grade, index) {
                        return(
                        <Row key={index}>
                            {`Test ${index + 1}: ${grade}%`}
                        </Row>
                        )
                    })}
                </Accordion.Body>
                <AddTag student={props.student}/>
            </Accordion.Item>
        </Accordion>
    )
}

export default StudentAccordion;