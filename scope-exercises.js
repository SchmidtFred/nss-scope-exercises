//1
const cookies = [
  "Oatmeal Raisin",
  "Chocolate Chip",
  "Sugar",
  "Peanut Butter",
  "Snickerdoodle",
  "Ginger",
];
let y = 1;

for (let x = 1; x < cookies.length; x++) {
  const currentCookie = cookies[x];
  console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
}

//2
const conjunction = function (firstWord, secondWord) {
  return `${firstWord} ${secondWord}`;
};

conjoinedWord = conjunction("Master", "Card");
console.log(conjoinedWord);

//3
const modSquad = {
  members: [
    "Pete Cochran",
    "Linc Hayes",
    "Julie Barnes",
    "Capt. Adam Greer",
    "Chief Barney Metcalf",
  ],
  series: {
    start: "1968",
    end: "1973",
  },
};

let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

modSquad.members.forEach((member) => {
  HTMLRepresentation += `<div>${member}</div>`;
});

console.log(HTMLRepresentation);

//4
const locations = [
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 2],
  [2, 3],
  //my personal test lines to see if this works
  [3, 1],
  [5, 0],
];

for (const location of locations) {
  let invalidLocation = false;
  if (location[0] > 2) {
    invalidLocation = true;
  }

  if (invalidLocation) {
    console.log("This location is invalid");
  }
}

//Advanced Challenge
const llamaNamer = function () {
  const possibleNames = [
    "Larry",
    "Leon",
    "Leona",
    "Les",
    "Laura",
    "Lemony",
    "Lars",
    "Lekisha",
  ];
  const randomizer = Math.floor(Math.random() * 7);

  const namer = function () {
    const suffix = " the Llama";
    const name = possibleNames[randomizer];
    return name + suffix;
  };

  return namer;
};

nameMaker = llamaNamer();
console.log(nameMaker());
