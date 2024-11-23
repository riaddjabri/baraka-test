import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Header from "./components/Header";
import { useDispatch } from 'react-redux';
import {checkAuth} from "./store/AuthSlice";
import withAuth from "./utils/withAuth";

const ProtectedTasks = withAuth(Tasks);


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

  return (
      <Router>
          <Header></Header>
          <div className='bg-[#191919] flex flex-col md:items-center h-full pt-24'>
              <div className='h-full w-full'>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/tasks" element={<ProtectedTasks/>}/>
              </Routes>
              </div>
          </div>
      </Router>
)
    ;
}

export default App;
