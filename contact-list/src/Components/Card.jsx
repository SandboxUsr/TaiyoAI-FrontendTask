import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../store/slices/ContactSlice";
import { Link } from "react-router-dom";

export default function Card() {

  const data = useSelector((state) => {
    return state.contacts;
  })

  let dispatch = useDispatch();

  return <div className="flex gap-40 mb-10 flex-wrap">
    {data.map((ele,id) => {
      return <div className="ml-10" key={id}>
      <div className="h-20 w-52 border border-black pl-3">
        <div>Name: {ele.firstName} {ele.lastName}</div>
        <div>Status: {ele.status}</div>
      </div>
      <div>
        <Link to="/edit" state={{id: id}}>
          <button className="border border-black box-border rounded-md ml-16 mt-4 bg-green-400 font-bold pl-6 pr-6 text-white">
            Edit
          </button>
        </Link>
      </div>
      <div>
        <button
          className="border border-black box-border rounded-md ml-14 mt-4 bg-red-400 font-bold pl-6 pr-6 text-white"
          onClick={() => {
            dispatch(deleteContact(id))
          }}>
          Delete
        </button>
      </div>
    </div>
    })}
  </div>
}
