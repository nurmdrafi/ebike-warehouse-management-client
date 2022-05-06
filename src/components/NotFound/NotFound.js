import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="details">
        <p>ERROR 404</p>
        <h2>
          Oops! The page you're <br /> looking for is'nt here.
        </h2>
        <p>
          You might have the wrong address, or the page <br />
          may have moved.
        </p>
        <Link to="/home">
          <button type="button" className="btn btn-dark">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
