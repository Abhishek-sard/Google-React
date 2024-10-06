import React from 'react';
import './body.css'; 

const Body = () => {
  return (
    <div className="body-container">
      {/* Left Section: Text */}
      <div className="text-section">
        <h1>Welcome to Our Book Store</h1>
        <p>
          Discover a vast collection of books that cater to all your reading
          needs. From fiction to non-fiction, we have it all. Explore the latest
          arrivals, bestsellers, and rare editions right here. Dive into the
          world of knowledge and entertainment today!
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="image-section">
        <img
          src="https://via.placeholder.com/400" // Replace with your actual image URL
          alt="Book Store Front"
          className="front-image"
        />
      </div>

      
    </div>
  );
};

export default Body;
