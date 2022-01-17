import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentMain from "../../components/Jira/ContentMain";
import HeaderMain from "../../components/Jira/HeaderMain";
import InfoMain from "../../components/Jira/InfoMain";

export default function IndexJira(props) {
  const { projectDetail } = useSelector((state) => state.ProjectReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const { projectId } = props.match.params;
    dispatch({
      type: "GET_PROJECT_DETAIL",
      projectId,
    });
  }, []);

  return (
    <div className="main">
      <HeaderMain projectDetail={projectDetail} />
      <InfoMain projectDetail={projectDetail} />
      <ContentMain projectDetail={projectDetail} />
    </div>
  );
}
