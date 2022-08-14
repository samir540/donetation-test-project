import React from "react";
import {Link} from 'react-router-dom';
function DonateProjects({ project }) {

  return (
    <Link to={`/projectdetails/${project.id}`} className="donate-project">
      <img src={project.image} alt="" />
      <div className="donate-project-text">
        <h3>{project.name}</h3>
        <h4>{project.title}</h4>  
        <button>İanə Et</button>
      </div>
    </Link>
  );
}

export default DonateProjects;
