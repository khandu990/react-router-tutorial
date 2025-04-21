import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// onLogin is a prop passed from the parent
export default function Signup({ onLogin }) {
  const [form, setForm] = useState({
    fullname: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleCharge = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = form;

    if (username && password) {
      localStorage.setItem('username', username);
      onLogin();
      navigate('/dashboard');
    }
  };

  return (
    <div className='card'>
      <h1>Sign Up</h1>
      <p>Enter any fullname, username, and password to simulate a sign up</p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleCharge}
            placeholder="Fullname"
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleCharge}
            placeholder="Username"
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleCharge}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
