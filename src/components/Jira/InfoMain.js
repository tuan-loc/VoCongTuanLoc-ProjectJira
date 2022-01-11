import React from "react";
import "../../index.css";

export default function InfoMain() {
  return (
    <div className="info" style={{ display: "flex" }}>
      <div className="search-block">
        <input className="search" />
        <i className="fa fa-search" />
      </div>
      <div className="avatar-group" style={{ display: "flex" }}>
        <div className="avatar">
          <img src={require("../../assets/img/01.jpg")} alt="5" />
        </div>
        <div className="avatar">
          <img src={require("../../assets/img/02.jpg")} alt="6" />
        </div>
        <div className="avatar">
          <img src={require("../../assets/img/03.jpg")} alt="7" />
        </div>
      </div>
      <div style={{ marginLeft: 20 }} className="text">
        Only My Issues
      </div>
      <div style={{ marginLeft: 20 }} className="text">
        Recently Updated
      </div>
    </div>
  );
}
