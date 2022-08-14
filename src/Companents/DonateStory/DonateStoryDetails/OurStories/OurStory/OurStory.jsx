import React from "react";
import { Link } from "react-router-dom";
function OurStory({ story }) {
  return (
    <Link to={`/ourstorydetails/${story.id}`} className="our-story">
      <img src={story.image} alt="" />
      <h4>{story.topic}</h4>
      <h3>{story.title}</h3>
      <p>{story.text}</p>
      <button>Davamını Oxu</button>
    </Link>
  );
}

export default OurStory;
