const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const Sudents = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    }
    // add in geo location
});

// small letter studens will be collection name into data base
const StudentData = mongoose.model('studens', Sudents);

// export this module then other file will be able to use it and store data -
module.exports = StudentData;