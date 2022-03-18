// console.log("Hello World")
const prompt = require("prompt-sync")();

class Game {

    constructor(){
        this.rules = ["Welcome to the Rock, Paper, Scissors, Lizard, Spock game!", "Best of three is the winner.", "", "Rock beats scissors and lizard", "Scissors beats lizard and paper.", 
        "Lizard beats paper and Spock.", "Paper beats Spock and rock.", "Spock beats rock and scissors."];
        this.gameType = ["Choose 1 to play against the computer", "Choose 2 to play against another human"];
        this.playerOne = null;
        this.playerTwo = null;
         
    }
    displayGameType(){
        console.log(this.gameType);
        this.decision = prompt();
        console.log(this.decision);
        if(this.decision === "1"){
            this.playerOne = new Human("Sterling");
            this.playerTwo = new Computer("Dan");

        }
        else{this.playerOne = new Human("Sterling");
            this.playerTwo = new Human("Ace")}
    }
    displayRules(){
        console.log(this.rules);
    }
    decideWinner(){
        for(let i =1; i <= 3; i++) {
            console.log("Round #" + i)
            this.playerOne.playerChoice();
            this.playerTwo.playerChoice();
        if(this.playerOne.choice == this.playerTwo.choice){
            console.log("This round is a tie")
        }
        else if(this.playerOne.choice == "0") {
            if(this.playerTwo.choice == "2" || this.playerTwo.choice == "3"){
                this.playerOne.score ++;
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice == "1" || this.playerTwo.choice == "4"){
                this.playerTwo.score ++;
                console.log("playerTwo Wins!")
            }
        
        }if(this.playerOne.choice == "1") {
            if(this.playerTwo.choice == "0" || this.playerTwo.choice == "4"){
                this.playerOne.score ++;
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice == "2" || this.playerTwo.choice == "3"){
                this.playerTwo.score ++;
                console.log("playerTwo Wins!")
            }

        }if(this.playerOne.choice == "2") {
            if(this.playerTwo.choice == "1" || this.playerTwo.choice == "3"){
                this.playerOne.score ++;
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice == "0" || this.playerTwo.choice == "4"){
                this.playerTwo.score ++;
                console.log("playerTwo Wins!")
            }

        }if(this.playerOne.choice == "3") {
            if(this.playerTwo.choice == "1" || this.playerTwo.choice == "4"){
                this.playerOne.score ++;
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice == "0" || this.playerTwo.choice == "2"){
                this.playerTwo.score ++;
                console.log("playerTwo Wins!")
            }

        }if(this.playerOne.choice == "4") {
            if(this.playerTwo.choice == "0" || this.playerTwo.choice == "2"){
                this.playerOne.score ++;
                console.log("playerOne Wins!")
            }
            else if(this.playerTwo.choice == "1" || this.playerTwo.choice == "3"){
                this.playerTwo.score ++;
                console.log("playerTwo Wins!")
            }
        }

            
    }
    
        }
    totalScore(){
        if(this.playerOne.score > this.playerTwo.score){
            console.log("playerOne Is The Winner of RPSLS!");
        }
        else if (this.playerTwo.score > this.playerOne.score){
            console.log("playerTwo Is The Winner of RPSLS!");
        }
    }    
    
}

class Player {

    constructor(name){
        this.options = ["Choose 0 for Rock", "Choose 1 for Paper", "Choose 2 for Scissors", "Choose 3 for Lizard", "Choose 4 for Spock"];
        this.choice = null;
        this.name = name;
        this.score = 0;
        
    }
    playerChoice(){
        console.log(this.options);
        
    };

    //let player = new player();
}
class Human extends Player {
    constructor(name){

        super(name);

    }
    playerChoice(){
        console.log(this.options);
        this.choice = prompt();
        console.log(this.choice);
    };

}

class Computer extends Player {
    constructor(name){
        super(name);
    }
    playerChoice(){
        this.choice = Math.floor(Math.random() * this.options.length);
        //console.log(this.options);
        //this.choice = prompt();
        console.log(this.choice);
    };

}

let game = new Game();
//game.displayRules();
game.displayGameType();
//game.playerOne.playerChoice();
//game.playerTwo.playerChoice();
game.decideWinner();
//console.log(game);
game.totalScore();
