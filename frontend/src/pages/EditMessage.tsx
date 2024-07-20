import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import { useSnackbar } from "notistack"

const EditMessage = () => {
  const [message, setMessage] = useState("")
  const [user, setUser] = useState("")
  const [errorUser, setErrorUser] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const { id } = useParams()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const navigate = useNavigate()

  function handleUpdateMessage() {
    const data = { message, user }
    axios
      .put(`http://localhost:5555/messages/${id}`, data)
      .then(() => {
        navigate("/")
        closeSnackbar()
        enqueueSnackbar("Message edited successfully!", { variant: "success" })
      })
      .catch((error) => {
        console.log(error)
        enqueueSnackbar("Error occured, please check messages!", {
          variant: "error",
        })
        if (user === "") {
          setErrorUser(true)
        } else if (message === "") {
          setErrorMessage(true)
        }
      })
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5555/messages/${id}`)
      .then((response) => {
        setMessage(response.data.message)
        setUser(response.data.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="flex justify-center items-center my-28">
      <div className="flex flex-col justify-evenly items-center p-2 m-2 border-4 border-solid border-sky-800 rounded-lg h-[500px] w-[500px]">
        <h1 className="font-bold text-2xl p-2">Message Preview</h1>
        <div className="flex flex-col justify-center items-center">
          <h3>User</h3>
          <p className="p-2 m-2 h-[40px] min-w-[100px] text-center bg-white rounded-2xl">
            {user}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3>Message</h3>
          <p className="p-2 m-2 h-[250px] w-[350px] text-center inline break-words bg-white rounded-2xl">
            {message}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center p-2 m-2 rounded-lg border-4 border-solid border-sky-800 h-[550px] w-[600px]">
        <BackButton />
        <h1 className="font-extrabold text-3xl mx-5">Edit your message!</h1>
        <div className="p-1 m-1 flex flex-col justify-center items-center gap-2">
          <label htmlFor="user">Please enter your name.</label>
          <input
            className="border-solid border-2 p-1 rounded-md w-[300px]"
            maxLength={20}
            required
            name="user"
            id="user"
            type="text"
            value={user}
            onChange={(e) => {
              setUser(e.target.value)
              setErrorUser(false)
            }}
          />
          {errorUser ? (
            <h2 className="bg-red-300 p-1 rounded-md min-h-[33px] min-w-[300px]">
              Error: Please enter a name.
            </h2>
          ) : (
            <div className="bg-inherit p-1 rounded-md min-h-[33px] min-w-[300px]"></div>
          )}
        </div>
        <div className="p-1 m-1 flex flex-col justify-center items-center gap-2">
          <label htmlFor="message">Please enter your message.</label>
          <textarea
            className="p-1 m-1 border-solid border-2 resize-none rounded-md h-[150px] w-[450px]"
            required
            name="message"
            id="message"
            placeholder="Enter your message..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setErrorMessage(false)
            }}
            maxLength={200}
          />
          {errorMessage ? (
            <h2 className="bg-red-300 p-1 rounded-md min-h-[33px] min-w-[300px]">
              Error: Please enter a message.
            </h2>
          ) : (
            <div className="bg-inherit p-1 rounded-md min-h-[33px] min-w-[300px]"></div>
          )}
        </div>

        <button
          onClick={handleUpdateMessage}
          className="min-w-20 hover:border-green-700 hover:shadow-md flex p-2 border-2 border-green-500 rounded-3xl text-white bg-green-500 transition ease-in-out delay-100"
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default EditMessage
