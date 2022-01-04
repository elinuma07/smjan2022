
function wordPosition(words) {
  // your code here
}
module.exports = wordPosition

const input = "buy it use it break it fix it trash it change it mail upgrade it"
const output = wordPosition(input)
console.log(output)

// {
//   buy: [ 0 ],
//   it: [ 1,  3,  5, 7, 9, 11, 14 ],
//   use: [ 2 ],
//   break: [ 4 ],
//   fix: [ 6 ],
//   trash: [ 8 ],
//   change: [ 10 ],
//   mail: [ 12 ],
//   upgrade: [ 13 ]
// }