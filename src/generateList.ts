/**
 * 创建一个数组
 * @param count 数组个数
 * @param generateItem 元素生成函数
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
