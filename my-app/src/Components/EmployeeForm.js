import React, { useState } from 'react';
import EmployeeServiceCreate from '../Services/EmployeeServiceCreate';
import EmployeeServiceUpdate from '../Services/EmployeeServiceUpdate';

function EmployeeForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const employeeData = {
      id:id,
      first_name: firstName,
      last_name: lastName,
      department: department
    };

    if (id) {
      // Call the update service with the ID and employeeData
      EmployeeServiceUpdate.updateEmployee(employeeData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    } else {
      EmployeeServiceCreate.createEmployee(employeeData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }

    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <label>
        Department:
        <input type="text" value={department} onChange={e => setDepartment(e.target.value)} />
      </label>
      <label>
        ID (to update):
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default EmployeeForm;
