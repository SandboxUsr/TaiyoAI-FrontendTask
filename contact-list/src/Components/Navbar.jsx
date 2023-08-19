import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <aside
      className="border-2 border-solid border-black text-4xl underline text-blue-700 p-5"
      style={{ width: "190px", height: "535px" }}
    >
      <Link to="/">
        <div className="mt-5 mb-10 hover:cursor-pointer">Contact</div>
      </Link>
      <Link to="/map">
        <div className="mt-5 mb-10 hover:cursor-pointer">Charts and Maps</div>
      </Link>
    </aside>
  );
}
