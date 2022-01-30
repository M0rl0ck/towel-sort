
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let arr = matrix.map((item, index) => {
       if (index % 2 === 0) {
           return item
        } else {
            return item.reverse()
        }})
    
  return [].concat(...arr);
}
