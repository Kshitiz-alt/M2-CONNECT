import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    //To prevent the default behavior of the form submission
    if (!username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    //To get the data from local storage 
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    //To check if data already exists in local storage
    const userExists = existingUsers.find(user => user.username === username || user.email === email); 
    if (userExists) {
      setError('User with this username or email already exists');
      return;
    }
    //To store the data in local storage
    existingUsers.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(existingUsers));
    setUsername('');
    setEmail('');
    setPassword('');
    setError('');
    alert('Signup successful! You can now log in.');
    navigate('/login'); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://i.pinimg.com/originals/03/2c/24/032c24f7093fd3e7be650aa7baec7bec.gif')] bg-no-repeat bg-cover">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded w-[20em] py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Sign Up
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded ml-4"
          onClick={() => navigate('/login')}
        >
          Go to Login
        </button>
      </form>
    </div>
  );
};

export default Signup;