import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CreateMessageForm from "../components/CreateMessageForm"

const EditMessage = () => {
  const [message, setMessage] = useState("")
  const [user, setUser] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()

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
    <div className="flex gap-4">
      <div className="border-4 border-solid border-sky-800 rounded-lg h-[300px] w-[400px]">
        <h1>Current Message</h1>
        <p>{message}</p>
        <h1>Current User</h1>
        <p>{user}</p>
      </div>
      <div>Section 2</div>
    </div>
  )
}

export default EditMessage
