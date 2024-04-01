#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let mybalance = 250000;
let mypin = "1230";
const pin = await inquirer.prompt([{
        type: "number",
        name: "code",
        message: "Enter the pin code :"
    }]);
if (pin.code == mypin) {
    console.log("your pin Code is Correct!");
}
else {
    console.log("your pin Code is INCorrect!");
}
const operationAns = await inquirer.prompt([{
        message: chalk.green("What do you want to go, Please choose the correct option"),
        type: "list",
        name: "Operation",
        choices: ['Cash withdraw', 'Balance Inquiry', 'Fast Cash']
    }]);
if (operationAns.Operation === "Cash withdraw") {
    let amount = await inquirer.prompt([{
            name: "myamount",
            type: "number",
            message: chalk.green("Enter the amount you want to withdraw")
        }]);
    console.log(`Your Current Blance is,= ${mybalance - amount.myamount}`);
}
else if (operationAns.Operation === "Balance Inquiry") {
    console.log("**********************************************************************************");
    console.log(`your current balance is = ${mybalance}`);
    console.log("**********************************************************************************");
}
else if (operationAns.Operation === "Fast Cash") {
    let FastCash = await inquirer.prompt([
        {
            message: "Enter The amount you want to withdraw",
            type: "list",
            name: "Fcash",
            prefix: "",
            choices: ["5000", "10000", "20000"]
        }
    ]);
    if (FastCash.Fcash <= mybalance) {
        console.log(`your FastCash Amount is =${FastCash.Fcash}`);
        console.log(`your current balance is =${mybalance - FastCash.Fcash}`);
    }
    else {
        console.log("insufficient balance");
    }
}
