import React from "react"
import Container from 'react-bootstrap/Container'
import DisplayStudents from "../DisplayStudents"
import SearchStudent from "../Search/SearchStudent"
import './index.css'

function StudentContainer() {
    return(
        <Container>
            <SearchStudent />
            <DisplayStudents />
        </Container>
    ) 
}

export default StudentContainer;