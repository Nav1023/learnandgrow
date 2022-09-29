const Question  = require('../../models/Question');

const utiltiyFun = async (ids) => {
  const wrongIds = [];
  for(var i=0; i<ids.length; i++){
   const user = await Question.findById(ids[i].question);
   if(!user){
      wrongIds.push(ids[i].question);
   }
  }
  return  wrongIds;
}


const assessmentController = {
  createAssessment: async (req, res) => {
    try {
        const { title, description, negativeMarking , duration , questions } = req.body;
        const wrongIds = await utiltiyFun(questions);
          if(wrongIds.length > 1){
            // return error response
          return res.status(400).send({
              status: false,
              message: "Wrong question ids passed"
          });
        }
        const assessment = new Assessment({
            title,
            description,
            negativeMarking,
            duration,
            questions 
        })
        await assessment.save();
        res.status(200).send({
            status: true,
            message: "Assessment created successfully",
            data: assessment

        });

    } catch (error) {
        res.status(400).send({
            status: false,
            message: "Error:" + error.message
        });
    }

},
}

module.exports = assessmentController;