import React, { use } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { MdDashboard } from "react-icons/md";
import Logo from "../assets/EcoTrack-Logo.png";
import { AuthContext } from "../Context/AuthContext";
import { LuSquareActivity } from "react-icons/lu";
import { FaClipboardList } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const AdminDashboard = () => {
  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout().then().catch();
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar w-full bg-base-300">
          <div className="navbar-start">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-24"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
          </div>
          <div className="navbar-center">
            <Link to="/">
              <img className="w-20" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-end gap-3">
            {user ? (
              <>
                {user ? (
                  <div className="dropdown dropdown-hover dropdown-bottom dropdown-left">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" p-2 rounded-2xl bg-[#7a9352] hover:bg-[#628727] flex gap-1 items-center"
                    >
                      <p className="badge max-sm:hidden">{user.displayName}</p>
                      <img
                        className="size-10 object-cover border-2 border-white rounded-full"
                        src={user.photoURL}
                        alt="User Photo"
                      />
                    </div>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content  bg-base-100 rounded-box z-2 w-40 p-2 right-0 shadow-sm"
                    >
                      <NavLink
                        className="w-full btn rounded-4xl btn-ghost hover:bg-[#7a9352] hover:text-white"
                        to="/profile"
                      >
                        Profile
                      </NavLink>
                      <NavLink
                        className="w-full btn rounded-4xl btn-ghost hover:bg-[#7a9352] hover:text-white"
                        to="/my-activities"
                      >
                        My Activities
                      </NavLink>
                      <button
                        className="btn w-full poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                ) : (
                  <CgProfile className="size-8" />
                )}
              </>
            ) : (
              <>
                {" "}
                <Link
                  className="btn poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white group"
                  to="/login"
                >
                  Login{" "}
                  <DiEnvato className="text-[#7a9352] group-hover:text-white transition-colors duration-300 " />
                </Link>
                <Link
                  className="btn poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white group"
                  to="/register"
                >
                  Register{" "}
                  <DiEnvato className="text-[#7a9352] group-hover:text-white transition-colors duration-300 " />
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Page content here */}
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link
                to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Back to Home"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Back to Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
                {/* Dashboard icon */}
                <MdDashboard />

                <span className="is-drawer-close:hidden">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/alluseractivity"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All User Activity"
              >
                {/* All User Activity icon */}
                <LuSquareActivity />

                <span className="is-drawer-close:hidden">
                  All User Activity
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/AllChallenges"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All Challenges"
              >
                {/* All Challenges icon */}
                <FaClipboardList />

                <span className="is-drawer-close:hidden">All Challenges</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/users"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Users"
              >
                {/* All Users icon */}
                <FaUsers />

                <span className="is-drawer-close:hidden">Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
