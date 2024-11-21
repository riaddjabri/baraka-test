import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Header from "./components/Header";

function App() {
  return (
      <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
      </Router>
  );
}

export default App;
