import React from 'react';
import logo from './logo.svg';
import './styles/SignIn.css';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/main");
  };

  return (
    <div className="signIn">
      <div className="container">
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='ID' />
          <input type="password" placeholder='PASSWORD' />
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
