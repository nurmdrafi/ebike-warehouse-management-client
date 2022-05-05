import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Inventory.css'

const axios = require("axios").default;
const Inventory = () => {
  const { _id } = useParams();
  const [item, setItem] = useState();
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    const getSingleItem = async () => {
      const url = `http://localhost:5000/inventory/${_id}`;
      const { data } = await axios.get(url);
      setItem(data);
    };
    getSingleItem();
  }, [isRefresh]);

  const handleDelivered = async (id) =>{
      const quantity = item.quantity;
      const updateQuantity = quantity - 1;
      const newObj = {...item, quantity: updateQuantity}
      const url = `http://localhost:5000/inventory/${id}`;
      await axios.put(url, newObj)
      .then((res) =>{
          setIsRefresh(!isRefresh)
      })


  }
  return (
    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 my-5 container mx-auto">
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
        <button className="btn btn-success w-25" onClick={()=> handleDelivered(item?._id)}>Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
