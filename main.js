import inquirer from "inquirer";
let Random_Number = Math.floor(Math.random() * 10);
// console.log(Random_Number);
console.log("You Have 5 Attempts");
let z = 0;
while (z < 5) {
    let Guess_Number = await inquirer.prompt({
        message: "Enter Your Number",
        type: "number",
        name: "GuessNumber"
    });
    if (Guess_Number.GuessNumber === Random_Number) {
        console.log("You are Winner! \nYou Guess Right Number ");
        break;
    }
    else {
        console.log("You Guess Wrong Number");
        console.log("Try Again...");
    }
    z += 1;
}
