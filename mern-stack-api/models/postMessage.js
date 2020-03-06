const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessages',
{
    title : {type:String},
    message : {type:String},
},'postMessages')

module.exports = { PostMessage }