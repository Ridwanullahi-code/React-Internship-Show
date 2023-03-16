import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import Navbar from './Navbar';
import store from '../functions/storage';

function Register() {
  const { state } = useLocation();
  const { name } = state;
  const [user, setUser] = useState({});
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store(user);
    setRedirect(!redirect);
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 5000);
  };

  return (
    <section className="user_container">
      <Navbar />
      {redirect && <p className="success">Successfully Book Show</p>}
      <div className="Login v-flex">
        <form className="form_container" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <fieldset className="form_inputs">
            {name && <input onChange={handleChange} name="showName" className="input" type="text" readOnly value={name} />}
            <input onChange={handleChange} name="firstName" className="input" type="text" placeholder="First Name" required />
            <input onChange={handleChange} name="lastName" className="input" type="text" placeholder="Last Name" required />
            <input onChange={handleChange} name="email" className="input" type="email" placeholder="Email" required />
            <input onChange={handleChange} name="address" className="input" type="text" placeholder="Address" required />
            <button
              className="sign_btn"
              type="submit"
            >
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Register;
