import Chance from 'chance'

export default function Handler(req, res) {
    const chance  = new Chance();
    const character = {
        firstName: chance.first(),
        lastName: chance.last(),
        age: chance.age(),
        email: chance.email(),
    } 
  res.status(200).json(character)
}