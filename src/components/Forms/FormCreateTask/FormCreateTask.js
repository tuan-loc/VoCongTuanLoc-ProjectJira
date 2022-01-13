import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Select, Slider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_PROJECT_SAGA } from "../../../redux/constants/ProjectJiraConstants";
import { GET_ALL_TASK_TYPE_SAGA } from "../../../redux/constants/TaskTypeConstants";
import { GET_ALL_PRIORITY_SAGA } from "../../../redux/constants/PriorityConstants";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

export default function FormCreateTask(props) {
  const { arrProject } = useSelector((state) => state.ProjectJiraReducer);

  const { arrTaskType } = useSelector((state) => state.TaskTypeReducer);

  const { arrPriority } = useSelector((state) => state.PriorityReducer);

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
  }, []);

  const handleEditorChange = (content, editor) => {};

  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <div className="container">
      <div className="form-group">
        <p>Project</p>
        <select className="form-control" name="projectId">
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
        <div className="row">
          <div className="col-md-6">
            <p>Priority</p>
            <select name="priorityId" className="form-control">
              {arrPriority.map((priority, index) => {
                return (
                  <option key={index} value={priority.priorityId}>
                    {priority.priority}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-md-6">
            <p>Task type</p>
            <select name="typeTd" className="form-control">
              {arrTaskType.map((taskType, index) => {
                return (
                  <option key={index} value={taskType.id}>
                    {taskType.taskType}
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
              options={[
                { value: "a12", label: "b12" },
                { value: "a12", label: "b12" },
                { value: "a12", label: "b12" },
              ]}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
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
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
}
