import React, { useEffect, useState } from "react";
// import { LoginProps  } from "../models/types";
import "./login.css"
// import { useHistory } from "react-router-dom";


const Login = () => {
  // const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= 6;

    if (!isValidEmail) {
      setError('Invalid email');
    } else if (!isValidPassword) {
      setError('password must be at least 6 characters');
    } else {
      setError('');
    }
  }, [email, password]);

  const handleSubmit = (event:any) => {
    event.preventDefault();

    const isValidForm = error === '' && email !== '' && password !== '';

    if (isValidForm) {
      // Call your authentication function here
      console.log('Successful login!');
      alert('')
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login">
      <div className="header-login">Login Form</div>
      <form onSubmit={handleSubmit} className="body-login">
        <div className="item-login">
          <label className="label-login" htmlFor="email">Email:</label>
          <input
            className="input-login"
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email.."
          />
        </div>
        <div className="item-login">
          <label className="label-login" htmlFor="password">Password:</label>
          <input
            className="input-login"
            type="password"
            id="password"
            value={password}
            onChange={(event) =>setPassword(event.target.value)}
            placeholder="Your password.."
          />
        </div>
        {error && <p>{error}</p>}
        <button className="button-login" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
