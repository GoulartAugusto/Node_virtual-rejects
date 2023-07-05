const mongoose = require("mongoose")

const NewEventSchema = new mongoose.Schema(
    {
        thumbnail: String,
        eventTitle: String,
        eventTime: String,
        eventType: String,
        platform: String,
        description: String,
        eventLink: String
    },
    {
        collection: "newEvent"
    }
)

mongoose.model("newEvent", NewEventSchema)