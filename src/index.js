module.exports = function check(str, bracket) {
  let arr = [];
for (let e of str) {
    if (e != new Map(bracket).get(arr[arr.length - 1])) {
      arr.push(e)
    } else 
    arr.pop(e)
  }
  return arr.length === 0
}