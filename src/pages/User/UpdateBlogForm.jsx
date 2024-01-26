import { getAllCategories, getBlogById, updateBlog } from "api/APIs";
import SessionExpiredModel from "components/SessionExpiredModel";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useFetchData from "hooks/useFetchData";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import ReactImageUploading from "react-images-uploading";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactSelect from "react-select";
import { blogFormValidationSchema } from "validations/validator";

const UpdateBlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shouldModelOpen, setShouldModelOpen] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const user = useSelector((state) => state.user.user);
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onImageChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const { mutate: updatedBlog } = useMutation(
    ({ id, data }) => {
      return updateBlog(id, data);
    },
    {
      onSuccess: () => {
        toast.success("Updated Successful");
        navigate(`/user/profile/${user.user._id}`);
      },
      onError: (error) => {
        if (error.response.status == 401) {
          setShouldModelOpen(true);
          return;
        }
        toast.error("Something Went Wrong");
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
      setImages(blog.data.url_list);

      setSelectedCategories(
        blog.data.categories.map((category) => category._id)
      );
    }
  }, [allCategories, blog]);

  const handleSelectChange = (selectedValues) => {
    const selectedIds = selectedValues.map((option) => option.value);
    setSelectedCategories(selectedIds);
  };

  const handleSubmit = async (values) => {
    if (!selectedCategories) {
      toast.error("At Least 1 category should be selected");
      return;
    }
    updatedBlog({
      id,
      data: {
        ...values,
        categories: selectedCategories,
        url_list: await images.map((image) => image["data_url"] || image),
        status: "pending",
      },
    });
  };

  return (
    <div className="blog-add-form-container px-3 px-md-5 py-4 ">
      {initialValues && selectedCategories && (
        <Formik
          initialValues={initialValues}
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

              <ReactImageUploading
                resolutionType="less"
                multiple
                value={images}
                onChange={onImageChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className="position-relative w-100 w-md-75">
                    <label className="form-label fs-6">Images</label>
                    <p
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                      className="form-control w-100 w-md-75 image-input"
                      type="text"
                    ></p>
                    <span className="position-absolute plus-icon ">
                      <i className="fa-solid fa-plus"></i>
                    </span>

                    {imageList.length > 1 && (
                      <Button variant="danger" onClick={onImageRemoveAll}>
                        Remove all images
                      </Button>
                    )}
                    {imageList.map((image, index) => (
                      <div
                        key={index}
                        className="d-flex rounded position-relative flex-column align-items-center border p-3 my-2"
                      >
                        <img
                          src={image["data_url"] || image}
                          alt=""
                          className="w-75 rounded"
                        />
                        <div className="d-flex flex-column image-upload-edit-container position-absolute justify-content-between  p-3">
                          <Button
                            variant="secondary"
                            className="my-2"
                            onClick={() => onImageUpdate(index)}
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </Button>
                          <Button
                            variant="danger"
                            className="my-2"
                            onClick={() => onImageRemove(index)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ReactImageUploading>
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

      {shouldModelOpen && (
        <SessionExpiredModel shouldModelOpen={setShouldModelOpen} />
      )}
    </div>
  );
};

export default UpdateBlogForm;
