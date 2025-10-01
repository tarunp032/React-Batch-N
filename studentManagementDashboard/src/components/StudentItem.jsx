import React from "react";
import { useDispatch } from "react-redux";
import { deleteStudent, startEdit } from "../studentSlice.js";

const StudentItem = ({ student }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.email}</td>
      <td>
        <button className="btn-edit" onClick={() => dispatch(startEdit(student))}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => dispatch(deleteStudent(student.id))}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;
