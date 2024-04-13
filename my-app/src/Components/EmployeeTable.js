// components/EmployeeTable.js

import React, { useEffect, useState } from 'react';
import EmployeeService from '../Services/EmployeeService';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees()
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Department</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.first_name}</td>
            <td>{employee.last_name}</td>
            <td>{employee.department}</td>
            {/* Add more cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;