import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../store/slices/ContactSlice";
import { Link } from "react-router-dom";

export default function Card() {
  // Select data from the Redux store
  const data = useSelector((state) => {
    return state.contacts;
  })

  // Get the dispatch function to dispatch actions
  let dispatch = useDispatch();

  return (
    <div className="flex gap-40 mb-10 flex-wrap">
      {/* Loop through each contact in the data array */}
      {data.map((ele, id) => {
        return (
          <div className="ml-10" key={id}>
            <div className="h-20 w-52 border border-black pl-3">
              {/* Display contact information */}
              <div>Name: {ele.firstName} {ele.lastName}</div>
              <div>Status: {ele.status}</div>
            </div>
            <div>
              {/* Link to the edit page with the contact's ID */}
              <Link to="/edit" state={{ id: id }}>
                <button className="border border-black box-border rounded-md ml-16 mt-4 bg-green-400 font-bold pl-6 pr-6 text-white">
                  Edit
                </button>
              </Link>
            </div>
            <div>
              {/* Button to delete the contact */}
              <button
                className="border border-black box-border rounded-md ml-14 mt-4 bg-red-400 font-bold pl-6 pr-6 text-white"
                onClick={() => {
                  // Dispatch the deleteContact action with the contact's ID
                  dispatch(deleteContact(id))
                }}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
