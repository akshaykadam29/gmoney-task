const Employee = require('./../models/employee');

exports.createEmployee = (req, res) => {
  console.log(req.userData.userId);
  const employee = new Employee({
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    creator: req.userData.userId
  });
  console.log(employee);
  employee.save().then(createdEmployee => {
    res.status(201).json({
      message: 'Employee created successfully!'
    });
  })
  .catch(error => {
    res.status(500).json({
      message: 'Creating post failed!'
    });
  });
};

exports.getAllEmployees = (req, res) => {
  Employee.find().then(result => {
    res.status(200).json({
      result
    });
  });
};
