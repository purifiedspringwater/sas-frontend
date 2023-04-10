import React , {useState} from 'react';
import logo from '../assets/logo.svg';
import '../styles/SignIn.css';

function SignIn() {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ID, password }),
      });
      if (/*response.ok*/ !response.ok) {
        // authentication succeeded, redirect to dashboard or another page
        if (ID === '1') {
          window.location.href = '/student';
        }
        else if (ID === '2') {
          window.location.href = '/admin';
        }
      } else {
        // authentication failed, display error message
        setError('Invalid ID or password');
      }
    } catch (error) {
      console.error('Error during login', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="signIn">
      <div className="container">
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input type="text" placeholder='ID' value={ID} onChange={(e) => setID(e.target.value)} />
          <input type="password" placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" >LOG IN</button>
        </form>
      </div>
    </div>

  );
}

export default SignIn;