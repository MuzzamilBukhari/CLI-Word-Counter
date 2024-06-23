#! /usr/bin/env node
import inquirer from "inquirer";

let charsCount = 0;
console.log("\n\t Words Counter \t\n");

const answer = await inquirer.prompt([
  {
    type: "string",
    name: "sentence",
    message: "Enter a sentence : ",
  },
]);

let sentence: string = answer.sentence;

// Loop for chars count
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] !== " ") {
    charsCount++;
  }
}

const words: string[] = sentence.trim().split(" ");

console.log("Total words in a sentence :- " + words.length);

console.log("Total characters in a sentence :- " + charsCount);
