import React from "react";
import Footer from "../Companents/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import DonateProjects from "../Companents/DonateProjects/DonateProjects";
import { servicesApi } from "../Service/apiService";
import DonateStory from "../Companents/DonateStory/DonateStory";
import BasePartner from "../Companents/BasePartner/BasePartner";
function Home() {
  const { data: projects } = servicesApi.useGetProjectsQuery();
  const { data: stories } = servicesApi.useGetStoriesQuery();
  const { data: basepartners } = servicesApi.useGetBasePartnersQuery();
  AOS.init({
    duration: 1500,
    easing: "ease",
  });
  return (
    <section>
      <div className="contain">
        <div className="contain-overlay"></div>
        <div className="container">
          <div className="contain-content">
            <div className="contain-items">
              <div className="contain-heading">
                <h6>BİZİM XEYİRLİYƏ YANAŞIMIMIZ SADƏDIR</h6>
                <h1>
                  Afrikaya Davamlı Layihələrlə <br /> Dəstək.
                </h1>
                <p>
                  Afrika ağır vəziyyətdədir və bir çoxları iqtisadi <br />{" "}
                  mübarizələr səbəbindən ailələrini dolandıra bilmirlər.
                </p>
                <button onClick={() => (window.location = "/projects")}>
                  Sosyal Layihələr<i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="contain-onedonate-about">
              <div className="contain-onedonate-image">
                <img
                  src="https://ucarecdn.com/61879270-f970-423e-8f53-57c0d8ece6bd/-/resize/940x/-/format/auto/"
                  alt=""
                />
              </div>
              <div className="contain-onedonate-text">
                <i className="fa-brands fa-pagelines"></i>
                <span>Həyat Fondu</span>
                <h4>Həyat Fondu yoxsulluğa son qoymaq üçün hər gün çalışır.</h4>
                <p>
                  Amma biz sizsiz edə bilmərik. Siz bizə fəlakət zamanı
                  insanların həyatını xilas etmək, ən ucqar ərazilərə təmiz su
                  gətirmək, uşaqları, xüsusilə qızları məktəbə göndərmək və
                  qadınların hüquqlarını müdafiə etməkdə kömək edə bilərsiniz.
                </p>
                <div className="contain-onedonate-button">
                  <button onClick={() => (window.location = "/donate")}>
                    İanə Et
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        <div className="container">
          <div className="title-heading">
            <h5>BİZİM İŞİMİZ</h5>
            <h2>İnsanlar vasitəsilə layihələr</h2>
            <span>
              Proqramlarımız fərdlər və icmalar üçün gəlir əldə etməyə yönəlib.
              Biz <br /> müasir xeyriyyəçiliklə məşğul oluruq - tərəfdaşlıqlar
              vasitəsilə iqtisadi <br /> sabitlik yaratmaq üçün icmalar və
              sənətkarlarla işləyirik.
            </span>
          </div>
          <div className="title-button">
            <button onClick={() => (window.location = "/about")}>
              Bizim Hekayəmiz
            </button>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-content">
          {stories && stories.map((a) => <DonateStory key={a.id} story={a} />)}
        </div>
      </div>

      <div className="head">
        <div className="head-content">
          {projects &&
            projects.map((a) => <DonateProjects key={a.id} project={a} />)}
        </div>
      </div>
      <div className="common">
        <div className="container">
          <div className="common-content">
            <div className="common-heading">
              <h1>Tərəfdaşlarımız</h1>
              <p>
                Tərəfdaşlarımızın sarsılmaz öhdəliyi və əvəzsiz <br /> dəstəyi
                proqramlarımızın uğurunu təmin edən və bizi hər gün ruhlandıran
                şeydir.
              </p>
            </div>
            <div className="common-partners">
              {basepartners &&
                basepartners.map((a) => <BasePartner key={a.id} partner={a} />)}
            </div>
            <div className="common-button">
              <button onClick={() => (window.location = "/partners")}>
                Tərəfdaşlar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="object">
        <div className="container">
          <div className="object-content">
            <h1>
              Hər kəsə kömək edə bilmərik, amma hamı kiməsə kömək edə bilər{" "}
            </h1>
            <button onClick={() => (window.location = "/donate")}>
              İanə Et
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
export default Home;
