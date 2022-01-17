import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Select, Slider } from "antd";
import { useSelector, useDispatch, connect } from "react-redux";
import { GET_ALL_PROJECT_SAGA } from "../../../redux/constants/ProjectJiraConstants";
import { GET_ALL_TASK_TYPE_SAGA } from "../../../redux/constants/TaskTypeConstants";
import { GET_ALL_PRIORITY_SAGA } from "../../../redux/constants/PriorityConstants";
import { withFormik } from "formik";
import * as Yup from "yup";
import { GET_ALL_STATUS_SAGA } from "../../../redux/constants/StatusConstant";
import { GET_USER_BY_PROJECT_ID_SAGA } from "../../../redux/constants/UserConstants";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function FormCreateTask(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = props;

  const { arrProject } = useSelector((state) => state.ProjectJiraReducer);
  const { arrTaskType } = useSelector((state) => state.TaskTypeReducer);
  const { arrPriority } = useSelector((state) => state.PriorityReducer);
  const { arrUser } = useSelector((state) => state.UserLoginJiraReducer);
  const { arrStatus } = useSelector((state) => state.StatusReducer);

  const userOption = arrUser.map((item, index) => {
    return { value: item.userId, label: item.name };
  });

  const dispatch = useDispatch();

  const [size, setSize] = React.useState("default");

  const [timeTracking, setTimeTracking] = useState({
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0,
  });

  useEffect(() => {
    dispatch({ type: GET_ALL_PROJECT_SAGA });
    dispatch({ type: GET_ALL_TASK_TYPE_SAGA });
    dispatch({ type: GET_ALL_PRIORITY_SAGA });
    dispatch({ type: GET_ALL_STATUS_SAGA });
    dispatch({ type: "SET_SUBMIT_CREATE_TASK", submitFuction: handleSubmit });
    dispatch({ type: "GET_USER_API", keyWord: "" });
  }, []);

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <p>Project</p>
        <select
          className="form-control"
          name="projectId"
          onChange={(e) => {
            let { value } = e.target;
            dispatch({
              type: GET_USER_BY_PROJECT_ID_SAGA,
              idProject: value,
            });
            setFieldValue("projectId", e.target.value);
          }}
        >
          {arrProject.map((project, index) => {
            return (
              <option key={index} value={project.id}>
                {project.projectName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <p>Task name</p>
        <input
          name="taskName"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Status</p>
        <select
          name="statusId"
          className="form-control"
          onChange={handleChange}
        >
          {arrStatus.map((statusItem, index) => {
            return (
              <option key={index} value={statusItem.statusId}>
                {statusItem.statusName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-6">
            <p>Priority</p>
            <select
              onChange={handleChange}
              name="priorityId"
              className="form-control"
              onChange={handleChange}
            >
              {arrPriority.map((priority, index) => {
                return (
                  <option key={index} value={priority.priorityId}>
                    {priority.content.priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-6">
            <p>Task type</p>
            <select
              name="typeTd"
              className="form-control"
              onChange={handleChange}
            >
              {arrTaskType.map((taskType, index) => {
                return (
                  <option key={index} value={taskType.id}>
                    {taskType.content.taskType}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-md-6">
            <p>Assignees</p>
            <Select
              mode="multiple"
              size={size}
              options={userOption}
              placeholder="Please select"
              defaultValue={["Nguyen Van A"]}
              optionFilterProp="label"
              onChange={(values) => {
                setFieldValue("listUserAsign", values);
              }}
              onSelect={(value) => {
                console.log(value);
              }}
              style={{ width: "100%" }}
            >
              {children}
            </Select>
            <div className="row mt-4">
              <div className="col-md-12">
                <p>Original Estimate</p>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  defaultValue="0"
                  name="originalEstimate"
                  height="30"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <p>Time tracking</p>
            <Slider
              defaultValue={30}
              value={timeTracking.timeTrackingSpent}
              max={
                Number(timeTracking.timeTrackingSpent) +
                Number(timeTracking.timeTrackingRemaining)
              }
            />
            <div className="row">
              <div className="col-md-6 text-left font-weight-bold">
                {timeTracking.timeTrackingSpent}h logged
              </div>
              <div className="col-md-6 text-right font-weight-bold">
                {timeTracking.timeTrackingRemaining}h logged
              </div>
            </div>
            <div className="row" style={{ marginTop: 12 }}>
              <div className="col-md-6">
                <p>Time spent</p>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="form-control"
                  name="timeTrackingSpent"
                  onChange={(e) => {
                    setTimeTracking({
                      ...timeTracking,
                      timeTrackingSpent: e.target.value,
                    });
                    setFieldValue("timeTrackingSpent", e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <p>Time remaining</p>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="form-control"
                  name="timeTrackingRemaining"
                  onChange={(e) => {
                    setTimeTracking({
                      ...timeTracking,
                      timeTrackingRemaining: e.target.value,
                    });
                    setFieldValue("timeTrackingRemaining", e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <p>Description</p>
        <Editor
          name="description"
          init={{
            selector: "textarea#myTextArea",
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
          }}
          onEditorChange={(content, editor) => {
            setFieldValue("description", content);
          }}
        />
      </div>
    </form>
  );
}

const formCreateTask = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { arrProject, arrTaskType, arrPriority, arrStatus } = props;

    // if (arrProject.length > 0) {
    //   props.dispatch({
    //     type: GET_USER_BY_PROJECT_ID_SAGA,
    //     idProject: arrProject[0]?.id,
    //   });
    // }

    return {
      taskName: "",
      description: "",
      statusId: arrStatus[0]?.statusId,
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: arrProject[0]?.id,
      typeId: arrTaskType[0]?.id,
      priorityId: arrPriority[0]?.priorityId,
      listUserAsign: [],
    };
  },

  validationSchema: Yup.object().shape({}),

  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch({ type: "CREATE_TASK_SAGA", taskObject: values });
  },

  displayName: "createTaskForm",
})(FormCreateTask);

const mapStateToProps = (state) => {
  return {
    arrProject: state.ProjectJiraReducer.arrProject,
    arrTaskType: state.TaskTypeReducer.arrTaskType,
    arrStatus: state.StatusReducer.arrStatus,
    arrPriority: state.PriorityReducer.arrPriority,
  };
};

export default connect(mapStateToProps)(formCreateTask);
