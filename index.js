#! /usr/bin/env node
import { differenceInSeconds } from "date-fns/differenceInSeconds";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Please Enter The Amount Of Seconds:",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Enter A Valid Number!";
        }
        else if (input > 60) {
            return "Seconds Must Be In 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const initTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Time Has Expired!");
            process.exit();
        }
        const min = Math.floor(timeDiff / 60);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
