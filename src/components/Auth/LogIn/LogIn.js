import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import Loading from "../../Shared/Loading/Loading";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();
  // Sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // Send password reset email
  const [sendPasswordResetEmail, sendingReset, errorReset] =
    useSendPasswordResetEmail(auth);
  const onSubmit = (data) => {
    setEmail(data.email);
    setPassword(data.password);
    // Email Validation
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("email", {
        type: "validate",
        message: "Please provide a valid email.",
      });
    }

    // Sign in with email and password
    signInWithEmailAndPassword(email, password);
    // reset input field
    reset();
  };

  // Forget password & Modal
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = e.target.forgetEmail.value;
    if (!email) {
      toast.error("Please enter your email");
    } else {
      sendPasswordResetEmail(email);
      toast.success("Email Send, Please check your email box.");
      e.target.reset();
    }
  };

  // Toast Notification
  useEffect(() => {
    if (user) {
      toast.success("Successfully Logged In");
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      toast.error(error?.message, {
        id: "email/password error",
      });
    }
  }, [error]);

  useEffect(() => {
    if(errorReset){
      toast.error(error?.message, {
        id: "errorReset",
      });
    }
  }, [errorReset]);

 

  if (loading || sendingReset) {
    return <Loading/>
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
          <p className="text-danger">
            {errors.password?.type === "required" && "Password is required"}
          </p>
          <p className="text-muted">
            Your password should contain at least one uppercase, one lowercase,
            one numeric, one special character and minimum 8 characters.
          </p>
        </div>
        <p
          role="button"
          className="text-end text-primary text-decoration-underline"
          onClick={openModal}
        >
          Forget Password?
        </p>
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
      {/* Forget Password */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button
          onClick={closeModal}
          className="btn btn-close ms-auto d-block"
        ></button>
        <h2 className="text-center">Trouble Logging In?</h2>
        <form onSubmit={handleForgetPassword}>
          <p className="text-muted">
            Enter your email and we'll send you link to get back into your
            account.
          </p>
          <div className="field">
            <input
              type="email"
              name="forgetEmail"
              className="p-1 mb-2 border border-2"
            />
            <input
              type="submit"
              value="Reset Password"
              className="btn btn-primary"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default LogIn;
