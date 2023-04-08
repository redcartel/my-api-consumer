import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss'
import GetRoute from './route-components/GetRoute';
import HomeRoute from './route-components/HomeRoute';
import PostRoute from './route-components/PostRoute';
import LoginRoute from './route-components/LoginRoute';

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <Link to="/">Home</Link>
        <Link to="/get">GetRoute</Link>
        <Link to="/post/field">PostRoute</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <div className="mainWrap">
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          <Route path='/get' element={<GetRoute />} />
          <Route path='/post/:key' element={<PostRoute />} />
          <Route path='/login' element={<LoginRoute />} />
        </Routes>
      </div>
      <footer>
        &copy; Carter Adams 2023
      </footer>
    </div>
  );
}

export default App;
