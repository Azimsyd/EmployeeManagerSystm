import React from "react";
import Navbar from "../components/Navbar";



function Home() {
  return (
    <>
        <Navbar />
      <div className=" max-w-screen-2xl container mx-auto md:px-20  mt-56">
        <h1 className="font-bold md:text-6xl text-4xl text-center">Welcome</h1>
      </div>
    </>
  );
}

export default Home;
