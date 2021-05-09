import { AddToDom } from './dom';
import { CanvasRender } from './renderer';
import {Mouse} from "./utils/mouse";

export class Game {
  readonly version: string = '0.0.1-Alpha-Bravo-Charlie-Tango';

  render: CanvasRender;
  context: CanvasRenderingContext2D;
  mouse: Mouse;
  painting: boolean = false;

  contructor() {

  }

  boot(): void {
    const render = new CanvasRender();

    this.render = render;

    AddToDom(this.render.canvas);

    this.render.render();

    this.context = this.render.ctx;

    this.mouse = new Mouse()
    this.mouse.getClick();
    this.listeners();
    this.step()
  }

  step(): void {
    // Keep requesting new frames
    window.requestAnimationFrame(() => this.step())

    this.draw();
  }

  draw(): void {
    //this.reset()

    if (this.mouse._mouseDown) {
      console.log(this.mouse.xPos, this.mouse.yPos)
      this.context.lineTo(this.mouse.xPos, this.mouse.yPos);
      this.context.stroke();
    }
  }

  reset(): void {
    this.context.clearRect(0, 0, this.render.width, this.render.height);
  }

  listeners(): void {
    if(this.mouse._mouseDown){
      this.context.beginPath()
      this.context.moveTo(this.mouse.xPos, this.mouse.yPos)
    }else {

      this.context.closePath()
    }
  }
}
