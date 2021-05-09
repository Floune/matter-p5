/**
 *
 * @class CanvasRender
 */
export class CanvasRender {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number = 800;
  height: number = 600;
  resolution: number;
  clearColor: string;

  clearBeforeRender: boolean = true;

  constructor() {
    const canvas = document.createElement('canvas');

    this.canvas = canvas;

    this.startContext();
  }

  /**
   *
   *
   * @memberof CanvasRender
   */
  startContext(): void {
    const ctx = this.canvas.getContext('2d');

    this.ctx = ctx;

    this.setBackgroundColor(0xfff);
    this.resize(this.width, this.height, this.resolution);
  }

  /**
   *
   *
   * @param {number} width
   * @param {number} height
   * @param {number} [resolution=1]
   * @memberof CanvasRender
   */
  resize(width: number, height: number, resolution: number = 1): void {
    this.width = width * resolution;
    this.height = height * resolution;
    this.resolution = resolution;

    const canvas = this.canvas;

    canvas.width = this.width;
    canvas.height = this.height;
  }

  /**
   *
   *
   * @param {number} color
   * @return {this}
   * @memberof CanvasRender
   */
  setBackgroundColor(color: number): this {
    const red: number = (color >> 16) & 0xff;
    const green: number = (color >> 8) & 0xff;
    const blue: number = color & 0xff;
    const alpha: number = color > 16777215 ? color >>> 24 : 255;

    this.clearColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    console.log('color', this.clearColor);

    return this;
  }

  /**
   *
   *
   * @memberof CanvasRender
   */
  reset(): void {
    const ctx = this.ctx;

    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  /**
   *
   *
   * @memberof CanvasRender
   */
  render(): void {
    const ctx = this.ctx;

    this.reset();

    if (this.clearBeforeRender) {
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, this.width, this.height);
    }
  }
}
