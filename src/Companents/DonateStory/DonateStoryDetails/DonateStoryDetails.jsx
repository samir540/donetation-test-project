import React from 'react'
import {servicesApi} from '../../../Service/apiService'
import {useParams} from 'react-router-dom';
import DonateStoryContent from './DonateStoryContent/DonateStoryContent';
import Footer from '../../Footer/Footer';
function DonateStoryDetails() {
    const {id} = useParams();
    const {data:story} = servicesApi.useGetStoryQuery(id);
    const {data:storycontents} = servicesApi.useGetStoryContentsQuery();
  return (
    <>
      {
        story && (
           <section>
             <div className='donate-story-details'>
                <div className="donate-story-details-overlay">
                    <h1>{story.backImageText}</h1>
                </div>
                <img src={story.backImage} alt="" />
            </div>
            <div className="donate-story-details-contents">
            <div className="donate-story-details-contents-image">
                <img src={story.contentImage} alt="" />
                <p>{story.contentImageText}</p>
            </div>
            <div className="donate-story-details-contents-text">
                <p>{story.text1}</p>
                <h3>{story.head}</h3>
                <p>{story.headText}</p>
            </div>
            </div>
    <div className="container">
    <div className="donate-story-contents">
      {
storycontents && storycontents.map((a) => 
<DonateStoryContent key={a.id} content={a}/>
)
            }
      </div>
    </div>
    <Footer/>
           </section>
        )
      }
</>
  )
}

export default DonateStoryDetails