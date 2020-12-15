document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click',checkForWin)
document.addEventListener('contextmenu',checkForWin)
// Define your `board` object here!
var board = {
    cells: [
{
row: 0,
col: 0,
isMine: true,
isMarked: false,
hidden: true,
sroundingMines: 2
} ,
{
row: 0,
col: 1,
isMine: false,
isMarked: false,
hidden: true,
sroundingMines: 2
},
{
row: 0,
col: 2,
isMine: true,
isMarked: false,
hidden: true,
sroundingMines: 2
},
        {
        row: 1,
        col: 0,
        isMine: true,
        isMarked: false,
        hidden: true,
        sroundingMines: 2
        }
    ,
        {
            row:1,
            col:1,
            isMine: false,
            isMarked: false,
            hidden: true,
            sroundingMines: 2
        }
   ,
        {
            row:1,
            col:2,
            isMine: true,
            isMarked: false,
            hidden: true,
            sroundingMines:2
        }
  ,
        {
            row:2,
            col:0,
            isMine: true,
            isMarked: false,
            hidden: true,
            sroundingMines:2
        }
   ,
        {
            row:2,
            col:1,
            isMine: false,
            isMarked: false,
            hidden: true,
            sroundingMines:2
        }
  ,
        {
            row:2,
            col:2,
            isMine: true,
            isMarked: false,
            hidden: true,
            sroundingMines:2
        }
    ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
    var won = 0;

  for(var i =0;i<6;i++){
     
          if(board.cells[i].isMarked == true && board.cells[i].isMine == true && board.cells[i].hidden == true ){
               won = 1;
          }
      else {
          won = 0;
      }
      
      
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
    if(won == 1){
      lib.displayMessage('You win!')
      }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
       var count = 0;
        for(var i = 0;i<3;i++){
           for(var j =0;j<3;j++){
               count = getSurroundingCells(i,j);
           }
        }
        return count;
}

