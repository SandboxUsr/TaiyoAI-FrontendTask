import React from "react";
import Card from "./Card";

export default function ContactList() {
  return (
    <div className="inline-block bg-gray-100 w-full">
      <button className="border border-black text-lg p-4 bg-gray-400 mx-60 my-16 flex justify-center font-extrabold text-black">
        Create Contact
      </button>
      <div>
        <Card />
      </div>
    </div>
  );
}
