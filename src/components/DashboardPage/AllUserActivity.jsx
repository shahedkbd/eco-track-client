import React, { useEffect, useState } from "react";

const AllUserActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://eco-track-server-one-rho.vercel.app/activity") // your API
      .then((res) => res.json())
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load activities", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">📊 All User Activity</h2>

      <div className="overflow-x-auto rounded-xl shadow bg-base-100">
        <table className="table table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>User</th>
              <th>Challenge</th>
              <th>Joined At</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>

          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id}>
                <td>
                  <div>
                    <p className="font-semibold">{activity.userName}</p>
                    <p className="text-sm opacity-70">{activity.userEmail}</p>
                  </div>
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-14 h-10 rounded object-cover"
                    />
                    <span className="font-medium">{activity.title}</span>
                  </div>
                </td>

                <td>{new Date(activity.joinAt).toLocaleDateString()}</td>

                <td>
                  <span
                    className={`badge ${
                      activity.type === "Ongoing"
                        ? "badge-warning"
                        : "badge-success"
                    }`}
                  >
                    {activity.type}
                  </span>
                </td>

                <td className="w-52">
                  <progress
                    className="progress progress-primary w-full"
                    value={activity.progress}
                    max="100"
                  ></progress>
                  <p className="text-xs text-center mt-1">
                    {activity.progress}%
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserActivity;
