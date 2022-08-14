import React from 'react'
import {servicesApi} from '../../../Service/apiService'
import {useParams} from 'react-router-dom'
import Footer from '../../Footer/Footer'
function CommonProjects() {
    const {id} = useParams();
    const {data} = servicesApi.useGetTopThemesProjectQuery(id);
  return (
   <>
        {
            data && (
                <section>
                    <div className='common-projects-background-image'>
<img src={data.backgroundImage} alt="" />
<div className="common-projects-overlay">
<h1>{data.backgroundImageText}</h1>
</div>
                </div>
                <div className="container">
                <div className="common-projects">
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.firstImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.firstImageTitle}</h4>
                        <p>{data.firstImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.secondImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.secondImageTitle}</h4>
                        <p>{data.secondImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.thirdImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.thirdImageTitle}</h4>
                        <p>{data.thirdImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.fourthImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.fourthImageTitle}</h4>
                        <p>{data.fourthImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.fifthImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.fifthImageTitle}</h4>
                        <p>{data.fifthImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.sixthImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.sixthImageTitle}</h4>
                        <p>{data.sixthImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.seventhImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.seventhImageTitle}</h4>
                        <p>{data.seventhImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.eighthImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.eighthImageTitle}</h4>
                        <p>{data.eighthImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.ninthImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.ninthImageTitle}</h4>
                        <p>{data.ninthImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                    <div className="common-project-box">
                    <div className="common-project-box-image">
                        <img src={data.tenthImage} alt="" />
                    </div>
                    <div className="common-project-box-content">
                        <h4>{data.tenthImageTitle}</h4>
                        <p>{data.tenthImageText}</p>
                        <button>Donate</button>
                    </div>
                    </div>
                </div>
                </div>
                <Footer/>
                </section>
            )
        }
   </>
  )
}

export default CommonProjects;