"use client";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <div className="w-11/12 md:w-2/3 bg-white shadow-2xl p-6 rounded-lg">
      <h1 className="mb-4 font-bold text-gray-700">Create an account</h1>
      <label className="block mb-3">
        <span className="form-lbl">Name</span>
        <input
          type="text"
          placeholder="Enter Full Name"
          className="form-input"
          name="name"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="block mb-3">
        <span className="form-lbl">Email</span>
        <input
          type="text"
          placeholder="Enter Email"
          className="form-input"
          name="email"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="block mb-3">
        <span className="form-lbl">Username</span>
        <input
          type="text"
          placeholder="Enter Username"
          className="form-input"
          name="username"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label className="block mb-4">
        <span className="form-lbl">Password</span>
        <input
          type="text"
          className="form-input"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <div className="flex items-center mb-3 ">
        <input type="checkbox" className="h-4 w-4 mr-1" />
        <span className="block text-sm font-medium text-gray-500 ">
          Accept Terms & Conditions.
          <span className="text-blue-500 cursor-pointer"> Read Policy</span>
        </span>
      </div>
      <hr className="mb-3" />
      <label className="block mb-3 font-bold">
        <input type="button" value="Create account" className="btn-primary" />
      </label>
      <label className="block">
        <span className="block text-sm font-medium text-gray-500">
          <Link href="/auth/login" className="text-blue-500 cursor-pointer">
            Login
          </Link>{" "}
          if you already have an account
        </span>
      </label>
    </div>
  );
};

export default Signup;
