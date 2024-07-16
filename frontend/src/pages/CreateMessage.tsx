import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"
import axios from "axios"

const CreateMessage = () => {
  const [message, setMessage] = useState("")
  const [user, setUser] = useState("")
  const navigate = useNavigate()

  function postMessage() {
    const data = { message, user }
    axios
      .post("http://localhost:5555/messages", data)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="flex flex-col justify-evenly items-center p-2 m-2 rounded-lg border-4 border-solid border-sky-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px]">
      <div className="flex">
        <Link
          to={"/"}
          className="absolute bottom-[26.5rem] right-[33rem] min-w-12 hover:border-red-700 hover:shadow-md p-2 border-2 border-red-500 rounded-xl text-white bg-red-500 transition ease-in-out delay-100"
        >
          <BsArrowLeft className="text-2xl" />
        </Link>
      </div>
      <h1 className="font-extrabold text-3xl mx-5">Send a new message!</h1>
      <div className="p-1 m-1 flex flex-col justify-center items-center gap-2">
        <label htmlFor="user">Please enter your name.</label>
        <input
          className="border-solid border-2 rounded-md w-[300px]"
          name="user"
          id="user"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="p-1 m-1 flex flex-col justify-center items-center gap-2">
        <label htmlFor="message">Please enter your message.</label>
        <textarea
          className="border-solid border-2 resize-none rounded-md h-[200px] w-[450px]"
          name="message"
          id="message"
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={100}
        />
      </div>

      <button
        onClick={postMessage}
        className="min-w-20 hover:border-green-700 hover:shadow-md flex p-2 border-2 border-green-500 rounded-3xl text-white bg-green-500 transition ease-in-out delay-100"
      >
        Confirm
      </button>
    </div>
  )
}

export default CreateMessage
