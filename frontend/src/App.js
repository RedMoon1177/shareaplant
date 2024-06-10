import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages and components
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from './pages/Login';
import { useAuthContext } from "./hooks/useAuthContext";


function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to="/login"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
