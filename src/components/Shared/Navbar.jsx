import React, { use } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/EcoTrack-Logo.png";
import { DiEnvato } from "react-icons/di";
import { AuthContext } from "../../Context/AuthContext";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, setUser, logout } = use(AuthContext);
  const handleLogout = () => {
    logout().then().catch();
  };

  const links = (
    <>
      <NavLink to="/">
        <li className="m-3 text-xl font-bold poppins hover:text-[#7a9352] hover:scale-110 duration-300">
          Home
        </li>
      </NavLink>
      <NavLink to="/challenges">
        <li className="m-3 text-xl font-bold poppins hover:text-[#7a9352] hover:scale-110 duration-300">
          Challenges
        </li>
      </NavLink>
      {user && (
        <NavLink to="/my-activities">
          <li className="m-3 text-xl font-bold poppins hover:text-[#7a9352] hover:scale-110 duration-300">
            My Activities
          </li>
        </NavLink>
      )}
      {user && (
        <NavLink to="/challenge/add-challenge">
          <li className="m-3 text-xl font-bold poppins hover:text-[#7a9352] hover:scale-110 duration-300">
            Add Challenge
          </li>
        </NavLink>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 px-10 max-sm:px-2 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img className="w-20" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
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
  );
};

export default Navbar;