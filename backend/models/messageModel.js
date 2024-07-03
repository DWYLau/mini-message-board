import mongoose from "mongoose"

const messageSchema = mongoose.Schema(
  {
    message: { type: String, required: true },
    user: { type: String, required: true },
  },
  { timestamps: true }
)

export const Message = mongoose.model("Message", messageSchema)
