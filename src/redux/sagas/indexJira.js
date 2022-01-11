import React from "react";
import ContentMain from "../../components/Jira/ContentMain";
import HeaderMain from "../../components/Jira/HeaderMain";
import InfoMain from "../../components/Jira/InfoMain";

export default function indexJira() {
  return (
    <div className="main">
      <HeaderMain />
      <h3>Cyber Board</h3>
      <InfoMain />
      <ContentMain />
    </div>
  );
}
