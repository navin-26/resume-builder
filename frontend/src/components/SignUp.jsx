import React, { useState, useContext, Link } from 'react';
import { AuthContext } from '../content/auth';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { register } = useContext(AuthContext);

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={onChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <button type="submit">Signup</button>
        </form>
        <p>
            Already have an account? <Link to="/login">Log in</Link>
        </p>
    </div>
  );
};