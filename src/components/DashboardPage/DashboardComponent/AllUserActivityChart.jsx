import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const COLORS = ["#22c55e", "#f59e0b"];

const AllUserActivityChart = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://eco-track-server-one-rho.vercel.app/activity")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  /* ===== Chart Data Processing ===== */

  const statusData = [
    {
      name: "Ongoing",
      value: activities.filter((a) => a.type === "Ongoing").length,
    },
    {
      name: "Completed",
      value: activities.filter((a) => a.type !== "Ongoing").length,
    },
  ];

  const progressData = activities.map((item, index) => ({
    name: `User ${index + 1}`,
    progress: item.progress,
  }));

  const activityCountData = [
    { name: "Total Activities", count: activities.length },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">📈 Admin Dashboard Overview</h1>

      {/* ===== Charts Grid ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-base-100 rounded-xl shadow p-4">
          <h3 className="font-semibold mb-4">Total User Activities</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activityCountData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-base-100 rounded-xl shadow p-4">
          <h3 className="font-semibold mb-4">Activity Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-base-100 rounded-xl shadow p-4">
          <h3 className="font-semibold mb-4">User Progress Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={progressData}>
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AllUserActivityChart;
