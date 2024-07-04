import express from "express"
import { Message } from "../models/messageModel.js"

const router = express.Router()

// /messages route

// get all messages
router.get("/", async (request, response) => {
  try {
    // find objects with the Message model and store them into messages
    const messages = await Message.find({})

    // return data in a JSON format
    return response
      .status(200)
      .json({ count: messages.length, messages: messages })
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

// get one message by finding it's id
router.get("/:id", async (request, response) => {
  try {
    // deconstruct id by getting it from URL parameters
    const { id } = request.params
    const message = await Message.findById(id)
    return response.status(200).json(message)
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

// post/create a new message
router.post("/", async (request, response) => {
  try {
    // if message and user are null, send a message to require all fields
    if (!request.body.message || !request.body.user) {
      return response
        .status(400)
        .send({ message: "Send all required fields: message, user" })
    }
    // else create a new object with message and user key-value pairs
    else {
      const newMessage = {
        message: request.body.message,
        user: request.body.user,
      }

      const message = await Message.create(newMessage)

      return response.status(201).send(message)
    }
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

// put/edit an existing message
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.message || !request.body.user) {
      return response
        .status(400)
        .send({ message: "Send all required fields: message, user" })
    } else {
      const { id } = request.params
      const updatedMessage = {
        message: request.body.message,
        user: request.body.user,
      }

      const result = await Message.findByIdAndUpdate(id, updatedMessage)

      if (!result) {
        return response.status(404).json({ message: "Message not found" })
      } else {
        return response
          .status(200)
          .send({ message: "Message updated successfully" })
      }
    }
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params

    const result = await Message.findByIdAndDelete(id)

    if (!result) {
      return response.status(404).json({ message: "Message not found" })
    } else {
      return response
        .status(200)
        .send({ message: "Message deleted successfully" })
    }
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

export default router
