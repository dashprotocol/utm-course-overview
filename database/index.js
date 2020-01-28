const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

let courseSchema = new mongoose.Schema({
  course: {
    course_name: String,
    sections: [{
      section_name: String,
      contents: [{
        content_title: String,
        content_length: Number,
        is_vid: Boolean,
        has_preview: Boolean,
        vid_img: String
      }]
    }]
  }
})