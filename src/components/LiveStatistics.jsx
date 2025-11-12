import React, { use } from "react";

const PromiseData = fetch("http://localhost:3000/statistics").then((res) =>
  res.json()
);
const LiveStatistics = () => {
  const data = use(PromiseData);
  console.log(data[0].totalCO2Saved);

  return (
    <div className="relative z-10">
      <div className="rounded-2xl grid grid-cols-4 text-center bg-[#7a9352] absolute -top-20 left-1/2 transform -translate-x-1/2 w-[90%] gap-5 px-5">
        <div className="my-4 bg-white rounded p-3 px-1">
          <h3 className="font-bold">TOTAL CO₂ SAVED</h3>
          <h2 className="text-4xl font-bold text-[#7a9352]">
            {data[0].totalCO2Saved} <span className="text-xs">(KG)</span>
          </h2>
        </div>
        <div className="my-4 bg-white rounded p-3 px-1">
          <h3 className="font-bold">TOTAL PLASTIC REDUCED</h3>
          <h2 className="text-4xl font-bold text-[#7a9352]">
            {data[0].totalPlasticReduced} <span className="text-xs">(KG)</span>
          </h2>
        </div>
        <div className="my-4 bg-white rounded p-3 px-1">
          <h3 className="font-bold">TOTAL CHALLENGES JOINED</h3>
          <h2 className="text-4xl font-bold text-[#7a9352]">
            {data[0].totalChallengesJoined}
          </h2>
        </div>
        <div className="my-4 bg-white rounded p-3 px-1">
          <h3 className="font-bold">TOTAL MEMBERS</h3>
          <h2 className="text-4xl font-bold text-[#7a9352]">
            {data[0].totalUsers}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LiveStatistics;
