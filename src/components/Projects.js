import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const Projects = ({ projects }) => {
  const displayProjects = () => {
    if (!projects) {
      return <Spinner />;
    } else {
      return (
        <div className="project-list">
          {projects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              color="primary"
              // onClick={this.show(true)}
            >
              <p>{project.name}</p>
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="projects-box">
      <div className="title">
        <p className="heading-secondary">Przykładowe projekty</p>
        {displayProjects()}
      </div>
    </div>
  );
};

export default Projects;
