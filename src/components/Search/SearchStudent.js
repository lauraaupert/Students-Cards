import React, { useState, useEffect, useContext } from "react"
import Form from "react-bootstrap/Form"
import api from "../../utils/api"
import { StudentContext } from "../../utils/StudentContext"
import './index.css'

function SearchStudent() {
  // const cache = useRef({})
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

//   function filterByTag(arr) {
//     return arr.filter((student) => {
//         let isTagged = false;
//         let lowerCasedTag;
//         student.tags.forEach((tag) => {
//             lowerCasedTag = tag.toLowerCase().trim();
//             if (lowerCasedTag.includes(tagSearchInput)) {
//                 isTagged = true;
//             }
//         });
//         return isTagged;
//     });
// }
// const handleSearchTag = (event) => {
//   let value = event.target.value;
//   filteredData = 


  const handleSearchTag = (event) => {
    let value = event.target.value;
    console.log(value)
    let resultTag = [];
    resultTag = filteredData.filter((students) => {
      let taggedStudent = false;
      let trimmedTag;
      students.tags.forEach((element) => {
        trimmedTag = element.toLowerCase().trim();
        if (trimmedTag.includes(value)) {
          taggedStudent = true;
        }
      })
      console.log(taggedStudent)
      return taggedStudent;
    })
    console.log(filteredData)
    // setFilteredData(resultTag);
    context.setList(resultTag);
  };

  // const initializeTags = (students) => {
  //   let allStudents = [];
  //   students.forEach(student => {
  //     if (!student.tags) {
  //       Object.assign(student, { tags: [] });
  //     }
  //     allStudents.push(student);
  //   })
  //   // return allStudents;
  //   setAllData(allStudents)
  //   setFilteredData(allStudents);
  //   context.setList(allStudents);
  // }
  

  //Populate the context list with API response
  useEffect(() => {
    // parallelAPIrequests()
    api.getStudents()
        .then(response => response.json())
        .then(res => {
          res.students.forEach(student => {
            if (!allData.includes(student)) {
              student.tags = [];
              student.average = student.grades.reduce((a, b) => Number(a) + Number(b)) / student.grades.length;
              allData.push(student)
            }
          })
            context.setList(allData)
        })
        // .then(initializeTags(allData))
        .catch(error => {
            console.log('Error getting data: ' + error);
        })
  }, 
  []);

//   async function fetchStudents() {
//     // Later, this if statement can be changed based on business requirements
//     if (allData.length > 0) {
//         return;
//     }
//     try {
//         let data;
//         if (cache.current["studentsAPI"]) {
//             data = cache.current["studentsAPI"];
//         } else {
//             data = await api.getStudents();
//             cache.current["studentsAPI"] = data;
//         }
//         console.log(cache)
//         const studentsWithTags = initializeTags(data.students);
//         setAllData((prev) => [...prev, ...studentsWithTags]);
//         context.setList(cache.current.studentsAPI.students);
//     } catch (err) {
//         return;
//     }
// }

// async function parallelAPIrequests() {
//     try {
//         const fetchFunctions = [fetchStudents()];
//         await Promise.all(fetchFunctions);
//     } catch (err) {
//         return;
//     }
// }
// console.log(allData)

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
        //   onChange={(e) => {
        //   setTagSearch(e.target.value.toLowerCase().trim());
        // }}
        />
      </Form>
    </div>
  )
}

export default SearchStudent;