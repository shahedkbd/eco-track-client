import React, { use } from "react";

const PromiseData = fetch("http://localhost:3000/statistics").then((res) =>
  res.json()
);
const LiveStatistics = () => {
  const data = use(PromiseData);
  return (
<div className="relative z-10">
  <div
    className="
      rounded-2xl grid grid-cols-4 
      lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1
      text-center bg-[#7a9352]

      /* Positioning */
      lg:absolute lg:-top-20 lg:left-1/2 lg:-translate-x-1/2 
      lg:w-[90%]

      /* Normal positioning for sm/md */
      md:static sm:static

      gap-5 px-5
    "
  >
        <div className="my-4 bg-white rounded p-3 px-1">
          <h3 className="font-bold text-sm md:text-base">TOTAL CO₂ SAVED</h3>
          <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-[#7a9352]">
            {data[0].totalCO2Saved} <span className="text-xs">(KG)</span>
          </h2>
        </div>

        <div className="my-4 bg-white rounded p-3 px-1">
          <h3 className="font-bold text-sm md:text-base">
            TOTAL PLASTIC REDUCED
          </h3>
          <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-[#7a9352]">
            {data[0].totalPlasticReduced} <span className="text-xs">(KG)</span>
          </h2>
        </div>

        <div className="my-4 bg-white rounded p-3 px-1">
          <h3 className="font-bold text-sm md:text-base">
            TOTAL CHALLENGES JOINED
          </h3>
          <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-[#7a9352]">
            {data[0].totalChallengesJoined}
          </h2>
        </div>

        <div className="my-4 bg-white rounded p-3 px-1">
          <h3 className="font-bold text-sm md:text-base">TOTAL MEMBERS</h3>
          <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-[#7a9352]">
            {data[0].totalUsers}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LiveStatistics;
