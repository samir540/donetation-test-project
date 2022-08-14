import React from "react";
import { servicesApi } from "../../../../../Service/apiService";
import { useParams } from "react-router-dom";
import Footer from "../../../../Footer/Footer";
function OurStoryDetails() {
  const { id } = useParams();
  const { data } = servicesApi.useGetourStoriesDetailsQuery(id);
  console.log(data);
  return (
      <>
        {data && (
          <section>
            <div className="our-stories-details">
            <div className="container">
              <div className="base-part">
                <h1>{data.BaseTitle}</h1>
                <p>{data.BaseTitleText}</p>
              </div>
              <div className="first-part">
                <div className="first-part-text">
                  <h3>{data.FirstTitle}</h3>
                  <p>{data.FirstTitleText}</p>
                </div>
                <div className="first-part-image">
                  <img src={data.FirstImage} alt="" />
                </div>
              </div>
              <div className="second-part">
              <div className="second-part-image">
                <img src={data.SecondImage} alt="" />
              </div>
              <div className="second-part-text">
                <h3>{data.SecondTitle}</h3>
                <p>{data.SecondTitleText}</p>
              </div>
              </div>
              <div className="third-part">
                <div className="third-part-text">
                  <h3>{data.ThirdTitle}</h3>
                  <p>{data.ThirdTitleText}</p>
                </div>
                <div className="third-part-image">
                  <img src={data.ThirdImage} alt="" />
                </div>
              </div>
              <div className="fourth-part">
              <div className="fourth-part-image">
                <img src={data.FourthImage} alt="" />
              </div>
              <div className="fourth-part-text">
                <h3>{data.FourthTitle}</h3>
                <p>{data.FourthTitleText}</p>
              </div>
              </div>
              <div className="fifth-part">
                <div className="fifth-part-text">
                  <h3>{data.FifthTitle}</h3>
                  <p>{data.FifthTitleText}</p>
                </div>
                <div className="fifth-part-image">
                  <img src={data.FifthImage} alt="" />
                </div>
              </div>
              <div className="sixth-part">
              <div className="sixth-part-image">
                <img src={data.SixthImage} alt="" />
              </div>
              <div className="sixth-part-text">
                <h3>{data.SixthTitle}</h3>
                <p>{data.SixthTitleText}</p>
              </div>
              </div>
              <div className="seventh-part">
                <div className="seventh-part-text">
                  <h3>{data.SeventhTitle}</h3>
                  <p>{data.SeventhTitleText}</p>
                </div>
                <div className="seventh-part-image">
                  <img src={data.SeventhImage} alt="" />
                </div>
              </div>
              <div className="eighth-part">
              <div className="eighth-part-image">
                <img src={data.EighthImage} alt="" />
              </div>
              <div className="eighth-part-text">
                <h3>{data.EighthTitle}</h3>
                <p>{data.EighthTitleText}</p>
              </div>
              </div>
              <div className="ninth-part">
                <div className="ninth-part-text">
                  <h3>{data.NinthTitle}</h3>
                  <p>{data.SeventhTitleText}</p>
                </div>
                <div className="ninth-part-image">
                  <img src={data.NinthImage} alt="" />
                </div>
              </div>
              <div className="tenth-part">
              <div className="tenth-part-image">
                <img src={data.TenthImage} alt="" />
              </div>
              <div className="tenth-part-text">
                <h3>{data.TenthTitle}</h3>
                <p>{data.TenthTitleText}</p>
              </div>
              </div>
            </div>
            </div>
            <Footer/>
          </section>
        )}
      </>
  );
}

export default OurStoryDetails;
