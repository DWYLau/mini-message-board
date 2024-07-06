import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateMessage from "./pages/CreateMessage"
import DeleteMessage from "./pages/DeleteMessage"
import EditMessage from "./pages/EditMessage"
import ShowMessage from "./pages/ShowMessage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages/create" element={<CreateMessage />} />
      <Route path="/messages/delete/:id" element={<DeleteMessage />} />
      <Route path="/messages/edit/:id" element={<EditMessage />} />
      <Route path="/messages/details/:id" element={<ShowMessage />} />
    </Routes>
  )
}

export default App
