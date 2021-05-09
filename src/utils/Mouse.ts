export class Mouse {
  x: number;
  y: number;
  _mouseDown: boolean = false;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  get xPos(): number {
    return this.x;
  }

  get yPos(): number {
    return this.y;
  }

  get position(): string {
    return `x: ${this.y} / y: ${this.y}`;
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
        this._mouseDown = true;
        this.on('mouseup');
        break;
      case 'mouseup':
        this._mouseDown = false;
        break;
      case 'click':
        this.on('mousedown');
        this.on('mousedown');
        break;
      default:
        break;
    }
  }
}
