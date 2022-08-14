import React from 'react'
import {servicesApi} from '../../../../Service/apiService'
import Footer from '../../../Footer/Footer';
import OurStory from './OurStory/OurStory';
function OurStories() {
  const {data:ourstories} = servicesApi.useGetOurStoriesQuery();
  return (
<section>
<div className="container">
     <div className='our-stories'>
        {
          ourstories && ourstories.map((a) => 
          <OurStory key={a.id} story={a}/>
          )
        }
    </div>
 </div>
 <Footer/>
</section>
  )
}

export default OurStories;