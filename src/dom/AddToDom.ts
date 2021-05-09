import { GetElement } from './GetElement';

/**
 * Create a new element with its HTML tag or HTML element,
 * in which we can specify its parent to add it into it,
 * or leave empty and add into the body element.
 *
 * @example return canvas in body :
 * AddToDom('canvas') or AddToDom(document.createElement('canvas'), document.getElementById('#root'))
 * @param {string | HTMLElement} element - The DOM Element that will be created
 * @param {(string | HTMLElement)} [parent] - The DOM Element look-up
 * @return {HTMLElement} The DOM Element created
 */
export function AddToDom(element: string | HTMLElement, parent?: string | HTMLElement): HTMLElement {
  const target: HTMLElement = GetElement(parent);

  if (typeof element !== 'string') {
    target.appendChild(element);
    console.log(element);
    return element;
  }

  let child: HTMLElement = document.createElement(element);
  target.appendChild(child);

  return child;
}
