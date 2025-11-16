import React, { use } from "react";
import { useLoaderData } from "react-router";
import TipsDataCard from "./TipsDataCard";

const TipsPromise = fetch(
  "https://eco-track-server-one-rho.vercel.app/tips"
).then((res) => res.json());
const CommunityTips = () => {
  const tips = use(TipsPromise);
  console.log(tips);

  return (
    <div className="py-15">
      <h2 className="text-center text-4xl pb-5 poppins font-bold text-[#7a9352] hover:text-[#628727]">
        Recent Tips
      </h2>

      <div
        className="
      grid 
      grid-cols-5 
      xl:grid-cols-5 
      lg:grid-cols-4 
      md:grid-cols-3 
      max-sm:grid-cols-2 
      xs:grid-cols-1
      gap-3 
      py-10 
      justify-items-center 
      w-11/12 
      mx-auto
    "
      >
        {tips.map((tipsData) => (
          <TipsDataCard key={tipsData._id} tipsData={tipsData} />
        ))}
      </div>
    </div>
  );
};

export default CommunityTips;
