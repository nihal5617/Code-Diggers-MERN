import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import Signup2 from './pages/Signup2';
import Networks from './pages/Networks';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path='/signup2' element={<Signup2 />} />
          <Route path='/network' element={<Networks />} />
        </Routes>
      </Router>
  );
}

export default App;