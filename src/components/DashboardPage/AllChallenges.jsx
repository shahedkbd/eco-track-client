import React, { useEffect, useState } from "react";

const AllChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://eco-track-server-one-rho.vercel.app/challenges") // your API
      .then((res) => res.json())
      .then((data) => {
        setChallenges(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load challenges", err);
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
      <h2 className="text-2xl font-bold mb-6">🧩 All Challenges</h2>

      <div className="overflow-x-auto rounded-xl shadow bg-base-100">
        <table className="table table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>Challenge</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Participants</th>
              <th>Impact</th>
              <th>Status</th>
              <th>Timeline</th>
            </tr>
          </thead>

          <tbody>
            {challenges.map((challenge) => (
              <tr key={challenge._id}>
                {/* Challenge Info */}
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={challenge.imageUrl}
                      alt={challenge.title}
                      className="w-16 h-12 rounded object-cover"
                    />
                    <div>
                      <p className="font-semibold">{challenge.title}</p>
                      <p className="text-xs opacity-70 line-clamp-2">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td>
                  <span className="badge badge-outline">
                    {challenge.category}
                  </span>
                </td>

                {/* Duration */}
                <td>{challenge.duration} days</td>

                {/* Participants */}
                <td className="font-medium">{challenge.participants}</td>

                {/* Impact */}
                <td>
                  <div>
                    <p className="font-semibold">
                      {challenge.metric} {challenge.impactMetric}
                    </p>
                    <p className="text-xs opacity-70">
                      Target: {challenge.target}
                    </p>
                  </div>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`badge ${
                      challenge.status === "Ongoing"
                        ? "badge-success"
                        : "badge-neutral"
                    }`}
                  >
                    {challenge.status}
                  </span>
                </td>

                {/* Timeline */}
                <td className="text-sm">
                  <p>{new Date(challenge.startDate).toLocaleDateString()}</p>
                  <p className="opacity-60">
                    → {new Date(challenge.endDate).toLocaleDateString()}
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

export default AllChallenges;
