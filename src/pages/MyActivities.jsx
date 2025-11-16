import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

const MyActivities = () => {
  const [activities, setActivities] = useState([]);
  const [progress, setProgress] = useState(50);
  const { user } = use(AuthContext);

  const handleProgressChange = (_id, value) => {
    setActivities((prev) =>
      prev.map((a) => (a._id === _id ? { ...a, progress: value } : a))
    );

    fetch(`http://localhost:3000/my-activities/progress/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ progress: value }),
    })
      .then((res) => res.json())
      .then((data) => {
        setActivities((prev) =>
          prev.map((a) => (a._id === _id ? { ...a, ...data } : a))
        );
      });
  };

  // Delete activity
  const handleCancel = (_id) => {
    const confirm = window.confirm(
      "Are you sure you want to remove this activity?"
    );
    if (!confirm) return;

    fetch(`http://localhost:3000/my-activities/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setActivities((prev) => prev.filter((a) => a._id !== _id));
          toast("Activity removed successfully!");
        } else {
          toast(data.message || "Something went wrong");
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:3000/my-activities?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((a) => ({
          ...a,
          progress: a.progress !== undefined ? Number(a.progress) : 0,
        }));
        setActivities(updated);
      });
  }, [user.email]);
  return (
    <div className="py-5 w-11/12 mx-auto">
      <h2 className="text-center text-4xl pb-5 poppins font-bold text-[#7a9352] hover:text-[#628727]">
        My Activities
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr>
              <th>Challenge</th>
              <th>Name</th>
              <th>Joined At</th>
              <th>Status</th>
              <th>Action</th>
              <th>Challenge Progress</th>
            </tr>
          </thead>

          <tbody>
            {activities.length === 0 ? (
              <tr className="col-span-3">
                <td  colSpan="6" className="text-center text-3xl py-20 text-gray-500 font-semibold">No activities yet</td>
              </tr>
            ) : (
              <>
                {activities.map((activity) => (
                  <tr key={activity._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={activity.image} alt="User Avatar" />
                          </div>
                        </div>
                        <span className="max-sm:text-xs">
                          {activity.title}
                        </span>
                      </div>
                    </td>

                    <td>
                      <div>
                        <div className="font-bold">{activity.userName}</div>
                        <div className="text-sm opacity-50">
                          {activity.userEmail}
                        </div>
                      </div>
                    </td>

                    <td>{new Date(activity.joinAt).toLocaleString()}</td>

                    <td>
                      <button className="uppercase ">
                        {activity.progress === 100 ? <p className="badge badge-success badge-dash">Completed</p> : <p className="badge badge-dash badge-outline">{activity.type}</p>}</button>
                    </td>

                    <td>
                      <Link
                        to={`/challenges/${activity.challengeId}`}
                        className="btn mr-2 bg-[#628727] text-white btn-xs"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => handleCancel(activity._id)}
                        className="btn bg-red-500 text-white btn-xs"
                      >
                        Remove
                      </button>
                    </td>

                    {/* PROGRESS BAR */}
                    <td>
                      <div className="w-56 space-y-2">
                        <div className="text-sm font-semibold text-gray-700">
                          {activity.progress ?? 0}% completed
                        </div>

                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={activity.progress}
                          onChange={(e) =>
                            handleProgressChange(
                              activity._id,
                              Number(e.target.value)
                            )
                          }
                          disabled={activity.progress === 100}
                          className={`range range-accent w-full ${
                            activity.progress === 100
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyActivities;
