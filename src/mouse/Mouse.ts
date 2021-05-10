import { MouseAbstract } from './mouse.abstract';

export class Mouse extends MouseAbstract {
  get isMoved(): boolean {
    this.on('mousemove');
    setTimeout(() => {
      this.move = false;
    }, 100);
    return this.move;
  }

  handleEvent(event: Event): void {
    let mouseEvent: MouseEvent = event as MouseEvent; // re-type event to get mouse event
    let wheelEvent: WheelEvent = event as WheelEvent;
    this.disableContextMenu();

    switch (event.type) {
      case 'mousemove':
        this.move = true;
        this.x = mouseEvent?.clientX;
        this.y = mouseEvent?.clientY;
        this.position = {
          x: this.x,
          y: this.y
        };
        break;
      case 'mousedown':
        this.button = mouseEvent.button;
        this.buttonIsDown = true;
        this.on('mouseup');
        break;
      case 'mouseup':
        this.button = null;
        this.buttonIsDown = false;
        break;
      case 'wheel':
        this.deltaY = wheelEvent.deltaY;
        break;
      default:
        break;
    }
  }
}
