import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Books } from "./pages/Books";
import { AddBooks } from "./pages/AddBooks";
import { MyBooks } from "./pages/MyBooks";
import { Transactions } from "./pages/Transactions";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBooks />} />
          <Route path="/mybooks" element={<MyBooks/>} />
          <Route path="transaction" element={<Transactions/>} />
          <Route path="/profile" element={<Profile/>}/>

          {/* <Route path="/" element={<Login />}
          <Route path="/dashboard" element={<DashBoard />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
