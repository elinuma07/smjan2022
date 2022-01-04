
function artistsByYear(artists) {
  // Put your solution here
  
}
module.exports = artistsByYear


const artists = [
  { 
    song: "Shivers",
    name: "Ed Sheeran",
    year: 2021
  },
  {
    song: "WAP",
    name: "Cardi B",
    year: 2020
  },
  {
    song: "Say So",
    name: "Doja Cat",
    year: 2020
  },
  { 
    song: "Old Town Road",
    name: "Lil Nas X",
    year: 2019
  },
  {
    song: "Bad Guy",
    name: "Billie Eilish",
    year: 2019
  },
  {
    song: "God's Plan",
    name: "Drake",
    year: 2018
  }
]

console.log(artistsByYear(artists))

// {
//   '2018': [ 
//     { 
//       song: "God's Plan", 
//       name: 'Drake', 
//       year: 2018 
//     } 
//   ],
//   '2019': [
//     { 
//       song: 'Old Town Road', 
//       name: 'Lil Nas X', 
//       year: 2019 
//     },
//     { 
//       song: 'Bad Guy', 
//       name: 'Billie Eilish', 
//       year: 2019 
//     }
//   ],
//   '2020': [
//     { 
//       song: 'WAP', 
//       name: 'Cardi B', 
//       year: 2020 
//     },
//     { 
//       song: 'Say So', 
//       name: 'Doja Cat', 
//       year: 2020 
//     }
//   ],
//   '2021': [
//     { 
//       song: "Shivers",
//       name: "Ed Sheeran",
//       year: 2021
//     }
//   ]
// }