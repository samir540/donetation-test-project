import React from "react";
import { servicesApi } from "../../../Service/apiService";
import { useParams } from "react-router-dom";
function ProjectDetails() {
  let { id } = useParams();
  const {
    data: project,
    error,
    isLoading,
  } = servicesApi.useGetProjectQuery(id);
  console.log(project);
  return (
    <section>
      {project && (
        <div>
          <img src={project.image} alt="" />
          <h3>{project.name}</h3>
          <h4>{project.title}</h4>
        </div>
      )}
    </section>
  );
}

export default ProjectDetails;
