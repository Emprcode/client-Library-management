import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />

          {/* <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
