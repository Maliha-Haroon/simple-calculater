#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//printing a welcome message
console.log("\n\tWELLCOME TO\'MALIHA HAROON\'-CLI simple calculater\n");
//Asking Question from user through inquirer
let answer = await inquirer_1.default.prompt([
    { message: "enter first number",
        type: "number",
        name: "firstnumber" },
    { message: "enter second number",
        type: "number",
        name: "secondnumber" },
    {
        message: "select one operater to performe operations",
        type: "list",
        name: "operater",
        choices: ["Addition", "Subtraction", "Multiplicaion", "Division"],
    },
]);
//conditional statment if-else
if (answer.operater === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operater === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operater === "Multiplicaion") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operater === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("invalid operator");
}
