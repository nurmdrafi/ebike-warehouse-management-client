import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h2 className="fs-1">Never lose track of an item again.</h2>
      <p className="text-muted">
        Simple, fast and powerful inventory software for businesses and teams to
        stay organized.
      </p>
      {/* Sign up with google button*/}
      <button className="google-btn">
        <div className="google-icon">
          <FcGoogle />
        </div>{" "}
        <div className="google-btn-text">
          <p>Sign up with Google</p>
        </div>
      </button>
      {/* Divider */}
      <div className="d-flex align-items-center my-4">
        <div style={{ height: "1px" }} className="bg-secondary w-50 opacity-50"></div>
        <p className="mt-2 px-2 opacity-75">OR</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50 opacity-50"></div>
      </div>
      {/* Form start */}
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <div className="field">
          <label>Full Name</label>
          <input
            type="text"
            {...register("username", { required: true })}
            style={{ outlineColor: errors.username ? "red" : "black" }}
            placeholder="e.g. John Doe"
          />
          <p className="text-danger">
            {errors.username && "Username is required"}
          </p>
        </div>
        <div className="field">
          <label>Work Email</label>
          <input
            type="text"
            {...register("email", { required: true })}
            style={{ outlineColor: errors.email ? "red" : "black" }}
            placeholder="work@example.com"
          />
          <p className="text-danger">{errors.email && "Email is required"}</p>
        </div>
        <div className="field">
          <label>Create Password</label>
          <input
            type="text"
            {...register("password", { required: true })}
            style={{ outlineColor: errors.password ? "red" : "black" }}
            placeholder="Create a password with 8 characters"
          />
          <p className="text-danger">
            {errors.password && "Password is required"}
          </p>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
