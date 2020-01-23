/**
 *
 * @param count
 * @param generateItem
 */
export function generateList<T>(count: number, generateItem?: (index: number) => T) {
  const list: T[] = [];
  if (generateItem) {
    for (let i = 0; i < count; i++) {
      list.push(generateItem(i));
    }
  } else {
    for (let i = 0; i < count; i++) {
      list.push(undefined);
    }
  }
  return list;
}
