import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateMessage from "./pages/CreateMessage"
import EditMessage from "./pages/EditMessage"
import ShowMessage from "./pages/ShowMessage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateMessage />} />
      <Route path="/edit/:id" element={<EditMessage />} />
      <Route path="/details/:id" element={<ShowMessage />} />
    </Routes>
  )
}

export default App
