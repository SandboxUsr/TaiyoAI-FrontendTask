import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { editContact } from "../store/slices/ContactSlice";
import Header from "./Header";
import Navbar from "./Navbar";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function EditContact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const id = location.state;

  return (
    <div
      className="m-10 border-4 border-solid border-sky-500"
      style={{ width: "900px", height: "600px" }}
    >
      <Header />
      <div className="flex">
        <Navbar />
    <div className="bg-gray-100 w-full">
      <div className="flex justify-center mt-14 font-bold text-lg">
        Edit Contact Screen
      </div>
      <div className="w-96 h-80 mt-5 bg-white mx-auto border border-black border-solid">
        <form action="#">
          <div className="m-5 mt-10">
            <label htmlFor="firstname" className="text-lg font-medium">
              First Name:{" "}
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="w-60 border-2 border-black border-solid"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="m-5 mt-10">
            <label htmlFor="lastname" className="text-lg font-medium">
              Last Name:{" "}
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="w-60 border-2 border-black border-solid"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="m-5 mt-10">
            <div className="text-lg font-medium mr-20">Status:</div>
            <div className="ml-36">
              <input className="mr-3" type="radio" name="status" id="active" onClick={() => {
                    setStatus("Active")
                }}/>
              <label htmlFor="active">Active </label>
            </div>
            <div className="ml-36 mt-3">
              <input
                className="mr-3"
                type="radio"
                name="status"
                id="inactive"
                onClick={() => {
                    setStatus("InActive")
                }}
              />
              <label htmlFor="inactive">InActive </label>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-center ml-16">
        <Link to="/">
            <button
            className="text-lg font-medium mr-20 border border-solid border-black p-3 mt-7 bg-gray-400"
            onClick={() => {
                let contact = {
                    firstName: firstName,
                    lastName: lastName,
                    status: status
                }
                dispatch(editContact({id: id, contact: contact}));
            }}
            >
            Save Editted Contact
            </button>
        </Link>
      </div>
    </div>
    </div>
          </div>
  )
}
