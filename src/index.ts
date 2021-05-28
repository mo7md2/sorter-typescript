import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollections = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection("zabsd");

numbersCollections.sort();
charactersCollection.sort();

console.log(numbersCollections.data);
console.log(charactersCollection.data);
