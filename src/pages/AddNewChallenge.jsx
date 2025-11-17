import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const AddNewChallenge = () => {
  const { user } = use(AuthContext);

  const handleAddChallenge = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const target = e.target.target.value;
    const img = e.target.img.value;
    const startingDate = e.target.startingDate.value;
    const endingDate = e.target.endingDate.value;
    const duration = e.target.duration.value;
    const MetricPrefix = e.target.MetricPrefix.value;
    const impactMetric = e.target.impactMetric.value;
    const impactMetricText = e.target.impactMetricText.value;

    // console.log(
    //   title,
    //   description,
    //   category,
    //   target,
    //   img,
    //   startingDate,
    //   endingDate,
    //   duration,
    //   MetricPrefix,
    //   impactMetric,
    //   impactMetricText
    // );

    const newChallenge = {
      title: title,
      category: category,
      description: description,
      duration: duration,
      target: target,
      impactMetric: impactMetricText,
      createdBy: user?.email,
      startDate: startingDate,
      endDate: endingDate,
      imageUrl: img,
      metric: impactMetric,
    };

    fetch("https://eco-track-server-one-rho.vercel.app/challenges", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChallenge),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("after submission", data);
      });
  };
  return (
    <div className="w-fit py-10 mx-auto shadow-2xl rounded-2xl my-10">
      <h2 className="text-center text-4xl font-bold poppins text-[#7a9352]">
        Add New Challenge
      </h2>
      <form
        onSubmit={handleAddChallenge}
        className="card-body max-w-3xl mx-auto"
      >
        <fieldset className="grid grid-cols-1 gap-4">
          {/* Title */}
          <input
            type="text"
            name="title"
            required
            className="input w-full rounded-4xl"
            placeholder="Title"
          />

          {/* Description */}
          <textarea
            name="description"
            required
            className="input w-full pt-3 h-24 rounded-4xl"
            placeholder="Description"
          />

          {/* Category */}
          <select
            defaultValue=""
            name="category"
            required
            className="select select-primary w-full rounded-4xl"
          >
            <option value="" disabled>
              Category
            </option>
            <option>Waste Reduction</option>
            <option>Energy Conservation</option>
            <option>Water Conservation</option>
            <option>Sustainable Transport</option>
            <option>Green Living</option>
          </select>

          {/* Target */}
          <input
            type="text"
            name="target"
            required
            className="input w-full rounded-4xl"
            placeholder="Target: eg: Reduce plastic waste"
          />

          {/* Image URL */}
          <label className="input validator w-full rounded-4xl flex items-center gap-2">
            <svg
              className="h-5 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </g>
            </svg>
            <input
              type="url"
              name="img"
              className="w-full rounded-4xl"
              required
              placeholder="https://"
              pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
              title="Must be valid URL"
            />
          </label>
          <p className="text-xs text-gray-500">Must be valid URL</p>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold">Start Date:</label>
              <input
                type="date"
                name="startingDate"
                required
                className="input mt-1 w-full rounded-4xl"
              />
            </div>
            <div>
              <label className="text-xs font-bold">End Date:</label>
              <input
                type="date"
                name="endingDate"
                required
                className="input mt-1 w-full rounded-4xl"
              />
            </div>
          </div>

          {/* Duration */}
          <input
            type="text"
            name="duration"
            required
            className="input w-full rounded-4xl"
            placeholder="Duration (Days)"
          />

          {/* Impact Metric */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="impactMetric"
              required
              className="input w-full rounded-4xl"
              placeholder="Metric"
            />
            <select
              defaultValue=""
              required
              name="MetricPrefix"
              className="select w-full rounded-4xl"
            >
              <option value="" disabled>
                Impact Metric
              </option>
              <option>kg</option>
              <option>km</option>
              <option>kWh</option>
              <option>litre</option>
              <option>hours</option>
            </select>
          </div>

          {/* Metric Text */}
          <input
            type="text"
            name="impactMetricText"
            required
            className="input w-full rounded-4xl"
            placeholder="eg: plastic saved, eco travel completed, kWh saved, trees planted"
          />

          {/* Submit */}
          <input
            type="submit"
            value="Add Challenge"
            className="btn poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white group w-full sm:w-auto"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default AddNewChallenge;
