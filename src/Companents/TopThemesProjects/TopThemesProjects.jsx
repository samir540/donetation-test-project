import React from 'react'
import {Link} from 'react-router-dom';
function TopThemesProjects({company}) {
  return (
    
     <Link to={`/commonprojects/${company.id}`} className='company'>
        <img src={company.image} alt="" />
        <h3>{company.name}</h3>
        <p>{company.text}</p>
<div className="company-button">
<button>İanə Et</button>
</div>
        </Link>
  )
}

export default TopThemesProjects;