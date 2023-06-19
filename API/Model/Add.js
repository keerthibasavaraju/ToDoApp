const mongoose=require('mongoose')

// Model for database
const postSchema=mongoose.Schema({
    Task:{
        type:String,
        required :true
    }


})

module.exports=mongoose.model('Post',postSchema)