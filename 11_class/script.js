// custom script
// alert('Welcome to JS')

// class <name_of_class> {}


// blueprint
class Car {
    constructor(color, serialNumber, noOfWheels, mileage) {
        this.color = color;
        this.#serialNumber = serialNumber;
        this.noOfWheels = noOfWheels;
        this.#mileage = mileage;
    }

    // properties
    color; // uninitialized public property
    noOfWheels = 4; // initialized public property
    #serialNumber = 'R2EWE98KEJR9ER8'; // initial private property
    #mileage = 0;

    // getters
    get serialNumber() {
        return this.#serialNumber.substring(11).padStart(15, '*');
    }

    get getMileage() {
        return this.#mileage;
    }

    // setter
    set serialNumber(value) {
        if(value.length == 15) {
            this.#serialNumber = value;
        } else {
            console.error(`New serial '${value}' cannot be accepted, length should be 15 chars`);
        }
    }

    // methods()
    engineStart() {
        console.log('Vroom vrooom, engine is starting...');
    }

    driveForward(distance = 0) {
        distance > 0 
        ? console.log(`Starting to drive up to ${distance} meter${distance > 1 ? 's' : ''}`)
        : console.log(`Staying put, no distance supplied.`);

        distance > 0
        ? this.#mileage += distance // this.#mileaage = this.#mileage + distance;
        : null;
    }

    #monitorRPM() {
        console.log(`Montior rpm by counting tires revolution.`)
    }

}

// instance; concrete manifestation of the blueprint
// const Vios = new Car();
const Camry = new Car('Pearl White', 'PL09FRURY43IFYR', 4, 30000);

const Wigo = new Car(null, null, null, 5000);

Math.PI // holds value
Math.floor() // executes a function to do something 


console.log('====================================');

// GameClass ==> JackNPoy
// Player
// ComputerPlayer 
// UserPlayer
// ScoreBoard

/**
 * Car ---> main class, 
 * |
 * |___Compact ---> Wigo
 * |
 * |___Sedan   ---> Vios
 */

/*
  Player
  |___Computer ---> COMP
  |___User     ---> PLAYER1
*/

class Util {
    static qs(id) {
        return document.querySelector(`#${id}`)
    }
}

class Player {
    constructor() {
    }

    firstMove;
    pick(hand) {
        console.log(`Player have chosen ${hand} as his move.`);
        this.firstMove = !this.firstMove ? new Date() : this.firstMove;
    }
}

class Computer extends Player {
    #randomPick() {
        return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
        // const choices = [1,2,3];
        // const chosen = choices[0];
        // const pick = [1,2,3][0]
        // return [1,2,3][Math.floor(Math.random() * 3)];
    }

    pick() {
        return this.#randomPick();
        // return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    }

}

class User extends Player {
    constructor(rock, paper, scissors, enemy, gamebord) {
        // call parent class constructor
        super();
        this.enemy = enemy;
        this.gamebord = gamebord;

        // get references
        this.btnRock = Util.qs(rock);
        this.btnPaper = Util.qs(paper);
        this.btnScissors = Util.qs(scissors);
        // console.log(this.btnRock, this.btnPaper, this.btnScissors);

        // add event listeners
        this.btnRock.addEventListener('click', (function(e) {
            this.pick('rock');
        }).bind(this));

        this.btnPaper.addEventListener('click', (e) => this.pick('paper'));

        this.btnScissors.addEventListener('click', (e) => this.pick('scissors'));
    }
    pick(value) {
        console.log(`Player selected: ${value}`);
        let computerHand = this.enemy.pick();
        console.log(`Computer selected: ${computerHand}`)
        let result = this.gamebord.match(value, computerHand);

        if(result == 1) {
            this.gamebord.updateScore('player')
        }
        if(result == -1) {
            this.gamebord.updateScore('enemy')
        }
        if(result == 0) {
            console.log(`Draw!`)
        }



        
    }

}

class JackNPoy {
    constructor(startGameId, resetGameId, homeStartId, gameBoardId, scorePlayer, scoreEnemy) {
        // getting references
        this.startGame = Util.qs(startGameId);
        this.resetGame = Util.qs(resetGameId);
        this.divStart = Util.qs(homeStartId);
        this.divGameBoard = Util.qs(gameBoardId);
        this.scorePlayer = Util.qs(scorePlayer);
        this.scoreEnemy = Util.qs(scoreEnemy);

        // adding event handlers
        // this.startGame.addEventListener('click', (e) => this.#gameStart());
        this.startGame.addEventListener('click', (e) => this.#gameStart());
        this.resetGame.addEventListener('click', (e) => this.#gameReset());
    }

    #gameStart() {
        this.divStart.style.display = 'none';
        this.divGameBoard.style.display = 'block';
    }

    #gameReset() {
        this.divStart.style.display = 'block';
        this.divGameBoard.style.display = 'none';
        this.#scoreBoard.player = 0;
        this.#scoreBoard.enemy = 0;
        this.scorePlayer.innerHTML = (this.#scoreBoard['player']).toString().padStart(3, '0');
        this.scoreEnemy.innerHTML = (this.#scoreBoard['enemy']).toString().padStart(3, '0');
    }

    updateScore(whom = 'player') {
        if(whom == 'player' || whom == 'enemy') {
            this.#scoreBoard[whom]++;
        }
        if(whom == 'player') {
            this.scorePlayer.innerHTML = (this.#scoreBoard[whom]).toString().padStart(3, '0');
        }
        if(whom == 'enemy') {
            this.scoreEnemy.innerHTML = (this.#scoreBoard[whom]).toString().padStart(3, '0');
        }
    }

    #scoreBoard = {
        player: 0, 
        enemy: 0
    }

    #gameLogic = {
        rock: {
            rock: 0,
            scissors: 1,
            paper: -1
        },
        paper: {
            paper: 0,
            rock: 1,
            scissors: -1
        },
        scissors: {
            scissors: 0,
            paper: 1,
            rock: -1
        }
    };

    match(hand1, hand2) {
        let result = this.#gameLogic[hand1][hand2] ?? 0;
        console.log(result);
        return result;
    }
}

// let GhostPlayer = new Player();
let GameBoard = new JackNPoy('btnStartGame', 'btnResetGame', 'homeStart', 'gameBoard', 'scoreUser','scoreComputer')
let Computer01 = new Computer();
let LeanJerios = new User('btnRock', 'btnPaper', 'btnScissors', Computer01, GameBoard);




