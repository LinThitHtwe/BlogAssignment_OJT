import { getAllCategories } from "api/APIs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useFetchData from "hooks/useFetchData";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ReactSelect from "react-select";
import { blogFormValidationSchema } from "validations/validator";

const AddBlogForm = () => {
  const { data } = useFetchData(["categories"], getAllCategories);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    if (data) {
      const option = data.data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(option);
    }
  }, [data]);
  return (
    <div className="blog-add-form-container px-3 px-md-5 py-4 ">
      <Formik
        initialValues={{ title: "", subTitle: "", content: "" }}
        validationSchema={blogFormValidationSchema}
      >
        <Form className="d-flex flex-column align-items-center align-items-md-start flex-md-row gap-md-4">
          <div className="w-100 w-md-50 d-flex align-items-center flex-column gap-5">
            <div className="w-100 w-md-75">
              <lable className="form-label fs-6">Title</lable>
              <Field
                className="form-control w-100 w-md-75"
                type="text"
                id="title"
                name="title"
                placeholder="Title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="position-relative w-100 w-md-75">
              <label className="form-label fs-6">Images</label>
              <p
                className="form-control w-100 w-md-75 image-input"
                type="text"
                id="subTitle"
                name="subTitle"
              ></p>
              <ErrorMessage
                name="subTitle"
                component="div"
                className="text-danger"
              />
              <span className="position-absolute plus-icon ">
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>
          <div className="w-100 w-md-50 d-flex flex-column gap-4">
            <div>
              <lable className="form-label fs-6">Sub-title</lable>
              <Field
                className="form-control w-100 w-md-75"
                type="text"
                id="subTitle"
                name="subTitle"
                placeholder="Sub-title"
              />
              <ErrorMessage
                name="subTitle"
                component="div"
                className="text-danger"
              />
            </div>
            <ReactSelect
              isMulti
              options={options}
              placeholder="Select options..."
              className="basic-multi-select"
              classNamePrefix="select"
            />
            <div className="">
              <Field
                className="form-control w-100 blog-textarea w-md-75"
                as="textarea"
                id="content"
                name="content"
                placeholder="Sub-title"
              />
              <ErrorMessage
                name="content"
                component="div"
                className="text-danger"
              />
            </div>
            <Button variant="primary" className="py-2 px-3" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBlogForm;
