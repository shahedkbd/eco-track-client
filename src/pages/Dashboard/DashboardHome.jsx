import React from "react";
import AllUserActivity from "../../components/DashboardPage/AllUserActivity";
import AllUserActivityChart from "../../components/DashboardPage/DashboardComponent/AllUserActivityChart";
// import ChallengeParticipantsChart from '../../components/DashboardPage/DashboardComponent/ChallengeParticipantsChart';
import ChallengeParticipantsChart from "../../components/DashboardPage/DashboardComponent/ChallengeParticipantsChart";

const DashboardHome = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold">Welcome to Admin Dashboard!</h2>
      </div>
      <div>
        <AllUserActivityChart></AllUserActivityChart>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <ChallengeParticipantsChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
