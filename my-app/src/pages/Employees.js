// pages/Employees.js

import React from 'react';
import EmployeeTable from '../Components/EmployeeTable';
import EmployeeForm from '../Components/EmployeeForm';

function Employees() {
  return (
    <div>
      <h1>Employees</h1>
      <EmployeeTable />
      <EmployeeForm />

    </div>
  );
}

export default Employees;