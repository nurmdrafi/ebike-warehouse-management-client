import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../../Shared/Footer/Footer";

const Register = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // Create user with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // Sign in with google
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // Email Validation
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      setError("email", {
        type: "validate",
        message: "Please provide a valid email.",
      });
    }
    // Password Validation
    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        data.password
      )
    ) {
      setError("password", {
        type: "validate",
        message:
          "Your password should contain at least one uppercase, one lowercase, one numeric, one special character and minimum 8 characters.",
      });
    }

    // Confirm Password
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "match",
        message: "Password did not match.",
      });
    }
    // Create user with email and password
    createUserWithEmailAndPassword(data.email, data.password).then(() => {
      // JWT
      axios
        .post("https://ebike-warehouse.herokuapp.com/login", {
          email: data.email,
        })
        .then(({ data }) => {
          localStorage.setItem("accessToken", data.accessToken);
          setToken(data.accessToken);
        });
      // reset input field
      reset();
    });
  };

  // Navigate
  useEffect(() => {
    if (user && token) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate, token]);

  useEffect(() => {
    if (userGoogle) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, userGoogle]);

  // Toast Notification
  useEffect(() => {
    if (user || userGoogle) {
      toast.success("Successfully Sign In");
    }
  }, [user, userGoogle]);
  useEffect(() => {
    if (error) {
      toast.error(error?.message, {
        id: "email/password error",
      });
    }
    if (errorGoogle) {
      toast.error(errorGoogle?.message, {
        id: "google error",
      });
    }
  }, [error, errorGoogle]);

  if (loading || loadingGoogle) {
    return <Loading />;
  }

  return (
    <div>
      <div
        className="form-container my-5"
        style={{ minHeight: "calc(100vh - 185px)" }}
      >
        <Toaster />

        <h2 className="fs-1">Never lose track of an item again.</h2>
        <p className="text-muted">
          Simple, fast and powerful inventory software for businesses and teams
          to stay organized.
        </p>
        {/* Sign up with google button*/}
        <button onClick={() => signInWithGoogle()} className="google-btn">
          <div className="google-icon">
            <FcGoogle />
          </div>{" "}
          <div className="google-btn-text">
            <p>Sign up with Google</p>
          </div>
        </button>
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
        {/* Form start */}
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
          {/* Username */}
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              {...register("username", { required: true })}
              placeholder="e.g. John Doe"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
            />
            <p className="text-danger">
              {errors.username && "Username is required"}
            </p>
          </div>
          {/* Email */}
          <div className="field">
            <label>Work Email</label>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="work@example.com"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {/* Error Message */}
            <p className="text-danger">
              {errors.email?.type === "required" && "Email is required"}
            </p>
          </div>
          {/* Password */}
          <div className="field">
            <label>Create Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Create a password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            {/* Error Message */}
            <p className="text-danger">
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "validate" && errors.password.message}
            </p>
          </div>
          {/* Confirm Password */}
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
              placeholder="Please confirm your password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            {/* Error Message */}
            <p className="text-danger">
              {errors.confirmPassword?.type === "required" &&
                "Confirm Password is required"}
              {errors.confirmPassword?.type === "match" &&
                errors.confirmPassword.message}
            </p>
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
