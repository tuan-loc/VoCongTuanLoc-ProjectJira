import { call, put, takeLatest, delay } from "redux-saga/effects";
import { jiraService } from "../../services/JiraService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";
import { history } from "../../util/history";
import { projectService } from "../../services/ProjectService";
import { notifiFunction } from "../../util/Notification/notification";
import {
  GET_ALL_PROJECT,
  GET_ALL_PROJECT_SAGA,
} from "../constants/ProjectJiraConstants";

function* createProjectSaga(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  try {
    const { data, status } = yield call(() =>
      jiraService.createProjectAuthorization(action.newProject)
    );
    if (status === STATUS_CODE.SUCCESS) {
      history.push("/projectmanagement");
    }
  } catch (error) {
    console.log(error);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiCreateProjectSaga() {
  yield takeLatest("CREATE_PROJECT_SAGA", createProjectSaga);
}

export function* getListProjectSaga(action) {
  try {
    const { data, status } = yield call(() => jiraService.getListProject());
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: "GET_LIST_PROJECT",
        projectList: data.content,
      });
    }
  } catch (error) {}
}

export function* theoDoiGetListProjectSaga() {
  yield takeLatest("GET_LIST_PROJECT_SAGA", getListProjectSaga);
}

export function* updateProjectSaga(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  try {
    const { data, status } = yield call(() =>
      jiraService.updateProject(action.projectUpdate)
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: "GET_LIST_PROJECT_SAGA",
      });

      yield put({
        type: "CLOSE_DRAWER",
      });
    }
  } catch (error) {
    console.log(error);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiUpdateProjectSaga() {
  yield takeLatest("UPDATE_PROJECT_SAGA", updateProjectSaga);
}

export function* deleteProjectSaga(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  try {
    const { data, status } = yield call(() =>
      projectService.deleteProject(action.idProject)
    );
    if (status === STATUS_CODE.SUCCESS) {
      notifiFunction("success", "Delete project successfully !!!");
    } else {
      notifiFunction("error", "Delete project fail !!!");
    }

    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });

    yield put({
      type: "CLOSE_DRAWER",
    });
  } catch (error) {
    notifiFunction("error", "Delete project fail !!!");
    console.log(error);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiDeleteProject() {
  yield takeLatest("DELETE_PROJECT_SAGA", deleteProjectSaga);
}

export function* getProjectDetailSaga(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  try {
    const { data, status } = yield call(() =>
      projectService.getProjectDetail(action.projectId)
    );

    yield put({
      type: "PUT_PROJECT_DETAIL",
      projectDetail: data.content,
    });
  } catch (error) {
    console.log(error);
    history.push("/projectmanagement");
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiGetProjectDetail() {
  yield takeLatest("GET_PROJECT_DETAIL", getProjectDetailSaga);
}

export function* getAllProjectSaga(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  try {
    const { data, status } = yield call(() => projectService.getAllProject());
    yield put({
      type: GET_ALL_PROJECT,
      arrProject: data.content,
    });
  } catch (error) {
    console.log("404 not found !!!");
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiGetAllProjectSaga() {
  yield takeLatest(GET_ALL_PROJECT_SAGA, getAllProjectSaga);
}
