import React from "react";
import CardGraph from "./CardGraph";

const Dashboard = () => {
  return (
    <div className="ms-4 me-5">
      <div className="mt-2 text-start">
        <h3>Dashboard</h3>
      </div>
      <div
        className="mt-2 mb-2 p-3"
        style={{
          backgroundColor: "#F6F0EA",
          borderRadius: "1rem",
        }}
      >
        <CardGraph />
      </div>
    </div>
  );
};

export default Dashboard;
