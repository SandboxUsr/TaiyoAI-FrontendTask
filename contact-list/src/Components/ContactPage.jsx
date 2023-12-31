import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ContactList from "./ContactList";

export default function ContactPage() {
  return (
    <div
      className="m-10 border-4 border-solid border-sky-500"
      style={{ width: "900px", height: "600px" }}
    >
      <Header />
      <div className="flex">
        <Navbar />
        <ContactList />
      </div>
    </div>
  );
}
