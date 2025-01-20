const mongoose = require('mongoose');

const Connect = (String) =>{
    return mongoose.connect(String);
};
// const schema = mongoose.Schema
module.exports = Connect;