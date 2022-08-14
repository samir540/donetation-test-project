import React from 'react'

function DonateStoryContent({content}) {
  return (
     <div className="container">
          <div className='donate-story-content'>
<img src={content.image} alt="" />
<a href='/smartvillage'>{content.titleOne}</a>
<a href='/ourstories'>{content.titleTwo}</a>
    </div>
     </div>
  )
}

export default DonateStoryContent