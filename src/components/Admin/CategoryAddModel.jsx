import { addCategory } from "api/APIs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { categoryValidationSchema } from "validations/validator";

const CategoryAddModel = ({
  setShouldModelOpen,
  refetch,
  setShouldSessionModelOpen,
}) => {
  const { mutate: category } = useMutation(addCategory, {
    onSuccess: () => {
      toast.success("Category Added Successful");
      setShouldModelOpen(false);
      refetch();
    },
    onError: (error) => {
      if (error.response.status == 401) {
        setShouldModelOpen(false);
        setShouldSessionModelOpen(true);
        return;
      }

      if (error.response.status == 409) {
        toast.error("Category Already Exists");
        return;
      }
      toast.error("Something Went Wrong");
    },
  });
  const handleSubmit = (values) => {
    category({ ...values });
  };
  return (
    <Modal show={true} centered onHide={() => setShouldModelOpen(false)}>
      <Modal.Header closeButton>Add Categories</Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center gap-3">
        <Formik
          initialValues={{
            name: "Programming",
          }}
          validationSchema={categoryValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("onSubmit");
            setSubmitting(false);
            handleSubmit(values);
          }}
        >
          <Form className="w-100 w-md-75">
            <label className="form-label fs-6">Title</label>
            <Field
              className="form-control w-100 w-md-75"
              type="text"
              id="name"
              name="name"
              placeholder="Category Name"
            />
            <ErrorMessage name="name" component="div" className="text-danger" />
            <div className="d-flex justify-content-center mt-3">
              <Button variant="primary" className="w-50" type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default CategoryAddModel;
