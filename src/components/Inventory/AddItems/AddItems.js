import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";

const AddItems = () => {
  const [user, userLoading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const createItems = async () => {
      const url = "https://ebike-warehouse.herokuapp.com/add-inventory";
      await axios
        .post(url, { ...data })
        .then((res) => {
          toast.success("New item added");
        })
        .catch((err) => {
          // error.message
          toast.error(err.message);
        });
    };
    createItems();
    e.target.reset();

  };

  if (userLoading) {
    return <Loading />;
  }

  return (
    <div className="form-container container" style={{minHeight: "calc(100vh - 185px)"}}>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <h2 className="text-center">Add New Item</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column my-5"
      >
        {/* user email */}
        <div className="field">
          <label>User Email</label>
          <input
            type="text"
            {...register("userEmail")}
            className={`form-control ${errors.userEmail ? "is-invalid" : ""}`}
            placeholder={user?.email}
            readOnly
            value={user?.email}
          />
          <p className="text-danger">
            {errors.email && "Product Name is required"}
          </p>
        </div>

        {/* product name */}
        <div className="field mt-3">
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

        {/* brand */}
        <div className="field">
          <label>Brand</label>
          <input
            type="text"
            {...register("brand", { required: true })}
            className={`form-control ${errors.brand ? "is-invalid" : ""}`}
          />
          <p className="text-danger">{errors.brand && "Brand is required"}</p>
        </div>

        {/* image url */}
        <div className="field">
          <label>Image URL</label>
          <input
            type="text"
            {...register("image", { required: true })}
            className={`form-control ${errors.image ? "is-invalid" : ""}`}
          />
          <p className="text-danger">{errors.image && "Image is required"}</p>
        </div>

        {/* price */}
        <div className="field">
          <label>Price</label>
          <input
            type="text"
            {...register("price", { required: true })}
            className={`form-control ${errors.price ? "is-invalid" : ""}`}
            placeholder="e.g. 1,000.00"
          />
          <p className="text-danger">{errors.price && "Price is required"}</p>
        </div>

        {/* quantity */}
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

        {/* sold */}
        <div className="field">
          <label>Sold</label>
          <input
            type="number"
            {...register("sold", { required: true })}
            className={`form-control ${errors.sold ? "is-invalid" : ""}`}
          />
          <p className="text-danger">
            {errors.sold && "Sold items is required"}
          </p>
        </div>
        {/* supplier name */}
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

        {/* description */}
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
        <input
          type="submit"
          value="Add"
          className="btn btn-outline-secondary"
        />
      </form>
    </div>
  );
};

export default AddItems;
