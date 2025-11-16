import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData, useRouteLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const ChallengeDetails = () => {
  const { user } = use(AuthContext);
  const data = useLoaderData();

  const [joined, setJoined] = useState(false);
  const [currentParticipants, setCurrentParticipants] = useState(
    data.participants
  );

  const {
    _id,
    title,
    category,
    description,
    duration,
    target,
    impactMetric,
    createdBy,
    startDate,
    endDate,
    imageUrl,
    metric,
  } = data;

  const handleJoin = async () => {
    setJoined(true);

    const userData = {
      title: title,
      image: imageUrl,
      name: user.displayName,
      email: user.email,
    };

    const res = await fetch(
      `https://eco-track-server-one-rho.vercel.app/challenges/join/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const result = await res.json();

    if (result.success) {
      toast("You have successfully joined!");

      // 🔥 Update UI instantly
      setCurrentParticipants((prev) => prev + 1);
    }
  };

  // 🔍 Check if user already joined
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://eco-track-server-one-rho.vercel.app/challenges/isJoined/${_id}?email=${user.email}`
      )
        .then((res) => res.json())
        .then((result) => setJoined(result.joined));
    }
  }, [_id, user?.email]);

  return (
    <div className="card mx-30 lg:card-side bg-base-100 shadow-sm my-10">
      <figure>
        <img className="w-130 h-100 object-cover" src={imageUrl} alt="Album" />
      </figure>

      <div className="card-body">
        <h4 className="badge badge-dash">{category}</h4>
        <h2 className="card-title text-3xl font-black">{title}</h2>
        <p className="text-2xl font-semibold">{description}</p>

        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr className="font-semibold">
                <td>
                  <span className="font-bold">Duration:</span> {duration}
                </td>
                <td>
                  <span className="font-bold">Metric:</span> {metric}{" "}
                  {impactMetric}
                </td>
              </tr>

              <tr className="font-semibold">
                <td>
                  <span className="font-bold">Created by:</span> {createdBy}
                </td>
                <td>
                  <span className="font-bold">Target:</span> {target}
                </td>
              </tr>

              <tr className="font-semibold">
                <td>
                  <span className="font-bold">Start Date:</span> {startDate}
                </td>
                <td>
                  <span className="font-bold">End Date:</span> {endDate}
                </td>
              </tr>

              <tr className="font-semibold">
                <td>
                  <span className="font-bold">Participants:</span>{" "}
                  {currentParticipants}
                </td>
                <td>
                  {user ? (
                    <button
                      disabled={joined}
                      onClick={handleJoin}
                      className={`btn rounded-2xl ${
                        joined
                          ? "bg-gray-400 w-full text-white cursor-not-allowed"
                          : "bg-white w-full text-[#7a9352] hover:bg-[#7a9352] hover:text-white"
                      }`}
                    >
                      {joined ? "Joined" : "Join"}
                    </button>
                  ) : (
                    <Link
                      className="btn rounded-2xl bg-gray-400 w-full text-white"
                      to="/login"
                      state={{ from: `/challenges/${_id}` }}
                    >
                      Login to join the challenge!
                    </Link>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
