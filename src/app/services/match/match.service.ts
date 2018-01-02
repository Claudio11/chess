import { Injectable } from '@angular/core';

import { PiecePositioner } from '../../interfaces/piece-positioner.interface';
import { Match } from '../../models/match.model';
import { Competitor } from '../../interfaces/competitor.interface';
import { MatchTimer } from '../../interfaces/match-timer.interface';

@Injectable()
export class MatchService {

  constructor() { }

  /**
   * Creates and returns a new instance of a Match.
   */
  public createMatch(
    whitePlayer: Competitor,
    blackPlayer: Competitor,
    timer: MatchTimer,
    piecePositioner: PiecePositioner
  ) {
    return new Match(whitePlayer, blackPlayer, timer, piecePositioner.boardPositions);
  }

}
