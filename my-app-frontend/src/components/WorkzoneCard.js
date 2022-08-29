import React from "react";

function WorkzoneCard({ workzone: { id, name, } }) {
  return (
    <div>
      Workzone: {name} (ID: {id})
    </div>
  );
}

export default WorkzoneCard;