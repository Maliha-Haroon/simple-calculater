#! /usr/bin/env node
import inquirer from "inquirer";
//printing a welcome message
console.log("\n\tWELLCOME TO\'MALIHA HAROON\'-CLI simple calculater\n");
//Asking Question from user through inquirer
let answer = await inquirer.prompt([
    // inquirer prompt configuration
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
