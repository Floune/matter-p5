import { AddToDom } from './dom';
import { Camera } from './camera/Camera';
import { CanvasRender } from './renderer';
import { Mouse } from './mouse/Mouse';

export class Game {
  readonly version: string = '0.0.1-Alpha-Bravo-Charlie-Tango';

  render: CanvasRender;
  context: CanvasRenderingContext2D;

  mouse: Mouse;
  camera: Camera;
  painting: boolean = false;

  contructor() {}

  boot(): void {
    console.log('boot');
    const render = new CanvasRender({ width: window.innerWidth, height: window.innerHeight });
    let time = performance.now();

    this.render = render;

    AddToDom(this.render.canvas);

    this.render.render();

    this.context = this.render.ctx;

    this.context.strokeStyle = 'red';

    // this.context.scale(1.5, 1.5);

    this.mouse = new Mouse();
    this.camera = new Camera();

    this.step(time);
  }

  step = (t?: number): void => {
    window.requestAnimationFrame(this.step);
  };

  reset(): void {
    this.context.clearRect(0, 0, this.render.width, this.render.height);
  }
}
