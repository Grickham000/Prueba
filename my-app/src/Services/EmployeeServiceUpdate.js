import axios from 'axios'; 



class EmployeeServiceUpdate {
    static updateEmployee(employeeData) {
    var API_URL_update = 'http://127.0.0.1:8000/api/employees/update/';
    API_URL_update += employeeData.id;
      return axios.put(API_URL_update, employeeData);
    }
  }
  
  export default EmployeeServiceUpdate