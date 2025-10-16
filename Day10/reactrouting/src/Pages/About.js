import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>ABout Page</h1>
      <LazyLoadImage
        src="/logo192.png"
        effect="blur"
      />
      <Link to="/">Navigate to Home</Link>
    </div>
  );
}

export default About;
