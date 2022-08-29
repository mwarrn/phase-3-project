import React from "react";
import WorkzoneCard from "./WorkzoneCard";
import { Link } from "react-router-dom";

function WorkzoneContainer({ workzones }) {
  return (
    <main>
      <h1>Labor Management Tracker</h1>
      <h2>Workzones</h2>
      <ul className="workzones">
        {workzones.map((workzone, id) => (
          <Link to={`${workzone.id}/employees`} key={id}>
            <li>
              <WorkzoneCard key={workzone.id} workzone={workzone} />{" "}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}

export default WorkzoneContainer;