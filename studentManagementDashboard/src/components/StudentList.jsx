import React from "react";
import { useSelector } from "react-redux";
import StudentItem from "./StudentItem.jsx";

const StudentList = () => {
  const students = useSelector((state) => state.students.list);

  if (students.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>No students found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
