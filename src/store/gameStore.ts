import { create } from 'zustand';
import { GameState, PuzzlePiece } from '../types';

const initialPieces: PuzzlePiece[] = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1609939002762-3494f1c8e816',
    message: "Discover the temple's ancient wisdom",
    position: 0,
    isCorrect: false,
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1609939002762-3494f1c8e816',
    message: "Follow the path of enlightenment",
    position: 1,
    isCorrect: false,
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1609939002762-3494f1c8e816',
    message: "Seek the hidden knowledge",
    position: 2,
    isCorrect: false,
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1609939002762-3494f1c8e816',
    message: "Unite the pieces of truth",
    position: 3,
    isCorrect: false,
  },
];

interface GameStore extends GameState {
  movePiece: (fromIndex: number, toIndex: number) => void;
  checkCompletion: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  pieces: initialPieces,
  completedPieces: 0,
  totalPieces: initialPieces.length,
  isGameComplete: false,

  movePiece: (fromIndex: number, toIndex: number) => {
    const pieces = [...get().pieces];
    const [removed] = pieces.splice(fromIndex, 1);
    pieces.splice(toIndex, 0, removed);
    
    set({ pieces });
    get().checkCompletion();
  },

  checkCompletion: () => {
    const { pieces } = get();
    const completedPieces = pieces.filter((piece) => piece.position === pieces.indexOf(piece)).length;
    const isGameComplete = completedPieces === pieces.length;
    
    set({ completedPieces, isGameComplete });
  },

  resetGame: () => {
    set({
      pieces: initialPieces,
      completedPieces: 0,
      isGameComplete: false,
    });
  },
}));