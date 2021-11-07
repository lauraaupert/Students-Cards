
import React, { useContext } from "react"
import Row from 'react-bootstrap/Row'
import { StudentContext } from "../utils/StudentContext"
import StudentAccordion from "./StudentAccordion/Index"

function DisplayStudents() {
  const students = useContext(StudentContext);
    
  return (
      <div>
        {/* Map each student to a row */}
          {students.list.map(student => {
            //Create a variable to calculate student's average
              // let average = student.grades.reduce((a, b) => Number(a) + Number(b)) / student.grades.length;
              return(
                <Row key={student.id}>
                  <StudentAccordion student={student}/>
                </Row>
              )
          })
          }
      </div>
  )
}

export default DisplayStudents;

   



