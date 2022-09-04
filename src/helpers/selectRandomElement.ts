export default function selectRandomElement<T>(elements: T[]) {
  let rand = Math.ceil(Math.random() * elements.length - 1);
  return elements[rand] || elements[0];
}
