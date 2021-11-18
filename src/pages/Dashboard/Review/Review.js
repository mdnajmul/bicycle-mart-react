import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userReview = {
      name: data.name,
      email: data.email,
      review: data.review,
      rating: parseInt(data.rating),
    };
    fetch("https://serene-citadel-54805.herokuapp.com/addreview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Review Added Successfully!");
          reset();
          //   window.location.href = window.location.href;
        }
      });
  };

  return (
    <div className="product-form">
      <div>
        <h2 style={{ textAlign: "center", color: "green", fontWeight: "bold" }}>
          Give Your Review
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Your name"
            readOnly
            defaultValue={user?.displayName}
            {...register("name")}
          />
          <input
            placeholder="Your email"
            readOnly
            defaultValue={user?.email}
            {...register("email", { required: true })}
          />
          <textarea
            placeholder="Write Your Short Opinion About Our Products"
            {...register("review")}
          />
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

export default Review;
