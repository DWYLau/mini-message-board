import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"

const BackButton = () => {
  return (
    <Link
      to={"/"}
      className="absolute bottom-[24rem] right-[33rem] min-w-12 hover:border-red-700 hover:shadow-md p-2 border-2 border-red-500 rounded-xl text-white bg-red-500 transition ease-in-out delay-100"
    >
      <BsArrowLeft className="text-2xl" />
    </Link>
  )
}

export default BackButton
