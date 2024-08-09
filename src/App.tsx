import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Loading from "./components/Loading";
import Header from "./components/layout/header";
import Main from "./components/Main";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-[#f3e2e5] flex flex-col items-center justify-center overflow-y-hidden">
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
