import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import messagesRoute from "./routes/messagesRoute.js"
import cors from "cors"

const app = express()

// middleware

app.use(express.json())
app.use("/messages", messagesRoute)
app.use(
  cors({
    origin: "http://localhost:5555/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
)

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
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
