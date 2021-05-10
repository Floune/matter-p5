export interface MouseInterface {
  x: number;
  y: number;
  button: number;
  buttonIsDown: boolean;
  deltaX: number;
  deltaY: number;
  move: boolean;
  position: {
    x: number;
    y: number;
  };
  isMoved: boolean;
}
