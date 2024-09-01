// src/components/About.js

import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-6">
        Welcome to JR Shop! Our goal is to provide you with high-quality
        jerseys. We offer a variety of jerseys that fit your style and needs.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
      <p className="text-lg mb-6">
        Our mission is to provide the highest customer satisfaction and meet
        their expectations. We ensure the quality of each product and are
        committed to offering you the best shopping experience.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/path/to/team-member-1.jpg"
            alt="Team Member 1"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Zahidur Rahman</h3>
          <p className="text-gray-700">Co-Founder</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/path/to/team-member-2.jpg"
            alt="Team Member 2"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Nahida Sultana</h3>
          <p className="text-gray-700">Marketing Manager</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/path/to/team-member-3.jpg"
            alt="Team Member 3"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Mohammad Saiful Islam</h3>
          <p className="text-gray-700">Customer Service</p>
        </div>
      </div>
    </div>
  );
};

export default About;
