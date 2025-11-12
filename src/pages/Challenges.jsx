import React, { use } from 'react';
import ChallengeCard from '../components/ChallengeCard';

const ChallengesPromise = fetch("http://localhost:3000/challenges").then(res=>res.json())
const Challenges = () => {
    const challenges = use(ChallengesPromise) 
    console.log(challenges);
       
    return (
        <div className='py-5 w-11/12 mx-auto'>
            <h2 className="text-center text-4xl pb-5 poppins font-bold text-[#7a9352] hover:text-[#628727]">Browse All Challenges</h2>
            <div  className='grid grid-cols-3 gap-5 px-10'>
            {
                challenges.map(challenge=><ChallengeCard key={challenge._id} challenge={challenge}></ChallengeCard>)
            }
            </div>
        </div>
    );
};

export default Challenges;