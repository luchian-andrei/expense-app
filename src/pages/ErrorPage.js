import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center flex-wrap text-center">
      <h1 className="w-full font-bold text-3xl">
        404 ... something didn`t go as planned
      </h1>
      <h2 className="w-full font-semibold text-2xl">
        While we deal with this you can{" "}
        <Link to={"/"}>
          <button className="bg-orange-400 p-2 rounded-md">go back home</button>
        </Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
