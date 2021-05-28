/* his is a game in which 2 players are requested input,  first player put 3 inputs,  second player receive a notification for 3 inputs,  
try to remenber all inputs and then enters them one by one in the same sequence.  When second player enter 3 answers, the programm will give an alert
with the final score according to the correct answer.  
In case of players click on 'cancel' the value of the variable would be recording as null (Structural Root Primitive)
*/

// alert to describe a game
alert(`Guess 3 inputs in 3 tries

  Player 1:
    enter three inputs

  Player 2:
    see the three inputs in order
    then enter them back in order
    you will get one point for each correct guess
`);
// another alert indicates the game is starting and player 2 should hide.
alert('Player 2: go hide');

// declare input 1 and initialize  with undefined value.  
// the prompt will give the option for player 1 to assing the value of input1
let input1 = prompt('Player 1, enter your first input:');
// declare input 2 and initialize  with undefined value.
// the prompt will give the option for player 1 to assing the value of input2
let input2 = prompt('Player 1, enter your second input:');
// declare input 3 and initialize  with undefined value.
// the prompt will give the option for player 1 to assing the value of input3
let input3 = prompt('Player 1, enter your third input:');

// alert to pleyer 2 go  back.
alert('Player 2, get back here');

// alert with all input values from player 1
alert(
  'Player 2, remember these:' +
    '\n1. "' +
    input1 +
    '"' +
    '\n2. "' +
    input2 +
    '"' +
    '\n3. "' +
    input3 +
    '"'
);
// declare init tally with the data number value 0
let tally = 0;

// declare guess1 and initialize  with undefined value.
// the prompt will give the option for player 2 to assing the value of guess1
let guess1 = prompt('Player 1, guess the first input:');

// checking the values guess1 and input1 are strictly equals
if (guess1 === input1) {
  // reasign value by adding 1 (in case previous condition is true)
  tally = tally + 1;
}
// declare guess2 and initialize  with undefined value.
// the prompt will give the option for player 2 to assing the value of guess2
let guess2 = prompt('Player 1, guess the second input:');
// checking the values guess2 and input2 are strictly equals
if (guess2 === input2) {
// reasign value by adding 1 (in case previous condition is true)
  tally = tally + 1;
}
// declare guess3 and initialize  with undefined value.
// the prompt will give the option for player 2 to assing the value of guess3
let guess3 = prompt('Player 1, guess the third input:');
// checking the values guess3 and input3 are strictly equals
if (guess3 === input3) {
// reasign value by adding 1 (in case previous condition is true)
  tally = tally + 1;
}
// alert to show the final value of tally which indicates the number of correct answers of player 2
alert('your tally: ' + tally);
