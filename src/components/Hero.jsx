import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const bg =
    "url(https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/378140678_24407785452141903_3425875333014855176_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AvInBliXCoQQ7kNvgEN0LTA&_nc_ht=scontent.fcgy2-4.fna&oh=00_AYA7W-FrKgWyWA2Qg6ivrd9H5ohiPX7TnthNUcP-o9DfNg&oe=66B580DF)";
  return (
    <div
      className="hero bg-base-200 min-h-full grow"
      style={{ backgroundImage: bg }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <p className="py-6">
            I am Pausebr3ak. I studied Bachelor of Science in Information
            Technology in the University of Southern Philippines Foundation.
          </p>
          <Link to="/about" className="btn btn-primary">
            About me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
