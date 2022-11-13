import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((eachTechnology) => <span key={eachTechnology}>{eachTechnology}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
