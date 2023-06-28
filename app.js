const express = require("express")
const app = express()
const mongoose = require("mongoose")
//app.use(express.json())
const cors = require("cors")
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// the bodyParser and new express.json was made for larger upload file size
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json({ limit: '10mb' }));

const mongoURL = "mongodb+srv://goulartaugusto:VIRTUALREJECTS@cluster0.lbodtjj.mongodb.net/"

mongoose
.connect(mongoURL, {
    useNewUrlParser: true,
})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((e) => console.log(e))

require("./newEvent")

const Event = mongoose.model("newEvent")

app.post("/new-event", async(req, res) => {
    
    const { thumbnail, eventTitle, eventTime } = req.body

    try {
        await Event.create({
            thumbnail,
            eventTitle,
            eventTime,
        })
        .res.send({ status: "Look like a new event was created!" })
    } catch (error) {
        res.send({ status: "Something went wrong, try again..." })
    }
})

app.get("/getAllEvent", async(req, res) => {
    try {
        const allEvent = await Event.find({})
        res.send({ status: "ok", data: allEvent })
    } catch (error) {
        console.log(error)
    }
})

app.listen(5000, ()=>{
    console.log("Server started");
})