import React from 'react'
import {Link} from 'react-router-dom'
function DonateStory({story}) {
  return (
 <Link to={`/donatestorydetails/${story.id}`} className='story'>
    <img src={story.image} alt="" />
    <div className="story-overlay"></div>
    <div className="story-details">
<h3>{story.title}</h3>
<button>Daha çox oxu</button>
    </div>
 </Link>
  )
}

export default DonateStory;