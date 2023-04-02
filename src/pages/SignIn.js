import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/SignIn.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Main from './Main'

function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <div className="signIn">
      <div className="container">
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder='ID' />
          <input type="password" placeholder='PASSWORD' />
          <button type="submit" >LOG IN</button>
        </form>
      </div>
      {/* <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<SignIn/>}/>
      </Routes> */}
    </div>
    
  );
}

export default SignIn;