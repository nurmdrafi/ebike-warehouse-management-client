import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import Footer from "../Shared/Footer/Footer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    reset();
    toast.success("Message Send Successfully");
  };
  return (
    <div>
      <div
        className="container form-container my-4"
        style={{ minHeight: "calc(100vh - 150px)" }}
      >
        <Toaster />
        <h1 className="text-center mb-3">Get In Touch</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* firstname & lastname */}
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <label>First Name</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                className={`form-control ${
                  errors.firstName ? "is-invalid" : ""
                }`}
              />
            </div>
            <div className="d-flex flex-column">
              <label>Last Name</label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                className={`form-control ${
                  errors.lastName ? "is-invalid" : ""
                }`}
              />
            </div>
          </div>
          {/* mail & phone */}
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
            </div>
            <div className="d-flex flex-column">
              <label>Last Name</label>
              <input
                type="number"
                {...register("number", { required: true })}
                className={`form-control ${errors.number ? "is-invalid" : ""}`}
              />
            </div>
          </div>
          {/* textarea */}
          <div className="field">
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              {...register("message", { required: true })}
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
            ></textarea>
          </div>
          <input type="submit" value="Send" className="btn btn-dark px-5 " />
        </form>
      </div>
        <Footer />
    </div>
  );
};

export default Contact;
