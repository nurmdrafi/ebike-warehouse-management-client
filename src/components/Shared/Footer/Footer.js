import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div className="bg-black d-flex align-items-center justify-content-center footer" style={{height: '80px'}}>
      <p className="text-center text-white">
        All Rights Reserved By &copy;{" "}
        <span className="brand" style={{ fontSize: "18px" }}>
          Ebike Warehouse
        </span>{" "}
        | {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
