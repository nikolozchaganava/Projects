import React from "react";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <p className="about-text">
          Welcome to <span>GOA (Goal Oriented Academy)</span>, your ultimate destination for mastering the art of programming and technology. We are passionate about empowering aspiring developers and tech enthusiasts with hands-on knowledge, innovative courses, and a community that thrives on learning and collaboration.
        </p>
        <div className="about-highlights">
          <div className="highlight-card">
            <h2>Our Mission</h2>
            <p>
              To provide high-quality, goal-oriented programming education that bridges the gap between learners and their tech dreams.
            </p>
          </div>
          <div className="highlight-card">
            <h2>Why Choose Us?</h2>
            <p>
              Expert mentors, real-world projects, and a curriculum designed for success in the fast-paced tech industry.
            </p>
          </div>
        </div>
        <div className="cta">
          <a href="#courses" className="btn">Explore Courses</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
