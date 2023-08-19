import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SecondGraph from "./SecondGraph";
import FirstGraph from "./FirstGraph";
import ThirdGraph from "./ThirdGraph";

export default function Map() {

  return (
    <div
      className="m-10 border-4 border-solid border-sky-500"
      style={{ width: "900px", height: "600px" }}
    >
      <Header />
      <div className="flex">
        <Navbar />
        <div style={{width: "600px", height: "530px"}} className="mx-auto overflow-y-scroll">
            <FirstGraph />
            <SecondGraph />
            <ThirdGraph />
        </div>
      </div>
    </div>
  );
}
