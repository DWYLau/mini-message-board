import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import messagesRoute from "./routes/messagesRoute.js"
import cors from "cors"

const app = express()
const port = PORT || 4000

// middleware
app.use(cors())
app.use(express.json())
app.use("/messages", messagesRoute)

// index page (/)
app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("Mini Message Board Backend Server")
})

// connect to MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to MongoDB")
    app.listen(port, () => {
      console.log(`App is listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
