import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import './index.css'
import Badge from 'react-bootstrap/Badge'

function AddTag(props) {
  const [ tagContent, setTagContent ] = useState()
  const [ tag, setTag ] = useState([]);

  const student = props.student;
  student.tags = tag;
   
  const handleChange = (event) => {
    setTagContent(event.target.value)
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log(tag)
      student.tags.push(tagContent);
      setTagContent("")
      console.log('do validate')
    }
  }

  return (
    <div>
      <p style={{marginLeft: '140px', marginBottom: "5px"}}>
        {student.tags.length > 0 &&
          student.tags.map(function (tag, index) {
            return (
              <Badge key={index} bg="secondary">
                {tag}
              </Badge>
            )
          })
        }
      </p>
      <Form>
        <Form.Control className="tag" type="name" placeholder="Add a tag" value={tagContent}
          student={props.student}
          onChange={(event) => handleChange(event)}
          onKeyDown={handleKeyDown}
        />
      </Form>
    </div>
  )
}

export default AddTag;