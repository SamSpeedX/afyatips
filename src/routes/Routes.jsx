import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Inbox from '../pages/Inbox';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Comment from '../pages/Comment';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Root = () => {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login />} />
            <Route path="comment" element={<Comment />} />
            <Route path="profile" element={<Profile />} />
            <Route path="search" element={<Search />} />
            <Route path='inbox' element={<Inbox />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    )
}
export default Root;