import { Piece } from './piece.interface';

/**
 * Interface that is able to position Pieces into an 8x8 chessboard.
 */
export interface PiecePositioner {
  boardPositions: Piece[][];
}
