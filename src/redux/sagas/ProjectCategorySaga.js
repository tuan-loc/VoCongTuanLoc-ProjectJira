import { call, put, takeLatest } from "redux-saga/effects";
import { jiraService } from "../../services/JiraService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import {
  GET_ALL_PROJECT_CATEGORY,
  GET_ALL_PROJECT_CATEGORY_SAGA,
} from "../constants/Jira";

function* getAllProjectCategorySaga(action) {
  try {
    const { data, status } = yield call(() =>
      jiraService.getAllProjectCategory()
    );
    if (status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_ALL_PROJECT_CATEGORY,
        data: data.content,
      });
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* theoDoiGetAllProjectCategory() {
  yield takeLatest(GET_ALL_PROJECT_CATEGORY_SAGA, getAllProjectCategorySaga);
}
