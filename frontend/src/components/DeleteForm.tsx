interface DeleteFormProps {
  message: string
  deleteMessage: () => void
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteForm: React.FC<DeleteFormProps> = ({
  message,
  deleteMessage,
  setShowForm,
}) => {
  return (
    <div className="flex flex-col justify-evenly items-center p-2 m-2 rounded-lg border-4 border-solid border-sky-800 bg-sky-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[350px] w-[500px] z-50">
      <h1 className="text-center font-bold">
        Are you sure you would like to delete the following message?
      </h1>
      <div className="bg-white h-[200px] w-[350px] overflow-hidden p-5 m-2 rounded-2xl">
        <p className="text-center inline break-words m-2">{message}</p>
      </div>
      <div className="flex gap-5">
        <button
          onClick={deleteMessage}
          className="min-w-20 hover:border-green-700 hover:shadow-md flex p-2 border-2 border-green-500 rounded-3xl text-white bg-green-500 transition ease-in-out delay-100"
        >
          Confirm
        </button>
        <button
          onClick={() => setShowForm(false)}
          className="justify-center min-w-20 hover:border-red-700 hover:shadow-md flex p-2 border-2 border-red-500 rounded-3xl text-white bg-red-500 transition ease-in-out delay-100"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default DeleteForm
