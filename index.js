// console.log("Hello World")
const prompt = require("prompt-sync")();

class Game {

    constructor(){
        this.rules = ["Welcome to the Rock, Paper, Scissors, Lizard, Spock game!", "Best of three is the winner.", "", "Rock beats scissors and lizard", "Scissors beats lizard and paper.", 
        "Lizard beats paper and Spock.", "Paper beats Spock and rock.", "Spock beats rock and scissors."];
        this.playerOne = new Player("Sterling");
        this.playerTwo = new Player("Ace");
    }
    displayRules(){
        console.log(this.rules);
    }
    decideWinner(){
        if(this.playerOne === this.playerTwo){
            return("The result is a tie.");
           
        } 
    }
}

class Player {

    constructor(name){
        this.options = ["Choose 0 for Rock", "Choose 1 for Paper", "Choose 2 for Scissors", "Choose 3 for Lizard", "Choose 4 for Spock"];
        this.choice = null;
        this.name = name;
    }
    playerChoice(){
        console.log(this.options);
        this.choice = prompt();
        console.log(this.choice);
    };

    //let player = new player();
}
let game = new Game();
//game.displayRules();

game.playerOne.playerChoice();
game.playerTwo.playerChoice();
game.decideWinner();
console.log(game);