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

const Course = mongoose.model('Course', courseSchema);

sampleData = [];

for (let i = 0; i < 100; i++) {
  sampleData.push({
    course: {
      course_name: faker.company.bs(),
      sections: new Array(Math.floor(Math.random() * (15 - 5)) + 5).fill({
        section_name: faker.company.catchPhrase(),
        contents: [{
          content_title: faker.company.bs(),
          content_length: (Math.random() * 10),
          is_vid: faker.Boolean(),
          has_preview: faker.Boolean,
          vid_img: faker.image.imageUrl()
        }]
      })
    }
  })
}

Course.insertMany(sampleData);
