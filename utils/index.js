/**
 * 例子：[{name: 'abc', age: '18'}, {name: 'qwe', age: '20'}] => {abc: [{name: 'abc', age: '18'}], qwe: [{name: 'qwe', age: '20'}]}
 * @param {*} key 字符串
 * @param {*} arr 数组
 * @returns 对象
 */
export const groupInObj = (key, arr = []) => {
  if (!key) return {}
  return arr.reduce(
    (t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t),
    {}
  )
}

export const timeFormat = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`
}

/**
 * 扁平数组转化成树
 * @param {*} arr
 * @param {*} parentId
 * @returns
 */
export const flattenToTree = (
  arr,
  parent = null,
  parentLabel = 'parent',
  children = 'children'
) => {
  const childrenArr = arr.filter((e) => e[parentLabel] === parent)
  return childrenArr.map((e) => {
    const childrenRes = flattenToTree(arr, e.id)
    if (childrenRes.length) {
      return { ...e, [children]: childrenRes }
    }
    return { ...e }
  })
}
