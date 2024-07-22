import React, { useState, useContext, Link } from 'react';
import { AuthContext } from '../content/auth';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { login } = useContext(AuthContext);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
    </div>
  );
};