const express = require('express')
const data = express()
const cors = require('cors')


let port = 4000

const mongoose = require('mongoose')

//require addPost model
const Post = require('./Model/Add')
const { json } = require('body-parser')



const url = 'mongodb://localhost:27017/to-do'

mongoose.connect(url).then(() => {
    console.log("Successfully Conected to DataBase");
})

// middlewear
data.use(express.json())
data.use(express.urlencoded({ extended: false }))
data.use(cors())


// to get All the Tasks
data.get('/', async (req, res) => {
    //using mongodb method i.e find()
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        console.log(err);
    }

})

// to Add the new task to Database
data.post('/Add', async (req, res) => {

    let postData = new Post({
        Task: req.body.Task,


    })


    postData.save().then(() => {
        res.send({ message: "Task added Successfully" })
    }).catch((err) => {
        res.send({ message: "Error while adding Task" })
    })

})

// to get Single Task by using Id
data.get("/:id", async (req, res) => {
    try {
        const posts = await Post.findById(id)
        res.send(posts)
    } catch (err) {
        console.log(err);
    }
})


// To Delete the task by using Id
data.delete("/:id", (req, res) => {


    Post.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json(Post)
        })
})


// To Update the task by using Id
data.put("/update/:id", async (req, res) => {
    try {
        let data = Post.findByIdAndUpdate(req.params.id, { $set: req.body })
        console.log(data);
    } catch (err) {
        res.json(err)
    }
})


data.listen(port, () => {
    console.log(`server is running at port ${port}`);
})


















