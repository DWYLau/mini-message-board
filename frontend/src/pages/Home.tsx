import Spinner from "../components/Spinner"
import Message from "../components/Message"
import { MessageType } from "../types/Message"
import axios from "axios"
import { useEffect, useState } from "react"
import { BsPlus } from "react-icons/bs"

const Home = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
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
  }, [])

  return (
    <div className="border-4 border-solid border-sky-800 h-[830px] w-[1100px] overflow-y-scroll scrollbar scrollbar-thumb-sky-100 scrollbar-track-sky-300">
      <header className="py-3 mx-10 m-2 flex justify-between items-center border-b-4 border-sky-800">
        <button className="hover:border-green-700 hover:shadow-md flex p-2 border-2 border-green-500 rounded-3xl text-white bg-green-500 transition ease-in-out delay-100">
          <BsPlus className="text-2xl" />
          New Message
        </button>
        <h1 className="text-3xl font-bold mr-80">Mini Message Board</h1>
      </header>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap flex-col p-2 m-2">
          {messages.map((item, index) => (
            <Message
              key={index}
              message={item.message}
              date={item.createdAt}
              user={item.user}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
