export abstract class EventClass {
  on(type: string, callback?: Function): void {
    document.addEventListener(type, this);
  }
  abstract handleEvent(type: Event): void;
}
