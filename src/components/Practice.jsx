import React, { useState } from "react";

const Practice = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    school: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data successfully submitted:", formData);
    alert("Form Successfully Submitted");
  };
  return (
    <div>
      <div>
        <h2>Conditional form</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <select
            name="role"
            value={formData.role}
            onChange={(e) => {
              handleChange(e);
              setRole(e.target.value);
            }}
          >
            <option value="">select role</option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
          </select>
          {role === "student" && (
            <input value={formData.school} type="text" name="school" />
          )}
          {role === "employee" && (
            <>
              <input value={formData.jobTitle} type="text" name="jobTitle" />
              <input value={formData.company} type="text" name="company" />
            </>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Practice;
