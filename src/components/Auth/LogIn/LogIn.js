import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast, { Toaster } from "react-hot-toast";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const onSubmit = (data) => {
    // Email Validation
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      setError("email", {
        type: "validate",
        message: "Please provide a valid email.",
      });
    }

    // Sign in with email and password
    signInWithEmailAndPassword(data.email, data.password);
    // reset input field
    reset();
  };

  // Toast Notification
  useEffect(() => {
    if (user) {
      toast.success("Successfully Logged In");
    }
  }, [user]);

  useEffect(() => {
    if (error){
      toast.error(error.message, {
        id: "email/password error"
      })
    }
  }, [error])
  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5 py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  
  return (
    <div className="form-container">
      <div>
        <Toaster />
      </div>
      <h2 className="fs-1">Welcome back!</h2>
      <p className="fs-4">Log in to your account.</p>

      {/* Form start */}
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        {/* Email */}
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {/* Error Message */}
          <p className="text-danger">
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "validate" && errors.email.message}
          </p>
        </div>
        {/* Password */}
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {/* Error Message */}
          <p className="text-warning">
            {errors.password?.type === "required" && "Password is required"}
          </p>
          <p className="text-muted">Your password should contain at least one uppercase, one lowercase, one numeric, one special character and minimum 8 characters.</p>
        </div>
        <Link className="text-end" to="/">
          Forget Password?
        </Link>
        <input type="submit" value="Continue" />
      </form>
      {/* Divider */}
      <div className="d-flex align-items-center my-4">
        <div
          style={{ height: "1px" }}
          className="bg-secondary w-50 opacity-50"
        ></div>
        <p className="mt-2 px-2 opacity-75">OR</p>
        <div
          style={{ height: "1px" }}
          className="bg-secondary w-50 opacity-50"
        ></div>
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
