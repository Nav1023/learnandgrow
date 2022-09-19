const Course  = require('../../models/Course');

const courseController = {
  createCourse: async (req, res) => {
    try{
      res.status(200).send({
        status: true,
        message: "Course Created Successfully",
      });
    } catch(err){
      res.status(400).send({
        status: false,
        message: "Error: " + err.message,
      });
    }
  },
  updateCourse: async (req, res) => {
    try{
      
      res.status(200).send({
        status: true,
        message: "Course Updated Successfully",
      });
    } catch(err){
      res.status(400).send({
        status: false,
        message: "Error: " + err.message,
      });
    }
  }
}

module.exports = courseController;