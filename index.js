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
        if(this.playerOne.choice === this.playerTwo.choice){
            console.log("This round is a tie")
        }
        else if(this.playerOne.choice === "0") {
            if(this.playerTwo.choice === "2" || this.playerTwo.choice === "3"){
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice === "1" || this.playerTwo.choice === "4"){
                console.log("playerTwo Wins!")
            }
        
        }if(this.playerOne.choice === "1") {
            if(this.playerTwo.choice === "0" || this.playerTwo.choice === "4"){
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice === "2" || this.playerTwo.choice === "3"){
                console.log("playerTwo Wins!")
            }

        }if(this.playerOne.choice === "2") {
            if(this.playerTwo.choice === "1" || this.playerTwo.choice === "3"){
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice === "0" || this.playerTwo.choice === "4"){
                console.log("playerTwo Wins!")
            }

        }if(this.playerOne.choice === "3") {
            if(this.playerTwo.choice === "1" || this.playerTwo.choice === "4"){
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice === "0" || this.playerTwo.choice === "2"){
                console.log("playerTwo Wins!")
            }

        }if(this.playerOne.choice === "4") {
            if(this.playerTwo.choice === "0" || this.playerTwo.choice === "2"){
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice === "1" || this.playerTwo.choice === "3"){
                console.log("playerTwo Wins!")
            }
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
//console.log(game);