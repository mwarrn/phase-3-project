import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import { useParams } from "react-router-dom";

function EmployeeContainer() {
  const { id } = useParams();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/employees")
      .then((res) => res.json())
      .then((res) => {
        setEmployees(res.filter((employee) => employee.workzone_id === +id));
      });
  }, []);


  return (
    <main>
      <ul className="employees">
        {employees.map((employee, index) => (
          <li key={index}>
            <EmployeeCard key={employee.id} employee={employee} />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default EmployeeContainer;