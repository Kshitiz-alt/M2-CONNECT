import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const isAuthenticated = true;

    if (isAuthenticated) {
      navigate('/home');
    } 
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('https://i.pinimg.com/originals/03/2c/24/032c24f7093fd3e7be650aa7baec7bec.gif')] bg-no-repeat bg-cover">
      <form onSubmit={handleLogin} className="backdrop-blur-lg p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login-Page</h2>
        <div className="mb-4 text-left">
          <label className="block text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded text-white"
            required
          />
        </div>
        <div className="mb-4 text-left">
          <label className="block text-white">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded text-white"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
        <div className="text-center mt-4">
          <button
            type="button"
            className="text-blue-500 hover:underline"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;