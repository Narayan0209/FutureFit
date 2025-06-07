"use client";

import React, { useState, useEffect } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiSearchEyeLine } from "react-icons/ri";

type FormData = {
  phonenumber: string;
  email: string;
  password: string;
};

const Form = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [formEntry, setFormEntry] = useState<FormData>({ phonenumber: '', email: '', password: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [errors, setErrors] = useState<any>({});
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    setFilteredData(users);
  }, [users]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormEntry({ ...formEntry, [name]: value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formEntry);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const response = await fetch(`/api/${isSignup ? "register" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formEntry),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
      } else {
        alert(data.message);
        setUsers((prev) => [...prev, formEntry]);
        setFormEntry({ phonenumber: "", email: "", password: "" });
      }
    } catch (error) {
      alert("Failed to connect to server");
      console.error(error);
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validationErrors = validate(formEntry);
  //   setErrors(validationErrors);

  //   if (Object.keys(validationErrors).length > 0) return;

  //   if (isEditing) {
  //     const updatedUsers = [...users];
  //     updatedUsers[editIndex] = formEntry;
  //     setUsers(updatedUsers);
  //     setIsEditing(false);
  //   } else {
  //     setUsers([...users, formEntry]);
  //   }

  //   setFormEntry({ phonenumber: '', email: '', password: '' });
  // };

  const handleEdit = (index: number) => {
    setFormEntry(users[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const validate = (data: FormData) => {
    const err: any = {};
    if (!data.phonenumber.trim()) err.phonenumber = '*Phone number is required';
    else if (!/^\d{10}$/.test(data.phonenumber)) err.phonenumber = '*Enter valid 10-digit number';

    if (isSignup && !data.email?.trim()) err.email = '*Email is required';
    else if (isSignup && !/^\S+@\S+\.\S+$/.test(data.email!)) err.email = '*Invalid email format';

    if (!data.password.trim()) err.password = '*Password is required';
    else if (data.password.length < 6) err.password = '*Min 6 characters';

    return err;
  };

  const handleSearch = (value: string) => {
    setFilteredData(users.filter(user =>
      user.email.toLowerCase().includes(value.toLowerCase())
    ));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white  text-white">
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-white text-black rounded-lg shadow-2xl overflow-hidden">

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">{isSignup ? 'Sign Up' : 'Login to FutureFit'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="p-2 border bg-purple-50 mb-2 border-purple-300 rounded w-full focus:ring-purple-500 focus:ring-2"
              type="number"
              name="phonenumber"
              value={formEntry.phonenumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
            />
            {errors.phonenumber && <span className="text-red-500 text-sm">{errors.phonenumber}</span>}

            {isSignup && (
              <>
                <input
                  className="p-2 border bg-purple-50 mb-2 border-purple-300 rounded w-full focus:ring-purple-500 focus:ring-2"
                  type="text"
                  name="email"
                  value={formEntry.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </>
            )}

            <input
              className="p-2 border bg-purple-50 mb-4 border-purple-300 rounded w-full focus:ring-purple-500 focus:ring-2"
              type="password"
              name="password"
              value={formEntry.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}

            <div className="flex mt-4">
              <button type="submit" className="text-white bg-fuchsia-500 hover:bg-fuchsia-600 p-2 w-full rounded-md shadow-md transition duration-300 ease-in-out">
                {isEditing ? 'Update' : isSignup ? 'Sign Up' : 'Login'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormEntry({ phonenumber: '', email: '', password: '' });
                  setIsEditing(false);
                  setErrors({});
                }}
                className="text-white bg-gray-500 ml-4 p-2 w-full rounded-md shadow-md"
              >
                Cancel
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <button
              onClick={() => {
                setIsSignup(!isSignup);
                setFormEntry({ phonenumber: '', email: '', password: '' });
                setErrors({});
                setIsEditing(false);
              }}
              className="text-purple-700 font-semibold hover:underline"
            >
              {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
            </button>
          </div>

          {users.length > 0 && (
            <div className="mt-8">
              <h3 className="text-center font-semibold mb-4">Users</h3>
              <div className="border mb-4 border-purple-300 rounded">
                <form className="flex">
                  <input
                    className="p-2 w-full border rounded-l focus:ring-purple-400 focus:ring-2"
                    type="search"
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search by phone number..."
                  />
                  <button type="submit" className="bg-fuchsia-500 text-white px-4">
                    <RiSearchEyeLine />
                  </button>
                </form>
              </div>

              <p className={`text-red-500 text-center ${filteredData.length === 0 ? '' : 'hidden'}`}>
                User Not Found
              </p>

              <ul>
                {filteredData.map((user: any, index: number) => (
                  <li className="flex justify-between items-center border-b p-2" key={index}>
                    <div>
                      📞 {user.phonenumber} | {user.email ? `📧 ${user.email}` : ''} 🔑 {user.password}
                    </div>
                    <div className="flex">
                      <button onClick={() => handleEdit(index)} className="text-xl p-2">
                        <CiEdit />
                      </button>
                      <button onClick={() => handleDelete(index)} className="text-xl text-red-500 p-2">
                        <MdDeleteForever />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white-100">
          <img
            src="\home-illustration.svg"
            alt="Form Visual"
            className="max-h-[500px] w-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Form;
