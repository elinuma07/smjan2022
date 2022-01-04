// function uppercaseOddWords(text) {
//   // Put your solution here

// }
// module.exports = uppercaseOddWords

// // from https://api.kanye.rest/
// const input = "fur pillows are hard to actually sleep on"

// const output = uppercaseOddWords(input)

// console.log(output)
// // fur PILLOWS are HARD to ACTUALLY sleep ON

// Elisabeth's Way

// const inOddPosition = (num) => {
//   return num % 2;
// };

const uppercaseOddWords = (text) => {
  // Turn the string into an array of individual words
  // Loop through each word and create a new string
  const words = text.split(" ");
  // let newString = "";
  // words.forEach((word, index) => {
  //   if (inOddPosition(index)) {
  //     newString += word.toUpperCase();
  //   } else {
  //     newString += word;
  //   }
  //   return (newString += " ");
  // });

  let result = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // capitalize each odd word
    if (i % 2 === 0) {
      // the index is even and do nothing w/ it
      result += word;
    } else {
      // capitalize the odd letters
      result += word.toUpperCase();
    }
  }
  return (result += " ");
};

module.exports = uppercaseOddWords;

// from https://api.kanye.rest/
const input = "fur pillows are hard to actually sleep on";

const output = uppercaseOddWords(input);

console.log(output);
// fur PILLOWS are HARD to ACTUALLY sleep ON
