import { applyMiddleware, combineReducers, createStore } from "redux";
import LoadingReducer from "./reducers/LoadingReducer";
import reduxThunk from "redux-thunk";
import { HistoryReducer } from "./reducers/HistoryReducer";
import { UserLoginJiraReducer } from "./reducers/UserJiraReducer";
import { ProjectCategoryReducer } from "./reducers/ProjectCategoryReducer";
import { ProjectJiraReducer } from "./reducers/ProjectJiraReducer";
import { drawerReducer } from "./reducers/DrawerJira";
import { ProjectReducer } from "./reducers/ProjectReducer";
import { TaskTypeReducer } from "./reducers/TaskTypeReducer";

import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import { PriorityReducer } from "./reducers/PriorityReducer";
import { StatusReducer } from "./reducers/StatusReducer";

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
  LoadingReducer,
  HistoryReducer,
  UserLoginJiraReducer,
  ProjectCategoryReducer,
  ProjectJiraReducer,
  drawerReducer,
  ProjectReducer,
  TaskTypeReducer,
  PriorityReducer,
  StatusReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, middleWareSaga)
);

middleWareSaga.run(rootSaga);

export default store;
