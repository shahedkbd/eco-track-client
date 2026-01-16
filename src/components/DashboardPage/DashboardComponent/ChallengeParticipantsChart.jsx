import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChallengeParticipantsChart = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetch("https://eco-track-server-one-rho.vercel.app/challenges")
      .then((res) => res.json())
      .then((data) => setChallenges(data));
  }, []);

  const chartData = challenges.map((item) => ({
    name: item.title.length > 12 ? item.title.slice(0, 12) + "..." : item.title,
    participants: item.participants,
  }));

  return (
    <div className="bg-base-100 p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">
        👥 Participants per Challenge
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="participants" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChallengeParticipantsChart;
