const mongoose = require('mongoose');

const Connect = (url) =>{
    return mongoose.connect(url);
};
// const schema = mongoose.Schema
module.exports = Connect;