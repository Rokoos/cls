import React, { Fragment } from "react";

const Project = ({ project }) => {
  const {
    name,
    address,
    phone,
    principal,
    supervision,
    projects,
    realization,
  } = project;

  const singleProject = () => {
    return (
      <Fragment>
        <div className="modal_box-row">
          <div className="left">
            <p>Czas realizacji: </p>
          </div>
          <div className="right">
            <p>{projects[0].date}</p>
          </div>
        </div>
        <div className="modal_box-row">
          <div className="left">
            <p>Powierzchnia: </p>
          </div>
          <div className="right">
            <p>
              {projects[0].area}m<sup>2</sup>
            </p>
          </div>
        </div>
      </Fragment>
    );
  };

  const multiProjects = () => (
    <div className="modal_box-row">
      <div className="left">
        <p>Projekty:</p>
      </div>
      <div className="right">
        {projects.map((project) => {
          return (
            <div key={project.id} className="project">
              <p>{project.company}</p>
              <p>{project.date}</p>
              <p>
                {project.area}m<sup>2</sup>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="modal_box">
      <h2>{name}</h2>
      <div className="modal_box-row">
        <div className="left">
          <p>Adres: </p>
        </div>
        <div className="right">
          <p>{address}</p>
        </div>
      </div>
      <div className="modal_box-row">
        <div className="left">
          <p>Zleceniodawca: </p>
        </div>
        <div className="right">
          <p>{principal}</p>
        </div>
      </div>
      {supervision && (
        <div className="modal_box-row">
          <div className="left">
            <p>Nadzór: </p>
          </div>
          <div className="right">
            <p>{supervision}</p>
          </div>
        </div>
      )}
      <div className="modal_box-row">
        <div className="left">
          <p>Telefon: </p>
        </div>
        <div className="right">
          <p>{phone}</p>
        </div>
      </div>

      {projects.length === 1 ? singleProject() : multiProjects()}

      <div className="modal_box-row">
        <div className="left">
          <p>Zakres realizacji: </p>
        </div>
        <div className="right">
          {realization.map((project, index) => {
            return (
              <ul key={index}>
                <li>{project}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
