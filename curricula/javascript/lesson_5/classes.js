// Create a class Dog with properties:
// => numberOfLegs
// => height
// => weight
// Create a class Pet which the Dog class extends.
// Add to class Pet properties like:
// => name
// => mood
// => method to get all data about your pet
// => method to get just name
// => method to get name and mood.
// Create an Instance of Pet for testing.

class Pet {
  constructor(name, mood, species) {
    console.log("in constructor of pet");
    this.name = name;
    this.mood = mood;
    this.species = species;
  }

  allPropertiesOf() {
    return Object.keys(this)
      .map(key => `${key}: ${this[key]}`)
      .join(", ");
    return "name: daisy, species: cat";
  }
}
class Dog extends Pet {
  constructor(name, mood, numberOfLegs, height, weight) {
    console.log("in constructor of dog");
    super(name, mood, "dog");
    this.numberOfLegs = numberOfLegs;
    this.height = height;
    this.weight = weight;
  }
}

const pet = new Pet("daisy", "grumpy", "cat");
const dog = new Dog("rover", "happy", 3, 10, 30);
console.log(pet);
console.log(dog);

console.log(pet.allPropertiesOf());
console.log(dog.allPropertiesOf());
