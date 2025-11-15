import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#7a9352]  text-center py-10 ">
      <div className="">
        <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto">
          <h1 className="text-6xl font-bold text-white">404</h1>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white mb-2">Page Not Found</h2>

      <button
        onClick={() => (window.location.href = "/")}
        className="btn primary-btn mt-6 poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white group"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
