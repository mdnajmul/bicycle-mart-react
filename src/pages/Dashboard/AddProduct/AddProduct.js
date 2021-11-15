import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const product = {
      name: data.name,
      brand: data.brand,
      img: data.img,
      specification: {
        model: data.model,
        color: data.color,
        variant: data.variant,
        frameVariant: data.frameVariant,
        type: data.type,
        tyreVariant: data.tyreVariant,
        frameMaterial: data.frameMaterial,
      },
      price: parseInt(data.price),
      rating: parseInt(data.rating),
    };
    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Product Added Successfully!");
          reset();
          //   window.location.href = window.location.href;
        }
      });
  };

  return (
    <div className="product-form">
      <div>
        <h2 style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>
          Add New Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Product Name*"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="error">This field is required</span>}
          <input
            placeholder="Product Brand*"
            {...register("brand", { required: true })}
          />
          {errors.brand && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Product Image Link*"
            {...register("img", { required: true })}
          />
          {errors.img && <span className="error">This field is required</span>}
          <input
            placeholder="Product Model*"
            {...register("model", { required: true })}
          />
          {errors.model && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Product Color*"
            {...register("color", { required: true })}
          />
          {errors.color && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Product Variant*"
            {...register("variant", { required: true })}
          />
          {errors.variant && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Product Frame Variant*"
            {...register("frameVariant", { required: true })}
          />
          {errors.frameVariant && (
            <span className="error">This field is required</span>
          )}
          <select {...register("type")}>
            <option value="">Category</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Kids">Kids</option>
          </select>
          <input
            placeholder="Product Tyre Variant*"
            {...register("tyreVariant", { required: true })}
          />
          {errors.tyreVariant && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Product Frame Material*"
            {...register("frameMaterial", { required: true })}
          />
          {errors.frameMaterial && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Total Price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="error">This field is required</span>
          )}
          <select {...register("rating")}>
            <option value="0">Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input className="submit-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
