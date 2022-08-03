// Pradžiai užduotėlės su String'ais;
// Stringas kurį testuosime:
const sentence = "Petras Jonaitis";

// ! 1. Parašykite funkciją clearSpaces, kuri paima stringą, kaip argumentą ir grąžina stringą be tarpų;

const clearSpaces = (string) => string.replace(" ", "");
// console.log(clearSpaces(sentence));

// ! 2. Parašykite funkciją changeName, kuri paima stringą su vardu ir pavarde kaip argumentą ir sukeičia juos vietomis ir tada grąžina;

const changeName = (name) => name.split(" ").reverse().join(" ");
// console.log(changeName(sentence));

// ! 3. Parašykite funkciją deleteBoundaries, kuri paima stringą, kaip argumentą ir grąžina be pirmos ir paskutinės raidės;

const deleteBoundaries = (name) => name.slice(1).slice(0, -1);
// console.log(deleteBoundaries(sentence));

// Užduotys su masyvais
// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -10, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6, 22];

// ! 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

const arrDoubled = (numbers) => numbers.map((number) => number * 2);
// console.log(arrDoubled(numbers));

// ! 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus
// ! pvz arrMultiplied([5, 3, 1], 5) grąžina [25, 15, 5]

const arrMultiplied = (num, x) => num.map((num) => num * x);
// console.log(arrMultiplied(numbers, 5));

// ! 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve
// ! pvz arrCountTwos([5, 2, 3, 1, 2, 2]) grąžina 3;

const arrCountTwos = (num) => num.reduce((a, b) => (b === 2 ? a + 1 : a), 0);
// console.log(arrCountTwos(numbers));

// ! 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfFirst = (num, x) => num.indexOf(x);
// console.log(arrIndexOfFirst(numbers, 10));

// ! 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfLast = (num, x) => num.lastIndexOf(x);
// console.log(arrIndexOfLast(numbers, 2));

// ! 6. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// ! Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// ! Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

const sortBigestSmalest = (arr) => {
  arr.sort((a, b) => a - b);
  return `Mažiausas: ${arr[0]}, Didžiausas: ${arr[arr.length - 1]}`;
};
// console.log(sortBigestSmalest(numbers));

// ! 7. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string).
// ! Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu
// ! pvz.: “Raidė “v” sakinyje rasta 4 kartus”.
// ! reikalingi String ir Array metodai

const checkForLetters = (argument, letter) => {
  const arr = argument
    .toLowerCase()
    .split("")
    .reduce((a, b) => (b === letter.toLowerCase() ? a + 1 : a), 0);

  return `Raidė “${letter}” sakinyje rasta ${arr} kartus`;
};

// console.log(checkForLetters("vaidas vilkas", "A"));

// ! 8. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atskirą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
// ! let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];
// ! Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

let arr2 = [8, "Hello", "click", "u", 7, 4, "a", "a", 3, 6, "chair", , 10, 1];

const onlyNumbers = (arr) =>
  arr.filter((num) => typeof num === "number").sort((a, b) => a - b);

// console.log(onlyNumbers(arr2));

// ! 9. Sukurkite funkciją checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// ! Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// ! Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

let arr1 = [2, 7, 6, 9, 5];

const checkIfAllSmaller = (array, x) => {
  for (let i = 0; i < array.length; i++) {
    return array[i] > x ? true : false;
  }
};

// console.log(checkIfAllSmaller(arr1, 1));

// ! 10. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė.
// ! Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// ! Testuosime šį masyvą
let citiesOfLithuania = [
  "Vilnius",
  "Kaunas",
  "Klaipėda",
  "Šiauliai",
  "Panevėžys",
  "Alytus",
  "Marijampolė",
  "Mažeikiai",
  "Jonava",
  "Utena",
];

const filteredByLetter = (arr, letter) =>
  arr.filter((array) => array.includes(letter));

console.log(filteredByLetter(citiesOfLithuania, "y"));
