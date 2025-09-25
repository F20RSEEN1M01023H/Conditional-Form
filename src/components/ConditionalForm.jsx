import React, { useState } from "react";

const ConditionalForm = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    school: "",
    company: "",
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
    console.log("Form Data Submitted:", formData);
    alert("Form Successfully submitted check more details in console");
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-800/90 to-slate-900 min-h-screen flex flex-col items-center justify-center m-15 rounded-lg text-center text-white">
      <div className="font-mono p-12 rounded-lg border-2 border-white ">
        <h2 className="text-5xl mb-8 font-bold">Conditional Form</h2>
        <form action="" onSubmit={handleSubmit} className="">
          <label for="name" className="font-medium text-xl">
            Name:{" "}
          </label>

          <input
            className=" ml-2 p-2 border-2 border-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-950"
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            placeholder="Enter Your Name here"
            required
          />
          <br />
          <label for="name" className="font-medium text-xl">
            Email:{" "}
          </label>
          <input
            className="p-2 mt-2 border-2 border-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-950"
            type="text"
            onChange={handleChange}
            name="email"
            value={formData.email}
            placeholder="Enter your Email here"
            required
          />
          <br />
          <label for="name" className="font-medium text-xl">
            Role:
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={(e) => {
              handleChange(e);
              setRole(e.target.value);
            }}
            required
            className="text-center mt-2 ml-6 p-1.5 px-5 rounded-lg border-2 border-white focus:outline-none "
          >
            <option value="" className="bg-slate-900/60 ">
              Select Your Role
            </option>
            <option className="bg-slate-900/60 " value="student">
              Student
            </option>
            <option className="bg-slate-900/60 " value="employee">
              Employee
            </option>
          </select>
          <br />
          {/* After Role Conditional Feilds  */}
          {/* student  */}
          {role === "student" && (
            <>
              <label for="name" className="font-medium text-xl">
                School:
              </label>
              <input
                type="text"
                className="p-2 mt-2 border-2 border-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-950"
                name="school"
                placeholder="Enter Your School here"
              />
              <br />
            </>
          )}

          {/* Employee  */}
          {role === "employee" && (
            <>
              <label for="name" className="font-medium text-xl">
                Company:{" "}
              </label>
              <input
                className="p-2 mr-5 mt-2 border-2 border-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-950"
                type="text"
                name="Company"
                placeholder="Enter your Company"
              />
              <br />
              <label for="job title" className="font-medium text-xl">
                Job title:
              </label>
              <input
                className="p-2 mt-2 mr-8 border-2 border-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-950"
                type="text"
                name="JobTitle"
                placeholder="Enter your Job Title here"
              />
              <br />
            </>
          )}
          <button
            className="bg-black border-2 border-white rounded-lg px-4 py-1 mt-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConditionalForm;
