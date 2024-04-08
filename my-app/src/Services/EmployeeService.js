// services/EmployeeService.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/employees'; // replace with your API URL


class EmployeeService {
  static getEmployees() {
    return axios.get(API_URL);
  }
}

export default EmployeeService



