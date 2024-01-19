import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, Dropdown } from "react-bootstrap";

const AddBlogForm = () => {
  return (
    <div className="blog-add-form-container px-3 px-md-5 py-4 ">
      <Formik>
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
                id="title"
                name="title"
              ></p>
              <ErrorMessage
                name="title"
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
                id="title"
                name="title"
                placeholder="Sub-title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>
            <Dropdown>
              <Dropdown.Toggle
                variant="white"
                className="text-black"
                id="dropdown-basic category-d"
              >
                Dropdown button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="">
              <Field
                className="form-control w-100 blog-textarea w-md-75"
                as="textarea"
                id="title"
                name="title"
                placeholder="Sub-title"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger"
              />
            </div>
            <Button variant="primary" className="py-2 px-3">
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBlogForm;
