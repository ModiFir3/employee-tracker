const db = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

db.connect(function(err) {
    if (err) throw err;
    console.log('Connected to Database!');
    menu();
})

//view all departments, roles, employees
//add a department, role, employee, and update employee
const menu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee']
        }
    ])
    .then((answers) => {
        let { choice } = answers
        // console.log(answers)
        if (choice === 'View Departments') {
            viewDepartments()
        }
        else if (choice === 'View Roles') {
            viewRole()
        }
        else if (choice === 'View Employees') {
            viewEmployees()
        }
        else if (choice === 'Add Department') {

        }
        else if (choice === 'Add Role') {

        }
        else if (choice === 'Add Employee') {

        }
        else if (choice === 'Update Employees') {

        }
    })
    .catch((err) => {
        if (err) {
            console.log('error')
        } else {
            console.log('done')
        }
    });
}

const viewDepartments = () => {
    db.promise().query('SELECT * FROM department').then(([rows]) => {
        console.table(rows)
        menu()
    });
}

const viewRole = () => {
    db.promise().query('SELECT * FROM role').then(([rows]) => {
        console.table(rows)
        menu()
    });
}

const viewEmployees = () => {
    db.promise().query('SELECT * FROM employee').then(([rows]) => {
        console.table(rows)
        menu()
    });
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'deponame',
            message: 'Enter the name of your department!'
        }
    ])
}