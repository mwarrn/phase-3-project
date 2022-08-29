import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    workzone_id: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee((prevEmployee) => {
      return {
        ...prevEmployee,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ employee });
    fetch("http://localhost:9292/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...employee,
        workzone_id: +employee.workzone_id,
      }),
    })
    .then((res) => res.json());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="employee_name">
        <Form.Label>Employee login</Form.Label>
        <Form.Control
          type="text"
          name="employee_name"
          value={employee.employee_name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="workzone_id">
        <Form.Label>Workzone</Form.Label>
        <Form.Control
          type="text"
          name="workzone_id"
          value={employee.workzone_id}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddEmployee;