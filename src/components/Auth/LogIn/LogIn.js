import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
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
      <h2 className="fs-1">Welcome back!</h2>
      <p className="fs-4">Log in to your account.</p>

      {/* Form start */}
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <div className="field">
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <Link className="text-end" to="/">
          Forget Password?
        </Link>
        <input type="submit" value="Continue" />
      </form>
     {/* Divider */}
      <div className="d-flex align-items-center my-4">
        <div style={{ height: "1px" }} className="bg-secondary w-50 opacity-50"></div>
        <p className="mt-2 px-2 opacity-75">OR</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50 opacity-50"></div>
      </div>
      {/* Sign in with google button*/}
      <button className="google-btn">
        <div className="google-icon">
          <FcGoogle />
        </div>{" "}
        <div className="google-btn-text">
          <p>Sign in with Google</p>
        </div>
      </button>
      <p className="text-center">
        Not a member? <Link to="/register">Register now</Link>
      </p>
    </div>
  );
};

export default LogIn;
