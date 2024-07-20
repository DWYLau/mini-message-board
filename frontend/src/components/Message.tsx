import { FaEdit } from "react-icons/fa"
import { FaMinusSquare } from "react-icons/fa"
import { Link } from "react-router-dom"

interface MessageProps {
  date: string
  message: string
  user: string
  id: string
  setFormMessage: React.Dispatch<React.SetStateAction<string>>
  setId: React.Dispatch<React.SetStateAction<string>>
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Message: React.FC<MessageProps> = ({
  date,
  message,
  user,
  id,
  setFormMessage,
  setId,
  setShowForm,
}) => {
  const formatDate = new Date(date)

  return (
    <div key={id} className="px-3 mx-6 my-3 border-l-4 border-sky-800">
      <h1 className="text-xl min-h-[30px] max-w-[1000px] break-words">
        {message}
      </h1>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">{user}</h1>
        <h3 className="mt-1">{formatDate.toLocaleString()}</h3>
        <div className="flex gap-2">
          <Link to={`/edit/${id}`}>
            <FaEdit className="text-xl cursor-pointer text-blue-700 hover:text-blue-400 transition ease-in-out delay-100" />
          </Link>

          <FaMinusSquare
            onClick={() => {
              setId(id)
              setShowForm(true)
              setFormMessage(message)
            }}
            className="text-xl cursor-pointer text-red-700 hover:text-red-400 transition ease-in-out delay-100"
          />
        </div>
      </div>
    </div>
  )
}

export default Message
