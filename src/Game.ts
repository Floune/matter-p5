import { AddToDom } from './dom';
import { CanvasRender } from './renderer';

export class Game {
  readonly version: string = '0.0.1-Alpha-Bravo-Charlie-Tango';

  render: CanvasRender;

  contructor() {}

  boot(): void {
    const render = new CanvasRender();

    this.render = render;

    AddToDom(this.render.canvas);
    
    this.render.render();
  }

  step(): void {}
}
