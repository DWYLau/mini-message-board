import Spinner from "../components/Spinner"
import Message from "../components/Message"
import { MessageType } from "../types/Message"
import axios from "axios"
import { useEffect, useState } from "react"
import { BsPlus } from "react-icons/bs"
import DeleteForm from "../components/DeleteForm"
import { Link } from "react-router-dom"

const Home = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formMessage, setFormMessage] = useState("")
  const [deleteId, setDeleteId] = useState("")

  // function delete message - use Delete ID as part of URL

  function getMessages() {
    setLoading(true)
    axios
      .get("http://localhost:5555/messages")
      .then((response) => {
        setMessages(response.data.messages)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  function deleteMessage() {
    axios
      .delete(`http://localhost:5555/messages/${deleteId}`)
      .then(() => {
        setShowForm(false)
        getMessages()
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    setLoading(true)
    getMessages()
  }, [])

  return (
    <div className="rounded-lg border-4 border-solid border-sky-800 h-[830px] w-[1100px] overflow-y-scroll scrollbar scrollbar-thumb-sky-100 scrollbar-track-sky-300">
      <header className="py-3 mx-10 m-2 flex justify-between items-center border-b-4 border-sky-800">
        <Link
          to={"/create"}
          className="hover:border-green-700 hover:shadow-md flex p-2 border-2 border-green-500 rounded-3xl text-white bg-green-500 transition ease-in-out delay-100"
        >
          <BsPlus className="text-2xl" />
          New Message
        </Link>
        <h1 className="text-3xl font-bold mr-80">Mini Message Board</h1>
      </header>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap flex-col p-2 m-2">
          {messages.map((item) => (
            <Message
              key={item._id}
              message={item.message}
              date={item.createdAt}
              user={item.user}
              id={item._id}
              setFormMessage={setFormMessage}
              setDeleteId={setDeleteId}
              setShowForm={setShowForm}
            />
          ))}
          {showForm ? (
            <DeleteForm
              message={formMessage}
              deleteMessage={deleteMessage}
              setShowForm={setShowForm}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  )
}

export default Home
