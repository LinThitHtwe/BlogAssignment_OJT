import { addBlog, getAllCategories } from "api/APIs";
import SessionExpiredModel from "components/SessionExpiredModel";
import routes from "constants/routes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useFetchData from "hooks/useFetchData";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { blogFormValidationSchema } from "validations/validator";

const AddBlogForm = () => {
  const [shouldModelOpen, setShouldModelOpen] = useState(false);
  const { data } = useFetchData(["categories"], getAllCategories);
  const [options, setOptions] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelectChange = (selectedValues) => {
    const selectedIds = selectedValues.map((option) => option.value);
    setSelectedOptions(selectedIds);
  };

  const {
    mutate: blogData,
    isLoading,
    isError,
    error,
  } = useMutation(addBlog, {
    onSuccess: (responseData) => {},
    onError: (error) => {
      if (error.response.status) {
        setShouldModelOpen(true);
        return;
      }
    },
  });

  useEffect(() => {
    if (data) {
      const option = data.data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(option);
    }
  }, [data]);

  const handleSubmit = (values) => {
    if (selectedOptions.length == 0) {
      toast.error("At Least 1 category should be selected");
      return;
    }
    blogData({
      ...values,
      categories: selectedOptions,
      url_list: ["sdaas"],
      status: "pending",
    });
  };

  return (
    <div className="blog-add-form-container px-3 px-md-5 py-4 ">
      <Formik
        initialValues={{ title: "", subTitle: "", content: "" }}
        validationSchema={blogFormValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          handleSubmit(values);
        }}
      >
        <Form className="d-flex flex-column align-items-center align-items-md-start flex-md-row gap-md-4">
          <div className="w-100 w-md-50 d-flex align-items-center flex-column gap-2">
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
              ></p>

              <span className="position-absolute plus-icon ">
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
          </div>
          <div className="w-100 w-md-50 d-flex flex-column gap-4 mt-3 mt-md-0">
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
            <div>
              <lable className="form-label fs-6">Categories</lable>
              {data && options && (
                <>
                  <ReactSelect
                    isMulti
                    options={options}
                    placeholder="Select options..."
                    className="basic-multi-select"
                    classNamePrefix="select"
                    id="categories"
                    name="categories"
                    value={options.filter((option) =>
                      selectedOptions.includes(option.value)
                    )}
                    onChange={handleSelectChange}
                  />
                  <ErrorMessage
                    name="categories"
                    component="div"
                    className="text-danger"
                  />
                </>
              )}
            </div>
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
      <SessionExpiredModel shouldModelOpen={setShouldModelOpen} />
    </div>
  );
};

export default AddBlogForm;
