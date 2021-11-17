import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import UserReviews from "../../UserReviews/UserReviews/UserReviews";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";
import Summury from "../Summury/Summury";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <UserReviews></UserReviews>
      <Summury></Summury>
    </div>
  );
};

export default Home;
