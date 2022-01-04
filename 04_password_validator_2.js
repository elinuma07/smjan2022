
function validatePasswords(passwords) {
  // your code goes here

}
module.exports = validatePasswords

const passwords = [
  'kqkybnvemaig',
  '3ef@3qfd0',
  'h1b6pouv',
  'z36wyvrh!',
  'fg8ms81co#',
  'qp7z5xqcu@ex',
  'vhha42k',
  'ktvbj2um4',
  'i9jcgtr!vko',
  'aon24qz'
]

const validPasswords = validatePasswords(passwords)

console.log(validPasswords)
// Valid passwords
// [
//   '3ef@3qfd0',
//   'z36wyvrh!',
//   'fg8ms81co#',
//   'qp7z5xqcu@ex',
//   'i9jcgtr!vko'
// ]