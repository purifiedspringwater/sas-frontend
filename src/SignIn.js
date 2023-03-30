import React from 'react';
import logo from './logo.svg';
import './styles/SignIn.css';

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: '',
      password: ''
    };
  }

  handleIDChange = (event) => {
    this.setState({ ID: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    switch (this.state.ID) {
      case '200107119':
        
        break;
    
      default:
        break;
    }
}

  render() {
    return (
      <div className="sign-in-page">
        <img src={logo} alt="Logo" />
        <form onSubmit={this.handleSubmit}>
          <input type="email" placeholder='ID' value={this.state.ID} onChange={this.handleIDChange} />
          <input type="password" placeholder='PASSWORD' value={this.state.password} onChange={this.handlePasswordChange} />
          <button type="submit">LOG IN</button>
        </form>
      </div>
    );
  }
}

export default SignInPage;
