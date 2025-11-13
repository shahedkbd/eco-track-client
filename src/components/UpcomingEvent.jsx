import React, { use } from "react";
import UpcomingEventCard from "./UpcomingEventCard";

const upcomingEventPromise = fetch("http://localhost:3000/upcomingEvents").then(
  (res) => res.json()
);
const UpcomingEvent = () => {
  const events = use(upcomingEventPromise);
  console.log(events);

  return (
    <div className="py-15 bg-gray-100">
        <h2 className="text-center text-4xl pb-5 poppins font-bold text-[#7a9352] hover:text-[#628727]">Upcoming Events</h2>
      <div className='grid grid-cols-4 gap-3 py-3 justify-items-center w-11/12 mx-auto'>
        {events.map((event) => (
          <UpcomingEventCard key={event._id} event={event}></UpcomingEventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
