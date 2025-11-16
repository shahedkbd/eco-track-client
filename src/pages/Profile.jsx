import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="py-5 w-11/12 mx-auto">
      <h2 className="text-center text-4xl pb-5 poppins font-bold text-[#7a9352] hover:text-[#628727]">
        Profile
      </h2>

      <div className="card bg-base-100 shadow-sm p-5 flex flex-col lg:flex-row items-center gap-5">
        {/* User Image */}
        <figure className="flex-shrink-0">
          <img
            className="h-48 w-48 sm:h-40 sm:w-40 object-cover rounded-2xl"
            src={user.photoURL}
            alt="Profile"
          />
        </figure>

        {/* User Info */}
        <div className="card-body flex flex-col justify-center w-full lg:w-auto gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Name</label>
            <input
              className="w-full sm:w-auto p-2 border-2 text-lg sm:text-xl border-dashed border-accent font-bold cursor-not-allowed"
              value={user.displayName}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Email</label>
            <input
              className="w-full sm:w-auto p-2 border-2 text-lg sm:text-xl border-dashed border-accent font-bold cursor-not-allowed"
              value={user.email}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
