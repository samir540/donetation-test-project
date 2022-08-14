import React from 'react'
import Footer from '../Companents/Footer/Footer'
import { servicesApi } from "../Service/apiService";
import TopThemesProjects from '../Companents/TopThemesProjects/TopThemesProjects';
function Projects() {
  const { data, error, isLoading } = servicesApi.useGetTopThemesProjectsQuery();
  console.log(data);
  return (
    <section>
           <div className="donate">
      <div className="donate-overlay">
        <h1>Layihələri Araşdırın</h1>
      </div>
     </div>
     <div className="container">
        <div className="companies">
          {
  data && data.map((a) => 
  <TopThemesProjects key={a.id} company={a}/>
  )
}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Projects