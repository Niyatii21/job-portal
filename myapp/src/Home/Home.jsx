import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="ri">
        <h1>I am right side content </h1>
      </div>
      <div className="left">
        <img
          src="https://jobbox-html.netlify.app/frontend/assets/imgs/page/homepage1/banner1.png"
          alt="home"
        ></img>
      </div>
    </div>
  );
};

export default Home;
