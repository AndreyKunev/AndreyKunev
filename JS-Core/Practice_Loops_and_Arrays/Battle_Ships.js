let input = [
    '2 2',
    '0 1',
    '1 1',
    '1 0',
    '1 1',
    'Shoot 1 1',
    'Shoot 0 1',
    'Shoot 0 0',
    'Shoot 0 0',
    'Shoot 1 1',
    'Shoot 1 0',
    'END'
  ];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let rc = gets().split(' ').map(Number);
let rows = rc[0];
let cols = rc[1];




const playerOne = [];
const playerTwo = [];

for (let row = 0; row < rows; row++) {
    let element = gets().split(' ').map(Number); // we get the entire row this way
    playerOne.push(element); // and then push into the playerOne array
}
// same as above but for playerTwo
for (let row = rows - 1; row >= 0; row--) {
    let element = gets().split(' ').map(Number).reverse(); 
    playerTwo.unshift(element);    
}

console.table(playerOne);
console.table(playerTwo);

let playerOneTurn = true;


while (true) {
    let move = gets().split(' ').slice(1).map(Number);
    let x = move[0];
    let y = move[1];
    
    //break condition

    if (x === undefined) {
        break;
    }
    // playerOne Booom condition P.S. why spell boom with three o's?
    else if (playerOneTurn == true && playerTwo[x][y] === 1) { 
        print('Booom');
        playerTwo[x][y] = 3;
        playerOneTurn = false;
    } 
    // playerOne Missed condition
    else if (playerOneTurn == true && playerTwo[x][y] === 0) {
        print('Missed');
        playerTwo[x][y] = 3;
        playerOneTurn = false;
    }
    // playerOne You already shot there! condition 
    else if (playerOneTurn == true && playerTwo[x][y] === 3) {
        print('You already shot there!');
        playerOneTurn = false;
    }
    // playerTwo Booom condition
    else if (playerOne[x][y] === 1) { 
        print('Booom');
        playerOne[x][y] = 3;
        playerOneTurn = true;
    } 
    // playerTwo Missed condition
    else if (playerOne[x][y] === 0) {
        print('Missed');
        playerOne[x][y] = 3;
        playerOneTurn = true;
    }
    // playerTwo You already shot there! condition 
    else if (playerOne[x][y] === 3) {
        print('You already shot there!');
        playerOneTurn = true;
    } 
}  

let playerOnePoints = 0;
let playerTwoPoints = 0;

for (let row = 0; row < rows; row++) {
    
    for (let col = 0; col < cols; col++) {
        
        playerOne[row][col] === 1 && playerOnePoints++; // these serve as ifs - not readable, but saves some space
        playerTwo[row][col] === 1 && playerTwoPoints++;
        
    }
}

print(`${playerOnePoints}:${playerTwoPoints}`);