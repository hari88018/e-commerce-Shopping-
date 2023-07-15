import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Products from "../../Components/Products";
import NewsLetter from "../../NewsLetter";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <div>

      <Announcement/>
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <NewsLetter />
      <Footer/>
    </div>
  );
};

export default Home;
