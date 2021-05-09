/**
 * Attempt to get the target DOM element based on given value,
 * You can search for the element by its ID, Class or even the tag.
 * or leave empty and it gets the body element
 *
 * @example
 *  - get by id: GetElement ('# ID')
 *  - get by class: GetElement ('. class')
 *  - get by tag: GetElement ('tag')
 * @param {(string | HTMLElement)} [target]
 * @return {*}  {HTMLElement}
 */
export function GetElement(target?: string | HTMLElement): HTMLElement {
  let element: HTMLElement;

  if (target) {
    if (typeof target === 'string') {
      element = document.querySelector(target);
    } else if (typeof target === 'object' && (target as HTMLElement).nodeType) {
      element = target;
    }
  }

  if (!element) {
    element = document.body;
  }

  return element;
}
