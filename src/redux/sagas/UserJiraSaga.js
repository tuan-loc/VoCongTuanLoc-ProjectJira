import {
  call,
  delay,
  fork,
  take,
  takeEvery,
  takeLatest,
  select,
  put,
} from "redux-saga/effects";
import { jiraService } from "../../services/JiraService";
import { userService } from "../../services/UserService";
import {
  ACCESS_TOKEN,
  STATUS_CODE,
  USER_LOGIN,
} from "../../util/constants/settingSystem";
import { USER_SIGNIN_API, USLOGIN } from "../constants/Jira";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";
import {
  GET_USER_BY_PROJECT_ID,
  GET_USER_BY_PROJECT_ID_SAGA,
} from "../constants/UserConstants";

function* signinSaga(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  try {
    const { data, status } = yield call(() =>
      jiraService.signinJira(action.userLogin)
    );

    localStorage.setItem(ACCESS_TOKEN, data.content.accessToken);
    localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

    yield put({
      type: USLOGIN,
      userLogin: data.content,
    });

    let history = yield select((state) => state.HistoryReducer.history);
    history.push("/projectmanagement");
  } catch (error) {
    console.log(error.response.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiSignin() {
  yield takeLatest(USER_SIGNIN_API, signinSaga);
}

function* getUserSaga(action) {
  try {
    const { data, status } = yield call(() =>
      userService.getUser(action.keyWord)
    );
    yield put({
      type: "GET_USER_SEARCH",
      listUserSearch: data.content,
    });
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiGetUser() {
  yield takeLatest("GET_USER_API", getUserSaga);
}

function* addUserProjectSaga(action) {
  try {
    const { data, status } = yield call(() =>
      userService.assignUserProject(action.userProject)
    );
    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiAddUserProject() {
  yield takeLatest("ADD_USER_PROJECT_API", addUserProjectSaga);
}

function* removeUserProjectSaga(action) {
  try {
    const { data, status } = yield call(() =>
      userService.deleteUserFromProject(action.userProject)
    );
    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiRemoveUserProject() {
  yield takeLatest("REMOVE_USER_PROJECT_API", removeUserProjectSaga);
}

function* getUserByProjectIdSaga(action) {
  const { idProject } = action;
  try {
    const { data, status } = yield call(() =>
      userService.getUserByProjectId(idProject)
    );

    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_USER_BY_PROJECT_ID,
        arrUser: data.content,
      });
    }
  } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    if (error.response?.data.statusCode === STATUS_CODE.NOT_FOUND) {
      yield put({
        type: GET_USER_BY_PROJECT_ID,
        arrUser: [],
      });
    }
  }
}

export function* theoDoiGetUserByProjectId() {
  yield takeLatest(GET_USER_BY_PROJECT_ID_SAGA, getUserByProjectIdSaga);
}
