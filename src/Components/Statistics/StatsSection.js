// StatsSection.jsx
import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <section className="stats-section container">
      <div className="stat-item">
        <h2>5+ </h2>
        <p>Support Programs</p>
      </div>
      <div className="stat-item">
        <h2>10+</h2>
        <p>Supporters</p>
      </div>
      <div className="stat-item">
        <h2>20+</h2>
        <p>Alliance Members</p>
      </div>
    </section>
  );
};

export default StatsSection;