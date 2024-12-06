export interface User {
  id: string;
  username: string;
  isAuthenticated: boolean;
}

export interface PuzzlePiece {
  id: number;
  imageUrl: string;
  message: string;
  position: number;
  isCorrect: boolean;
}

export interface GameState {
  pieces: PuzzlePiece[];
  completedPieces: number;
  totalPieces: number;
  isGameComplete: boolean;
}