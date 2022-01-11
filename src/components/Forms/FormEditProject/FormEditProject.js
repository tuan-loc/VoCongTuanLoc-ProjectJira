import React, { useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, connect, useSelector } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";

function FormEditProject(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = props;

  const arrProjectCategory = useSelector(
    (state) => state.ProjectCategoryReducer.arrProjectCategory
  );

  const dispatch = useDispatch();

  //   const submitForm = (e) => {
  //     e.preventDefault();
  //     alert("submit edit");
  //   };

  useEffect(() => {
    dispatch({ type: "GET_ALL_PROJECT_CATEGORY_SAGA" });
    dispatch({ type: "SET_SUBMIT_EDIT_PROJECT", submitFunction: handleSubmit });
  }, []);

  const handleEditorChange = (content, editor) => {
    setFieldValue("description", content);
  };

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <p className="font-weight-bold">Project id</p>
            <input
              value={values.id}
              disabled
              className="form-control"
              name="id"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <p className="font-weight-bold">Project name</p>
            <input
              value={values.projectName}
              className="form-control"
              name="projectName"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <p className="font-weight-bold">Project category</p>
            <select
              className="form-control"
              name="categoryId"
              value={values.categoryId}
            >
              {arrProjectCategory?.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.projectCategoryName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <p className="font-weight-bold">Description</p>
            <Editor
              name="description"
              initialValue={values.description}
              //   value={values.description}
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
      </div>
    </form>
  );
}

const editProjectForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { projectEdit } = props;

    return {
      id: projectEdit?.id,
      projectName: projectEdit?.projectName,
      description: projectEdit?.description,
      categoryId: projectEdit?.categoryId,
    };
  },

  validationSchema: Yup.object().shape({}),

  handleSubmit: (values, { props, setSubmitting }) => {
    const action = {
      type: "UPDATE_PROJECT_SAGA",
      projectUpdate: values,
    };
    props.dispatch(action);
  },

  displayName: "CreateProjectFormik",
})(FormEditProject);

const mapStateToProps = (state) => ({
  projectEdit: state.ProjectReducer.projectEdit,
});

export default connect(mapStateToProps)(editProjectForm);
