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
      <div className="grid grid-cols-4 py-3 gap-3 px-10">
        {ActiveChallenges.map((active) => (
          <ActiveChallengeCard
            key={active._id}
            active={active}
          ></ActiveChallengeCard>
        ))}
      </div>
    </div>
  );
};

export default OngoingChallenges;
