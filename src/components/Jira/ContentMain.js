import React from "react";
import "../../index.css";

export default function ContentMain() {
  return (
    <div className="content" style={{ display: "flex" }}>
      <div className="card" style={{ width: "17rem", height: "25rem" }}>
        <div className="card-header">BACKLOG 3</div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            data-toggle="modal"
            data-target="#infoModal"
            style={{ cursor: "pointer" }}
          >
            <p>
              Each issue has a single reporter but can have multiple assignees
            </p>
            <div className="block" style={{ display: "flex" }}>
              <div className="block-left">
                <i className="fa fa-bookmark" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{ display: "flex" }}>
                  <div className="avatar">
                    <img src={require("../../assets/img/04.jpg")} alt="3" />
                  </div>
                  <div className="avatar">
                    <img src={require("../../assets/img/05.jpg")} alt="4" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <p>
              Each issue has a single reporter but can have multiple assignees
            </p>
            <div className="block" style={{ display: "flex" }}>
              <div className="block-left">
                <i className="fa fa-check-square" />
                <i className="fa fa-arrow-up" />
              </div>
              <div className="block-right">
                <div className="avatar-group" style={{ display: "flex" }}>
                  <div className="avatar">
                    <img src={require("../../assets/img/06.jpg")} alt="1" />
                  </div>
                  <div className="avatar">
                    <img src={require("../../assets/img/07.jpg")} alt="2" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
      <div className="card" style={{ width: "17rem", height: "25rem" }}>
        <div className="card-header">SELECTED FOR DEVELOPMENT 2</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
        </ul>
      </div>
      <div className="card" style={{ width: "17rem", height: "25rem" }}>
        <div className="card-header">IN PROGRESS 2</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
        </ul>
      </div>
      <div className="card" style={{ width: "17rem", height: "25rem" }}>
        <div className="card-header">DONE 3</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  );
}
