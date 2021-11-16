import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import UserReviews from "../../UserReviews/UserReviews/UserReviews";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <UserReviews></UserReviews>
    </div>
  );
};

export default Home;
