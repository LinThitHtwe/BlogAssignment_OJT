import { addBlog, getAllCategories } from "api/APIs";
import SessionExpiredModel from "components/SessionExpiredModel";
import routes from "constants/routes";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useFetchData from "hooks/useFetchData";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import ReactImageUploading from "react-images-uploading";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import { blogFormValidationSchema } from "validations/validator";

const AddBlogForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [shouldModelOpen, setShouldModelOpen] = useState(false);
  const { data } = useFetchData(["categories"], getAllCategories);
  const [options, setOptions] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSelectChange = (selectedValues) => {
    const selectedIds = selectedValues.map((option) => option.value);
    setSelectedOptions(selectedIds);
  };

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onImageChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const {
    mutate: blogData,
    isLoading,
    isError,
    error,
  } = useMutation(addBlog, {
    onSuccess: (responseData) => {
      toast.success("Successfully added");
      navigate(`/user/profile/${user.user._id}`);
    },
    onError: (error) => {
      if (error.response.status == 401) {
        setShouldModelOpen(true);
        return;
      }
      toast.error("Something Went Wrong");
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

  const handleSubmit = async (values) => {
    if (selectedOptions.length == 0) {
      toast.error("At Least 1 category should be selected");
      return;
    }

    blogData({
      ...values,
      categories: selectedOptions,
      url_list: await images.map((image) => image["data_url"]),
      status: "pending",
    });
  };

  return (
    <div className="blog-add-form-container px-3 px-md-5 py-4 ">
      <Formik
        initialValues={{
          title: "Why AI matter ?",
          subTitle: "The rise of AI",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum facilis hic reiciendis maiores dignissimos assumenda, facere, perferendis culpa eligendi eum officiis temporibus placeat. Dolore cumque aliquam est sequi doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum facilis hic reiciendis maiores dignissimos assumenda, facere, perferendis culpa eligendi eum officiis temporibus placeat. Dolore cumque aliquam est sequi doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum facilis hic reiciendis maiores dignissimos assumenda, facere, perferendis culpa eligendi eum officiis temporibus placeat. Dolore cumque aliquam est sequi doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum facilis hic reiciendis maiores dignissimos assumenda, facere, perferendis culpa eligendi eum officiis temporibus placeat. Dolore cumque aliquam est sequi doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum facilis hic reiciendis maiores dignissimos assumenda, facere, perferendis culpa eligendi eum officiis temporibus placeat. Dolore cumque aliquam est sequi doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum facilis hic reiciendis maiores dignissimos assumenda, facere, perferendis culpa eligendi eum officiis temporibus placeat. Dolore cumque aliquam est sequi doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum facilis hic reiciendis maiores dignissimos assumenda, facere, perferendis culpa eligendi eum officiis temporibus placeat. Dolore cumque aliquam est sequi doloremque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum facilis hic reiciendis maiores dignissimos assumenda, facere, perferendis culpa eligendi eum officiis temporibus placeat. Dolore cumque aliquam est sequi doloremque!",
        }}
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
                        src={image["data_url"]}
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
      {shouldModelOpen && (
        <SessionExpiredModel shouldModelOpen={setShouldModelOpen} />
      )}
    </div>
  );
};

export default AddBlogForm;
