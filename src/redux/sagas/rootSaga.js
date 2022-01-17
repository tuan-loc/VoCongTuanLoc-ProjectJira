import { all } from "redux-saga/effects";
import * as Jira from "./UserJiraSaga";
import * as ProjectCategorySaga from "./ProjectCategorySaga";
import * as ProjectSaga from "./ProjectSaga";
import * as TaskTypeSaga from "./TaskTypeSaga";
import * as PrioritySaga from "./PrioritySaga";
import * as TaskSaga from "./TaskSaga";
import * as StatusSaga from "./StatusSaga";

export function* rootSaga() {
  yield all([
    Jira.theoDoiSignin(),
    Jira.theoDoiGetUser(),
    Jira.theoDoiAddUserProject(),
    Jira.theoDoiRemoveUserProject(),
    Jira.theoDoiGetUserByProjectId(),
    ProjectCategorySaga.theoDoiGetAllProjectCategory(),
    ProjectSaga.theoDoiCreateProjectSaga(),
    ProjectSaga.theoDoiGetListProjectSaga(),
    ProjectSaga.theoDoiUpdateProjectSaga(),
    ProjectSaga.theoDoiDeleteProject(),
    ProjectSaga.theoDoiGetProjectDetail(),
    ProjectSaga.theoDoiGetAllProjectSaga(),
    TaskTypeSaga.theoDoiGetAllTaskTypeSaga(),
    PrioritySaga.theoDoiGetAllPriority(),
    TaskSaga.theoDoiCreateTaskSaga(),
    StatusSaga.theoDoiGetAllStatusSaga(),
  ]);
}
