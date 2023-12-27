import React from 'react';
import './LoginSignup.css';

const LoginSignup = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the email and password state variables here for form submission or validation
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="login">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">Log in</label>
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button>Log in</button>
        </form>
      </div>

      <div className="register">
        <form className="form">
          <label htmlFor="chk" aria-hidden="true">Register</label>
          <input className="input" type="text" name="txt" placeholder="Username" required />
          <input className="input" type="email" name="email" placeholder="Email" required />
          <input className="input" type="password" name="pswd" placeholder="Password" required />
          <button>Register</button>
        </form>
      </div>
    </div>
  );

};

export default LoginSignup;
