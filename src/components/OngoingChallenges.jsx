import React, { use } from "react";
import ActiveChallengeCard from "./ActiveChallengeCard";

const ActiveChallengesPromise = fetch(
  "http://localhost:3000/ongoing-challenges"
).then((res) => res.json());
const OngoingChallenges = () => {
  const ActiveChallenges = use(ActiveChallengesPromise);
  return (
    <div className="bg-[#628727]/10 py-15 pt-20">
  <h2 className="text-center text-4xl pb-5 poppins font-bold text-[#7a9352] hover:text-[#628727]/120">
    Active Challenges
  </h2>

  <div
    className="
      grid 
      grid-cols-4 
      lg:grid-cols-4 
      md:grid-cols-2 
      max-sm:grid-cols-1 
      gap-3 
      py-3 
      px-10 
      sm:px-5
    "
  >
    {ActiveChallenges.map((active) => (
      <ActiveChallengeCard key={active._id} active={active} />
    ))}
  </div>
</div>

  );
};

export default OngoingChallenges;
