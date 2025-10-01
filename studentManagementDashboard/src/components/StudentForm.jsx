import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, updateStudent, cancelEdit } from "../studentSlice.js";

const StudentForm = () => {
  const dispatch = useDispatch();
  const editing = useSelector((state) => state.students.editing);

  const [form, setForm] = useState({ name: "", age: "", email: "" });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.email) {
      alert("All fields are required!");
      return;
    }

    if (editing) {
      dispatch(updateStudent(form));
    } else {
      dispatch(addStudent(form));
    }

    setForm({ name: "", age: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={form.age}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit" className="btn-edit">
        {editing ? "Update" : "Add"} Student
      </button>
      {editing && (
        <button type="button" className="btn-cancel" onClick={() => dispatch(cancelEdit())}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default StudentForm;
