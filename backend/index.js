import express from "express"
import { PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"

const app = express()

// middleware

app.use(express.json())

// index page (/)
app.get("/", (request, response) => {
  console.log(request)
  return response.status(234).send("Mini Message Board Backend Server")
})

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
