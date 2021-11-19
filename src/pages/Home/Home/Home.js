import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import UserReviews from "../../UserReviews/UserReviews/UserReviews";
import Banner from "../Banner/Banner";
import HomeProducts from "../HomeProducts/HomeProducts";
import Summury from "../Summury/Summury";
import WorkFlow from "../WorkFlow/WorkFlow";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <UserReviews></UserReviews>
      <WorkFlow></WorkFlow>
      <Summury></Summury>
      <Footer></Footer>
    </div>
  );
};

export default Home;
