import React, { useEffect, useState } from "react";
import { FaUserShield, FaUser } from "react-icons/fa";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleMakeAdmin = async (id) => {
    const res = await fetch(
      `https://eco-track-server-one-rho.vercel.app/users/role/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ role: "admin" }),
      }
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      setUsers((prev) =>
        prev.map((user) =>
          user._id === id ? { ...user, role: "admin" } : user
        )
      );
    }
  };

  useEffect(() => {
    fetch("https://eco-track-server-one-rho.vercel.app/users") // your API
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load users", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-6 max-sm:p-1">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        👥 All Users
      </h2>

      <div className="overflow-x-auto rounded-xl shadow bg-base-100">
        <table className="table table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => {
              const role = user.role || "user";

              return (
                <tr key={user._id}>
                  {/* User Info */}
                  <td>
                    <div className="flex items-center gap-3">
                      <img
                        src={user.photourl || user.image}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="font-medium">{user.name}</p>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="text-sm opacity-80">{user.email}</td>

                  {/* Role */}
                  <td className="flex items-center  gap-2">
                    <span
                      className={`badge ${
                        role === "admin" ? "badge-error" : "badge-outline"
                      }`}
                    >
                      {role}
                    </span>

                    {role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn m-2 btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
