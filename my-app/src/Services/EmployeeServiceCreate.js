import axios from 'axios'; 

const API_URL_create = 'http://127.0.0.1:8000/api/employees/create/';

class EmployeeServiceCreate {
    static createEmployee(employeeData) {
      return axios.post(API_URL_create, employeeData);
    }
  }
  
  export default EmployeeServiceCreate