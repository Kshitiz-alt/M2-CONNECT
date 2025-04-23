import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // this command is used to get the data from local storage
  const handleLogin = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      alert('Login successful!');
      navigate('/mainpage');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://i.pinimg.com/originals/03/2c/24/032c24f7093fd3e7be650aa7baec7bec.gif')] bg-no-repeat bg-cover">
      <form onSubmit={handleLogin} className="bg-white/80 backdrop-blur-[3px] p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-[20em] py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-[20em] py-2 px-3"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
          Login
        </button>
        <button
          type="button"
          className="text-blue-500 hover:underline cursor-pointer ml-4"
          onClick={() => navigate('/')}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;