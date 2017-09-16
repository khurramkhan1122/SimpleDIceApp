

alert("You have 2 Chance to Win")
var user=+prompt("Enter Your first number");
var user1=Math.random(user1);
user1=user1*6;
user1=Math.ceil(user1);

var tUser=+prompt("Enter Your Second number");



if (user==user1){
    document.write("You Won");

}

else if(tUser==user1){

}

else {
    document.write("Better Luck next Time" );
    
}



document.getElementById("number").innerHTML=user1;







// console.log("Dice game. You have 3 tries to roll a 6 - go");
// var rolls = 0;
// var wins = 0;

// function rollDice()  {
//     var dice = Math.random();
//     if (dice <= .17) {
//         dice = 1;   
//     }
//     else if (dice <= .33) {
//         dice = 2;   
//     }
//     else if (dice <= .50) {
//         dice = 3;   
//     }
//     else if (dice <= .67) {
//         dice = 4;   
//     }
//     else if (dice <= .84) {
//         dice = 5;   
//     }
//     else if (dice <= 1) {
//         dice = 6;   
//     }
//     return dice;
// }

// function diceGame() {
//     do {
//         var dice = rollDice();
//         console.log(dice);
//         rolls++;
//         if (dice === 6) {
//             console.log("You won!");
//             wins++;
//             if (rolls === 1) {
//                 console.log("It took " + rolls + " try");
//             }
//             else {
//                 console.log("It took " + rolls + " tries");
//             }
//             break;
//         }
//     }
//     while (rolls <= 2);
//     if (dice !== 6) {
//         console.log("You lost");
//     }
// }

// diceGame();
// console.log("Times won: " + wins);