import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function ContactList() {
  return (
    <div className="inline-block bg-gray-100 w-full h-max overflow-y-scroll" style={{ height: "535px" }}>
      <Link to="/add">
        <button className="border border-black text-lg p-4 bg-gray-400 mx-64 my-16 flex justify-center font-extrabold text-black">
          Create Contact
        </button>
      </Link>
      <div>
        <Card />
      </div>
    </div>
  );
}
