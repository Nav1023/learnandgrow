const Course  = require('../../models/Course');

const courseController = {
  createCourse: async (req, res) => {
    try{
      const { title, description, price, discount} = req.body;
      const course = new Course({
        title,
        description,
        price, 
        discount
      });

      await course.save();

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
  },
  fetchAllCourses: async (req, res) => {
    try{

      // const courses = await Course.find({}).select(['-videos']);  // deselect any key
       // const courses = await Course.find({}).select(['videos', 'title']); // select only these keys
        const courses = await Course.find({});
      res.status(200).send({
        status: true,
        message: "Course fetched Successfully",
        data: courses
      });
    } catch(err){
      res.status(400).send({
        status: false,
        message: "Error: " + err.message,
      });
    }
  },
  addInstructor: async (req, res) => {
    try{
      const { name, social, experience} = req.body;
      const { courseId } = req.params;
      const course = await Course.findById(courseId);

      const newInstructor = {
        name,
        social,
        experience
      }

      course.instructor.push(newInstructor);
      await course.save();

      res.status(200).send({
        status: true,
        message: "Instructor added Successfully",
      });
    } catch(err){
      res.status(400).send({
        status: false,
        message: "Error: " + err.message,
      });
    }
  },
  updateInstructor: async (req, res) => {
    try{
      const { name, social, experience} = req.body;
      const { courseId, id } = req.params;
      const course = await Course.findById(courseId);

      /**
       * 1. find the instructor with the help of id
       * 2. update that position with the new value of name, social, experience
       * 3. Save it
       */

      await course.save();

      res.status(200).send({
        status: true,
        message: "Instructor added Successfully",
        courseId,
        id
      });
    } catch(err){
      res.status(400).send({
        status: false,
        message: "Error: " + err.message,
      });
    }
  },
  addVideo: async (req, res) => {
    try{
      const { title, url, description} = req.body;
      const { courseId } = req.params;
      const course = await Course.findById(courseId);

      const newVideo = {
        title,
        url,
        description
      }

      course.videos.push(newVideo);
      await course.save();

      res.status(200).send({
        status: true,
        message: "Video added Successfully",
      });
    } catch(err){
      res.status(400).send({
        status: false,
        message: "Error: " + err.message,
      });
    }
  },
  updateVideo: async (req, res) => {
    try{
      const { title, url, description, videoId} = req.body;
      const { courseId, id } = req.params;
      const course = await Course.findById(courseId);
     // console.log(course);
      if(!course){
        return res.status(400).send({
          status: false,
          message: "Course doesn't exist",
        });
      }

      await Course.findOneAndUpdate(
        {
          _id: courseId, "videos._id": id
        },
        {
          $set: {
            "videos.$.title": title,
            "videos.$.url": url,
            "videos.$.description": description,
          }
        },
        {
          upsert: false,
          runValidators: true
        }
      )
      /**
       * 1. find the video with the help of id
       * 2. update that position with the new value of name, social, experience
       * 3. Save it
       * 
       * 
       *  
       */

      // course.videos.forEach((video, index) => {

      //   console.log(video._id.toString(), id.toString());

      //   if(video._id.toString() == id){
      //     console.log(video);
      //     video.title = title,
      //     video.description = description
      //     video.url = url       
      //   }
      // });

      // await course.save();

      res.status(200).send({
        status: true,
        message: "Video Updated Successfully",
        courseId,
        id
      });
    } catch(err){
      res.status(400).send({
        status: false,
        message: "Error: " + err.message,
      });
    }
  },
}

module.exports = courseController;


// $set
// 
/**
 *  updateOne(
 *  {_id: courseId, videos._id: id},
 *  {
 *  $set:
 *      {
 *        videos.$.title: "title"
 *      }
 *  }
 * )
 */

 /**
  *  $set:{
  *     videos: {req.body}
  *   }
  */