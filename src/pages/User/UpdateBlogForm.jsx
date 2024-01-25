import { getAllCategories, getBlogById, updateBlog } from "api/APIs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useFetchData from "hooks/useFetchData";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import ReactSelect from "react-select";

const UpdateBlogForm = () => {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(null);

  const { mutate: updatedBlog } = useMutation(
    ({ id, blog }) => updateBlog(id, blog),
    {
      onSuccess: (responseData) => {
        toast.success("Updated Successful");
      },
      onError: (error) => {
        toast.error("Something Went Wrong :(");
      },
    }
  );
  const { data: allCategories } = useFetchData(
    ["categories"],
    getAllCategories
  );
  const { data: blog } = useFetchData(["blog", id], () => getBlogById(id));
  const [options, setOptions] = useState(null);
  useEffect(() => {
    if (allCategories) {
      const option = allCategories.data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(option);
    }

    if (blog) {
      setInitialValues({
        title: blog.data.title,
        subTitle: blog.data?.subTitle || "",
        content: blog.data.content,
      });

      setSelectedCategories(
        blog.data.categories.map((category) => category._id)
      );
    }
  }, [allCategories, blog]);

  const handleSelectChange = (selectedValues) => {
    const selectedIds = selectedValues.map((option) => option.value);
    setSelectedCategories(selectedIds);
  };

  const handleSubmit = (values) => {
    if (!selectedCategories) {
      toast.error("At Least 1 category should be selected");
      return;
    }
    updateBlog({
      ...values,
      categories: selectedCategories,
      url_list: ["sdaas"],
      status: "pending",
    });
  };

  return (
    <div className="blog-add-form-container px-3 px-md-5 py-4 ">
      {initialValues && selectedCategories && (
        <Formik initialValues={initialValues}>
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
                {allCategories && options && (
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
                        selectedCategories.includes(option.value)
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
              <Button variant="warning" className="py-2 px-3" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default UpdateBlogForm;
