import { Competitor } from '../interfaces/competitor.interface';
import { PieceColor } from '../enum/piece-color.enum'

/**
 * Model that represents a player.
 */
export class Player implements Competitor {

  protected _user: User;
  protected _color: PieceColor;

  public get color(): PieceColor {
    return this._color;
  }

  public set color(value: PieceColor) {
    this._color = value;
  }


  constructor(name: string);
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
