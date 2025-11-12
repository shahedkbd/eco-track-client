import React from "react";
import { useLoaderData } from "react-router";

const ChallengeDetails = () => {
  const data = useLoaderData();
  const {
    title,
    category,
    description,
    duration,
    target,
    participants,
    impactMetric,
    createdBy,
    startDate,
    endDate,
    imageUrl,
    metric,
  } = data;

  return (
    <div className="card mx-30 lg:card-side bg-base-100 shadow-sm my-10">
      <figure>
        <img className="w-130 object-cover" src={imageUrl} alt="Album" />
      </figure>
      <div className="card-body">
        <h4 className="badge badge-dash">{category}</h4>
        <h2 className="card-title text-3xl font-black">{title}</h2>
        <p className="text-2xl font-semibold">{description}</p>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {/* row 1 */}
              <tr className="font-semibold">
                <td><span className="font-bold">Duration:</span> {duration}</td>
                <td>
                  <span className="font-bold">Metric:</span> {metric} {impactMetric}
                </td>
              </tr>
              {/* row 2 */}
              <tr className="font-semibold">
                <td><span className="font-bold">Created by:</span> {createdBy}</td>
                <td><span className="font-bold">Target:</span> {target}</td>
              </tr>
              {/* row 3 */}
              <tr className="font-semibold">
                <td><span className="font-bold">Start Date:</span> {startDate}</td>
                <td><span className="font-bold">End Date:</span> {endDate}</td>
              </tr>
              {/* row 4 */}
              <tr className="font-semibold">
                <td><span className="font-bold">Participants:</span> {participants}</td>
                <td>
                  <button className="btn w-full poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white">
                    Join
                  </button>
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
