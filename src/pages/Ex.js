import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from '../Main';
import SignIn from '../SignIn';

function App() {
  const [activeLink, setActiveLink] = useState('SignIn');

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => handleLinkClick('SignIn')} className={activeLink === 'SignIn' ? 'active' : ''}>Component 1</Link>
          </li>
          <li>
            <Link to="/Main" onClick={() => handleLinkClick('Main')} className={activeLink === 'Main' ? 'active' : ''}>Component 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
