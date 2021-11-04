import React from "react";
import "./App.css";
import StudentContainer from "./components/StudentsContainer/Index";
import { StudentProvider } from "./utils/StudentContext";

function App() {

  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh", backgroundColor: "lightgrey", alignItems: "center", justifyContent: "center"}}>
      <StudentProvider>
        <StudentContainer />
      </StudentProvider>
    </div>
  );
}


export default App;
