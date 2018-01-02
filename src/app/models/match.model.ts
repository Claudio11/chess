import { Competitor } from '../interfaces/competitor.interface';
import { MatchTimer } from '../interfaces/match-timer.interface';
import { Piece } from '../interfaces/piece.interface';

/**
 * Model that represents a match instance.
 */
export class Match {

  private _whitePlayer: Competitor;
  private _blackPlayer: Competitor;
  private _timer: MatchTimer;
  private _piecePositions: Piece[][];

  public get whitePlayer(): Competitor {
    return this._whitePlayer;
  }

  public set whitePlayer(value: Competitor) {
    this._whitePlayer = value;
  }

  public get blackPlayer(): Competitor {
    return this._blackPlayer;
  }

  public set blackPlayer(value: Competitor) {
    this._blackPlayer = value;
  }

  public get timer(): MatchTimer {
    return this._timer;
  }

  public set timer(value: MatchTimer) {
    this._timer = value;
  }

  public get piecePositions(): Piece[][] {
    return this._piecePositions;
  }

  public set piecePositions(value: Piece[][]) {
    this._piecePositions = value;
  }


  constructor(whitePlayer: Competitor, blackPlayer: Competitor, timer: MatchTimer, positions: Piece[][]);
  constructor(jsonObject: any);
  constructor();
  constructor(nameOrJsonObject?: any) {
    if (nameOrJsonObject) {
      if (typeof nameOrJsonObject === 'string') {
        super();
        this.name = <string>nameOrJsonObject;
      } else {
        super(nameOrJsonObject);
        this.name = nameOrJsonObject.name;
      }
    } else {
      super();
      this.name = '';
    }
  }
}
