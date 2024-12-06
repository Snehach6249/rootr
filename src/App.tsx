import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import ExploreSquares from './components/ExploreSquares';
import PuzzleGame from './components/PuzzleGame';
import { useAuthStore } from './store/authStore';

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/explore" /> : <Login />} />
        <Route
          path="/explore"
          element={user ? <ExploreSquares /> : <Navigate to="/" />}
        />
        <Route
          path="/game"
          element={user ? <PuzzleGame /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;