import React, { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { MedalIcon } from 'lucide-react';

export default function PuzzleGame() {
  const { pieces, movePiece, isGameComplete } = useGameStore();
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.isAuthenticated) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDrop = (e: React.DragEvent, toIndex: number) => {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
    movePiece(fromIndex, toIndex);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-amber-800">Temple Puzzle Quest</h1>
        
        {isGameComplete ? (
          <div className="text-center space-y-4">
            <MedalIcon className="w-16 h-16 mx-auto text-amber-600" />
            <h2 className="text-2xl font-bold text-amber-900">Congratulations!</h2>
            <p className="text-lg text-amber-700">You have completed the sacred puzzle!</p>
            <button
              onClick={() => window.print()}
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700"
            >
              Download Certificate
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {pieces.map((piece, index) => (
              <div
                key={piece.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                onDragOver={handleDragOver}
                className="aspect-square relative group cursor-move"
              >
                <img
                  src={piece.imageUrl}
                  alt={`Puzzle piece ${piece.id}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                  <p className="text-white text-center p-4">{piece.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}