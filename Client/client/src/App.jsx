import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import các thành phần từ react-router-dom
import Login from './Login';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Điều hướng giữa các trang */}
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/create-account">Create Account</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
