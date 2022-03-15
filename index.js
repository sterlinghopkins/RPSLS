// console.log("Hello World")

class Game {

    constructor(){
        this.rules = "Rules";
        this.playerOne = new Player("Sterling");
        this.playerTwo = new Player("Ace");
    }
    displayRules(){
        console.log(this.rules);
    }
}

class Player {

    constructor(name){
        this.options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.choice = null;
        this.name = name;
    }
}
let game = new Game();
game.displayRules();
