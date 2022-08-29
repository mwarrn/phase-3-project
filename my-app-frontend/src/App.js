import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WorkzoneContainer from "./components/WorkzoneContainer";
import EmployeeContainer from "./components/EmployeeContainer";
import AddEmployee from "./components/AddEmployee";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [workzones, setWorkzones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/workzones")
      .then((res) => res.json())
      .then((res) => { setWorkzones(res); });
  }, []);

  return (
    <div className="container">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/workzones" />} />
          <Route
            path="/workzones"
            element={<WorkzoneContainer workzones={workzones} />}
          />
          <Route path="/workzones/:id/employees" element={<EmployeeContainer />} />
          <Route path="/addemployees" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
