import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cross from "../Assets/cross.png"

export default function ContactList() {

  const data = useSelector((state) => {
    return state.contacts;
  })
  
  return (
    <div className="inline-block bg-gray-100 w-full h-max overflow-y-scroll" style={{ height: "535px" }}>
      <Link to="/add">
        <button className="border border-black text-lg p-4 bg-gray-400 mx-64 my-16 flex justify-center font-extrabold text-black">
          Create Contact
        </button>
      </Link>
      {
      data.length !== 0 ? 
      <div>
        <Card />
      </div> 
      :
      <div className="flex ml-36 w-96 border border-black border-solid bg-gray-400">
        <img src={cross} alt="cross" className="h-20 w-20 mt-5 ml-6"/>
        <div className="w-66 p-10">
          <div>No Contact found</div>
          <div>Please add Contact from</div>
          <div>Create Contact Button</div>
        </div>
      </div>
      
      }
    </div>
  );
}
