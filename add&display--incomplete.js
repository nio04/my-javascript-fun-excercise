import ps from "prompt-sync";

const prompt = ps();

let storeArray = [];

const userInput = prompt("enter a integer: ");

/*
take user input
make a while loop
take special variable, if input === to that variable, while loop auto terminate
otherwise, this while loop will run for 5 times & push the input to an array
display the array
*/
