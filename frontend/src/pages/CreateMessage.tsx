import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CreateMessageForm from "../components/CreateMessageForm"
import axios from "axios"
import { useSnackbar } from "notistack"

const CreateMessage = () => {
  const [message, setMessage] = useState("")
  const [user, setUser] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const [errorUser, setErrorUser] = useState(false)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const navigate = useNavigate()

  function handlePostMessage() {
    const data = { message, user }
    axios
      .post("http://localhost:5555/messages", data)
      .then(() => {
        closeSnackbar()
        navigate("/")
        enqueueSnackbar("Message created successfully!", { variant: "success" })
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

  return (
    <div className="flex justify-center items-center my-28">
      <CreateMessageForm
        user={user}
        message={message}
        errorMessage={errorMessage}
        errorUser={errorUser}
        setMessage={setMessage}
        setUser={setUser}
        setErrorMessage={setErrorMessage}
        setErrorUser={setErrorUser}
        handlePostMessage={handlePostMessage}
      />
    </div>
  )
}

export default CreateMessage
