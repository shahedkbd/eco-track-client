import React, { useState, useEffect, useRef } from "react";
import { useLoaderData } from "react-router";
import ChallengeCard from "../components/ChallengeCard";

const Challenges = () => {
  const challengeData = useLoaderData();
  const [challenges, setChallenges] = useState([]);

  const [filters, setFilters] = useState({
    category: "",
    startDate: "",
    endDate: "",
    minParticipants: "",
    maxParticipants: "",
  });

  const [errors, setErrors] = useState({
    date: "",
    participants: "",
  });

  const [showFilter, setShowFilter] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const categoryOptions = [
    "Waste Reduction",
    "Energy Conservation",
    "Water Conservation",
    "Sustainable Transport",
    "Green Living",
  ];

  useEffect(() => {
    setChallenges(Array.isArray(challengeData) ? challengeData : []);
  }, [challengeData]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validateFilters = () => {
    let valid = true;
    let dateError = "";
    let participantError = "";

    if (
      (filters.startDate && !filters.endDate) ||
      (!filters.startDate && filters.endDate)
    ) {
      dateError = "Both Start Date and End Date are required if one is filled.";
      valid = false;
    }

    if (
      (filters.minParticipants && !filters.maxParticipants) ||
      (!filters.minParticipants && filters.maxParticipants)
    ) {
      participantError =
        "Both Min and Max Participants are required if one is filled.";
      valid = false;
    }

    setErrors({ date: dateError, participants: participantError });
    return valid;
  };

  const handleFilter = async () => {
    if (!validateFilters()) return; // stop jodi validation fails

    const query = new URLSearchParams();
    if (filters.category) query.append("category", filters.category);
    if (filters.startDate) query.append("startDate", filters.startDate);
    if (filters.endDate) query.append("endDate", filters.endDate);
    if (filters.minParticipants)
      query.append("minParticipants", filters.minParticipants);
    if (filters.maxParticipants)
      query.append("maxParticipants", filters.maxParticipants);

    try {
      const res = await fetch(
        `https://eco-track-server-one-rho.vercel.app/challenges?${query.toString()}`
      );
      const data = await res.json();
      setChallenges(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Filter fetch failed:", error);
    }
  };

  const handleReset = () => {
    setFilters({
      category: "",
      startDate: "",
      endDate: "",
      minParticipants: "",
      maxParticipants: "",
    });
    setErrors({ date: "", participants: "" });
    setChallenges(Array.isArray(challengeData) ? challengeData : []);
  };

  return (
    <div className="py-5 w-11/12 mx-auto">
      <h2 className="text-center text-4xl pb-5 poppins font-bold text-[#7a9352] hover:text-[#628727]">
        Browse All Challenges
      </h2>

      <div className="my-4 mx-10">
        {/* Toggle button */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="btn bg-[#7a9352] hover:bg-[#628727] text-white px-4 py-2 rounded-lg"
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Filter Section */}
        {showFilter && (
          <div className="bg-white shadow-md rounded-xl p-6 mt-4 border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Filter Challenges
            </h2>

            <div className="flex flex-wrap gap-4 items-end ">
              {/* Category Dropdown */}
              <div
                className="flex flex-col relative w-1/4 min-w-[150px]"
                ref={dropdownRef}
              >
                <label className="text-sm font-medium mb-1 text-gray-600">
                  Category
                </label>
                <button
                  type="button"
                  className="border border-gray-300 rounded-lg p-2 text-left focus:outline-none focus:ring-2 focus:ring-green-500"
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                >
                  {filters.category || "Select Category"}
                </button>
                {showCategoryDropdown && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {categoryOptions.map((cat) => (
                      <li
                        key={cat}
                        className="p-2 hover:bg-green-100 cursor-pointer"
                        onClick={() => {
                          setFilters({ ...filters, category: cat });
                          setShowCategoryDropdown(false);
                        }}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Start Date */}
              <div className="flex flex-col w-1/4 min-w-[120px]">
                <label className="text-sm font-medium mb-1 text-gray-600">
                  Start Date
                </label>
                <input
                  type="date"
                  value={filters.startDate}
                  onChange={(e) =>
                    setFilters({ ...filters, startDate: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* End Date */}
              <div className="flex flex-col w-1/4 min-w-[120px]">
                <label className="text-sm font-medium mb-1 text-gray-600">
                  End Date
                </label>
                <input
                  type="date"
                  value={filters.endDate}
                  onChange={(e) =>
                    setFilters({ ...filters, endDate: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Participants */}
              <div className="flex flex-col w-1/5  min-w-[180px]">
                <label className="text-sm font-medium mb-1 text-gray-600">
                  Participants Range
                </label>
                <div className="flex gap-2 ">
                  <input
                    type="number"
                    value={filters.minParticipants}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        minParticipants: e.target.value,
                      })
                    }
                    placeholder="Min"
                    className="w-1/2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="number"
                    value={filters.maxParticipants}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        maxParticipants: e.target.value,
                      })
                    }
                    placeholder="Max"
                    className="w-1/2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Inline error messages */}
            {errors.date && <p className="text-red-500 mt-1">{errors.date}</p>}
            {errors.participants && (
              <p className="text-red-500 mt-1">{errors.participants}</p>
            )}

            {/* Apply & Reset Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={handleFilter}
                className="btn btn-sm bg-[#7a9352] hover:bg-[#628727] text-white"
              >
                Apply Filter
              </button>
              <button
                onClick={handleReset}
                className="btn btn-sm bg-gray-300 hover:bg-gray-400 text-gray-800"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10">
        {Array.isArray(challenges) && challenges.length > 0 ? (
          challenges.map((challenge) => (
            <ChallengeCard key={challenge._id} challenge={challenge} />
          ))
        ) : (
          <p className="text-center col-span-full">No challenges found.</p>
        )}
      </div>
    </div>
  );
};

export default Challenges;
