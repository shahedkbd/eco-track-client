import React from "react";
import { Link } from "react-router";

const ActiveChallengeCard = ({ active }) => {
  const { _id, title, category, impactMetric, imageUrl, target, metric } =
    active;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img className="h-50 w-full object-cover" src={imageUrl} alt={target} />
      </figure>
      <div className="card-body">
        <h2 className="card-title roboto">{title}</h2>
        <p className="badge max-w-fit roboto">
          {metric} {impactMetric}
        </p>
        <div className="flex justify-between roboto">
          <div className="badge badge-outline">{category}</div>
        </div>
        <Link
          to={`/challenges/${_id}`}
          className="btn w-full poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white"
        >
          Challenge Detail
        </Link>
      </div>
    </div>
  );
};

export default ActiveChallengeCard;
