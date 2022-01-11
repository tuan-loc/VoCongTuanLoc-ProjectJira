import React, { useEffect } from "react";
import { Switch, useHistory } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import LoadingComponent from "./components/GlobalSetting/LoadingComponent/LoadingComponent";
import { UserLoginTemplate } from "./templates/HomeTemplate/UserLoginTemplate";
import LoginJira from "./pages/Login/Login";
import { useDispatch } from "react-redux";
import { JiraTemplate } from "./templates/HomeTemplate/JiraTemplate";
import indexJira from "./redux/sagas/indexJira";
import CreateProject from "./pages/CreateProject/CreateProject";
import ProjectManagement from "./pages/ProjectManagement/ProjectManagement";
import Modal from "./HOC/Modal";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "ADD_HISTORY", history: history });
  }, []);

  return (
    <>
      <LoadingComponent />
      <Modal />
      <Switch>
        <UserLoginTemplate exact path="/" Component={LoginJira} />
        <JiraTemplate exact path="/jira" Component={indexJira} />
        <JiraTemplate exact path="/createproject" Component={CreateProject} />
        <JiraTemplate
          exact
          path="/projectmanagement"
          Component={ProjectManagement}
        />

        <HomeTemplate path="*" Component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
