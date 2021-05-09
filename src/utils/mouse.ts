export class Mouse {
  x: number
  y: number
  _mouseDown: boolean = false;

  constructor() {
    this.getPosition();
    this.x = 0;
    this.y = 0;
  }

  get xPos(): number {
    return this.x;
  }

  get yPos(): number {
    return this.y;
  }

  get mouseDown(): boolean {
    return this._mouseDown
  }

  getPosition(): void{
    document.addEventListener('mousemove', ({clientX, clientY}) =>  {
      this.x = clientX
      this.y = clientY
    });
  }

  getClick(): void {
    document.addEventListener("mousedown", () => {
      console.log('click', this._mouseDown)
      this._mouseDown = true
    })
    document.addEventListener("mouseup", () => {
      console.log("pas click", this._mouseDown)
      this._mouseDown = false
    })

  }

}
