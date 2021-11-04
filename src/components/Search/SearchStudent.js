import React, { useState, useEffect, useContext } from "react"
import Form from "react-bootstrap/Form"
import api from "../../utils/api"
import { StudentContext } from "../../utils/StudentContext"
import './index.css'

function SearchStudent() {
  const [ allData, setAllData ] = useState([]);
  const [ filteredData, setFilteredData ] = useState(allData);

  const context = useContext(StudentContext)

  const handleSearch = (event) =>{
    let value = event.target.value;
    let resultName = [];

    resultName = allData.filter((data) => {
        console.log(data.firstName.search(value))
      return (data.firstName + data.lastName).toLowerCase().search(value.toLowerCase()) !== -1;
    });

    setFilteredData(resultName);
    context.setList(resultName);
  };
  
  //HandleSearchTag should be reworked to handle backspace too
  const handleSearchTag = (event) => {
    let value = event.target.value;
    let resultTag = [];
    filteredData.filter((students) => {
      students.tags.forEach(element => {
        if (element.includes(value)) resultTag.push(students)
      })
      return resultTag;
    })
    setFilteredData(resultTag);
    context.setList(resultTag);
  };

  //Populate the context list with API response
  useEffect(() => {
    api.getStudents()
        .then(response => response.json())
        .then(res => {
            setAllData(res.students)
            setFilteredData(res.students)
            context.setList(res.students)
        })
        .catch(error => {
            console.log('Error getting data: ' + error);
        })
  }, 
  []);

  return (
    <div>
      <Form>
        <Form.Control className="search-form" type="name" placeholder="Search by name"
          style={{border: "none"}}
          onChange={(event) => handleSearch(event)}
        />
      </Form>
      <Form>
        <Form.Control className="search-form" type="name" placeholder="Search by tag"
          style={{border: "none"}}
          onChange={(event) => handleSearchTag(event)}
        />
      </Form>
    </div>
  )
}

export default SearchStudent;