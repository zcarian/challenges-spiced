import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((req, res) => {
    const name = chance.name();
    const age = chance.age();
    const profession = chance.profession();
    res.end(`Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`)
});
