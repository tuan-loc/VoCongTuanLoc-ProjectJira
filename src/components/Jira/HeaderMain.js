import React from "react";
import "../../index.css";

export default function HeaderMain() {
  return (
    <div className="header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
          <li className="breadcrumb-item">Project</li>
          <li className="breadcrumb-item">TuanLoc</li>
          <li className="breadcrumb-item active" aria-current="page">
            Jira Board
          </li>
        </ol>
      </nav>
    </div>
  );
}
