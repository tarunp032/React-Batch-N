import React from "react";
import { useSelector } from "react-redux";

const About = () => {

  return (
    <div className="about-container">
      <h2 className="about-title">About Food Cart</h2>
      <p className="about-tagline">"Always Ready, Always Fresh"</p>

      <p className="about-description">
        Food Cart is your digital kitchen buddy. From breakfast to dinner, we
        bring you quick recipes, smart search, and flexible views — always
        fresh, always ready. Explore, learn, and cook your favorite meals with
        ease!
      </p>

      <h3 className="about-subtitle">✨ Key Features</h3>
      <ul className="about-features">
        <li>✅ Search and Sort Recipes</li>
        <li>✅ Filter by Meal Type</li>
        <li>✅ Add to Cart for quick access</li>
        <li>✅ Switch between Card & Table views</li>
      </ul>

      <h3 className="about-subtitle">🚀 Future Plans</h3>
      <p className="about-future">
        We are working on adding personalized recipe suggestions, favorites, and
        nutrition tracking to make Food Cart even better.
      </p>

      <div className="about-footer">
        <p>Built with ❤️ using React & DummyJSON API</p>
      </div>
    </div>
  );
};

export default About;
