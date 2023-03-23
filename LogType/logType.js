let data = 0;

console.log(typeof data);

switch (typeof data) {
  case "string":
    console.log(data, " is a string!");
    break;
  case "number":
    console.log(data, " is a number!");
    break;
  case "object":
    console.log(data, " is an object!");
    break;
  case "bigint":
    console.log(data, " is a bigint!");
    break;
  case "undefined":
    console.log(data, " is undefined");
    break;
  case "boolean":
    console.log(data, " is a boolean");
    break;
  default:
    console.log("I have no idea");
}
