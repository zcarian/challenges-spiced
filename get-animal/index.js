export function getAnimal(animal) {
  if (animal === "cats") {
    return "I totally love cats!";
  } else if (animal) {
    return `I like ${animal}!`;
  } else return "I do not like animals at all!";
}
