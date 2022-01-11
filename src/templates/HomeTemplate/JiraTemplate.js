import React from "react";
import { Route } from "react-router-dom";
import MenuJira from "../../components/Jira/MenuJira";
import SidebarJira from "../../components/Jira/SidebarJira";
import "../../index.css";
import ModalJira from "../../components/Jira/ModalJira";

export const JiraTemplate = (props) => {
  const { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <div className="jira">
            <SidebarJira />
            <MenuJira />
            <Component {...propsRoute} />
            <ModalJira />
          </div>
        );
      }}
    />
  );
};
