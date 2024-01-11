import React, { Component } from 'react';

class LoginRegister extends Component {
 constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      formError: false,
    };
 }

 handleCheckboxChange = (e) => {
    this.setState({ isLogin: e.target.checked });
 };

 validateForm = (email, password) => {
    if (email.trim() === '' || password.trim() === '') {
      this.setState({ formError: true });
      return false;
    }
    this.setState({ formError: false });
    return true;
 };

 handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pswd.value;
    if (this.validateForm(email, password)) {
      // Submit the form
    }
 };

 render() {
    const { isLogin, formError } = this.state;

    return (
      <div className="main">
        <input id="chk" type="checkbox" onChange={this.handleCheckboxChange} />

        <div id="login" className={isLogin ? 'login' : 'login active'}>
          <form className="form" onSubmit={this.handleFormSubmit}>
            <label htmlFor="chk">Log in</label>
            <input className="input" type="email" name="email" placeholder="Email" required />
            <input className="input" type="password" name="pswd" placeholder="Password" required />
            {formError && <p>Error: Please fill in all the fields.</p>}
            <button>Log in</button>
          </form>
        </div>

        <div id="register" className={isLogin ? 'register' : 'register active'}>
          <form className="form" onSubmit={this.handleFormSubmit}>
            <label htmlFor="chk">Register</label>
            <input className="input" type="text" name="txt" placeholder="Username" required />
            <input className="input" type="email" name="email" placeholder="Email" required />
            <input className="input" type="password" name="pswd" placeholder="Password" required />
            {formError && <p>Error: Please fill in all the fields.</p>}
            <button>Register</button>
          </form>
        </div>
      </div>
    );
 }
}

export default LoginRegister;