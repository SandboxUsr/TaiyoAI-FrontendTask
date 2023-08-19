import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ContactDetailsForm from "./ContactDetailsForm";

export default function CreateContact() {
  return (
    <div
      className="m-10 border-4 border-solid border-sky-500"
      style={{ width: "900px", height: "600px" }}
    >
      <Header />
      <div className="flex">
        <Navbar />
        <ContactDetailsForm />
      </div>
    </div>
  );
}
