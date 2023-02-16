const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('./db/connection.js');


const mainMenu = async () => {
    try {
      const { action } = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      });
  
      switch (action) {
        case 'View all departments':
          await viewAllDepartments();
          break;
  
        case 'View all roles':
          await viewAllRoles();
          break;
  
        case 'View all employees':
          await viewAllEmployees();
          break;
  
        case 'Add a department':
          await addDepartment();
          break;
  
        case 'Add a role':
          await addRole();
          break;
  
        case 'Add an employee':
          await addEmployee();
          break;
  
        case 'Update an employee role':
          await updateEmployeeRole();
          break;
  
        case 'Exit':
          exit();
          break;
  
        default:
          console.log('Invalid option selected');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
mainMenu();


const viewAllDepartments = () => {

}

const viewAllRoles = () => {

}

const viewAllEmployees = () => {
    
}

const addDepartment = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

function updateEmployeeRole() {

};






const exit = () => {
    connection.end();
}