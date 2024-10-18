import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <div className="flex items-center">
        <h1 className="text-primary-200 text-2xl">Page404</h1>
        <span className="mx-4">|</span>
        <p className="text-gray-700 text-lg">Page not found</p>
      </div>
      <Link to="/" className="mt-4">
        <button className="bg-primary-200 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition">
          Back home
        </button>
      </Link>
    </div>
  );
};

export default Page404;