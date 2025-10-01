import React from "react";
import './App.css'
import StudentList from "./components/StudentList.jsx";
import StudentForm from "./components/StudentForm.jsx";

const App = () => {
  return (
    <div className="container">
      <h1>Student Management Dashboard</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
};

export default App;
