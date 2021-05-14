import { EventClass } from '../types/EventClass';
import { MouseInterface } from './mouse.interface';

export abstract class MouseAbstract extends EventClass implements MouseInterface {
  private _x: number;
  private _y: number;
  private _position: {
    x: number;
    y: number;
  };
  private _button: number;
  private _buttonIsDown: boolean;
  private _deltaX: number;
  private _deltaY: number;
  private _move: boolean;

  abstract get isMoved(): boolean;

  set x(value: number) {
    this._x = value;
  }
  get x(): number {
    return this._x;
  }

  set y(value: number) {
    this._y = value;
  }
  get y(): number {
    return this._y;
  }

  set position(value: { x: number; y: number }) {
    this._position = value;
  }
  get position(): { x: number; y: number } {
    return this._position;
  }

  set button(value: number) {
    this._button = value;
  }
  get button(): number {
    return this._button;
  }

  set deltaX(value: number) {
    this._deltaX = value;
  }
  get deltaX(): number {
    return this._deltaX;
  }

  set deltaY(value: number) {
    this._deltaY = value;
  }
  get deltaY(): number {
    return this._deltaY;
  }

  set move(value: boolean) {
    this._move = value;
  }
  get move(): boolean {
    this.on('mousemove');
    return this._move;
  }

  set buttonIsDown(value: boolean) {
    this._buttonIsDown = value;
  }
  get buttonIsDown(): boolean {
    this.on('mousedown');
    return this._buttonIsDown;
  }

  get leftButtonIsDown(): boolean {
    this.on('mousedown');
    return this.button === 0;
  }

  get wheelButtonIsDown(): boolean {
    this.on('mousedown');
    return this.button === 1;
  }

  get rightButtonIsDown(): boolean {
    this.on('mousedown');
    return this.button === 2;
  }

  disableContextMenu(): this {
    document.addEventListener('contextmenu', (e: Event) => {
      e.preventDefault();
      return false;
    });
    return this;
  }
}
