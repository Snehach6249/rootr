import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
    navigate('/explore');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4"
         style={{
           backgroundImage: 'url(https://images.unsplash.com/photo-1609939002762-3494f1c8e816)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="max-w-md w-full space-y-8 bg-white/90 p-8 rounded-xl shadow-lg backdrop-blur-sm relative z-10">
        <div className="text-center">
          {/* <img 
            src="https://drive.google.com/file/d/1Rk7YilupgVYoCWKxT316ej26cafeoQOh/view?usp=sharing" 
            alt="Roots and Riddles Logo" 
            className="mx-auto h-4 w-auto"
          /> */}
          <img 
  src="/assets/roots_riddles.jpg" 
  alt="Roots and Riddles Logo" 
  className="mx-auto h-32 w-auto"
/>

          <h2 className="mt-6 text-3xl font-bold" style={{ color: '#800000' }}>Roots and Riddles</h2>
          <p className="mt-2 text-sm text-gray-600">Explore the Ancient Squares of Bhaktapur</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-maroon focus:border-maroon"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-maroon focus:border-maroon"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white transition-colors duration-200"
              style={{ 
                backgroundColor: '#800000',
                boxShadow: '0 0 0 2px #FFD700',
              }}
            >
              Begin Your Journey
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}