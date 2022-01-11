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
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/constants/settingSystem";
import { USER_SIGNIN_API, USLOGIN } from "../constants/Jira";
import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst";

// Quản lý các action saga
function* signinSaga(action) {
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);

  // Gọi api
  try {
    const { data, status } = yield call(() =>
      jiraService.signinJira(action.userLogin)
    );

    // Lưu vào localStorage khi đăng nhập thành công
    localStorage.setItem(ACCESS_TOKEN, data.content.accessToken);
    localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

    yield put({
      type: USLOGIN,
      userLogin: data.content,
    });

    let history = yield select((state) => state.HistoryReducer.history);
    history.push("/jira");
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
