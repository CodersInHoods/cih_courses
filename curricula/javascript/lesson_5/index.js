const useState = initialValue => {
  let obj = {
    value: initialValue
  };
  const setValue = newValue => {
    obj.value = newValue;
  };
  const getValue = () => obj.value;
  return [getValue, setValue];
};

const [getCounter, setCounter] = useState(0);

setInterval(() => {
  setCounter(getCounter() + 1);
  //   console.log(getCounter());
}, 1000);

const person = {
  name: "sam",
  age: 29,
  height: "medium"
};
const vasile = {
  name: "vasile",
  age: 31,
  height: "medium",
  weight: 90
};

const { age } = person;

console.log(age);

const doSomethingWithPerson = ({ age, name: firstName, weight = 20 }) => {
  console.log(`age: ${age}, ${firstName}, ${weight}`);
};

doSomethingWithPerson(person);
doSomethingWithPerson(vasile);

// function that recieves 1 arg
// array
// first element in the array is an object
// representing a person
// second element in the array
// string, use that as name
const unnamed = {
  age: 0.4,
  height: "medium"
};

const assignNameToPersonAttributes = ([{ age, height }, name]) => {
  console.log(`age: ${age}, height: ${height}, name: ${name}`);
};

assignNameToPersonAttributes([unnamed, "mimi"]);

const myArray = [0, 1, 2, 3, 765, 345, 47, 457, 4567, "hello"];
const copyByReference = myArray;
myArray.push("thing");
copyByReference.push("another thing in a deffintley differnet array");
const myCopy = [...myArray, "some other thing"];

console.log(myArray, myCopy);
// console.log(myArray[0], myArray[1], myArray[2], myArray[3]);
console.log(...myArray);
console.log(...myCopy);
// console.log(0, 1, 2, 3);

const frankenstein = {
  ...person,
  ...vasile,
  ...unnamed,
  hairColour: "brown"
};
const monster = {
  name: "vasile",
  weight: 90,
  age: 0.4,
  height: "medium",
  hairColour: "brown"
};
console.log(frankenstein, monster);

console.log(monster.name);

const dynamicKey = "name";

console.log(monster[dynamicKey]);

const getValAtKey = (obj, key) => {
  return obj[key];
};
console.log(getValAtKey(person, "name"));
console.log(getValAtKey(person, "age"));
console.log(getValAtKey(person, "height"));
// console.log({ name });

console.log(Object.keys(monster));
Object.keys(monster).forEach(key => {
  console.log(monster[key]);
});

const form = document.querySelector("form");

let newPerson = {};
form.addEventListener("input", e => {
  //   console.log("something has changed", e);
  //   newPerson[e.target.name] = e.target.value;
  newPerson = {
    ...newPerson,
    [e.target.name]: e.target.value
  };
  console.log(newPerson);
});

const name = person.name;
const height = 20;

console.log({
  name: name,
  age: person.age,
  height: height
});

console.log({
  name,
  age: person.age,
  height
});

const postPerson = (name, age, height) => {
  const person = { name, age, height };
  fetch("url", {
    body: JSON.stringify(person)
  });
};

class Person {
  constructor(name, age, height) {
    console.log("constructor of Person", name, age, height);
    this.name = name;
    this.age = age;
    this.height = height;
  }

  happyBirthday() {
    this.age = this.age + 1;
  }
}

class Elf extends Person {
  constructor(name, age) {
    super(name, age, "short");
  }
}
const personInstance = new Person("santa", 100, "tall");
const elfInstance = new Elf("will", 50);

console.log(personInstance);
