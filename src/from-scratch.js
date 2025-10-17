
const coolGreeting = (person) => { // argument 
  if (person.isCool === true) { // an if statement saying if the person is cool, set it equal to a boolean that is true
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`; // returns Sara's name in uppercase if isCool
  } else { // if the 1st statement is not true, run the second statement
    return `Greetings ${person.name}, how have you been lately?`; // if not cool return in lowercase
  }
};
const coolPerson = { name: 'Sara', isCool: true };
const notCoolPerson = { name: 'Bob', isCool: false };

console.log(coolGreeting(coolPerson));
console.log(coolGreeting(notCoolPerson));


const haveBirthday = (person) => {
  person.age++; // increases the person's age by 1
};
const person1 = {
  name: "TT",
  age: 30,
  isBirthday: true
};
haveBirthday(person1); //When you call this function it adds a year so 22

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
  console.log(`${person.spyHandle} has gone undercover.`);
};
const person2 = {
  name: "Mariah",
  spyHandle: '001',
  isbecomeSecretAgent: true
};

becomeSecretAgent(person2, "007");
console.log(person2);

const carMaker = (name, maker, year) => {
  return {
    name: name,            // string name
    maker: maker,          // string maker
    year: year,            // number year
    needsOilChange: false  // boolean defaults to false
  };
};

console.log(carMaker("Camry", "Toyota", 2025));

const weAreNotFriends = (person) => {
  // remove and return the last name from the friends array
  return person.friends.pop();
};

// Example usage:
const person = {
  name: "Tati",
  friends: ["Mia", "Luca", "Jay"]
};

console.log(weAreNotFriends(person)); // "Jay"
console.log(person); // { name: "Tati", friends: ["Mia", "Luca"] }

const listHobbies = (person) => {
  for (const hobby of person.hobbies) {
    console.log(`${person.name} likes ${hobby}.`);
  }
};

const jo = {
  name: 'Tati',
  age: 34,
  hobbies: ['running', 'biking', 'baking']
};

listHobbies(jo);


const getNextOpponent = (team) => {

  if (team.matches.length === 0) {
    return null;
  }
  return team.matches[0].teamName;
};
const fighters = {
  name: 'Fighters',
  sport: 'basketball',
  wins: 3,
  location: {
    city: 'Bridgeport',
    state: 'CT',
  },
  matches: [
    {
      teamName: 'Dunkaroos',
      skill: 9,
      wins: 12,
    },
    {
      teamName: 'Space Jammers',
      skill: 10,
      wins: 16,
    },
    {
      teamName: 'Mustangs',
      skill: 6,
      wins: 10,
    },
  ],
};
console.log(getNextOpponent(fighters));

const listAllKeys = (obj) => {
  return Object.keys(obj);// looks inside obj and collects all its keys into an array. Then returns array.
};
const folder = {
  red: 'math',
  yellow: 'reading',
  Blue: 'socialStudies'
}
console.log(listAllKeys(folder));

const listAllValues = (obj) => {
  return Object.values(obj); // mostly the same as the previous function but listed all values and not keys.
};

const markers = {
  orange: 'naranja',
  green: 'verde',
  yellow: 'amarillo'
};
console.log(listAllValues(markers));

const convertToMatrix = (arr) => {
  if (arr.length === 0) return []; // if empty array, return empty array
  const keys = Object.keys(arr[0]); // get keys from the first object (order matters)
  const matrix = [keys];// start matrix with the keys row

  // for each object, create a row of values in the same key order
  for (const obj of arr) {
    const row = keys.map((key) => obj[key]);
    matrix.push(row);
  }
  return matrix;
};
const users = [
  { name: 'Sara', age: 30, bio: 'What a legend' },
  { name: 'Bob', age: 30, bio: "Kind of mean if we're being honest" },
];
console.log(convertToMatrix(users)); //call the function


module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
