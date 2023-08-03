import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";

import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products";
import NewsLetter from "../../NewsLetter";
import Footer from "../../Components/Footer";
import Carousel from "../../Components/Slider/Carousel";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
