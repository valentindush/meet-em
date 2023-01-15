import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./pages/main";
import Home from "./pages/home";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import { AuthProvider } from "./hooks/auth";
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/meet/:id" element={<Main/>} />
          <Route path="/" element={<Home />} />
          <Route path="/auth/signup" element={<Signup/>} />
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
