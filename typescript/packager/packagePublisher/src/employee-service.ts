import { Employee } from ".";

export class EmployeeService{

    private employees : Employee[] = [];

    constructor(){
        this.employees.push({name: 'Sudipto', age: 32});
        this.employees.push({name: 'Tom', age: 31})
    }

    getAllEmployees() {
        return this.employees;
    }

    getEmployees = () : Employee[] => this.employees;
}