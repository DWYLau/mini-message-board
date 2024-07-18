import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CreateMessageForm from "../components/CreateMessageForm"
import axios from "axios"

const CreateMessage = () => {
  const [message, setMessage] = useState("")
  const [user, setUser] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const [errorUser, setErrorUser] = useState(false)
  const navigate = useNavigate()

  function handlePostMessage() {
    const data = { message, user }
    axios
      .post("http://localhost:5555/messages", data)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
        if (user === "") {
          setErrorUser(true)
        } else if (message === "") {
          setErrorMessage(true)
        }
      })
  }

  return (
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
  )
}

export default CreateMessage
