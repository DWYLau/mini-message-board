import { FaEdit } from "react-icons/fa"
import { FaMinusSquare } from "react-icons/fa"

interface MessageProps {
  date: string
  message: string
  user: string
  id: string
  setFormMessage: React.Dispatch<React.SetStateAction<string>>
  setDeleteId: React.Dispatch<React.SetStateAction<string>>
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Message: React.FC<MessageProps> = ({
  date,
  message,
  user,
  id,
  setFormMessage,
  setDeleteId,
  setShowForm,
}) => {
  function logId(string: string) {
    setDeleteId(string)
    console.log("ID is:", string)
  }

  const formatDate = new Date(date)

  return (
    <div key={id} className="px-3 mx-6 my-3 border-l-4 border-sky-800">
      <h1 className="text-xl">{message}</h1>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">{user}</h1>
        <h3 className="mt-1">{formatDate.toLocaleString()}</h3>
        <div className="flex gap-2">
          <FaEdit className="text-xl cursor-pointer text-blue-700 hover:text-blue-400 transition ease-in-out delay-100" />
          <FaMinusSquare
            onClick={() => {
              logId(id)
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
