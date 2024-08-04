import React from "react";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Hobbies from "../components/Hobbies";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="w-full min-h-svh flex flex-col">
      <Navbar />
      <Profile />
      <Hobbies />
      <Footer />
    </div>
  );
};

export default About;
