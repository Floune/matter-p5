import { AddToDom } from './dom';
import { Camera } from './camera/Camera';
import { CanvasRender } from './renderer';
import { Mouse } from './utils/Mouse';

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
    this.mouse.on('mousemove');
    this.mouse.on('wheel');
    this.camera = new Camera();

    this.step(time);
  }

  step = (t?: number): void => {
    window.requestAnimationFrame(this.step);

    this.draw();
  };

  draw(): void {
    this.reset();
    this.context.save();

    if (this.mouse.deltaY > 0) {
      this.camera.zoomIn();
      this.mouse.deltaY = 0;
    } else if (this.mouse.deltaY < 0) {
      this.camera.zoomOut();
      this.mouse.deltaY = 0;
    }

    if (this.mouse.mouseDown) {
      this.camera.translate(this.mouse.x, this.mouse.y);
    }
    this.camera.dragOffset(this.mouse.x, this.mouse.y);
    this.context.translate(this.camera.translatePos.x, this.camera.translatePos.y);

    this.context.strokeRect(200, 200, 200, 500);

    // if (!this.painting) {
    //   this.context.beginPath();
    //   this.painting = true;
    // }
    // if (this.mouse.mouseDown && this.painting) {
    //   this.context.lineTo(this.mouse.x, this.mouse.y);
    //   this.context.stroke();
    // } else {
    //   this.painting = false;
    // }
    this.context.restore();
  }

  reset(): void {
    this.context.clearRect(0, 0, this.render.width, this.render.height);
  }
}
