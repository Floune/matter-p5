import { AddToDom } from './dom';
import { CanvasRender } from './renderer';
import { Mouse } from './utils/Mouse';

export class Game {
  readonly version: string = '0.0.1-Alpha-Bravo-Charlie-Tango';

  render: CanvasRender;
  context: CanvasRenderingContext2D;
  mouse: Mouse;
  painting: boolean = false;

  contructor() {}

  boot(): void {
    const render = new CanvasRender();
    let time = performance.now();

    this.render = render;

    AddToDom(this.render.canvas);

    this.render.render();

    this.context = this.render.ctx;

    this.mouse = new Mouse();
    this.mouse.on('mousemove');
    this.mouse.on('click');
    this.step(time);
  }

  step = (t?: number): void => {
    window.requestAnimationFrame(this.step);

    console.log('pos :', this.mouse.position, 'mousedown :', this.mouse.mouseDown);
    this.draw();
  };

  draw(): void {
    //this.reset()
    if (!this.painting) {
      this.context.beginPath();
      this.painting = true;
    }

    if (this.mouse._mouseDown && this.painting) {
      this.context.lineTo(this.mouse.xPos, this.mouse.yPos);
      this.context.stroke();
    } else {
      this.painting = false;
    }
  }

  reset(): void {
    this.context.clearRect(0, 0, this.render.width, this.render.height);
  }
}
