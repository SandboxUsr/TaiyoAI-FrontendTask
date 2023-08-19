import React, { useState } from "react";

export default function ContactDetailsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="bg-gray-100 w-full">
      <div className="flex justify-center mt-14 font-bold text-lg">
        Fill the Details
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
                    setStatus("InActive")
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
        <button
          className="text-lg font-medium mr-20 border border-solid border-black p-3 mt-7 bg-gray-400"
          onClick={() => {
            let contact = {
                firstName: firstName,
                lastName: lastName,
                status: status
            }
          }}
        >
          Save Contact
        </button>
      </div>
    </div>
  );
}
