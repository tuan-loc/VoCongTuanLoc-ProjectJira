import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

export default function MenuJira() {
  return (
    <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src={require("../../assets/img/10.jpg")} alt="10" />
        </div>
        <div className="account-info">
          <p>Tuan Loc</p>
          <p>Report bugs</p>
        </div>
      </div>
      <div className="control">
        <div>
          <i className="fa fa-credit-card mr-1" />
          <NavLink
            className="text-dark"
            activeStyle={{ color: "blue" }}
            to="/jira"
            activeClassName="active font-weight-bold text-primary"
          >
            Jira Board
          </NavLink>
        </div>
        <div>
          <i className="fa fa-cog mr-1" />
          <NavLink
            activeStyle={{ color: "blue" }}
            className="text-dark"
            to="/createproject"
            activeClassName="active font-weight-bold text-primary"
          >
            Create project
          </NavLink>
        </div>
        <div>
          <i className="fa fa-clipboard-list mr-1" />
          <NavLink
            activeStyle={{ color: "blue" }}
            className="text-dark"
            to="/projectmanagement"
            activeClassName="active font-weight-bold text-primary"
          >
            Project management
          </NavLink>
        </div>
      </div>
      <div className="feature">
        <div>
          <i className="fa fa-truck mr-1" />
          <span> Releases</span>
        </div>
        <div>
          <i className="fa fa-equals mr-1" />
          <span> Issues and filters</span>
        </div>
        <div>
          <i className="fa fa-paste mr-1" />
          <span>Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow mr-1" />
          <span>Reports</span>
        </div>
        <div>
          <i className="fa fa-box mr-1" />
          <span>Components</span>
        </div>
      </div>
    </div>
  );
}
