import React from "react";
import { useForm } from "react-hook-form";
const axios = require("axios").default;

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const createItems = async () =>{
      const url = "http://localhost:5000/add-inventory";
      await axios.post(url, {...data});
    }
    createItems()
    e.target.reset();
  };

 
  return (
    <div className="form-container">
      <h2 className="text-center">Add New Item</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <div className="field">
          <label>User Email</label>
          <input
            type="text"
            {...register("userEmail", { required: true })}
            className={`form-control ${errors.userEmail ? "is-invalid" : ""}`}
          />
          <p className="text-danger">
            {errors.userEmail && "User Email is required"}
          </p>
        </div>

        <div className="field">
          <label>Product Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          <p className="text-danger">
            {errors.name && "Product Name is required"}
          </p>
        </div>

        <div className="field">
          <label>Brand</label>
          <input type="text" 
          {...register("brand", {required: true})}
          className={`form-control ${errors.brand ? "is-invalid" : ""}`}/>
          <p className="text-danger">
            {errors.brand && "Brand is required"}
          </p>
        </div>

        <div className="field">
          <label>Image URL</label>
          <input
            type="text"
            {...register("image", { required: true })}
            className={`form-control ${errors.image ? "is-invalid" : ""}`}
          />
          <p className="text-danger">{errors.image && "Image is required"}</p>
        </div>

        <div className="field">
          <label>Price</label>
          <input
            type="text"
            {...register("price", { required: true })}
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
          />
          <p className="text-danger">{errors.price && "Price is required"}</p>
        </div>

        <div className="field">
          <label>Quantity</label>
          <input
            type="number"
            {...register("quantity", { required: true })}
            className={`form-control ${errors.quantity ? "is-invalid" : ""}`}
          />
          <p className="text-danger">
            {errors.quantity && "Quantity is required"}
          </p>
        </div>

        <div className="field">
          <label>Supplier Name</label>
          <input
            type="text"
            {...register("supplierName", { required: true })}
            className={`form-control ${
              errors.supplierName ? "is-invalid" : ""
            }`}
          />
          <p className="text-danger">
            {errors.supplierName && "Supplier Name is required"}
          </p>
        </div>

        <div className="field">
          <label>Description</label>
          <textarea
            type="text"
            {...register("description", { required: true })}
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
          />
          <p className="text-danger">
            {errors.description && "Description is required"}
          </p>
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddItems;
