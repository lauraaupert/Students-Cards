
export default {
getStudents: function () {
    return fetch('https://api.hatchways.io/assessment/students')
  }
}

// const hatchwayURL = "https://www.hatchways.io/api/assessment/students";

// const fetchRequest = {
//     getStudents: async () => {
//         const response = await fetch(hatchwayURL);
//         const data = await response.json();
//         return data;
//     },
// };
// export default fetchRequest;