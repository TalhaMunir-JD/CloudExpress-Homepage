import React from "react";
import './MyProject.css'

const MyProject = () => {
  return (
    <div>
        <div className="div-style">
            <h2 className="first-heading">
                My Project
            </h2>
            <p className="paragraph">
              Add a project to view its graph visualization in AGEViewer.
            </p>
        </div>
          <h2 className="mid-heading">
            AgensGraph Database Project
          </h2>
        <div className="project-table">
        <table className="project-details">
          <tr>
            <th className="column-title">Date created</th>
            <th className="column-title">Project name</th>
            <th className="column-title">Days left for use</th>
          </tr>
          <tr className="second-row">
            <th className="column-title"> - </th>
            <th className="column-title"> - </th>
            <th className="column-title"> - </th>
            <th>
            <div>
              <button className="move-button">Go to ageviewer</button>
            </div>
            </th>
          </tr>
        </table>
        </div>
    </div>
  );
}

export default MyProject;