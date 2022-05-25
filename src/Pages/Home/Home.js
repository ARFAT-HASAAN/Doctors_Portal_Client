import React from "react";
import Details from "../Home/Details/Details";
import Appoinment from "./Appoinment/Appoinment";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Terms from "./Terms/Terms";
import Testimonial from "./Testimonial/Testimonial";
import Service from "../Home/service/Service";
import Doctors from "../Home/Doctor/Doctors";
import Contact from "../Home/Contact/Contact";

const Home = () => {

  
  return (
    <div>
      <Banner></Banner>
      <Details></Details> 
      <Service></Service>
      <Terms></Terms>
      <Appoinment></Appoinment>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Doctors></Doctors>
      <Contact></Contact>
    </div>
  );
};

export default Home;
