import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./pages/main";
import Home from "./pages/home";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/meet/:id" element={<Main/>} />
        <Route path="/" element={<Home />} />
        <Route path="/auth/signup" element={<Signup/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}

export default App
