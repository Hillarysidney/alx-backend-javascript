export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const arr = [];
  for (const elem of set) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      arr.push(elem.slice(startString.length));
    }
  }
  return arr.join('-');
}
