import React from "react";

const UpcomingEventCard = ({ event }) => {
  const {
    title,
    description,
    date,
    location,
    organizer,
    maxParticipants,
    currentParticipants,
    createdAt,
  } = event;
  return (
    <div className="card bg-base-100 border-dashed border border-accent shadow-sm">
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{title}</h2>
        <p className="text-xs font-bold">Date: {date}</p>
        <p>{description}</p>
        <div className="divider h-1"></div>
        <p className="font-semibold">Location: {location}</p>
        <p className="font-semibold">Organizer: {organizer}</p>
        <div className="divider"></div>
        <p className="text-center font-bold">{createdAt}</p>
        <button className="btn btn-ghost hover:bg-white border-0 shadow-none">
          Current Participants:{" "}
          <div className="badge badge-sm badge-secondary">
            {currentParticipants}
          </div>
        </button>
        <button className="btn btn-ghost hover:bg-white border-0 shadow-none">
          Max Participants:{" "}
          <div className="badge badge-soft badge-primary">
            {maxParticipants}
          </div>
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
