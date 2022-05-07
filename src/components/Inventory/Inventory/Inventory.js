import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "./Inventory.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Inventory = () => {
  const { _id } = useParams();
  const [item, setItem] = useState();
  const [isRefresh, setIsRefresh] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getSingleItem = async () => {
      const url = `https://ebike-warehouse.herokuapp.com/inventory/${_id}`;
      const { data } = await axios.get(url);
      setItem(data);
    };
    getSingleItem();
  }, [isRefresh]);

  const handleDelivered = async () => {
    const quantity = item.quantity;
    const decreaseQuantity = quantity - 1;
    const newObj = { ...item, quantity: decreaseQuantity };
    const url = `https://ebike-warehouse.herokuapp.com/inventory/${_id}`;
    await axios.put(url, newObj).then((res) => {
      setIsRefresh(!isRefresh);
      toast.success("1 item delivered");
    });
  };

  const onSubmit = async (data, e) => {
    const quantity = parseInt(item.quantity);
    const increaseQuantity = quantity + parseInt(data.quantity);
    const newObj = { ...item, quantity: increaseQuantity };
    const url = `https://ebike-warehouse.herokuapp.com/inventory/${_id}`;
    await axios.put(url, newObj).then((res) => {
      setIsRefresh(!isRefresh);
      e.target.reset();
      toast.success(`New ${data.quantity} items added.`);
    });
  };
  return (
    <div>
      <Toaster />
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 my-5 container mx-auto single-item">
        {/* image */}
        <div className="image-container col mx-md-auto">
          <img src={item?.image} alt="" />
        </div>

        {/* item container */}
        <div className="col">
          <div className="item-container">
            <h5>Product Id</h5>
            <p className="fw-bold text-secondary">{item?._id}</p>
            <h5>Product Name</h5>
            <p className="fs-4 fw-bold">{item?.name}</p>
            <h5>Description</h5>
            <p>{item?.description}</p>
            <div className="d-flex">
              <div className="me-auto">
                <h5>Price</h5>
                <p className="fs-4">${item?.price}</p>
              </div>
              <div className="me-auto">
                <h5>Quantity</h5>
                <p className="fs-4">{item?.quantity}</p>
              </div>
              <div className="me-5">
                <h5>Sold</h5>
                <p className="fs-4">{item?.sold}</p>
              </div>
            </div>
            <h5>Supplier</h5>
            <p className="fs-5">{item?.supplierName}</p>
            <button
              className="btn btn-success w-25"
              onClick={() => handleDelivered(item?._id)}
            >
              Delivered
            </button>
          </div>
        </div>
      </div>

      {/* Restock item */}
      <div className="container">
        <div className="row pe-3">
          <div className="col-md-6 order-2 order-md-1">
            <div className="d-flex justify-content-center align-items-center" style={{height: '255px'}}>
              <button
                className="btn btn-outline-dark mx-auto "
                onClick={() => navigate("/manage-inventory")}
              >
                Manage Inventories
              </button>
            </div>
          </div>
          <div className="col-md-6 gx-5 order-1 order-md-2">
            <form onSubmit={handleSubmit(onSubmit)} className="restoke-form">
              <div className="field">
                <h2>Restoke the items</h2>
                <label className="my-2 fw-bold">Quantity</label>
                <input
                  type="text"
                  {...register("quantity", { required: true })}
                  className={`form-control ${
                    errors.quantity ? "is-invalid" : ""
                  }`}
                />
                <p className="text-danger">
                  {errors.quantity && "Quantity is required"}
                </p>
              </div>
              <input
                type="submit"
                value="Add Quantity"
                className="btn btn-outline-success"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
