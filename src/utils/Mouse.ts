export class Mouse {
  private _x: number;
  private _y: number;
  private _mouseDown: boolean;

  constructor() {
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
    return this._mouseDown;
  }

  on(eventName: string, callback?: Function) {
    document.addEventListener(eventName, this);
  }

  handleEvent(event: Event): void {
    switch (event.type) {
      case 'mousemove':
        let e: MouseEvent = event as MouseEvent; // re-type event to get mouse event
        this.x = e?.clientX;
        this.y = e?.clientY;
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
      default:
        break;
    }
  }
}
