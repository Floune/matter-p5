import { Dic } from '../types/Dic';
import { EventClass } from '../types/EventClass';

export class Mouse extends EventClass {
  private _x: number;
  private _y: number;
  private _mouseDown: boolean;
  callback: Dic<any[]>;
  deltaY: number = 0;

  constructor() {
    super();
    this._x = 0;
    this._y = 0;
    this._mouseDown = false;
  }

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

  get position(): string {
    return `x: ${this.y} / y: ${this.y}`;
  }

  set mouseDown(value: boolean) {
    this._mouseDown = value;
  }
  get mouseDown(): boolean {
    this.on('mousedown');
    return this._mouseDown;
  }

  handleEvent(event: Event): void {
    let mouseEvent: MouseEvent = event as MouseEvent; // re-type event to get mouse event
    let wheelEvent: WheelEvent = event as WheelEvent;
    switch (event.type) {
      case 'mousemove':
        this.x = mouseEvent?.clientX;
        this.y = mouseEvent?.clientY;
        break;
      case 'mousedown':
        this.mouseDown = true;
        this.on('mouseup');
        break;
      case 'mouseup':
        this.mouseDown = false;
        break;
      case 'click':
        this.on('mousedown');
        this.on('mouseup');
        break;
      case 'wheel':
        this.deltaY = wheelEvent.deltaY;
        break;
      default:
        break;
    }
  }
}
