import React from "react";
import { Button } from "react-bootstrap";

function EmployeeCard({ employee: { id, name } }) {
  const handleDelete = () => {
    fetch(`http://localhost:9292/employees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
  };

  return (
    <div>
      {name} {""}
      <Button variant="primary" className="delete-btn" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}

export default EmployeeCard;