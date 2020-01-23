/**
 *
 * @param count
 * @param generateItem
 */
export function generateList<T>(count: number, generateItem: (index: number) => T) {
  const list: T[] = [];
  for (let i = 0; i < count; i++) {
    list.push(generateItem(i));
  }
  return list;
}
