const express = require('express');
const checkAuth = require('./../middleware/check-auth');

const employeeController = require('./../controller/employees');

const router = express.Router();

// Add employee
router.post('', checkAuth, employeeController.createEmployee);

// Get All Employees
router.get('', employeeController.getAllEmployees);

module.exports = router;

