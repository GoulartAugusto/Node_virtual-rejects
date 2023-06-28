const mongoose = require("mongoose")

const NewEventSchema = new mongoose.Schema(
    {
        thumbnail: String,
        eventTitle: String,
        eventTime: String
    },
    {
        collection: "newEvent"
    }
)

mongoose.model("newEvent", NewEventSchema)