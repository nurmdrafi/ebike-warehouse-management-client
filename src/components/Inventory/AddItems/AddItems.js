import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    //  relevant name, image, short description, price, quantity, supplier name,
    return (
        <div className="form-container">
            <h2 className="text-center">Add New Item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <div className="field">
                    <label>Product Name</label>
                    <input type="text" {...register("product-name", {required: true})} />
                </div>
                <div className="field">
                    <label>Image URL</label>
                    <input type="text" {...register("image", {required: true})} />
                </div>
                <div className="field">
                    <label>Description</label>
                    <input type="text" {...register("description", {required: true})} />
                </div>
                <div className="field">
                    <label>Price</label>
                    <input type="number" {...register("price", {required: true})} />
                </div>
                <div className="field">
                    <label>Quantity</label>
                    <input type="number" {...register("quantity", {required: true})} />
                </div>
                <div className="field">
                    <label>Supplier Name</label>
                    <input type="text" {...register("supplier-name", {required: true})} />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddItems;