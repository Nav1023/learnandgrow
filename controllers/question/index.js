const Question  = require('../../models/Question');

const questionController = {
  create: async (req, res) => {
    try {
      res.status(200).send({
        status: true,
        message: "Created question Successfully",
      });
    } catch (error) {
      res.status(400).send({
        status: false,
        message: "Error: " + err.message,
      });
    }
    
  },
}

module.exports = questionController;