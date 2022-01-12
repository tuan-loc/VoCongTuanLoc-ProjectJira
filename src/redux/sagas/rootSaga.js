import { all } from "redux-saga/effects";
import * as Jira from "./UserJiraSaga";
import * as ProjectCategorySaga from "./ProjectCategorySaga";
import * as ProjectSaga from "./ProjectSaga";

export function* rootSaga() {
  yield all([
    Jira.theoDoiSignin(),
    ProjectCategorySaga.theoDoiGetAllProjectCategory(),
    ProjectSaga.theoDoiCreateProjectSaga(),
    ProjectSaga.theoDoiGetListProjectSaga(),
    ProjectSaga.theoDoiUpdateProjectSaga(),
    ProjectSaga.theoDoiDeleteProject(),
    Jira.theoDoiGetUser(),
    Jira.theoDoiAddUserProject(),
  ]);
}
