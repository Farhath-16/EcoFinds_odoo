import React, { useState } from "react";

function UserDashboard() {
  const [user, setUser] = useState({
    username: "Keerthana",
    email: "keerthana@example.com",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile updated!");
  };

  return (
    <div className="container mt-5">
      <h2>User Dashboard</h2>
      <div className="card p-4 shadow">
        <label className="form-label">Username</label>
        <input
          className="form-control mb-3"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label className="form-label">Email</label>
        <input
          className="form-control mb-3"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <button className="btn btn-primary" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
