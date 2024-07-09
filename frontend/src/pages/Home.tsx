import Spinner from "../components/Spinner"
import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
  const [messages, setMessages] = useState([])
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
    <div className="border-4 border-solid border-sky-800 h-[700px] w-[1100px]">
      <header className="py-3 mx-10 m-2 flex justify-between items-center border-b-4 border-sky-800">
        <button className="p-2 border-2 border-green-500 rounded-3xl text-white bg-green-500">
          New Message
        </button>
        <h1 className="text-3xl font-bold mr-80">Mini Message Board</h1>
      </header>
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-2 m-2">
          {messages.map((item, index) => (
            <div key={index}>
              <h1>{item.message}</h1>
              <h1>{item.user}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
