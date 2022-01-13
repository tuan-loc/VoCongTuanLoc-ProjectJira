import { all } from "redux-saga/effects";
import * as Jira from "./UserJiraSaga";
import * as ProjectCategorySaga from "./ProjectCategorySaga";
import * as ProjectSaga from "./ProjectSaga";
import * as TaskTypeSaga from "./TaskTypeSaga";
import * as PrioritySaga from "./PrioritySaga";

export function* rootSaga() {
  yield all([
    Jira.theoDoiSignin(),
    Jira.theoDoiGetUser(),
    Jira.theoDoiAddUserProject(),
    Jira.theoDoiRemoveUserProject(),

    ProjectCategorySaga.theoDoiGetAllProjectCategory(),

    ProjectSaga.theoDoiCreateProjectSaga(),
    ProjectSaga.theoDoiGetListProjectSaga(),
    ProjectSaga.theoDoiUpdateProjectSaga(),
    ProjectSaga.theoDoiDeleteProject(),
    ProjectSaga.theoDoiGetProjectDetail(),
    ProjectSaga.theoDoiGetAllProjectSaga(),

    TaskTypeSaga.theoDoiGetAllTaskTypeSaga(),
    PrioritySaga.theoDoiGetAllPriority(),
  ]);
}
