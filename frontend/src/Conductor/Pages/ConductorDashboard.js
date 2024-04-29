import React from "react";
import "../Pages/Styles/ConductorDashboard.css";
import ConductorNavbar from "../Components/ConductorNavbar";
function ConductorDashboard({ progress }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((50 - progress) / 50) * circumference;
  return (
    <div className="conductor-dashboard">
      <ConductorNavbar />

      <div className="conductorprogress-container">
        <div className="progress-label">Seates Used: {progress}</div>
        <svg className="conductorprogress-ring" width="120" height="120">
          <circle
            className="conductorprogress-ring-circle"
            stroke="white"
            strokeWidth="7"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: progressOffset,
            }}
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="progress-text"
          >
            {progress}/50
          </text>
        </svg>
      </div>


      <div className="conductordashboard-container">
        <div className="white-container">
          <h2>Next Stop</h2>
        </div>
        <div className="favorit-stops-conductor">
          <section className="dashboard-container">
            <h2>6th Road</h2>
            <div class="row">
              <div className="conductorstop-containers">
                <p>Route No </p>
                <p className="bold">03</p>
              </div>
              <div className="conductorstop-containers">
                <p>Stop Timing</p>
                <p className="bold">08:50</p>
              </div>
            </div>
          </section>
        </div>

        <div className="white-container">
          <h2>Bus Seate Availablity</h2>
        </div>
        <div className="favorit-stops-conductor">
          <section className="dashboard-container">
            <div class="row">
              <div className="stops">
                <div className="conductorstop-containers">
                  <p>Route No </p>
                  <p className="bold">03</p>
                </div>
                <div className="conductorstop-containers">
                  <p>Stop Timing</p>
                  <p className="bold">08:50</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ConductorDashboard;
